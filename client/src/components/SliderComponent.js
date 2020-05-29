import React from "react";
import "../style/slider.css";

export default function Slider() {
    return (
        <div className="slider">
            <div className="slider__wrapper">
                <div className="slider__item">
                    <div>1</div>
                </div>
                <div className="slider__item">
                    <div>2</div>
                </div>
                <div className="slider__item">
                    <div>3</div>
                </div>
                <div className="slider__item">
                    <div>4</div>
                </div>
            </div>
            <div className="slider__control slider__control_left" />
            <div className="slider__control slider__control_right slider__control_show" />
        </div>
    );
}
