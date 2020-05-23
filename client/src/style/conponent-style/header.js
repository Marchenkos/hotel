import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    z-index: 3;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    backgtound: black;
    background-image: url(../../img/header/headerbg.png);

    ${({ scroll }) => scroll && `
        color: #b1a2a2;
    `}
`;
