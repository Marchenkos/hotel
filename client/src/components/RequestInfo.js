import React from "react";
import "../style/contant-container.less";

export default function RequestInfo() {
    return (
        <div className="request-form">
            <div className="request-form__desctiption">
                <span className="item__title">request info</span>
                <span className="item__signature">classic</span>
                <span className="item__description">To  the please fill the form, we will reply as soon as possible.</span>
            </div>
            <form className="form">
                <span className="form__">
                    name*
                    <input className="form__input" />
                </span>
                <span>
                    email*
                    <input className="form__input" />
                </span>
                <span>
                    arrival*
                    <input className="form__input" />
                </span>
                <span>
                    departure*
                    <input className="form__input" />
                </span>
                <span>
                    hotel*
                    <input className="form__input" />
                </span>
                <span>
                    room*
                    <input className="form__input" />
                </span>
                <span>
                    message*
                    <input className="form__input" />
                </span>
            </form>
        </div>
    );
}
