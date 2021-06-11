import * as React from "react";
import { Route, Redirect } from "react-router-dom";

export default function GuestOnlyRoute({ children, ...rest }) {
  return (
    <Route {...rest}>
      {!localStorage.getItem("auth") ? children : <Redirect to="/home" />}
    </Route>
  );
}
