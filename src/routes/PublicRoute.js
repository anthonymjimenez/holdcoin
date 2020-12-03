import { useAuth } from "../context/use-auth";
import { Route, Redirect } from "react-router-dom";
import React, { useEffect } from 'react';
export default function PublicRoute({ children, ...rest }) {
    let auth = useAuth()
    // check for token to avoid re routing when not starting from land page
    useEffect(() => {
      (() => {
    auth.signInFromToken() 
       })();
    }, []);
    return (
      <Route
        {...rest}
        render={({ location }) =>
        !auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
            
          )
        
        }
      />
    );
  }