import styled from "styled-components";

export const MainText = styled.div`
    font-size: 50px;
    text-transform: uppercase;
    color: #ffffff;

    ${({ inContent }) => inContent && `
        font-size: 35px;
        margin-bottom: 30px;
        color: #000000;
    `}

    @media (max-width: 700px) {
        font-size: 25px;
    }
`;

export const AdditionalText = styled.div`
    font-size: 30px;
    color: #ffffff;

    ${({ inContent }) => inContent && `
        font-size: 20px;
        color: #000000;
    `}
`;

export const TitleText = styled.div`
    font-size: 80px;
    font-family: Didot;
    width: 40%;
    margin: 10px auto;
    color: #000000;

    ${({ white }) => white && `
        color: #ffffff;
        font-size: 100px;
        width: 100%;
    `}
`;
