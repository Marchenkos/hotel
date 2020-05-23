import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CheckMark = styled.div`
    width: 0;
    height: 20px;
    opacity: 0;
    position: absolute;
    transform-origin: 0 10px;
    background: #67b2ce;

    ${({ first }) => first && `
        left: 21px;
        top: -20px;
        transform:rotate(45deg);
    `}

    ${({ second }) => second && `
        transform: rotate(-45deg);
        left: 55px;
        top: 2px;
    `}
`;

const CheckedCheckMark = styled(CheckMark)`
    ${({ first }) => first && `
        opacity: 1;
        width: 50px;
        transition: width .4s, opacity .3s;
    `}

    ${({ second }) => second && `
        opacity: 1;
        width: 100px;
        transition: width .4s .4s , opacity .3s .4s;
    `}
`;

const SuccessModal = styled.div`
    position: relative;
`;

export default function SuccesModal() {
    const [isVisibleMark, setIsVisibleMark] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisibleMark(true);
        }, 1000);
    });

    return (
        <SuccessModal>
            {isVisibleMark ? (
                <>
                    <CheckedCheckMark first />
                    <CheckedCheckMark second />
                </>

            ) : (
                <>
                    <CheckMark first />
                    <CheckMark second />
                </>
            )}
        </SuccessModal>
    );
}
