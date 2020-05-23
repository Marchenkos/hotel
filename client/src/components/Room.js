/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import cookie from "react-cookies";

import { useLocation } from "react-router-dom";
import * as $ from "jquery";
import { Button } from "../style/custom-components/Buttons";
import Estimation from "./Estimation";

import main from "../img/2/main.jpg";
import room2 from "../img/room2.jpg";
import row from "../img/row.png";
import rectangle from "../img/rectangle.png";
import floorPlanImg from "../img/floorPlan.png";

import "../style/contant-container.less";
import "../style/sliderBox.less";
import "../style/room.less";

export default function Room({ currentUser }) {
    const [status, setStatus] = useState(null);
    const [description, setDescription] = useState(null);
    const [windowView, setWindowView] = useState(null);
    const [floor, setFloor] = useState(null);
    const [cost, setCost] = useState(null);
    const [floorPlan, setFloorPlan] = useState(null);
    const [square, setSquare] = useState(null);
    const [bed, setBed] = useState(null);
    const [guests, setGuests] = useState(null);
    const [wifi, setWifi] = useState(null);
    const [hairDryer, setHairDryer] = useState(null);
    const [tv, setTv] = useState(null);
    const [conditioner, setConditioner] = useState(null);
    const [babyBed, setBabyBed] = useState(null);
    const [jwt, setJWT] = useState(null);

    const location = useLocation();

    useEffect(() => {
        const isLogin = cookie.load("jwtToken");

        if (isLogin) {
            setJWT(cookie.load("jwtToken"));
        }

    }, [currentUser]);

    useEffect(() => {
        const roomId = location.id;

        const url = "http://hotel/api/getRoom.php";

        const roomData = {
            room_id: roomId
        };

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: JSON.stringify(roomData),
            success: response => {
                console.log(response);
                if (response.message) {
                    const props = response.room;
                    setStatus(props.status_id);
                    setDescription(props.description);
                    setSquare(props.square);
                    setWindowView(props.window_view);
                    setFloor(props.floor);
                    setCost(props.cost);
                    setFloorPlan(props.floor_plan);
                    setBed(props.bed);

                    setTv(props.tv);
                    setWifi(props.wifi);
                    setConditioner(props.conditioner);
                    setBabyBed(props.baby_bed);
                    setHairDryer(props.hair_dryer);
                    setGuests(props.guests);
                } else {
                    console.log("No correct data");
                }
            }
        });
    }, []);

    return (
        <div className="contant-container">
            <div className="contant-container__item contant-container__item--first">
                <img src={`/${main}`} alt="bg" className="item__first-bg" />
                <span className="item__title">{status}</span>
                <div className="item__bg-title" />
            </div>
            <div className="room">
                <div className="room-main-container">
                    <div className="room-main-container__description">
                        {description}
                    </div>
                    <img src={`/${room2}`} alt="bg" className="room-main-container__picture" />
                </div>
                <div className="floor-plan">
                    <div className="floor-plan__title">
                        floor plan
                    </div>

                    <img src={`/${rectangle}`} className="floor-plan__rectangle" alt="rectangle" />

                    <img src={`/${floorPlanImg}`} className="floor-plan__picture" alt="floorPlan" />
                    <div className="floor-plan__description">
                        Nearly double the size of other Las Vegas hotel rooms.
                    </div>
                </div>

                <div className="suite-details">
                    <div className="suite-details__title">
                    </div>
                </div>

                <div className="sliderImg">
                    <Button className="sliderImg__button-prev">
                        Prev
                    </Button>
                    <img className="sliderImg__item" src={`/${main}`} alt="slider" />
                    <Button className="sliderImg__button-next">
                        Next
                    </Button>
                </div>
                {
                    jwt ? (
                        <div className="estimate-contsiner">
                            <span className="estimate-title">Estimate this room</span>
                            <Estimation roomId={location.id} estimation={0} jwt={jwt} />
                        </div>
                    )
                        : null
                }
            </div>
        </div>
    );
}
