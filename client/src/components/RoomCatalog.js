import React, { useEffect, useState, useCallback } from "react";
import * as $ from "jquery";

import "../style/catalog-container.less";
import catalogRoom from "../img/catalog3.jpg";
import BannerBlock from "./BannerBlock";

import RoomCard from "./RoomCard";
import Filter from "./Filter";
import { MainText, AdditionalText, TitleText } from "../style/conponent-style/textBlocks";
import { constants } from "../constants";

import "../style/fonts/style.css";

export default function RoomCatalog({ allRooms, getRoomsList, location }) {
    const [isShowFilter, setIsShowFilter] = useState(false);
    const [filterRooms, setFilterRooms] = useState([]);

    const [roomsCatalog, setRoomsCatalog] = useState([]);
    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = () => {
        if (window.innerHeight + window.pageYOffset < 1500) {
            setIsScroll(false);

            return;
        }

        setIsScroll(true);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    });

    useEffect(() => {
        const url = "http://localhost:3000/room/";

        if (allRooms.length === 0) {
            $.ajax({
                type: "GET",
                url,
                dataType: "json",
                success: response => {
                    if (response.length > 0) {
                        setRoomsCatalog(response);
                    } else {
                        console.log("No correct data");
                    }
                }
            });
        }
    });

    const showFilter = useCallback(() => {
        setIsShowFilter(!isShowFilter);
    }, []);

    const hideFilter = useCallback(() => {
        setIsShowFilter(false);
    }, []);

    useEffect(() => {
        getRoomsList(roomsCatalog);
    }, [roomsCatalog]);

    const reloadPage = () => {
        window.location.reload();
    };

    const renderContentList = useCallback(() => {
        if (!filterRooms) {
            return (
                <div className="rooms__message-result">
                    <TitleText inContent className="message-result__title">Sorry</TitleText>
                    <AdditionalText inContent>
                        We dont have rooms for you request.
                        <span className="message-result__link" onClick={reloadPage}>
                            Check other rooms
                        </span>
                    </AdditionalText>
                </div>
            );
        }

        if (filterRooms.length === 0) {
            return allRooms.map((item, index) => (
                <RoomCard
                    key={index}
                    roomId={item.room_id}
                    status={item.status_id}
                    description={item.small_description}
                    cost={item.cost}
                />
            ));
        }

        return filterRooms.map(
            (item, index) => (
                <RoomCard
                    key={index}
                    roomId={item.room_id}
                    status={item.status_id}
                    description={item.small_description}
                    cost={item.cost}
                />
            )
        );

    }, [filterRooms, allRooms]);

    const resetFilter = useCallback(() => {
        setFilterRooms([]);
    }, []);

    const applyFilter = useCallback(filterConditions => {
        resetFilter([]);

        let filterCostRoomsList = [];
        let filterStatusRoomsList = [];

        if (filterConditions) {
            if (filterConditions.minCost || filterConditions.maxCost) {
                filterCostRoomsList = allRooms.filter(item => {
                    if (!filterConditions.minCost && item.cost <= filterConditions.maxCost) {
                        return item;
                    }

                    if (!filterConditions.maxCost && item.cost >= filterConditions.minCost) {
                        return item;
                    }

                    if (item.cost >= filterConditions.minCost && item.cost <= filterConditions.maxCost) {
                        return item;
                    }
                });

                if (filterCostRoomsList.length < 1) {
                    setFilterRooms(null);
                    console.log("HAHA");

                    hideFilter();

                    return null;
                }
            }

            const costFilterResult = filterCostRoomsList.length > 0 ? filterCostRoomsList : allRooms;
            filterStatusRoomsList = costFilterResult;

            if (filterConditions.classic || filterConditions.comform || filterConditions.prestige) {
                filterStatusRoomsList = costFilterResult.filter(item => {
                    if (filterConditions.classic && item.status_id === "classic") {
                        return item;
                    }

                    if (filterConditions.comform && item.status_id === "comfort") {
                        return item;
                    }

                    if (filterConditions.prestige && item.status_id === "prestige") {
                        return item;
                    }
                });
            } else {
                filterStatusRoomsList = null;
            }

            setFilterRooms(filterStatusRoomsList);
            hideFilter();
        }
    }, [allRooms]);

    return (
        <div className="catalog-container">
            <div className="catalog-container__welcom-block">
                <BannerBlock firstBg={catalogRoom} title="the best rooms collection" description="feel like a celebrity" />
            </div>

            <div className="catalog">
                <MainText inContent className="catalog__title">
                    Most Popular Rooms
                </MainText>
                <div className="catalog__description">
                    Nearly double the size of your average Las Vegas hotel room, our standard Austia hotel
                    suites have everything you need and more. Celebrity Radio UK calls them divine… elegant,
                    spacious, perfectly designed and offer the epitome of decadence, indulgence, and luxury.” We totally agree.
                </div>

                <div className="rooms">
                    {renderContentList()}
                </div>
            </div>
            {isScroll ? <div className="icon-filter filter-catalog" onClick={showFilter} /> : null}
            {isShowFilter ? <Filter isShow={isShowFilter} hideFilter={hideFilter} resetFilter={resetFilter} applyFilter={applyFilter} /> : null}
        </div>
    );
}
