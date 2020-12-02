import React  from 'react';
import CryptoCard from "../components/CryptoCard";
import { NavLink } from 'react-router-dom';

function CryptoLink({crypto, user}) {

  return (
    <>
    <NavLink to={{pathname: `/cryptos/${crypto.symbol}`, cryptoProps: crypto, user: user}}>
        <p>{crypto.symbol}</p>
      </NavLink>
  
    </>
  );
}

export default CryptoLink;
