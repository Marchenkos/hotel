import React, { useEffect } from "react";
import WOW from "wowjs";
import styled from "styled-components";

import "../../style/services/service-section.less";

export const ServiceSectionContainer = styled.div`
    display: -ms-flexbox;
    -ms-flex-direction: row;
    -ms-flexbox-wrap: wrap; 

    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 20px;
    justify-content: space-evenly;
    font-family: Lato Light;

    ${({ reverse }) => reverse && `
        flex-direction: row-reverse;
        font-family: Lato;
    `}

    @media (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
`;

export const TextUnderline = styled.div`
    border-top: 0.4px solid white;
    margin: 5px 0 35px;
    width: 80%;

    ${({ reverse }) => reverse && `
        border-top: 1.5px solid black;
    `}
`;

export const ServiceSectionImg = styled.img`
    max-width: 45%;

    @media (max-width: 700px) {
        max-width: 50%;
    }
`;

export const ServiceSectionText = styled.div`
    display: -ms-flexbox;
    -ms-flex-direction: row;
    -ms-flexbox-wrap: wrap;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 45%;
    padding: 20px 0;

    @media (max-width: 700px) {
        justify-content: center;
        align-items: center;
    }
`;

export default function ServiceSection(props) {
    useEffect(() => {
        new WOW.WOW().init();
    });

    return (
        <ServiceSectionContainer reverse={props.reverse}>
            <ServiceSectionImg src={props.serviceImg} alt="service" />
            <ServiceSectionText className="wow fadeIn" data-wow-delay="0.4s">
                <div className="service-text__title">
                    {props.title}
                </div>
                <TextUnderline reverse={props.reverse} />
                <div className="service-text__description">
                    {props.children}
                </div>
            </ServiceSectionText>
        </ServiceSectionContainer>
    );
}
