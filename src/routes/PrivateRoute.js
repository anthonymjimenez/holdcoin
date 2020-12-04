import { useAuth } from "../context/use-auth";
import { Route, Redirect } from "react-router-dom";
import React from 'react';

export default function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
  
    return (
      <Route
        {...rest}
        render={({ location }) =>
        auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/public",
                state: { from: location }
              }}
            />
            
          )
        
        }
      />
    );
  }