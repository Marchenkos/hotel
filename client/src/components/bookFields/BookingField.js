/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useState, useRef } from "react";
import cookie from "react-cookies";

import { useLocation } from "react-router-dom";
import Calendar from "../Calendar";
import CheckPage from "./CheckPage";

import "../../style/booking-container.less";
import { CatalogButton } from "../../style/custom-components/Buttons";
import { Input } from "../../style/custom-components/Input";

export default function BookingField({ onBookingRooms, bookedRooms }) {
    const location = useLocation();
    const roomId = location.id;

    const [pageNumber, setPageNumber] = useState(1);
    const [bookingData, setBookingData] = useState([]);
    const guestRef = useRef(null);
    const [guestsCount, setGuestsCount] = useState(1);

    const increasePageNumber = useCallback(() => {
        const isLogin = cookie.load("jwtToken");
        const bookingDataInf = {
            jwt: isLogin,
            room_id: Number(roomId),
            check_in: bookedRooms[0],
            check_out: bookedRooms[bookedRooms.length - 1],
            cost: 500,
            guests: 2,
        };

        setBookingData(bookingDataInf);
        setPageNumber(prev => prev + 1);
    }, [bookingData]);

    const decreasePageNumber = useCallback(() => {
        setPageNumber(prev => prev - 1);
    }, [pageNumber]);

    const onBookRooms = useCallback(rooms => {
        onBookingRooms(rooms);
    }, []);

    const decrement = useCallback(() => {
        if (guestsCount < 2) {
            return;
        }

        setGuestsCount(prev => prev - 1);
    }, [guestsCount]);

    const increment = useCallback(() => {
        if (guestsCount > 2) {
            return;
        }

        setGuestsCount(prev => prev + 1);
    }, [guestsCount]);

    return (
        <div className="booking-container">
            <div className="content-field">
                <span className="content-field__title">
                    book directly
                </span>
                <span className="content-field__description">
                    thank you for booking from our website
                </span>
            </div>

            {
                pageNumber === 1 ? (
                    <div className="booking-form">
                        <Calendar onBookRooms={onBookRooms} />

                        <div className="booking-form__counter">
                            <span className="check__signature">guests</span>

                            <div className="counter">
                                <span className="counter__increment" onClick={increment}>+</span>
                                <Input className="counter__value" ref={guestRef} black value={guestsCount} onChange={setGuestsCount} />
                                <span className="counter__decrement" onClick={decrement}>-</span>
                            </div>
                        </div>

                        <CatalogButton bg onClick={increasePageNumber} className="book-button">next</CatalogButton>
                    </div>
                )
                    : (
                        <>
                            <CheckPage bookingData={bookedRooms} roomId={roomId} guestsCount={guestsCount} />
                            <CatalogButton onClick={decreasePageNumber} absolutePosition>back</CatalogButton>
                        </>
                    )
            }
        </div>
    );
}
