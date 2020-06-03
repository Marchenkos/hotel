import styled from "styled-components";

export const MainText = styled.div`
    font-size: 50px;
    font-family: Bodidota;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    font-family: Didot;

    ${({ inContent }) => inContent && `
        font-size: 35px;
        font-weight: 700;
        color: #000000;
        letter-spacing: 1px;
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
    font-family: Didot;
    color: #ffffff;
    padding-top: 10px;

    ${({ inContent }) => inContent && `
        margin-top: 30px;
        color: #4d4d4d;
        font-size: 20px;
        font-family: Century Gothic;

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
