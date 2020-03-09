import React, { useRef } from "react";
import * as $ from "jquery";

import "../style/regist-form.less";
import "../style/slider.less";

import { FormButton } from "../style/custom-components/Button";
import { Input } from "../style/custom-components/Input";
import { Form } from "../style/custom-components/Form";

export default function RegistrationForm() {
    const loginRef = useRef(null);
    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const birthdayRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const onsubmitForm = e => {
        e.preventDefault();

        if (!loginRef.current.value && !nameRef.current.value && !lastNameRef.current.value
            && !birthdayRef.current.value && !emailRef.current.value && !passwordRef.current.value) {
            console.log("EMPTY");

            return;
        }

        const url = "http://projecthotel/register.php";

        const registerData = {
            user: loginRef.current.value,
            name: nameRef.current.value,
            lastName: lastNameRef.current.value,
            birthday: birthdayRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };


        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: {
                regData: JSON.stringify(registerData)
            },
            success: response => {
                console.log(response.result[0]);
            }
        });
    };

    return (
        <div className="regist-form">
            <Form className="formLALA">
                <div className="slider">
                    <section className="slider__item">
                        <Input className="form__input" placeholder="login" name="login" ref={loginRef} />
                        <Input className="form__input" placeholder="name" name="userName" ref={nameRef} />
                        <Input className="form__input" placeholder="lastName" name="lastName" ref={lastNameRef} />
                    </section>
                    <section className="slider__item">
                        <Input className="form__input" placeholder="email" name="email" ref={emailRef} />
                        <Input className="form__input" placeholder="birthday" name="birthday" ref={birthdayRef} />
                        <Input className="form__input" type="password" name="password" placeholder="password" ref={passwordRef} />
                    </section>
                </div>
                <FormButton type="submit" onClick={onsubmitForm} inForm>Registration</FormButton>
            </Form>
        </div>
    );
}
