import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import CarService from "./services/car-service";
import { CarServiceProvider } from "./components/car-service-context";

import store from "./store";

const carService = new CarService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <CarServiceProvider value={carService}>
          <Router>
            <App />
          </Router>
        </CarServiceProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
