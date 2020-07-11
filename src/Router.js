import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import FetchYoutubeSponse from "./Container Components/MainPage/FetchYoutubeResponse";
import VideoMain from "./Presentational Components/VideoDetail/Main"
import FetchCollectResponse from "./Container Components/Collect/FetchCollectResponse"

const Routes = withRouter(({ location }) => {
    return (
        <Switch>
            <Route path="/" exact component={FetchYoutubeSponse} />
            <Route path="/video/:id" exact component={VideoMain} />
            <Route path="/collect" exact component={FetchCollectResponse} />
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