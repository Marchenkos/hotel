import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Content from "./Content";
import RoomContainer from "../containers/RoomContainer";
import RoomsCatalogContainer from "../containers/RoomsCatalogContainer";
import BookingContainer from "../containers/BookingContainer";
import CommentComponent from "../containers/CommentComponent";
import Contacts from "./Contacts";
import Services from "./Services";

import GalleryScreen from "./GalleryScreen";

import "../style/menu-container.less";

export default function Main() {
    useEffect(() => {
        window.scrollTo(window.pageXOffset, 0);
    });

    return (
        <>
            <Switch>
                <Route exact path="/" component={Content} />
                <Route path="/hotels" component={Content} />
                <Route path="/contacts" component={Contacts} />
                <Route exact path="/rooms" component={RoomsCatalogContainer} />
                <Route exact path="/cart-room" component={RoomContainer} />
                <Route path="/room/book" component={BookingContainer} />
                <Route exact path="/gallery" component={GalleryScreen} />
                <Route path="/reviews" component={CommentComponent} />
                <Route path="/services" component={Services} />
            </Switch>
        </>
    );
}
