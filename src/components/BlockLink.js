import React  from 'react';
import { NavLink } from 'react-router-dom';
import { financial } from '../utils/utils'

function BlockLink({crypto, averageCost, size}) {
console.log(averageCost, size)
  return (
    <>
    <NavLink to={{pathname: `/cryptos/${crypto.symbol}`}}>
        <p>{crypto.symbol} / Coins: {size} / Avg Price: {averageCost} </p> 
      </NavLink>
  
    </>
  );
}

export default BlockLink;
