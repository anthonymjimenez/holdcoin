import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProvideAuth } from "./context/use-auth";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
   <Router> <ProvideAuth> <App /> </ProvideAuth>  </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

