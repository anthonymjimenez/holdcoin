import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CryptoCard from "./components/CryptoCard";
import Blockfolio from "./components/Blockfolio";
import Nav from "./components/Nav";
import LandPage from "./LandPage";
import PrivateContainer from "./containers/PrivateContainer";
import { useAuth } from "./context/use-auth";
import { signInUser } from "./utils/utils";
import PrivateRoute from "./routes/PrivateRoute";

// need to figure out auth routes and create a new component to house App.js, if the route to app.js only fires when
// token is accepted then I can useEffect to grab userData and append to to the crypto

function App() {
  const auth = useAuth();

  return (
    <Router>
      <div>
        <Nav />
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
          <PrivateRoute path="/cryptos">
            <PrivateContainer />
          </PrivateRoute>
          <Route path="/">
            <LandPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
