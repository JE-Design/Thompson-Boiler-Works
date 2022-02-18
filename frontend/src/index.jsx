import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import App from "./App";
import "i18n";
import "Styles/Fonts.scss";
import "Styles/index.scss";

dotenv.config();
ReactDOM.render(<App />, document.getElementById("root"));
