import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import * as $ from "jquery";
import * as moment from "moment";

import "../../style/booking-container.less";
import "../../style/check-page.less";
import Modal from "../modalWindows/Modal";
import { constants } from "../../constants";

import { CatalogButton } from "../../style/custom-components/Buttons";

export default function CheckPage({ history, room, checkIn, checkOut, user, personsCount }) {
    const [userInfo, setUserInfo] = useState({});
    const [modalWindow, setModalWindow] = useState(0);

    const closeModal = useCallback(() => {
        setModalWindow(0);
    }, [modalWindow]);

    const calculateCost = () => {
        return (moment(checkOut).diff(moment(checkIn), "days") + 1) * Number(room.cost);
    };

    const redirectToHome = debounce(() => {
        history.push("/hotels");
    }, constants.REDIRECT_PAUSE);

    const onSaveData = useCallback(() => {
        const url = "http://localhost:3000/room/book-room";

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: {
                room_id: room.room_id,
                email: userInfo.email,
                ckeck_in: checkIn,
                ckeck_out: checkOut,
                cost: calculateCost(),
            },
            success: response => {
                if (response) {
                    setModalWindow(4);
                } else {
                    setModalWindow(6);
                }
            }
        });

        redirectToHome();
    }, [userInfo]);

    useEffect(() => {
        const url = "http://localhost:3000/user/get-user";

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: {
                login: user,
            },
            success: response => {
                setUserInfo(response[0]);
            }
        });
    }, []);

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
                            {`${userInfo.firstName} ${userInfo.lastName}`}
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
                            {room.status_id}
                        </span>
                    </div>

                    <div className="block">
                        <span className="block__signature">square</span>
                        <span className="block__value">
                            {room.square}
                            sqm
                        </span>
                    </div>

                    <div className="block">
                        <span className="block__signature">floor</span>
                        <span className="block__value">
                            {room.floor}
                        </span>
                    </div>
                </div>
                <div className="check-list__block">
                    <div className="block">
                        <span className="block__signature">check in</span>
                        <span className="block__value">
                            {checkIn}
                        </span>
                    </div>

                    <div className="block">
                        <span className="block__signature">check out</span>
                        <span className="block__value">
                            {checkOut}
                        </span>
                    </div>

                    <div className="block">
                        <span className="block__signature">persons count</span>
                        <span className="block__value">
                            {personsCount}
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

            <CatalogButton bg className="book-button--final" onClick={onSaveData}>book now</CatalogButton>
            {
                modalWindow !== 0 ? <Modal message={modalWindow} closeModal={closeModal} /> : null
            }
        </div>
    );
}
