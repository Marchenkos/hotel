/* eslint-disable max-len */
/* eslint-disable func-names */
import React, { useEffect } from "react";
import * as $ from "jquery";
import WOW from "wowjs";

import ScrollMagic from "scrollmagic";
import main1 from "../img/services/bar5.jpg";
import bar from "../img/main/bar.png";
import restaurant from "../img/services/restaurant.jpg";
import penthouse from "../img/main/penthause.jpg";

import spa from "../img/services/spa.jpg";
import pool from "../img/services/public-service.jpg";

import ServiceSection from "./services/ServiceSection";
import "../style/services/service-container.less";
import { MainText, AdditionalText } from "../style/conponent-style/textBlocks";

export default function Services() {
    useEffect(() => {
        new WOW.WOW().init();
    });

    useEffect(() => {
        const ctrl = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: "onLeave"
            }
        });

        $("section").each(function () {
            new ScrollMagic.Scene({
                triggerElement: this
            })
                .setPin(this)
                .addTo(ctrl);
        });
    });

    return (
        <div className="services">
            <section className="services__section">
                <img src={main1} className="main-section__img" alt="services" />
                <div className="wow fadeI main-section__text-container" data-wow-delay="1s">
                    <MainText>Services and entertainment</MainText>
                    <div className="item__signature">
                        <AdditionalText>we provide a lot of differences services and you can check this here</AdditionalText>
                    </div>
                </div>
            </section>
            <section className="services__section services__section--highlited">
                <ServiceSection title="Antoine Room-Sheraton Mountain Hotel" serviceImg={penthouse}>
                    <p className="service-section__description-block">
                        Gifted Yoshihiro Seno’s career began as engineering designer before he decided to change paths and pursue the long road to mastering ‘washoku‘. Having worked in many Japanese restaurants in New York City, he subsequently moved back to Tokyo to continue his craft.
                    </p>
                    <p className="service-section__description-block">
                        Here in Hokkaido, with the abundance of exceptional local ingredients, and our own in-house forager, chef Seno felt is able to nurture his attention to detail, his thoughtful and emotional approach to the earth and fresh ingredients.
                    </p>
                </ServiceSection>
            </section>
            <section className="services__section">
                <ServiceSection title="DoubleTree Bar" serviceImg={bar} reverse>
                    <p className="service-section__description-block">
                        Gifted Yoshihiro Seno’s career began as engineering designer before he decided to change paths and pursue the long road to mastering ‘washoku‘. Having worked in many Japanese restaurants in New York City, he subsequently moved back to Tokyo to continue his craft.
                    </p>
                    <p className="service-section__description-block">
                        Here in Hokkaido, with the abundance of exceptional local ingredients, and our own in-house forager, chef Seno felt is able to nurture his attention to detail, his thoughtful and emotional approach to the earth and fresh ingredients.
                    </p>
                </ServiceSection>
            </section>
            <section className="services__section services__section--highlited">
                <ServiceSection title="Restaurant" serviceImg={restaurant}>
                    <p className="service-section__description-block">
                        Gifted Yoshihiro Seno’s career began as engineering designer before he decided to change paths and pursue the long road to mastering ‘washoku‘. Having worked in many Japanese restaurants in New York City, he subsequently moved back to Tokyo to continue his craft.
                    </p>
                    <p className="service-section__description-block">
                        Here in Hokkaido, with the abundance of exceptional local ingredients, and our own in-house forager, chef Seno felt is able to nurture his attention to detail, his thoughtful and emotional approach to the earth and fresh ingredients.
                    </p>
                </ServiceSection>
            </section>
            <section className="services__section">
                <ServiceSection title="Luxurious Hotel Swimming Pool" serviceImg={pool} reverse>
                    <p className="service-section__description-block">
                        Gifted Yoshihiro Seno’s career began as engineering designer before he decided to change paths and pursue the long road to mastering ‘washoku‘. Having worked in many Japanese restaurants in New York City, he subsequently moved back to Tokyo to continue his craft.
                    </p>
                    <p className="service-section__description-block">
                        Here in Hokkaido, with the abundance of exceptional local ingredients, and our own in-house forager, chef Seno felt is able to nurture his attention to detail, his thoughtful and emotional approach to the earth and fresh ingredients.
                    </p>
                </ServiceSection>
            </section>
            <section className="services__section services__section--highlited">
                <ServiceSection title="Mountain&amp;SPA" serviceImg={spa}>
                    <p className="service-section__description-block">
                        Gifted Yoshihiro Seno’s career began as engineering designer before he decided to change paths and pursue the long road to mastering ‘washoku‘. Having worked in many Japanese restaurants in New York City, he subsequently moved back to Tokyo to continue his craft.
                    </p>
                    <p className="service-section__description-block">
                        Here in Hokkaido, with the abundance of exceptional local ingredients, and our own in-house forager, chef Seno felt is able to nurture his attention to detail, his thoughtful and emotional approach to the earth and fresh ingredients.
                    </p>
                </ServiceSection>
            </section>
        </div>
    );
}
