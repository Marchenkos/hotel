import React from "react";

import HeaderContainer from "./containers/HeaderContainer";
import AuthContainer from "./containers/AuthContainer";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default class AppMain extends React.Component {
    render() {
        return (
            <>
                <HeaderContainer />
                <Main />
                <AuthContainer />
                <Footer />
            </>
        );
    }
}
