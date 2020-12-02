import { useAuth } from "../context/use-auth";
import { Route, Redirect } from "react-router-dom";
import { Fragment } from "react";
export default function PrivateRoute(props) {
    let auth = useAuth();
    console.log(auth.user)
    return (
      <Fragment>
          {
          auth.user ? (
            props.children
          ) : (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          )
        }
      </Fragment>
    );
  }