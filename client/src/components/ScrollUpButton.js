import React, { useEffect, useState } from "react";
import * as $ from "jquery";

import "../style/scroll-up-button.less";

export default function ScrollUpButton({ isScroll }) {
    const [isShowButton, setIsShowButton] = useState(false);

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

    const scrollUp = () => {
        $("html,body").animate({ scrollTop: 0 }, "slow");
    };

    return (
        <>
            {
                isShowButton ? (
                    <div className="scroll-up-button" onClick={scrollUp}>
                        <img src="public/img/slider/scrollUp.png" alt="scroll-arrow" className="scroll-up-button__icon" />
                    </div>
                ) : null
            }
        </>
    );
}
