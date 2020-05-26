import styled from "styled-components";

export const MainText = styled.div`
    font-size: 50px;
    text-transform: uppercase;
    color: #ffffff;

    ${({ inContent }) => inContent && `
        font-size: 35px;
        color: #000000;
    `}

    @media (min-width: 700px) and (max-width : 1000px) {
        font-size: 30px;
    }

    @media (max-width: 700px) {
        font-size: 25px;
    }
`;

export const AdditionalText = styled.div`
    font-size: 30px;
    color: #ffffff;
    padding-top: 10px;

    ${({ inContent }) => inContent && `
        font-size: 20px;
        color: #000000;

        @media (max-width: 700px) {
            font-size: 18px;
            padding-top: 15px;
        }
    `}

    @media (min-width: 1000px) {
        font-size: 25px;
    }

    @media (min-width: 700px) and (max-width : 1000px) {
        font-size: 20px;
    }

    @media (max-width: 700px) {
        font-size: 18px;
    }
`;

export const TitleText = styled.div`
    font-size: 80px;
    font-family: Didot;
    color: #000000;
    text-align: center;

    ${({ white }) => white && `
        color: #ffffff;
        font-size: 100px;
    `}

    @media (max-width: 700px) {
        font-size: 40px;
    }
`;
