import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const PrivateRoute: React.FC = ({ children, ...rest }) => {
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
