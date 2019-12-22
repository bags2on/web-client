import React from "react";
import { Redirect, Route } from "react-router-dom";
import routes from "../utils/routes";

interface PrivateRouteProps {
  isAuth: boolean;
  component: React.FC<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuth,
  component: Component,
  ...otherProps
}) => {
  return (
    <Route
      {...otherProps}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to={routes.signin} />
      }
    />
  );
};

export default PrivateRoute;
