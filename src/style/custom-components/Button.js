import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background: none;
    font-family: Century Gothic;
    text-transform: uppercase;
    font-size: 20px;
    color: black;
    cursor: pointer;
    outline: none;

    ${({ block }) => block && `
        color: #b1a2a2;
    `}

    ${({ inForm }) => inForm && `
        margin-top: 10px;
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
    border: none;
    color: gray;
    background: none;
    font-family: Century Gothic;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
    outline: none;

    ${({ choosed }) => choosed && `
        border-bottom: px solid blue;
        bottom: 20px;
        color: white;
    `}
`;
