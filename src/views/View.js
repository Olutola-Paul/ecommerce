import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "../components/Home";
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

  return (
    <div>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/signin" component={Sign_In} />
        <Route path="/register" component={register} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default View;
