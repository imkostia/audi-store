import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";

import store from "./store";

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Router history={history}>
          <App />
        </Router>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
