import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
          {user && <li>
          <NavLink to={{ pathname: `/userinfo` }}>
            Account Information
          </NavLink>
          </li>}
          
        </ul>
    </nav>

  );
}

export default Nav;
