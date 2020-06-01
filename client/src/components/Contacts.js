import React, { useEffect } from "react";
import WOW from "wowjs";

import mainBanner from "../img/main/resepshen3.jpg";
import map from "../img/services/map.png";

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
            <div className="contact-container__main-block">
                <div className="main-block__contacts-inf">
                    <div className="main-block__item">
                        <div className="contacts-inf__title">
                            <MainText inContent>Contacts</MainText>
                            <div className="title__cover" />
                        </div>
                        <AdditionalText inContent>T +39 081 801 5757</AdditionalText>
                        <AdditionalText inContent>F +39 081 879 8747</AdditionalText>
                        <AdditionalText inContent>Emergency Numbers</AdditionalText>
                        <AdditionalText inContent>+39 329 3136224</AdditionalText>
                    </div>
                    <div className="main-block__item">
                        <div className="contacts-inf__title">
                            <MainText inContent>Connect</MainText>
                            <div className="title__cover" />
                        </div>
                        <AdditionalText inContent>info@hotelcapolagala.com</AdditionalText>
                        <AdditionalText inContent>F +39 081 879 8747</AdditionalText>
                    </div>
                </div>
                <img src={map} alt="map" className="main-block__map" />
            </div>
        </div>
    );
}
