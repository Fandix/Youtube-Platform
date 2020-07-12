import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from "./Router";
import store from "./Redux/store";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Root = document.getElementById("root");


ReactDOM.render(
    <div>
        <Provider store={store}>
                <Router />
        </Provider>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </div>
,Root);