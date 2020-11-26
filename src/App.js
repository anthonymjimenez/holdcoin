import React from 'react';
import './App.css';
import CryptoContainer from './containers/CryptoContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CryptoCard from './components/CryptoCard'; 

function App() {
  
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/cryptos/:id" component={CryptoCard} />
        <Route path="/">
          <CryptoContainer/>
        </Route>
      </Switch>
      </div>
  </Router>
);
  }

export default App;
