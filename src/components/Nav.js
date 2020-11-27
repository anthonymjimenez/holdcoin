import React from 'react';
import { Link } from "react-router-dom";
function Nav() {

  return (
  <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
              <Link to ='/blockfolio'>Blockfolio</Link>
          </li>
        </ul>
      </nav>

  );
}

export default Nav;
