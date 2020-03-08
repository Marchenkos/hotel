import React from "react";

import HeaderContainer from "./containers/HeaderContainer";
// import Content from "./components/Content";
// import Room from "./components/Room";
import RoomCatalog from "./components/RoomCatalog";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <RoomCatalog />
            </div>
        );
    }
}
