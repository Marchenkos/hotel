import React from "react";

import "../../style/booking-counter.less";
import { Input } from "../../style/custom-components/Input";

export default function BookingInput({ data, title, isInvalid }) {
    return (
        <div className="counter-container">
            <span className="counter-container__signature">{title}</span>
            <div className="counter">
                <Input className="counter__value" disabled="disabled" invalid={isInvalid} value={data} boldBorder />
            </div>
        </div>
    );
}
