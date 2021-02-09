import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
    const localToken = localStorage.getItem('jwtToken');
      // Set token to ls
      const query = new URLSearchParams(window.location.search);
      const token = query.get('token')

  return (
    <Route
      render={props =>
        localToken === token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
export default PrivateRoute;
