/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { NavLink } from "react-router-dom";

// import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";

import logo from "../utils/img/reactlogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../utils/css/animate.min.css";
import "../utils/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "../utils/css/demo.css";

function Sidebar({routes}) {

  const activeRoute = (routeName) => {
    console.log(routeName);
    // console.log(window.location.state.from)
    return window.location.pathname === routeName ? "active-pro" : "?";
  }


  return (
    <div
      id="sidebar"
      className="sidebar"
      data-color={"black"}
      // data-image={this.props.image}
    >
      <div className="logo">
        <a
          href="https://www.creative-tim.com?ref=lbd-sidebar"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <img src={logo} alt="logo_image" />
          </div>
        </a>
        <NavLink
          to={{ pathname: `/` }}
          className="simple-text logo-normal"
        >
          HoldCoin
        </NavLink>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    "active "+ activeRoute(prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
