import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoPng from "../img/logo.png";
import Menu from "./Menu";

import "../style/header-container.less";

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    background: none;
    padding: 30px;

    ${({ block }) => block && `
        background: black;
        color: #b1a2a2;
    `}
`;

const BookButton = styled.button`
    border: none;
    margin-left: 50px;
    background: none;
    font-family: Century Gothic;
    text-transform: uppercase;
    color: black;

    ${({ block }) => block && `
        color: #b1a2a2;
    `}
`;

export default function Header({ currentMenu }) {
    const [isBlockMenu, setIsBlockMenu] = useState(false);

    const handleScroll = () => {
        console.log(window.innerHeight + window.pageYOffset);
        if (window.innerHeight + window.pageYOffset < 1200) {
            setIsBlockMenu(false);

            return;
        }

        setIsBlockMenu(true);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <HeaderContainer block={isBlockMenu}>
            <div className="header-container__logo">
                <img src={logoPng} className="logo" alt="hotel" />
            </div>
            <Menu content={currentMenu} />

            <BookButton block={isBlockMenu}>book now</BookButton>
        </HeaderContainer>
    );
}
