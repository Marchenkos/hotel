/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useState, useRef, useEffect } from "react";
import cookie from "react-cookies";
import styled from "styled-components";

import { Input } from "../../style/custom-components/Input";
import Calendar from "../Calendar";
import CheckPage from "./CheckPage";
import WarningSlide from "../WarningSlide";

import "../../style/booking-container.less";
import { CatalogButton } from "../../style/custom-components/Buttons";
import BookingInput from "./BookingInput";
import listIcon from "../../img/calendar/romb.png";

const BookingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 60px;
    background: white;
    box-sizing: border-box;
    position: relative;

    ${({ warning }) => warning && `
        padding: 0px;
    `}
`;

export default function BookingField({ location, history, onBookingRooms, bookedRooms, allRooms, currentUser }) {
    const roomId = location.id;
    const [choosedRoom, setChoosedRoom] = useState(null);
    const [isWarning, setIsWarning] = useState(false);

    const [pageNumber, setPageNumber] = useState(1);
    const [bookingData, setBookingData] = useState([]);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [personsCount, setPersonsCount] = useState(1);
    const [isInvalid, setIsInvalid] = useState(false);

    useEffect(() => {
        if (currentUser) {
            setIsWarning(false);
        } else {
            setIsWarning(true);
        }
    }, [currentUser]);

    const increasePageNumber = useCallback(() => {
        const isLogin = cookie.load("jwtToken");

        if (checkOut.length < 1 || checkIn.length < 1) {
            setIsInvalid(true);

            return;
        }

        const bookingDataInf = {
            jwt: isLogin,
            room_id: Number(roomId),
            check_in: bookedRooms[0],
            check_out: bookedRooms[bookedRooms.length - 1],
            cost: 500,
            guests: 2,
        };

        setBookingData(bookingDataInf);
        setChoosedRoom(allRooms[roomId - 1]);
        setPageNumber(prev => prev + 1);
    }, [bookingData, checkOut, checkIn]);

    const decreasePageNumber = useCallback(() => {
        setPageNumber(prev => prev - 1);
    }, [pageNumber]);

    const onBookRooms = useCallback(rooms => {
        if (isInvalid && rooms.length > 0) {
            setIsInvalid(false);
        }

        setCheckIn(rooms.length > 0 ? rooms[0] : "");
        setCheckOut(rooms.length > 0 ? rooms[rooms.length - 1] : "");

        // onBookingRooms(rooms);
    }, [isInvalid]);

    const decrement = useCallback(() => {
        if (personsCount < 2) {
            return;
        }

        setPersonsCount(prev => prev - 1);
    }, [personsCount]);

    const increment = useCallback(() => {
        if (personsCount > 3) {
            return;
        }

        setPersonsCount(prev => prev + 1);
    }, [personsCount]);

    const renderFirstSlide = () => {
        return (
            <>
                <div className="content-field">
                    <div className="content-field__title">
                        book directly
                    </div>
                    <span className="content-field__description">
                        thank you for booking from our website
                    </span>
                    <ul className="content-field__list">
                        <li className="list__item">
                            <img src={`/${listIcon}`} alt="list-icon" className="item__icon" />
                            <span className="item__value">You will always have the best available rate</span>
                        </li>
                        <li className="list__item">
                            <img src={`/${listIcon}`} alt="list-icon" className="item__icon" />
                            <span className="item__value">V.I.P Welcome with in room bottle of wine</span>
                        </li>
                    </ul>
                </div>
                <div className="booking-form">
                    <Calendar onBookRooms={onBookRooms} currentRoom={roomId} />

                    <div className="booking-form__buttons-container">
                        <BookingInput title="check in" data={checkIn} isInvalid={isInvalid} />
                        <BookingInput title="check out" data={checkOut} isInvalid={isInvalid} />
                        <div className="counter-container">
                            <span className="counter-container__signature">persons count</span>
                            <div className="counter">
                                <span className="counter__change-button" onClick={increment}>+</span>
                                <Input className="counter__value" disabled="disabled" value={personsCount} black />
                                <span className="counter__change-button" onClick={decrement}>-</span>
                            </div>
                        </div>
                    </div>

                    <CatalogButton bg onClick={increasePageNumber} className="book-button">next</CatalogButton>
                </div>
            </>
        );
    };

    const renderSecondSlide = () => {
        return (
            <>
                <CatalogButton onClick={decreasePageNumber} absolutePosition>back</CatalogButton>
                <CheckPage history={history} personsCount={personsCount} checkOut={checkOut} checkIn={checkIn} user={currentUser} room={choosedRoom} />
            </>
        );
    };

    return (
        <BookingContainer warning={isWarning}>
            {
                currentUser ? (
                    <>
                        {pageNumber === 1 ? renderFirstSlide() : renderSecondSlide()}
                    </>
                ) : <WarningSlide />
            }
        </BookingContainer>
    );
}
