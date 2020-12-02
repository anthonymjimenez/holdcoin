import React from 'react';
import { Link } from "react-router-dom";
function Nav({user}) {

  return (
  <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
              <Link to ='/blockfolio'>Blockfolio</Link>
          </li>
          { user ? 
          <li>
            Username: {user.username}
          </li> : null}
          { user ? 
          <li>
            Balance: {user.balance}
          </li> : null}
          <li>
              <Link to ='/logout'>Logout</Link>
          </li>
        </ul>
      </nav>

  );
}

export default Nav;
