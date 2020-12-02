import { useAuth } from "../context/use-auth";
import { Route, Redirect } from "react-router-dom";
export default function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    // check for token to avoid re routing when not starting from land page
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
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