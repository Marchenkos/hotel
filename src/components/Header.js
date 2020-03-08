import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import logoPng from "../img/logo.png";
import Menu from "./Menu";
// import BookingField from "./BookingField";
import UserForm from "./UserForm";

import "../style/header-container.less";
import { Button } from "../style/custom-components/Button";

const HeaderContainer = styled.div`
    display: flex;
    z-index: 3;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    background: none;
    padding: 10px;

    ${({ block }) => block && `
        background: black;
        color: #b1a2a2;
    `}
`;

export default function Header({ currentMenu }) {
    const [isBlockMenu, setIsBlockMenu] = useState(false);
    const [isOpenBookingForm, setIsOpenBookingForm] = useState(false);

    const openBookingForm = useCallback(() => {
        setIsOpenBookingForm(!isOpenBookingForm);
    }, [isOpenBookingForm]);

    const handleScroll = () => {
        if (window.innerHeight + window.pageYOffset < 1050) {
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

            <Button block={isBlockMenu} onClick={openBookingForm}>book now</Button>
            {
                isOpenBookingForm ? (
                    <UserForm />
                ) : null
            }
        </HeaderContainer>
    );
}
