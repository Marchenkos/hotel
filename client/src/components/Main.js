import React from "react";
import { Switch, Route } from "react-router-dom";

import Content from "./Content";
import RoomContainer from "../containers/RoomContainer";
import RoomCatalog from "./RoomCatalog";
import BookingField from "./bookFields/BookingField";
import CommentList from "./comments/CommentList";
import Services from "./Services";
import GalleryScreen from "./GalleryScreen";

import "../style/menu-container.less";

export default function Main() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Content} />
                <Route path="/hotels" component={Content} />
                <Route exact path="/rooms" component={RoomCatalog} />
                <Route exact path="/room/:id" component={RoomContainer} />
                <Route path="/room/book/:id" component={BookingField} />
                <Route exact path="/gallery" component={GalleryScreen} />
                <Route path="/reviews" component={CommentList} />
                <Route path="/services" component={Services} />
            </Switch>
        </>
    );
}
