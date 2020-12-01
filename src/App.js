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

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  let [cryptoData, setCryptoData] = useState([]);
  const [user, setUser] = useState(null);
  const [form, setForm] = useState("signup");

  useEffect(() => {
    (async () => {
      const results = await fetch(url);
      const data = await results.json();
      //make fetch to user info don't set to hook, just send to appendUserInfo(, userData)
      setCryptoData(data);
      appendUserInfo(setCryptoData, sampleUserData);
      console.log(cryptoData);
    })();
    handleAuthClick(localStorage.getItem("token"));
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

  const handleFormSwitch = (input) => {
    setForm(input);
  };

  const handleAuthClick = (token) => {
    if (!token) return console.log("sign up/in");
    fetch(`http://localhost:3000/user_auth/`, {
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
           { !user ?
            <LandPage handleLogIn={handleLogIn} handleSignUp={handleSignUp} />
            :
            <>
            <UserContainer cryptos={cryptoData} />
            <CryptoContainer cryptos={cryptoData} />
            </>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
