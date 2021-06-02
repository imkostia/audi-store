import React from "react";
import { Route, Switch } from "react-router";
import {
  HomePage,
  CarPage,
  CartPage,
  AdminPage,
  NewCarPage,
  EditCarPage,
  NotFoundPage,
} from "../pages";
import Header from "../header";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/cart" component={CartPage} />
          <Route path="/cars/:id" component={CarPage} />
          <Route path="/admin" component={AdminPage} exact />
          <Route path="/admin/new" component={NewCarPage} />
          <Route path="/admin/:id" component={EditCarPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </main>
    );
  }
}

export default App;
