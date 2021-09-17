import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import { Home } from "../pages/Home/Home";
import { Info } from "../pages/Info/Info";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/info" exact component={Info} isPrivate />
  </Switch>
);

export default Routes;
