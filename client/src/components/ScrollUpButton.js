import React, { useEffect, useState } from "react";
import * as $ from "jquery";
import { constants } from "../constants";

import "../style/scroll-up-button.less";

export default function ScrollUpButton({ isScroll }) {
    const [isShowButton, setIsShowButton] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleScroll = () => {
        if (window.innerHeight + window.pageYOffset < 1000) {
            setIsShowButton(false);

            return;
        }

        setIsShowButton(true);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    });

    const resizeListener = () => {
        if (window.innerWidth < constants.TABLET_WIDTH) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", resizeListener);

        return () => window.removeEventListener("resize", resizeListener);
    });

    const scrollUp = () => {
        $("html,body").animate({ scrollTop: 0 }, "slow");
    };

    return (
        <>
            {!isMobile ? (
                isShowButton ? (
                    <div className="scroll-up-button" onClick={scrollUp}>
                        <img src="public/img/icons/scrollUp.png" alt="scroll-arrow" className="scroll-up-button__icon" />
                    </div>
                ) : null
            ) : null}
        </>
    );
}
