import React from "react";
// import axios from "axios";
import * as $ from "jquery";

import "../style/booking-container.less";
import { Button } from "../style/custom-components/Button";
import { Input } from "../style/custom-components/Input";

export default function BookingField({ closeBlock }) {
    // const onSaveData = () => {
    //     const url = "http://projecthotel/getDataForRoom.php";

    //     console.log("Hi");

    //     const formData = new FormData();

    //     formData.append("login", "kseniya");

    //     axios.post(url, formData)
    //         .then(res => console.log(res.data))
    //         .then(err => console.log(err));

    // };

    const onSaveData = () => {

        $.ajax({
            type: "POST",
            url: "http://projecthotel/test.php",
            data: { login: "kseniya" },
            dataType: "JSON",
            success: response => {
                console.log(response.blabla);
            }
        });

    };

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
            <div className="booking-form">
                <div className="booking-form__button booking-form__button--check-in">
                    <div className="check__signature check__signature--check-in">check in</div>
                    <span className="check__value check__value--check-in">{Date.now()}</span>
                </div>
                <div className="booking-form__button booking-form__button--check-out">
                    <div className="check__signature check__signature--check-out">check out</div>
                    <span className="check__value check__value--check-out">{Date.now()}</span>
                </div>

                <div className="booking-form__counter">
                    <span className="check__signature">guests</span>

                    <div className="counter">
                        <span className="counter__increment">+</span>
                        <Input className="counter__value" />
                        <span className="counter__decrement">-</span>
                    </div>
                </div>
                <div className="booking-form__counter">
                    <span className="check__signature">rooms</span>

                    <div className="counter">
                        <span className="counter__increment">+</span>
                        <Input className="counter__value" />
                        <span className="counter__decrement">-</span>
                    </div>
                </div>

                <Button onClick={onSaveData}>book now</Button>
                <Button onClick={closeBlock} pos>close</Button>
            </div>
        </div>
    );
}
