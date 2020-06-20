import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import "./style.css"
import {BrowserRouter as Router} from "react-router-dom"
import {ContextJava} from "./Context"

ReactDOM.render(<ContextJava><Router><App/>
</Router></ContextJava>
    ,document.getElementById("root"));