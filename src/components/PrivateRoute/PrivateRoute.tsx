import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const PrivateRoute = ({ children, ...rest }: RouteProps ) => {
  const auth = useAuth();

  return(
    <Route 
      {...rest}
      render={ ({ location }) => 
          auth.user?.authenticated 
            ? ( children ) 
            : ( <Redirect to={{ pathname: "/signup", state: { from: location } }}/> )}
    />
  );
}

export { PrivateRoute };
