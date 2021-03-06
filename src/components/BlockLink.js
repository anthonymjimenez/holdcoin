import React  from 'react';
import { NavLink } from 'react-router-dom';

function BlockLink({crypto, averageCost, size}) {
  return (
    <>
    <NavLink to={{pathname: `/cryptos/${crypto.symbol}`}}>
        <p>{crypto.symbol} / Coins: {size} / Avg Price: {averageCost} </p> 
      </NavLink>
  
    </>
  );
}

export default BlockLink;
