import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  CarPage,
  CartPage,
  AdminPage,
  NewCarPage,
  EditCarPage,
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
          <Route path="/car" component={CarPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/admin" component={AdminPage} exact />
          <Route path="/admin/new" component={NewCarPage} />
          <Route path="/admin/:id" component={EditCarPage} />
        </Switch>
      </main>
    );
  }
}

export default App;
