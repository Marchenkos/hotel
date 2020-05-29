import React, { useEffect, useState, useCallback } from "react";
import cookie from "react-cookies";

import "../../style/auth-block.less";

export default function AuthBlockButtons({ currentUser, setShowAuthForm, showAuthForm, onChangeUser }) {
    const [jwt, setJWT] = useState(null);

    useEffect(() => {
        const jwtToken = cookie.load("jwtToken");

        if (jwtToken) {
            setJWT(jwtToken);
        }
    }, [currentUser]);

    const showLoginForm = useCallback(() => {
        setShowAuthForm(!showAuthForm);
    }, [showAuthForm]);

    const isUserAuthenticated = () => {
        return !!jwt;
    };

    const logOut = useCallback(() => {
        cookie.remove("jwtToken");

        onChangeUser(null, null);

        setJWT(null);
    }, [jwt]);

    return (
        <>
            {
                isUserAuthenticated() ? <button className="auth-button" onClick={logOut}>Log out</button>
                    : <button className="auth-button" onClick={showLoginForm}>Log in</button>
            }
        </>
    );
}
