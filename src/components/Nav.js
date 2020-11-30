import React from 'react';
import { Link } from "react-router-dom";
function Nav(props) {

  return (
  <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
              <Link to ='/blockfolio'>Blockfolio</Link>
          </li>
          <li>
            <a className="ui a" href='#' onClick={() => props.handleFormSwitch("signup")}>Sign Up</a> or 
            <a className="ui a" href='#' onClick={() => props.handleFormSwitch("login")}>Log In</a>
          </li>
        </ul>
      </nav>

  );
}

export default Nav;
