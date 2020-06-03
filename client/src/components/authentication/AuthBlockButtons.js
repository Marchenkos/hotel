import React, { useEffect, useState, useCallback } from "react";
import cookie from "react-cookies";

import "../../style/auth-block.less";

export default function AuthBlockButtons({ currentUser, setShowAuthForm, showAuthForm, onChangeUser }) {
    const showLoginForm = useCallback(() => {
        setShowAuthForm(!showAuthForm);
    }, [showAuthForm]);

    const logOut = () => {
        cookie.remove("jwtToken");
        onChangeUser(null, null);
    };

    return (
        <>
            {
                currentUser ? <button className="auth-button" onClick={logOut}>Log out</button>
                    : <button className="auth-button" onClick={showLoginForm}>Log in</button>
            }
        </>
    );
}
