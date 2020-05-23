import React from "react";
import { BrowserRouter as RouterProvider, Switch, Route } from "react-router-dom";
import AppMain from "./AppMain";
import BookingContainer from "./containers/BookingContainer";

export default class App extends React.Component {
    render() {
        return (
            <RouterProvider>
                <Switch>
                    <Route exact path="/room/book/:id" component={BookingContainer} />
                    <Route path="/" component={AppMain} />
                </Switch>
            </RouterProvider>
        );
    }
}
