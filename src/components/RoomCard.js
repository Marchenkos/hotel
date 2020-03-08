import React from "react";
import styled from "styled-components";

import "../style/room-card.less";
import catalogRoom from "../img/room1.jpg";

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


export default function RoomCard({ status, description, square }) {
    return (
        <>
            <hr className="room__separation" />

            <div className="room-card">
                <div className="room-card__slider">
                    <img src={catalogRoom} alt="catalog" className="welcom-block__picture" />
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
                    <CatalogButton>view room</CatalogButton>
                    <CatalogButton bg>book a room</CatalogButton>
                </div>
            </div>
        </>
    );
}
