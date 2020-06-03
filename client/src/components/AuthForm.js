import React, { useRef, useState, useCallback } from "react";
import * as $ from "jquery";
import cookie from "react-cookies";
import debounce from "lodash.debounce";

import Modal from "./modalWindows/Modal";
import { FormButton } from "../style/custom-components/Buttons";
import { Input } from "../style/custom-components/Input";
import { Form } from "../style/custom-components/Form";
import { constants } from "../constants";
import "../style/regist-form.less";
import "../style/error-message.less";

export default function AuthForm({ changeUser, closeModalForm }) {
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmedPassword = useRef(null);
    const [modalMessage, setModalMessage] = useState(null);
    const [isErrorMessage, setIsErrorMessage] = useState(false);

    const authFormRef = useRef(null);

    const closeAuthModal = debounce(() => {
        closeModalForm();
    }, 2000);

    const closeMessageModal = useCallback(() => {
        setModalMessage(null);
    }, []);

    const onsubmitForm = useCallback((e) => {
        e.preventDefault();
        const loginValue = loginRef.current.value;
        const passwordValue = passwordRef.current.value;
        const confirmPasswordValue = confirmedPassword.current.value;

        if (!loginValue && !passwordValue && !confirmPasswordValue) {
            setModalMessage(constants.ERROR_MESSAGE.EMPTY_FIELDS);
            setIsErrorMessage(true);

            return;
        }

        if (passwordValue !== confirmPasswordValue) {
            setModalMessage(constants.ERROR_MESSAGE.DIF_PASSOWRDS);
            setIsErrorMessage(true);

            return;
        }

        const url = "http://localhost:3000/user/login";

        $.ajax({
            type: "POST",
            url,
            data: {
                login: loginValue,
                password: passwordValue
            },
            success: response => {
                console.log(response);

                if (response.jwt) {
                    changeUser(loginRef.current.value, response.jwt);

                    const expires = new Date();
                    expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
                    cookie.remove("jwtToken");
                    cookie.remove("currentUser");

                    cookie.save(
                        "jwtToken",
                        response.jwt,
                        { expires }
                    );

                    cookie.save(
                        "currentUser",
                        loginRef.current.value,
                        { expires }
                    );

                    setIsErrorMessage(false);
                    setModalMessage(constants.SUCCESS_MESSAGE.SUCCESS_LOGIN);
                    closeAuthModal();
                } else {
                    setIsErrorMessage(true);
                    setModalMessage(constants.ERROR_MESSAGE.LOGIN_ERROR);
                }
            }
        });
    }, []);

    return (
        <div className="auth-form">
            <Form ref={authFormRef}>
                <Input className="form__input" placeholder="login" name="login" ref={loginRef} />
                <Input className="form__input" type="password" name="password" placeholder="password" ref={passwordRef} />
                <Input className="form__input" type="password" name="password" placeholder="Confirm password" ref={confirmedPassword} />

                <FormButton type="submit" onClick={onsubmitForm} inForm>log in</FormButton>
            </Form>
            {
                modalMessage ? <Modal message={modalMessage} isError={isErrorMessage} closeModal={closeMessageModal} /> : null
            }
        </div>
    );
}
