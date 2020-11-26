import React  from 'react';
import CryptoCard from "../components/CryptoCard";
import { NavLink } from 'react-router-dom';

function CryptoLink({crypto}) {
// take a prop isOwnedByUser 
// if true then append the crypto to include info hold goal, stop limit etc
// use bool to conditionally render 
  
  return (
    <>
    <NavLink to={{pathname: `/cryptos/${crypto.symbol}`, cryptoProps: crypto}}>
        <p>{crypto.symbol}</p>
      </NavLink>
   
    </>
  );
}

export default CryptoLink;
