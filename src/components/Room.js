import React, { useState, useEffect } from "react";
import * as $ from "jquery";

import room1 from "../img/room1.jpg";
import room2 from "../img/room2.jpg";
import floorPlan from "../img/floorPlan.png";
import rectangle from "../img/rectangle.png";

import "../style/contant-container.less";
import "../style/room.less";

export default function Room({ roomId }) {
    const [status, setStatus] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        $.ajax({
            type: "POST",
            url: "http://projecthotel/test.php",
            data: { roomId },
            dataType: "JSON",
            success: response => {
                setStatus(response.result[2]);
                setDescription(response.result[3]);
            }
        });
    }, []);

    return (
        <div className="contant-container">
            <div className="contant-container__item contant-container__item--first">
                <img src={room1} alt="bg" className="item__first-bg" />
                <span className="item__title">{status}</span>
                <div className="item__bg-title" />
            </div>
            <div className="room">
                <div className="room-main-container">
                    <div className="room-main-container__description">
                        {description}
                    </div>
                    <img src={room2} alt="bg" className="room-main-container__picture" />
                </div>
                <div className="floor-plan">
                    <div className="floor-plan__title">
                        floor plan
                    </div>

                    <img src={rectangle} className="floor-plan__rectangle" alt="rectangle" />

                    <img src={floorPlan} className="floor-plan__picture" alt="floorPlan" />
                    <div className="floor-plan__description">
                        Nearly double the size of other Las Vegas hotel rooms.
                    </div>
                </div>

                <div className="suite-details">
                    <div className="suite-details__title">
                        floor plan
                    </div>
                </div>
            </div>
        </div>
    );
}
