import React, {useState, useEffect} from "react";
import "./App.css";
import CryptoContainer from "./containers/CryptoContainer";
import UserContainer from "./containers/UserContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CryptoCard from "./components/CryptoCard";
import Blockfolio from "./components/Blockfolio";
import Nav from "./components/Nav";
import { sampleUserData, url, appendUserInfo } from "./utils/utils";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  let [cryptoData, setCryptoData] = useState([]);
  const [user, setUser] = useState({})
  const [form, setForm] = useState("signup")
    
  useEffect(() => {
    (async () => {
      const results = await fetch(url);
      const data = await results.json();
      //make fetch to user info don't set to hook, just send to appendUserInfo(, userData)
      setCryptoData(data);
      appendUserInfo(setCryptoData, sampleUserData);
      console.log(cryptoData)
    })();
  }, []);

  const handleLogin = (user) => {
    setUser(user)
    console.log(user)
  }

  const handleFormSwitch = (input) => {
    setForm(input)
  }

  // const handleAuthClick = () => {
  //   const token = localStorage.getItem("token")
  //   fetch(`http://localhost:3000/user_auth`, {
  //     headers: {
  //       "Authorization": `Bearer ${token}`
  //     }
  //   })
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }

  const renderForm = () => {
    switch(form){
      case "login":
        return <LoginForm handleLogin={handleLogin}/>
      default:
        return <SignupForm handleLogin={handleLogin}/>
    }
  }

  return (
    <Router>
      <div>
        <Nav handleFormSwitch={handleFormSwitch}/> 
        {renderForm()}
        {/* <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button> */}
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/cryptos/:id" component={CryptoCard} />
          <Route path="/blockfolio" component={Blockfolio} />
          <Route path="/">
            <UserContainer cryptos={cryptoData} />
            <CryptoContainer cryptos={cryptoData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
