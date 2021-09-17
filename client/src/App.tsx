import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store";

import Routes from "./routes";

import "./styles/global.scss";

const App: React.FC = () => (
  <ReduxProvider store={store}>
    <Router>
      <Routes />
    </Router>
  </ReduxProvider>
);

export default App;
