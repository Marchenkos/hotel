import React, { useEffect, useState, useCallback } from "react";
import cookie from "react-cookies";

import UserForm from "../UserForm";
import "../../style/auth-block.less";

export default function AuthBlock({ currentUser, onChangeUser }) {
    const [isShowLoginForm, setIsShowLoginForm] = useState(false);
    const [jwt, setJWT] = useState(null);

    useEffect(() => {
        const jwtToken = cookie.load("jwtToken");

        if (jwtToken) {
            setJWT(jwtToken);
        }
    }, [currentUser]);

    const showLoginForm = useCallback(() => {
        setIsShowLoginForm(!isShowLoginForm);
    }, [isShowLoginForm]);

    const changeUser = useCallback((name, jwtToken) => {
        onChangeUser(name, jwtToken);
    }, []);

    const isUserAuthenticated = () => {
        return !!jwt;
    };

    const logOut = useCallback(() => {
        cookie.remove("jwtToken");

        changeUser(null, null);

        setJWT(null);
    }, [jwt]);

    return (
        <>
            {
                isUserAuthenticated() ? <button className="auth-button" onClick={logOut} header>Log out</button>
                    : <button className="auth-button" onClick={showLoginForm}>Log in</button>
            }
            <UserForm closeModal={showLoginForm} changeUser={changeUser} active={isShowLoginForm} />
        </>
    );
}
