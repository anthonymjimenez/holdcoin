import React, { useState, useEffect } from "react";
import "./App.css";
import CryptoContainer from "./containers/CryptoContainer";
import UserContainer from "./containers/UserContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CryptoCard from "./components/CryptoCard";
import Blockfolio from "./components/Blockfolio";
import Nav from "./components/Nav";
import LandPage from "./LandPage";
import {
  sampleUserData,
  url,
  appendUserInfo,
  getUserFromToken,
} from "./utils/utils";

// need to figure out auth routes and create a new component to house App.js, if the route to app.js only fires when
// token is accepted then I can useEffect to grab userData and append to to the crypto

function App() {
  let [cryptoData, setCryptoData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const results = await fetch(url);
      const data = await results.json();
      //make fetch to user info don't set to hook, just send to appendUserInfo(, userData)
      setCryptoData(data);
      appendUserInfo(setCryptoData, sampleUserData);
      console.log(cryptoData);
    })();
    const token = localStorage.getItem("token"); // set user with token if(token & user=dne) <- that means token was set and page has been reset, in that case use token to fetch user
    // use auth routes to restrict all routes before token is set, then use token to render user
  
    if (token) {
      fetch(`http://localhost:3000/api/v1/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
        });
    }
  }, []);

  const handleSignUp = (state) => {
    fetch(`http://localhost:3000/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: state }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.jwt);
        setUser(data.user);
      })
      .catch(console.error);
  };

  const handleLogIn = (state) => {
    fetch(`http://localhost:3000/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: state }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.jwt);
        setUser(data.user);
      })
      .catch(console.error);
  };

  const handleAuthClick = (token) => {
    if (!token) return console.log("sign up/in");
    fetch(`http://localhost:3000/api/v1/user_auth`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then(setUser);
  };

  return (
    <Router>
      <div>
        {console.log(user)}
        <Nav />

        {/* <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button> */}
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/cryptos/:id" component={CryptoCard} />
          <Route path="/blockfolio" component={Blockfolio} />
          <Route path="/">
            {!user ? (
              <LandPage handleLogIn={handleLogIn} handleSignUp={handleSignUp} />
            ) : (
              <>
                <UserContainer cryptos={cryptoData} />
                <CryptoContainer cryptos={cryptoData} />
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
