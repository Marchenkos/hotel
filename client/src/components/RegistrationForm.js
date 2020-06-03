import React, { useRef, useCallback, useState } from "react";
import * as $ from "jquery";

import "../style/regist-form.less";
import "../style/slider.less";

import { FormButton } from "../style/custom-components/Buttons";
import { Input } from "../style/custom-components/Input";
import { Form } from "../style/custom-components/Form";
import Modal from "./modalWindows/Modal";
import { constants } from "../constants";

export default function RegistrationForm() {
    const loginRef = useRef(null);
    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmedPassword = useRef(null);
    const [modalMessage, setModalMessage] = useState(null);
    const [isErrorMessage, setIsErrorMessage] = useState(false);
    const regFormRef = useRef(null);

    const closeModal = useCallback(() => {
        setModalMessage(null);
    }, []);

    const validateEmail = email => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    };

    const onsubmitForm = e => {
        e.preventDefault();
        const loginValue = loginRef.current.value;
        const passwordValue = passwordRef.current.value;
        const confirmPasswordValue = confirmedPassword.current.value;
        const emailValue = emailRef.current.value;
        const nameValue = nameRef.current.value;
        const lastNameValue = lastNameRef.current.value;

        if (!loginValue && !nameValue && !lastNameValue
           && !emailValue && !passwordValue) {
            setModalMessage(constants.ERROR_MESSAGE.EMPTY_FIELDS);
            setIsErrorMessage(true);

            return;
        }

        if (confirmPasswordValue !== passwordValue) {
            setModalMessage(constants.ERROR_MESSAGE.DIF_PASSOWRDS);
            setIsErrorMessage(true);

            return;
        }

        if (!validateEmail(emailValue)) {
            setModalMessage(constants.ERROR_MESSAGE.INVALID_EMAIL);
            setIsErrorMessage(true);

            return;
        }

        const url = "http://localhost:3000/user/registration";

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: {
                login: loginValue,
                firstName: nameValue,
                lastName: lastNameValue,
                email: emailValue,
                password: passwordValue
            },
            success: response => {
                console.log(response);

                if (response.result) {
                    setIsErrorMessage(false);
                    setModalMessage(constants.SUCCESS_MESSAGE.SUCCESS_REGISTRATION);
                    regFormRef.current.reset();
                } else {
                    setIsErrorMessage(true);
                    setModalMessage(response.message);
                }
            }
        });
    };

    return (
        <div className="regist-form">
            <Form ref={regFormRef}>
                <div className="regist-form__section">
                    <section className="register-section__item">
                        <Input className="form__input" placeholder="login" name="login" ref={loginRef} />
                        <Input className="form__input" placeholder="name" name="userName" ref={nameRef} />
                        <Input className="form__input" placeholder="lastName" name="lastName" ref={lastNameRef} />
                    </section>
                    <section className="register-section__item">
                        <Input className="form__input" placeholder="email" name="email" ref={emailRef} />
                        <Input className="form__input" type="password" name="password" placeholder="password" ref={passwordRef} />
                        <Input className="form__input" placeholder="confirm password" type="password" name="confirmedPassword" ref={confirmedPassword} />
                    </section>
                </div>
                <FormButton type="submit" onClick={onsubmitForm} inForm>Registration</FormButton>
            </Form>
            {
                modalMessage ? <Modal message={modalMessage} isError={isErrorMessage} closeModal={closeModal} /> : null
            }
        </div>
    );
}
