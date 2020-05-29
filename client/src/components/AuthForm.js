import React, { useRef, useState, useCallback } from "react";
import * as $ from "jquery";
import cookie from "react-cookies";

import SuccesModal from "./modalWindows/SuccessModal";
import { FormButton } from "../style/custom-components/Buttons";
import { Input } from "../style/custom-components/Input";
import { Form } from "../style/custom-components/Form";
import { constants } from "../constants";
import "../style/regist-form.less";
import "../style/error-message.less";

export default function AuthForm({ changeUser }) {
    const [isSuccessAuth, setIsSuccessAuth] = useState(false);
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const duplicatePassword = useRef(null);
    const [isErrorMessage, setIsErrorMessage] = useState(null);
    const authFormRef = useRef(null);

    const onsubmitForm = useCallback((e) => {
        e.preventDefault();

        if (!loginRef.current.value && !passwordRef.current.value && !duplicatePassword.current.value) {
            setIsErrorMessage(1);

            return;
        }

        if (passwordRef.current.value !== duplicatePassword.current.value) {
            setIsErrorMessage(2);

            return;
        }

        const url = "http://localhost:3000/user/login";

        // fetch("http://localhost:3000/user/login", {
        //     method: "POST",
        //     headers: {
        //         "Access-Control-Allow-Origin": "*"
        //     },
        //     body: {
        //         login: loginRef.current.value,
        //         password: passwordRef.current.value,
        //     },
        // })
        //     .then(res => res.json())
        //     .then(response => {
        //         console.log(response);
        //     });

        $.ajax({
            type: "POST",
            url,
            data: {
                login: loginRef.current.value,
                password: passwordRef.current.value
            },
            success: response => {
                console.log(response);

                if (response.message) {
                    changeUser(loginRef.current.value, response.jwt);

                    const expires = new Date();
                    expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
                    cookie.remove("jwtToken");

                    cookie.save(
                        "jwtToken",
                        response.jwt,
                        { expires }
                    );

                    setIsSuccessAuth(true);
                } else {
                    setIsErrorMessage(5);
                }
            }
        });

        if (setIsErrorMessage === 0) {
            authFormRef.current.reset();
        }
    }, []);

    return (
        <div className="auth-form">
            <Form ref={authFormRef}>
                {isErrorMessage ? (
                    <div className="error-message">
                        {
                            constants.errorMessage[isErrorMessage - 1]
                        }
                    </div>
                ) : null}
                <Input className="form__input" placeholder="login" name="login" ref={loginRef} />
                <Input className="form__input" type="password" name="password" placeholder="password" ref={passwordRef} />
                <Input className="form__input" type="password" name="password" placeholder="Confirm password" ref={duplicatePassword} />

                <FormButton type="submit" onClick={onsubmitForm} inForm>log in</FormButton>
            </Form>
            <div className="auth-form__success-modal">
                {isSuccessAuth ? <SuccesModal /> : null}
            </div>
        </div>
    );
}
