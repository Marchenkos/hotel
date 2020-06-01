import React, { useEffect, useState, useCallback } from "react";
import * as $ from "jquery";

import "../style/catalog-container.less";
import catalogRoom from "../img/catalog3.jpg";
import RoomCard from "./RoomCard";
import Filter from "./Filter";

import "../style/fonts/style.css";

export default function RoomCatalog({ allRooms, getRoomsList, setFilterRoomsList, filterRooms }) {
    const [isShowFilter, setIsShowFilter] = useState(false);
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

    const useFilter = useCallback(() => {
        setIsShowFilter(!isShowFilter);
    }, []);

    const hideFilter = useCallback(() => {
        setIsShowFilter(false);
    }, []);

    useEffect(() => {
        getRoomsList(roomsCatalog);
    }, [roomsCatalog]);


    const renderContentList = useCallback(() => {
        // if (!filterRooms) {
        //     return (
        //         <div>
        //             Ooops, we don't have rooms, like this..
        //         </div>
        //     );
        // }

        if (!filterRooms || filterRooms.length === 0) {
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
        setFilterRoomsList([]);
    }, []);

    const applyFilter = useCallback(filterConditions => {
        resetFilter([]);
        setIsShowFilter(false);

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
            }

            const firstFilterResult = filterCostRoomsList.length > 0 ? filterCostRoomsList : allRooms;

            if (filterConditions.classic || filterConditions.comform || filterConditions.prestige) {
                filterStatusRoomsList = firstFilterResult.filter(item => {
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

                filterStatusRoomsList = filterStatusRoomsList.length === 0 ? null : filterStatusRoomsList;
            }

            const result = filterStatusRoomsList.length > 0 ? filterStatusRoomsList : null;

            setFilterRoomsList(result);
        }
    }, [allRooms]);

    return (
        <div className="catalog-container">
            <div className="catalog-container__welcom-block">
                <img src={catalogRoom} alt="catalog" className="welcom-block__picture" />
                <span className="welcom-block__title">
                        The Mountain Suite Collection
                </span>
                <div className="welcom-block__description">
                        Every one of our rooms is a suite, complete with a living room as
                        well as separate sleeping area and spacious
                        Italian marble bathroom. With comfort considered in each detail, every suite ensures a good night’s sleep.
                </div>
            </div>

            <div className="catalog">
                <div className="catalog__title">
                    Most Popular Suites
                </div>
                <div className="catalog__description">
                    Nearly double the size of your average Las Vegas hotel room, our standard Switherland hotel
                    suites have everything you need and more. Celebrity Radio UK calls them divine… elegant,
                    spacious, perfectly designed and offer the epitome of decadence, indulgence, and luxury.” We totally agree.
                </div>

                <div className="rooms">
                    {renderContentList()}
                </div>
            </div>
            {isScroll ? <div className="icon-filter filter-catalog" onClick={useFilter} /> : null}
            {isShowFilter ? <Filter isShow={isShowFilter} hideFilter={hideFilter} resetFilter={resetFilter} applyFilter={applyFilter} /> : null}
        </div>
    );
}
