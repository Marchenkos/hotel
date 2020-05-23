/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect, useState, useCallback } from "react";
import * as $ from "jquery";
import cookie from "react-cookies";
import * as moment from "moment";

import "../../style/booking-container.less";
import "../../style/check-page.less";
import Modal from "../modalWindows/Modal";

import { CatalogButton } from "../../style/custom-components/Buttons";

export default function CheckPage({ roomId, bookingData, guestsCount }) {
    const [userInfo, setUserInfo] = useState([]);
    const [roomInfo, setRoomInfo] = useState([]);
    const [modalWindow, setModalWindow] = useState(0);

    const closeModal = useCallback(() => {
        setModalWindow(0);
    }, [modalWindow]);

    useEffect(() => {
        const isLogin = cookie.load("jwtToken");

        const userData = {
            jwt: isLogin
        };


        $.ajax({
            type: "POST",
            url: "http://hotel/api/getUser.php",
            dataType: "json",
            data: JSON.stringify(userData),
            success: response => {
                setUserInfo(response.result);
            }
        });
    }, []);

    useEffect(() => {
        const roomData = {
            room_id: roomId
        };

        $.ajax({
            type: "POST",
            url: "http://hotel/api/getRoom.php",
            dataType: "json",
            data: JSON.stringify(roomData),
            success: response => {
                setRoomInfo(response.room);
            }
        });
    }, []);

    const calculateCost = () => {
        return (moment(bookingData[bookingData.length - 1]).diff(moment(bookingData[0]), "days") + 1) * Number(roomInfo.cost);
    };

    const onSaveData = () => {
        const isLogin = cookie.load("jwtToken");
        const bookingDataInf = {
            jwt: isLogin,
            room_id: Number(roomId),
            check_in: bookingData[0],
            check_out: bookingData[bookingData.length - 1],
            cost: calculateCost(),
            guests: guestsCount,
            hotel_id: 2
        };

        console.log(bookingDataInf);

        $.ajax({
            type: "POST",
            url: "http://hotel/api/bookApartments.php",
            dataType: "json",
            data: JSON.stringify(bookingDataInf),
            success: response => {
                if (response.message) {
                    setModalWindow(4);
                } else {
                    setModalWindow(6);
                }
            }
        });
    };

    return (
        <div className="check-list-container">
            <div className="cover-container">
                <div className="check-list__title">
                    check information
                </div>
                <div className="check-list__block">
                    <span className="check-list__block-title">User</span>

                    <div className="block">
                        <span className="block__signature">name</span>
                        <span className="block__value">
                            {`${userInfo.first_name} ${userInfo.last_name}`}
                        </span>
                    </div>

                    <div className="block">
                        <span className="block__signature">email</span>
                        <span className="block__value">
                            {userInfo.email}
                        </span>
                    </div>
                </div>
                <div className="check-list__block">
                    <span className="check-list__block-title">Room</span>
                    <div className="block">
                        <span className="block__signature">status</span>
                        <span className="block__value">
                            {roomInfo.status_id}
                        </span>
                    </div>

                    <div className="block">
                        <span className="block__signature">square</span>
                        <span className="block__value">
                            {roomInfo.square}
                            sqm
                        </span>
                    </div>

                    <div className="block">
                        <span className="block__signature">floor</span>
                        <span className="block__value">
                            {roomInfo.floor}
                        </span>
                    </div>

                    <div className="block">
                        <span className="block__signature">bed</span>
                        <span className="block__value">
                            {roomInfo.bed}
                        </span>
                    </div>
                </div>
                <div className="check-list__block">
                    <div className="block">
                        <span className="block__signature">check in</span>
                        <span className="block__value">
                            {bookingData[0]}
                        </span>
                    </div>

                    <div className="block">
                        <span className="block__signature">check out</span>
                        <span className="block__value">
                            {bookingData[bookingData.length - 1]}
                        </span>
                    </div>

                    <div className="block">
                        <span className="block__signature">Final cost</span>
                        <span className="block__value">
                            {
                                calculateCost()
                            }
                            $
                        </span>
                    </div>
                </div>
            </div>

            <CatalogButton bg className="book-button" onClick={onSaveData}>book now</CatalogButton>
            {
                modalWindow !== 0 ? <Modal message={modalWindow} closeModal={closeModal} /> : null
            }
        </div>
    );
}
