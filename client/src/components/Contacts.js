import React, { useEffect } from "react";
import WOW from "wowjs";

import mainBanner from "../img/main/resepshen3.jpg";

import { MainText, AdditionalText } from "../style/conponent-style/textBlocks";
import "../style/contact-container.less";


export default function Contacts() {
    useEffect(() => {
        new WOW.WOW().init();
    });

    return (
        <div className="contact-container">
            <div className="contact-container__banner">
                <div className="image-background-block">
                    <img src={mainBanner} alt="bg" className="image-background-block__main-bg" />
                </div>
                <div className="wow fadeIn description-container" data-wow-delay="1s">
                    <MainText>chedi andermatt</MainText>
                    <AdditionalText>feel like a celebrity</AdditionalText>
                </div>
            </div>
        </div>
    );
}
