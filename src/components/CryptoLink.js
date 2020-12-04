import React  from 'react';
import { NavLink } from 'react-router-dom';
import { financial } from '../utils/utils'

function CryptoLink({crypto, user}) {

  return (
    <>
    <tr>
      <td><NavLink to={{pathname: `/cryptos/${crypto.symbol}`}}>
          <p>{crypto.symbol}</p> 
        </NavLink></td>
      <td className="text-center">${financial(crypto.price)}</td>
    </tr>
    </>
  );
}

export default CryptoLink;
