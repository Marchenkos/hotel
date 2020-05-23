import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "../style/room-card.less";
import room1 from "../img/rooms/1.jpg";
import room4 from "../img/rooms/2cl.jpg";
import room3 from "../img/rooms/3cl.jpg";
import room2 from "../img/rooms/4cl.jpg";
import room5 from "../img/rooms/5com.jpg";
import room6 from "../img/rooms/7com2.jpg";

export const CatalogButton = styled.button`
    font-family: Century Gothic;
    text-transform: uppercase;
    height: 60px;
    margin-top: 20px;
    box-sizing: content-box;
    background: none;
    border: 2px solid red;
    font-size: 17px;
    color: red;

    ${({ bg }) => bg && `
        background: red;
        color: white;
    `}
`;

export default function RoomCard({ status, description, square, roomId }) {
    const roomsImg = [room1, room2, room3, room4, room5, room6];

    return (
        <>
            <hr className="room__separation" />

            <div className="room-card">
                <div className="room-card__slider">
                    <img src={roomsImg[roomId - 1]} alt="catalog" className="welcom-block__picture" />
                </div>

                <div className="room-card__text-block">
                    <div className="text-block__title">
                        {status[0].toUpperCase() + status.slice(1)}
                    </div>
                    <div className="text-block__signature">
                        {square}
                    </div>
                    <div className="text-block__description">
                        {description}
                    </div>
                </div>

                <div className="room-card__button-block">
                    <Link to={{
                        pathname: `/room/${roomId}`,
                        id: roomId }}
                    >
                        <CatalogButton>view room</CatalogButton>
                    </Link>
                    <Link to={{
                        pathname: `/room/book/${roomId}`,
                        id: roomId }}
                    >
                        <CatalogButton bg>book a room</CatalogButton>
                    </Link>
                </div>
            </div>
        </>
    );
}
