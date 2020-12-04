import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {financial} from "../utils/utils";

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
        </ul>
    </nav>

  );
}

export default Nav;
