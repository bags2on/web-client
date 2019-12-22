import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./utils/routes";

const Login = lazy(() => import("./containers/Signin/Signin"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<span>S</span>}>
      <Switch>
        <Route path={routes.signin} component={Login} />
      </Switch>
    </Suspense>
  );
};

export default App;
