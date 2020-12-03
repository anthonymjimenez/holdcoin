import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
function Nav({user}) {
  
  return (
    <nav>
        <ul>
          <li>
            <Link to="/cryptos">Home</Link>
          </li>
          <li>
              <Link to ='/blockfolio'>Blockfolio</Link>
          </li>
          { user &&
          <li>
            Username: {user.username}
          </li>}
          { user && 
          <li>
            Balance: {user.balance}
          </li>}
        </ul>
    </nav>

  );
}

export default Nav;
