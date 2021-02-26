
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
 const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);
 const  {rule }=user;
  if (!isAuth || (rule !== 'admin')) {
    return <Redirect to="/" />;
  }                                    // path="/" render="" exact
  return <Route component={Component} {...rest} />;
};

  
export default PrivateRouteAdmin;