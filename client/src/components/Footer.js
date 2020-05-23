import React from "react";

import "../style/footer-container.less";
import facebookIcon from "../img/icons/facebook.png";
import instagramIcon from "../img/icons/instagram.png";
import twitterIcon from "../img/icons/twitter.png";

export default function Footer() {
    return (
        <>
            <div className="separator" />
            <div className="footer-container">
                <div className="footer-container__copyright">Copyright © 2002-2020 SwizMountain.com</div>
                <div className="footer-container__contact">766 - 355 - 9358 / Gotthardstrasse Andermatt Switzerland / info@chediandermatt.com</div>
                <div className="footer-container__social-icons">
                    <img src={facebookIcon} className="social-icon" alt="facebook" />
                    <img src={instagramIcon} className="social-icon" alt="instagramm" />
                    <img src={twitterIcon} className="social-icon" alt="twitter" />
                </div>
            </div>
        </>
    );
}
