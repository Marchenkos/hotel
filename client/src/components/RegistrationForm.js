/* eslint-disable max-len */
import React, { useRef, useCallback, useState } from "react";
import * as $ from "jquery";

import "../style/regist-form.less";
import "../style/slider.less";

import { FormButton } from "../style/custom-components/Buttons";
import { Input } from "../style/custom-components/Input";
import { Form } from "../style/custom-components/Form";
import Modal from "./modalWindows/Modal";

export default function RegistrationForm() {
    const loginRef = useRef(null);
    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmedPassword = useRef(null);
    const [modalWindow, setModalWindow] = useState(0);

    const closeModal = useCallback(() => {
        setModalWindow(0);
    }, [modalWindow]);

    const onsubmitForm = e => {
        e.preventDefault();

        if (!loginRef.current.value && !nameRef.current.value && !lastNameRef.current.value
           && !emailRef.current.value && !passwordRef.current.value) {
            setModalWindow(1);

            return;
        }

        if (confirmedPassword.current.value !== passwordRef.current.value) {
            setModalWindow(2);

            return;
        }

        const url = "http://localhost:3000/user/registration";

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: {
                login: loginRef.current.value,
                firstName: nameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            },
            success: response => {
                console.log(response);

                setModalWindow(4);
            }
        });
    };

    return (
        <div className="regist-form">
            <Form>
                <div className="slider">
                    <section className="slider__item">
                        <Input className="form__input" placeholder="login" name="login" ref={loginRef} />
                        <Input className="form__input" placeholder="name" name="userName" ref={nameRef} />
                        <Input className="form__input" placeholder="lastName" name="lastName" ref={lastNameRef} />
                    </section>
                    <section className="slider__item">
                        <Input className="form__input" placeholder="email" name="email" ref={emailRef} />
                        <Input className="form__input" type="password" name="password" placeholder="password" ref={passwordRef} />
                        <Input className="form__input" placeholder="confirm password" type="password" name="confirmedPassword" ref={confirmedPassword} />
                    </section>
                </div>
                <FormButton type="submit" onClick={onsubmitForm} inForm>Registration</FormButton>
            </Form>
            {
                modalWindow !== 0 ? <Modal message={modalWindow} closeModal={closeModal} /> : null
            }
        </div>
    );
}
