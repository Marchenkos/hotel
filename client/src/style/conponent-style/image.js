import styled from "styled-components";

export const ImgInBlock = styled.img`
    width: 75%;
    position: absolute;
    top: 36%;
    left: -25%;

    ${({ right }) => right && `
        top: 70%;
        left: 55%;
    `}
`;
