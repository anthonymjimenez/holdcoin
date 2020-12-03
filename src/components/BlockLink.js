import React  from 'react';
import { NavLink } from 'react-router-dom';
import { financial } from '../utils/utils'

function BlockLink({crypto}) {

  return (
    <>
    <NavLink to={{pathname: `/cryptos/${crypto.symbol}`}}>
        <p>{crypto.symbol} / Coins: crypto.size / Avg Price: crypto.averagePrice </p> 
      </NavLink>
  
    </>
  );
}

export default BlockLink;
