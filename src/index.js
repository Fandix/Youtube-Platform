import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from "./Router";
import store from "./Redux/store";

const Root = document.getElementById("root");


ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
,Root);