import React from "react"
import {Switch, Route} from "react-router-dom"
import Login from "./container/Login/Login"

const App = props => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  )
}

export default App
