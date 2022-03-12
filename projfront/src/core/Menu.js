import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

import Base from "../core/Base";
import logo from './wfglogo.jpg'

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark w3-top">
    <li >
        <img src={logo} style={{width:"110px",borderRadius:"5%",marginLeft:"5px",marginTop:"2px",marginBottom:"2px"}}/>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
        <i class="fa fa-fw fa-home"></i> 
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          <i class="fa fa-shopping-cart"></i>
          Cart
        </Link>
      </li>
      {isAutheticated() && isAutheticated().user.role === 0 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            U. Dashboard
          </Link>
        </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            A. Dashboard
          </Link>
        </li>
        
      )}
      {!isAutheticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
              <i class="fa fa-user-plus"></i>
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
              <i class="fa fa-fw fa-user"></i>
              Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAutheticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            Signout
          </span>
        </li> 
      )}
      <li className="nav-item">
        <Link className="nav-link" to="/About">
        <i class="fas fa-user-friends"></i>
          About Us
        </Link>
      </li>
       </ul>
  </div>
  
);
export default withRouter(Menu);
