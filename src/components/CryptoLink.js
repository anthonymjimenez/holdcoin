import React  from 'react';
import CryptoCard from "../components/CryptoCard";
import { NavLink } from 'react-router-dom';

function CryptoLink({crypto}) {

  return (
    <>
    <NavLink to={{pathname: `/cryptos/${crypto.symbol}`, cryptoProps: crypto}}>
        <p>{crypto.symbol}</p>
      </NavLink>
   
    </>
  );
}

export default CryptoLink;
