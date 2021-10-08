import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Home from "../components/Home";
import Product from "../components/Product";
import Register from "../components/Register";
import SignIn from "../components/SignIn";

function View() {
  const HomePage = () => {
    return <Home />;
  };
  const Sign_In = () => {
    return <SignIn />;
  };
  const register = () => {
    return <Register />;
  };

  const product = () => {
    return (
      <div>
        <Header1 />
        <Header2 />
        <Product />
      </div>
    );
  };

  return (
    <div>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/signin" component={Sign_In} />
        <Route path="/register" component={register} />
        <Route path="/product" component={product} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default View;
