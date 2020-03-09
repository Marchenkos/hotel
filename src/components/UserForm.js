import React, { useCallback, useState } from "react";

import "../style/user-form.less";
import { FormButton } from "../style/custom-components/Button";
import RegistrationForm from "./RegistrationForm";
import AuthForm from "./AuthForm";

export default function UserForm({ closeModal }) {
    const [choosedAuthForm, setChooseAuthdForm] = useState(true);

    const chooseAuthForm = useCallback(() => {
        setChooseAuthdForm(true);
    }, [choosedAuthForm]);

    const unchooseAuthForm = useCallback(() => {
        setChooseAuthdForm(false);
    }, [choosedAuthForm]);

    const closeForm = useCallback(() => {
        closeModal();
    }, []);

    return (
        <div className="user-form">
            <div className="user-form__button-container">
                <FormButton onClick={chooseAuthForm} choosed={choosedAuthForm}>sign in</FormButton>
                <FormButton onClick={unchooseAuthForm} choosed={!choosedAuthForm}>sign up</FormButton>
                <FormButton onClick={closeForm} last>Close</FormButton>
            </div>

            {
                choosedAuthForm ? <RegistrationForm />
                    : <AuthForm />
            }
        </div>
    );
}
