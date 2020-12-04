import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CryptoCard from "./components/CryptoCard";
import Blockfolio from "./components/Blockfolio";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Ledger from "./components/Ledger";

import LandPage from "./LandPage";
import PrivateContainer from "./containers/PrivateContainer";
import { useAuth } from "./context/use-auth";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import UserInfo from './components/UserInfo'

import routes from "./routes";

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
    <Router>
      <div>
        {window.innerWidth > 991 ? <Sidebar routes={routes} /> : null}
        <Nav user={auth.user} />
        {/* <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button> */}
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
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
          <PrivateRoute path="/">
            <PrivateContainer />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
