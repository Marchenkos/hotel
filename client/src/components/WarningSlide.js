import React, { useEffect } from "react";
import WOW from "wowjs";

import "../style/comments.less";
import "../style/warning-slide.less";

import firstBg from "../img/hotel/public-service.jpg";
import secondBg from "../img/header/headerbg.png";
import { MainText, AdditionalText } from "../style/conponent-style/textBlocks";

export default function WarningSlide() {
    useEffect(() => {
        new WOW.WOW().init();
    });

    return (
        <div className="comment-message-block">
            <div className="image-background-block comment-message-block__img-block">
                <img src={`/${firstBg}`} alt="bg" className="image-background-block__main-bg" />
                <img src={`/${secondBg}`} alt="bg" className="image-background-block__opacity-bg" />
            </div>
            <div className="wow fadeIn comment-message-block__description" data-wow-delay="1s">
                <MainText>Login please</MainText>
                <AdditionalText>we appreciate your opinion</AdditionalText>
            </div>
        </div>
    );
}
