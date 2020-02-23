import React from "react";

import HeaderContainer from "./containers/HeaderContainer";
import Content from "./components/Content";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <Content />
            </div>
        );
    }
}
