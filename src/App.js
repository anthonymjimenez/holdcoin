import React, {useState, useEffect} from "react";
import "./App.css";
import CryptoContainer from "./containers/CryptoContainer";
import UserContainer from "./containers/UserContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CryptoCard from "./components/CryptoCard";
import Blockfolio from "./components/Blockfolio";
import Nav from "./components/Nav";
import { sampleUserData, url, appendUserInfo } from "./utils/utils";

function App() {
  let [cryptoData, setCryptoData] = useState([]);
    
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



  return (
    <Router>
      <div>
        <Nav />
        
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
