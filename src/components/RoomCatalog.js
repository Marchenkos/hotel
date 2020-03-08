import React, { useEffect, useState } from "react";
import * as $ from "jquery";

import "../style/catalog-container.less";
import catalogRoom from "../img/catalog3.jpg";
import RoomCard from "./RoomCard";
import "../style/fonts/style.css";

export default function RoomCatalog() {
    const [status, setStatus] = useState([]);
    const [square, setSquare] = useState([]);
    const [description, setDescription] = useState([]);
    const [roomsId, setRoomsId] = useState([]);

    useEffect(() => {
        const url = "http://projecthotel:8080/getAllRooms.php";

        $.ajax({
            type: "POST",
            url,
            dataType: "JSON",
            success: response => {
                for (const item of response.result) {
                    setStatus(prevState => [...prevState, item[2]]);
                    setDescription(prevState => [...prevState, item[4]]);
                    setSquare(prevState => [...prevState, item[9]]);
                    setRoomsId(prevState => [...prevState, item[0]]);
                }
            }
        });
    }, []);

    const contentList = status.map(
        (item, index) => (
            <RoomCard
                key={index}
                roomsId={roomsId[item]}
                square={square[index]}
                status={item}
                description={description[index]}
            />
        )
    );

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
                    {contentList}
                </div>
            </div>
            <div className="icon-filter filter-catalog" />
        </div>
    );
}
