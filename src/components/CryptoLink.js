import React  from 'react';
import { NavLink } from 'react-router-dom';
import { financial } from '../utils/utils'

function CryptoLink({crypto, user}) {

  return (
    <>
    <NavLink to={{pathname: `/cryptos/${crypto.symbol}`}}>
        <p>{crypto.symbol} / Price: {financial(crypto.price)}</p> 
      </NavLink>
  
    </>
  );
}

export default CryptoLink;
