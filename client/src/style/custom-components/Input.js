import styled from "styled-components";

export const Input = styled.input`
    border: none;
    background: none;
    flex-basis: 80%;
    border: 1px solid #c9c8c8;
    font-size: 15px;
    color: white;
    height: 30px;
    font-family: Century Gothic;
    text-transform: uppercase;
    padding: 10px;
    margin: 10px;
    
    ${({ comment }) => comment && `
        width: 80%;
        color: white;
    `}

    ${({ black }) => black && `
        color: black;
    `}

    ${({ error }) => error && `
        border: 1px solid red;
    `}
`;
