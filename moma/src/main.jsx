import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./assets/fonts/Font.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
