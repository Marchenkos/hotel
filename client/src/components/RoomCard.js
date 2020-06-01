import React from "react";
import { Link } from "react-router-dom";

import "../style/room-card.less";
import { CatalogButton } from "../style/custom-components/Buttons";

export default function RoomCard({ status, description, cost, roomId }) {
    return (
        <>
            <hr className="room__separation" />

            <div className="room-card">
                <div className="room-card__title">
                    {status[0].toUpperCase() + status.slice(1)}
                </div>
                <div className="room-card__img">
                    <img src={`public/img/roomsCatalog/${roomId}.jpg`} alt="room" className="img-room" />
                </div>

                <div className="room-card__text-block">
                    <div className="text-block__title">
                        {status[0].toUpperCase() + status.slice(1)}
                    </div>
                    <div className="text-block__signature">
                        {`$${cost} / day`}
                    </div>
                    <div className="text-block__description">
                        {description}
                    </div>
                </div>

                <div className="room-card__button-block">
                    <Link to={{
                        pathname: "/cart-room",
                        id: roomId }}
                    >
                        <CatalogButton>view room</CatalogButton>
                    </Link>
                    <Link to={{
                        pathname: "/room/book",
                        id: roomId }}
                    >
                        <CatalogButton bg>book a room</CatalogButton>
                    </Link>
                </div>
            </div>
        </>
    );
}
