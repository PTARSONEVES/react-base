import React from "react";
import { Route, redirect as Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default function MyRoute({ component: Component, isClosed, ...rest}) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/', state: { prevPath: rest.location.pathname} }}
      />
    );
  }
  // eslint-disable-nest-line react/jsx-props-no-spreading
  return <Route { ...rest } component={<Component/>} />;
};

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
};
