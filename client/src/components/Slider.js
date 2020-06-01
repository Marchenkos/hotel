import React, { useState, useCallback } from "react";
import "../style/slider.less";

export default function Slider({ roomId }) {
    const [currentIndex, setCurrentIndex] = useState(1);

    const getNextImg = useCallback(() => {
        if (currentIndex < 4) {
            setCurrentIndex(prev => prev + 1);
        }
    }, [currentIndex]);


    const getPrevImg = useCallback(() => {
        if (currentIndex > 1) {
            setCurrentIndex(prev => prev - 1);
        }
    }, [currentIndex]);

    return (
        <div className="slider-container">
            <img src="public/img/slider/sliderArrow.png" alt="slider-arrow" className="slider-container__change-button--left" onClick={getPrevImg} />
            {roomId ? <img src={`public/img/rooms/${roomId}/${currentIndex}.jpg`} alt="slider-item" className="slider-container__slider-item" /> : null}
            <img src="public/img/slider/sliderArrowRight.png" alt="slider-arrow" className="slider-container__change-button--right" onClick={getNextImg} />
        </div>
    );
}
