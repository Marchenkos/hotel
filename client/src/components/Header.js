import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AuthBlock from "./authentication/AuthBlock";
import Menu from "./Menu";
import defaultLogo from "../img/logo/logo.png";
import lightLogo from "../img/logo/light-logo2.png";
import { constants } from "../constants";
import "../style/header-container.less";

const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;

    background: black;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    -webkit-transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
    transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);

    ${({ scroll }) => scroll && `
        color: #b1a2a2;
        visibility: visible;
        opacity: 1;
    `}

    @media (max-width: 700px) {
        flex-direction: column;
        background: black;
        visibility: hidden;

        opacity: 0;

        ${({ isShowMenu }) => isShowMenu && `
            color: #b1a2a2;
            visibility: visible;
            opacity: 1;
        `}
    }
`;


export default function Header({ currentMenu, currentUser, onChangeUser }) {
    const [isScroll, setIsScroll] = useState(false);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const showMenu = () => {
        setIsShowMenu(!isShowMenu);
    };

    const changeUser = useCallback((name, jwtToken) => {
        onChangeUser(name, jwtToken);
    }, []);

    const resizeListener = () => {
        if (window.innerWidth < constants.TABLET_WIDTH) {
            setIsShowMenu(false);
            setIsMobile(true);
        }
    };

    const handleScroll = () => {
        if (window.innerHeight + window.pageYOffset < 700) {
            setIsScroll(false);

            return;
        }

        setIsScroll(true);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    });

    useEffect(() => {
        window.addEventListener("resize", resizeListener);

        return () => window.removeEventListener("resize", resizeListener);
    });

    return (
        <div className="header-container">
            <div className="header-container__logo">
                <Link to="/">
                    {
                        isScroll || isMobile ? <img src={lightLogo} className="logo" alt="hotel_logo" />
                            : <img src={defaultLogo} className="logo" alt="hotel_logo" />
                    }
                </Link>
            </div>
            <i className="fas fa-bars menu-container__mobile-button" onClick={showMenu} />

            <MenuContainer scroll={isScroll} isShowMenu={isShowMenu}>
                <Menu content={currentMenu} />
                <AuthBlock isScroll={isScroll} currentUser={currentUser} onChangeUser={changeUser} />
            </MenuContainer>
        </div>
    );
}
