import * as React from 'react'
import { Route, Redirect } from "react-router-dom";
// import { useSelector } from 'react-redux';

const GuardRoute = ({ children, ...rest }) => {
  // let { role } = useSelector(state => state.auth);

  let token = true

  return <Route {...rest}>
    {token ? children : <Redirect to="/login" />}
  </Route>
};

export default GuardRoute;
