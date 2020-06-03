/* eslint-disable max-len */
import React, { useEffect } from "react";
import WOW from "wowjs";

import ServiceCard from "./ServiceCard";

import cityPicture from "../img/main/city1.jpg";
import hotelPicture from "../img/hotel/hotel1.jpg";
import firstBg from "../img/hotel/196881394.png";
import secondBg from "../img/header/headerbg.png";
import pool from "../img/services/pool.jpg";
import bar from "../img/services/bar.jpg";
import spa from "../img/services/spa.jpg";
import BannerBlock from "./BannerBlock";
import { MainText, AdditionalText, TitleText } from "../style/conponent-style/textBlocks";
import "../style/content/main-content-container.less";
import "../style/content/image-background-block.less";
import "../style/content/description-block.less";

export default function Content() {
    useEffect(() => {
        new WOW.WOW().init();
    });

    return (
        <div className="main-contant-container">
            <div className="main-contant-container__item-block">
                <BannerBlock firstBg={firstBg} title="hotel mountain" description="feel like a celebrity" />
            </div>
            <div className="main-contant-container__item-block">
                <div className="text-container" data-wow-offset="50" data-wow-delay="0.6s">
                    <MainText inContent>
                    The land of sun and mountains
                    </MainText>
                    <AdditionalText inContent className="text-container__additional-text">
                    Set between Mt. Faito and the sea, the town of Vico Equense is a jewel of the Sorrento Peninsula. With an ancient history, a significant artistic heritage, and an outstanding culinary tradition that crowns this territory as a true representative of the Mediterranean cuisine.
                    </AdditionalText>
                </div>
                <div className="image-container">
                    <div className="image-container__background" />
                    <div className="image-container__title-text">
                        <TitleText className="wow fadeIn" data-wow-offset="50" data-wow-delay="0.5s">
                            Rooms &amp; Suites
                        </TitleText>
                    </div>
                    <img className="wow fadeInLeft image-container__img-item" src={cityPicture} alt="city" />
                    <div className="image-container__description-text">
                        The land of sun and mountains. The hills that sweetly descend towards the sea, a land kissed by the sun. 
                        bewitching mountains and beautiful landscapes surround the hotel Mountain.
                    </div>
                    <div className="image-container__description-text image-container__description-text--right">
                        Austria is renowned for the agricultural vocation, resulting in a vast variety of excellent local ingredients and recipes that will enrich our guests’ food and wine experience. 
                    </div>
                    <img className="wow fadeInRight image-container__img-item" src={hotelPicture} alt="city" />
                </div>
            </div>
            <div className="baner-container">
                <div className="image-background-block">
                    <img src={pool} alt="bg" className="image-background-block__main-bg" />
                </div>
                <div className="wow fadeIn baner-description-container" data-wow-delay="0.5s">
                    <TitleText white>Public Spaces</TitleText>
                </div>
                <div className="service-cards-container__text-block-wrapper">
                    <ServiceCard title="the pool">
                        The new infinity pool is a unique part, nestled on the cliff, one step away from the mountains. 
                    </ServiceCard>
                </div>
            </div>

            <div className="service-cards-container">
                <div className="wow fadeIn service-cards-container__card-wrapper" data-wow-offset="50">
                    <ServiceCard title="the bar" img={bar}>
                        The prestige bar in a hotel Mountain. Sip, eat and lounge poolside and let your worries float away.
                    </ServiceCard>
                </div>
                <div className="wow fadeIn service-cards-container__card-wrapper service-cards-container__card-wrapper--last" data-wow-offset="50">
                    <ServiceCard title="the spa" img={spa}>
                        One of the most award-winning spas in Austria. Hotel Mountain offers a luxury retreat with world-class services and amenities.
                    </ServiceCard>
                </div>
            </div>
        </div>
    );
}
