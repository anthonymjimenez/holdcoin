import React, { useEffect, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CryptoCard from "./components/CryptoCard";
import Blockfolio from "./components/Blockfolio";
import Nav from "./components/Nav";
import Ledger from "./components/Ledger";

import LandPage from "./LandPage";
import PrivateContainer from "./containers/PrivateContainer";
import { useAuth } from "./context/use-auth";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import UserInfo from './components/UserInfo';
import SuccessPage from "./components/SuccessPage";
import Cancel from "./components/Cancel"


// need to figure out auth routes and create a new component to house App.js, if the route to app.js only fires when
// token is accepted then I can useEffect to grab userData and append to to the crypto

function App() {
  const auth = useAuth();
  useEffect(() => {
    (() => {
      auth.signInFromToken();
      console.log(auth.user);
    })();
  }, []);

  return (
    <div>
      <Router>
      
        <Nav user={auth.user}/>
        {/* <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button> */}
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute path="/cryptos/:id">
            <CryptoCard />
          </PrivateRoute>
          <PrivateRoute path="/blockfolio">
            <Blockfolio />
          </PrivateRoute>
          <PublicRoute path="/public">
            <LandPage />
          </PublicRoute>
          <PrivateRoute path="/userinfo">
            <UserInfo />
          </PrivateRoute>
          <PrivateRoute path="/ledger">
            <Ledger />
          </PrivateRoute>
          <PrivateRoute path="/success">
            <SuccessPage />
          </PrivateRoute>
          <PrivateRoute path="/cancel">
            <Cancel />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <PrivateContainer />
          </PrivateRoute>
        </Switch>
        </Suspense>
      
      </Router>
    </div>
  );
}

export default App;
