import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import FetchYoutubeSponse from "./Container Components/MainPage/FetchYoutubeResponse";

const Routes = withRouter(({ location }) => {
    return (
        <Switch>
            <Route path="/" exact component={FetchYoutubeSponse} />
            {/* <Route path="/collect" exact component={} /> */}
        </Switch>
    )
});

const Router = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
};

export default Router;