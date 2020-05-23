/* eslint-disable max-len */
import React, { useEffect } from "react";
import WOW from "wowjs";

import Footer from "./Footer";
import ServiceCard from "./ServiceCard";

import cityPicture from "../img/main/city1.jpg";
import hotelPicture from "../img/hotel/hotel1.jpg";
import firstBg from "../img/hotel/196881394.png";
import secondBg from "../img/header/headerbg.png";
import pool from "../img/services/pool.jpg";
import bar from "../img/services/bar.jpg";
import spa from "../img/services/spa.jpg";

import { MainText, AdditionalText, TitleText } from "../style/conponent-style/textBlocks";
import { ImgInBlock } from "../style/conponent-style/image";
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
                <div className="image-background-block">
                    <img src={firstBg} alt="bg" className="image-background-block__main-bg" />
                    <img src={secondBg} alt="bg" className="image-background-block__opacity-bg" />
                </div>
                <div className="wow fadeIn description-container" data-wow-delay="1s">
                    <MainText>chedi andermatt</MainText>
                    <AdditionalText>feel like a celebrity</AdditionalText>
                </div>
            </div>
            <div className="main-contant-container__item-block">
                <div className="text-container" data-wow-offset="50" data-wow-delay="0.6s">
                    <div className="description-content-container">
                        <MainText inContent>
                            A private paradise overlooking Ibiza’s port and Old Town.
                        </MainText>
                        <AdditionalText inContent>
                            Situated prominently in the center of Ibiza,
                            Sir Joan is an intimate retreat that reflects the
                            island’s vibrant culture and sensuality.
                            This free-spirited yet modern hotel embraces any and all—from party hoppers to bohemian recluses.
                        </AdditionalText>
                    </div>
                </div>
                <div className="separation" />
                <div className="image-container">
                    <TitleText className="wow fadeIn" data-wow-offset="50" data-wow-delay="0.5s">
                        Rooms &amp; Suites
                    </TitleText>
                    <div className="additional-text-container">
                        <AdditionalText inContent>
                            Sir Joan’s 38 rooms and suites integrate the island’s nautical elements with stripped wood yacht floors and highly polished stainless-steel wall panels that visually emulate sunlit waves
                        </AdditionalText>
                    </div>
                    <ImgInBlock className="wow fadeInLeft" src={cityPicture} alt="city" />
                    <ImgInBlock className="wow fadeInRight" src={hotelPicture} alt="city" right />
                </div>
            </div>
            <div className="baner-container">
                <div className="image-background-block">
                    <img src={pool} alt="bg" className="image-background-block__main-bg" />
                </div>
                <div className="wow fadeIn baner-description-container" data-wow-delay="0.5s">
                    <TitleText white>Public Spaces</TitleText>
                </div>
            </div>

            <div className="service-cards-container">
                <div className="service-cards-container__text-block-wrapper">
                    <ServiceCard title="the pool">
                        The tranquil plunge pool is the perfect complement to the Ibiza sun. Sip, eat and lounge poolside and let your worries float away.
                    </ServiceCard>
                </div>
                <div className="wow fadeIn service-cards-container__card-wrapper" data-wow-offset="50">
                    <ServiceCard title="the bar" img={bar}>
                            The tranquil plunge pool is the perfect complement to the Ibiza sun. Sip, eat and lounge poolside and let your worries float away.
                    </ServiceCard>
                </div>
                <div className="wow fadeIn service-cards-container__card-wrapper service-cards-container__card-wrapper--last" data-wow-offset="50">
                    <ServiceCard title="the spa" img={spa}>
                        The tranquil plunge pool is the perfect complement to the Ibiza sun. Sip, eat and lounge poolside and let your worries float away.
                    </ServiceCard>
                </div>
            </div>

            <Footer />
        </div>
    );
}
