import React, { useEffect } from "react";
import WOW from "wowjs";

import secondBg from "../img/header/headerbg.png";
import { MainText, AdditionalText } from "../style/conponent-style/textBlocks";

import "../style/content/main-content-container.less";
import "../style/content/image-background-block.less";

export default function BannerBlock({ firstBg, title, description }) {
    useEffect(() => {
        new WOW.WOW().init();
    });

    return (
        <>
            <div className="image-background-block">
                <img src={firstBg} alt="bg" className="image-background-block__main-bg" />
                <img src={secondBg} alt="bg" className="image-background-block__opacity-bg" />
            </div>
            <div className="wow fadeIn description-container" data-wow-delay="1s">
                <MainText>{title}</MainText>
                <AdditionalText>{description}</AdditionalText>
            </div>
        </>
    );
}
