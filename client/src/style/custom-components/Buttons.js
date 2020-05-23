import styled, { css } from "styled-components";

const baseButtontStyles = css`
    border: none;
    font-family: Century Gothic;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
`;

export const Button = styled.button`
    ${baseButtontStyles}
    background: none;
    font-size: 13px;
    color: black;

    ${({ block }) => block && `
        color: #b1a2a2;
    `}

    ${({ header }) => header && `
        flex-basis: 15%;
    `}

    ${({ comment }) => comment && `
        font-size: 13px;
        color: gray;
    `}

    ${({ absolutePosition }) => absolutePosition && `
        position: absolute;
        left: 100px;
        height: 30px;
        bottom: 100px;
    `}

    ${({ calendar }) => calendar && `
        margin: 50px 0;
        color: red;
    `}

    ${({ pos }) => pos && `
        position: absolute;
        bottom: 30px;
        right: 50px;
    `}

    ${({ choosed }) => choosed && `
        border-bottom: px solid blue;
        bottom: 20px;
    `}

    ${({ unchoosed }) => unchoosed && `
        color: gray;
    `}
`;

export const FormButton = styled.button`
    ${baseButtontStyles}

    color: gray;
    background: none;
    font-size: 20px;

    ${({ inForm }) => inForm && `
        flex-basis: 50%;
    `}

    ${({ choosed }) => choosed && `
        border-bottom: px solid blue;
        bottom: 20px;
        color: white;
    `}

    ${({ last }) => last && `
        flex-grow: 2;
        text-align: end;
    `}
`;


export const CatalogButton = styled.button`
    font-family: Century Gothic;
    text-transform: uppercase;
    height: 60px;
    margin-top: 20px;
    box-sizing: content-box;
    background: none;
    border: 2px solid red;
    font-size: 17px;
    color: red;

    ${({ bg }) => bg && `
        background: red;
        color: white;
    `}

    ${({ absolutePosition }) => absolutePosition && `
        bottom: 100px;
        left: 50px;
        position: absolute;
        width: 80px;
    `}
`;
