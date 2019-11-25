import React from "react"
import ReactDOM from "react-dom"
import {Router} from "react-router-dom"
import App from "./App"
import history from "./utils/history"

const application = (
  <Router history={history}>
    <App />
  </Router>
)

ReactDOM.render(application, document.querySelector("#root"))
