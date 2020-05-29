/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import cookie from "react-cookies";
import WOW from "wowjs";
import { Link, useLocation } from "react-router-dom";
import { CatalogButton } from "../style/custom-components/Buttons";


// import Slider from "./SliderComponent";
import Estimation from "./Estimation";
import { MainText, AdditionalText, TitleText } from "../style/conponent-style/textBlocks";

import main from "../img/2/main.jpg";
import room2 from "../img/room2.jpg";
import row from "../img/row.png";
import rectangle from "../img/rectangle.png";
import floorPlanImg from "../img/floorPlan.png";
import { ROOMS_SERVISEC } from "../constants";
import "../style/contant-container.less";
import "../style/sliderBox.less";
import "../style/room.less";
import secondBg from "../img/header/headerbg.png";

export default function Room({ currentUser, allRooms }) {
    const location = useLocation();
    const [currentRoom, serCurrentRoom] = useState({});
    const [jwt, setJWT] = useState(null);

    useEffect(() => {
        new WOW.WOW().init();
    });

    useEffect(() => {
        const isLogin = cookie.load("jwtToken");

        if (isLogin) {
            setJWT(cookie.load("jwtToken"));
        }
    }, [currentUser]);

    useEffect(() => {
        const roomId = location.id;

        serCurrentRoom(allRooms[roomId - 1]);
    }, [allRooms]);

    const getServices = useCallback(() => {
        const maxServices = ROOMS_SERVISEC.get(currentRoom.status_id;
    }, [currentRoom]);

    return (
        <div className="contant-container">
            <div className="main-room-block">
                <div className="image-background-block">
                    <img src={`/${main}`} alt="bg" className="image-background-block__main-bg" />
                    <img src={secondBg} alt="bg" className="image-background-block__opacity-bg" />

                </div>
                <div className="wow fadeIn main-room-block__description" data-wow-delay="1s">
                    <MainText>{`A SPACIOUS SUITE ${currentRoom.status_id} ROOM`}</MainText>
                    <AdditionalText>feel like a celebrity</AdditionalText>
                </div>
            </div>
            <div className="room">
                <div className="room-main-container">
                    <div className="room-main-container__description">
                        <MainText inContent className="room-description__title">{currentRoom.status_id}</MainText>
                        <p>{currentRoom.description}</p>
                        <Link to={{
                            pathname: `/room/book/${currentRoom.roomId}`,
                            id: currentRoom.roomId
                        }}
                        >
                            <CatalogButton bg>book now</CatalogButton>
                        </Link>
                    </div>
                    <img src={`/${room2}`} alt="bg" className="room-main-container__picture" />
                </div>
                <div className="room-services">
                    {getServices}
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
