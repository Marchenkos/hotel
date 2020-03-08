import React, { useRef } from "react";
import * as $ from "jquery";

import "../style/regist-form.less";
import { Button } from "../style/custom-components/Button";
import { Input } from "../style/custom-components/Input";
import { Form } from "../style/custom-components/Form";

export default function AuthForm() {
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const duplicatePassword = useRef(null);

    const onsubmitForm = e => {
        e.preventDefault();

        if (!loginRef.current.value && !passwordRef.current.value && !duplicatePassword.current.value) {
            console.log("EMPTY");

            return;
        }

        const url = "http://projecthotel:8080/auth.php";

        const authData = {
            user: loginRef.current.value,
            password: passwordRef.current.value
        };

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: {
                regData: JSON.stringify(authData)
            },
            success: response => {
                console.log(response.result[0]);
            }
        });
    };

    return (
        <div className="auth-form">
            <Form className="formLALA">
                <Input className="form__input" placeholder="login" name="login" ref={loginRef} />
                <Input className="form__input" type="password" name="password" placeholder="password" ref={passwordRef} />
                <Input className="form__input" type="password" name="password" placeholder="Confirm password" ref={duplicatePassword} />

                <Button type="submit" onClick={onsubmitForm} inForm>sing in</Button>
            </Form>
        </div>
    );
}
