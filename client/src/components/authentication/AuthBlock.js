import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";

import { FormButton } from "../../style/custom-components/Buttons";
import RegistrationForm from "../RegistrationForm";
import AuthForm from "../AuthForm";
import { constants } from "../../constants";

import "../../style/css/style.css";

const ButtonContainer = styled.div`
    display: -ms-flexbox;
    -ms-flex-direction: row;
    -ms-flexbox-wrap: wrap; 
    display: flex;
    width: 80%;
`;

export default function AuthBlock({ onChangeUser, setShowAuthForm, showAuthForm }) {
    const [choosedAuthForm, setChooseAuthdForm] = useState(true);
    const [modalClass, setModalClass] = useState(constants.HIDE_MODAL);
    const [modalOverlayClass, setModalOverlayClass] = useState(constants.HIDE_MODAL_OVERLAY);

    useEffect(() => {
        if (showAuthForm) {
            setModalClass(constants.ACTIVE_MODAL);
            setModalOverlayClass(constants.ACTIVE_MODAL_OVERLAY);
        } else {
            setModalClass(constants.HIDE_MODAL);
            setModalOverlayClass(constants.HIDE_MODAL_OVERLAY);
        }
    }, [showAuthForm]);

    const chooseAuthForm = useCallback(() => {
        setChooseAuthdForm(true);
    }, []);

    const unchooseAuthForm = useCallback(() => {
        setChooseAuthdForm(false);
    }, []);

    const closeModal = useCallback(() => {
        setShowAuthForm(false);
    }, []);

    const changeUser = useCallback((user, jwt) => {
        onChangeUser(user, jwt);
    }, []);

    return (
        <div className={modalOverlayClass}>
            <div className={modalClass}>
                <ButtonContainer>
                    <FormButton onClick={chooseAuthForm} choosed={choosedAuthForm}>sign in</FormButton>
                    <FormButton onClick={unchooseAuthForm} choosed={!choosedAuthForm}>sign up</FormButton>
                    <FormButton onClick={closeModal} last>Close</FormButton>
                    {/* <img src="public/img/icons/crossWhite.png" alt="slider-arrow" className="user-modal__cross" onClick={closeModal} /> */}

                </ButtonContainer>

                {
                    choosedAuthForm ? <AuthForm changeUser={changeUser} closeModalForm={closeModal} />
                        : <RegistrationForm />
                }
            </div>
        </div>
    );
}
