import React from "react";
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from "react-router-dom";

import { useAppSelector } from "../hooks/useStore";

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAppSelector((state) => state.sessions);

  return (
    <ReactDOMRoute
      render={({ location }) => {
        return isPrivate === !!Object.keys(user).length ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/info",
              state: { from: location },
            }}
          />
        );
      }}
      {...rest}
    />
  );
};

export default Route;
