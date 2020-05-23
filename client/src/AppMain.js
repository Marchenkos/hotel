import React from "react";

import HeaderContainer from "./containers/HeaderContainer";
import Main from "./components/Main";

export default class AppMain extends React.Component {
    render() {
        return (
            <>
                <HeaderContainer />
                <Main />
            </>
        );
    }
}
