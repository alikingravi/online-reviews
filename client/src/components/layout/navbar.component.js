import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "../auth/logout.component";
import {
  MdDashboard,
  MdRateReview,
  MdShoppingCart,
  MdAddShoppingCart,
} from "react-icons/md";
import { IoIosLogIn, IoIosMan, IoIosStats } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import ReactTooltip from "react-tooltip";

class Navbar extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const { isAuthenticated, user } = this.props.auth;
    let admin = "";
    if (user && user.admin) {
      admin = (
        <sup>
          <span className="badge badge-warning admin-badge">Admin</span>
        </sup>
      );
    } else {
      admin = "";
    }

    const adminLinks = (
      <Fragment>
        <li className="nav-item">
          <NavLink
            to="/admin/user-list"
            className="nav-link ml-3"
            activeClassName="nav-link-active"
            data-tip="Users"
          >
            <ReactTooltip place="bottom" type="dark" effect="float" />
            <FiUsers size={30} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/product-list"
            className="nav-link ml-3"
            activeClassName="nav-link-active"
            data-tip="Products"
          >
            <ReactTooltip place="bottom" type="dark" effect="float" />
            <MdShoppingCart size={30} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/add-product"
            className="nav-link ml-3"
            activeClassName="nav-link-active"
            data-tip="Add New Product"
          >
            <ReactTooltip place="bottom" type="dark" effect="float" />
            <MdAddShoppingCart size={30} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/stats"
            className="nav-link ml-3"
            activeClassName="nav-link-active"
            data-tip="Stats"
          >
            <ReactTooltip place="bottom" type="dark" effect="float" />
            <IoIosStats size={30} />
          </NavLink>
        </li>
        <li>
          <div className="nav-vert-divider ml-3 d-none d-sm-block"></div>
        </li>
      </Fragment>
    );

    const authLinks = (
      <Fragment>
        <li className="nav-item">
          <span className="navbar-brand mr-3">
            <strong>{user ? `Welcome ${user.name}` : ""} </strong>
            {admin}
          </span>
        </li>
        {isAuthenticated && user.admin ? adminLinks : ""}
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className="nav-link ml-3"
            activeClassName="nav-link-active"
            data-tip="My Dashboard"
          >
            <ReactTooltip place="bottom" type="dark" effect="float" />
            <MdDashboard size={30} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/my-reviews"
            className="nav-link ml-3"
            activeClassName="nav-link-active"
            data-tip="My Reviews"
          >
            <ReactTooltip place="bottom" type="dark" effect="float" />
            <MdRateReview size={30} />
          </NavLink>
        </li>
        <li className="nav-item">
          <Logout />
        </li>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <li className="nav-item">
          <NavLink
            to="/login"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Login <IoIosLogIn className="nav-icon" size={30} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/register"
            className="nav-link ml-3"
            activeClassName="nav-link-active"
          >
            Register <IoIosMan className="nav-icon" size={30} />
          </NavLink>
        </li>
      </Fragment>
    );
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ isolation: "isolate" }}
              width="50pt"
              height="50pt"
              viewBox="0 0 50 50"
            >
              <defs>
                <clipPath id="_clipPath_6aO6r7RGg76AZhidmIPTdJ3VKDJRQFMi">
                  <path d="M0 0H50V50H0z"></path>
                </clipPath>
              </defs>
              <g
                style={{ isolation: "isolate" }}
                clipPath="url(#_clipPath_6aO6r7RGg76AZhidmIPTdJ3VKDJRQFMi)"
              >
                <path
                  fill="#FFC107"
                  fillRule="evenodd"
                  d="M25 .382l4.339 5.605 6.342-3.168 1.477 6.934 7.088-.103-1.676 6.888L49 19.522 44.5 25l4.5 5.478-6.43 2.984 1.676 6.887-7.088-.103-1.477 6.934-6.342-3.167L25 49.618l-4.339-5.605-6.342 3.167-1.477-6.934-7.088.103 1.676-6.887L1 30.478 5.5 25 1 19.522l6.43-2.984L5.754 9.65l7.088.103 1.477-6.934 6.342 3.168L25 .382z"
                ></path>
                <text
                  fill="#fff"
                  fontFamily="Roboto"
                  fontSize="36"
                  fontStyle="italic"
                  fontWeight="700"
                  transform="matrix(.249 0 0 .249 12.078 23.047)"
                >
                  Online
                </text>
                <text
                  fill="#fff"
                  fontFamily="Roboto"
                  fontSize="36"
                  fontStyle="italic"
                  fontWeight="700"
                  transform="matrix(.249 0 0 .249 8.356 33.561)"
                >
                  Reviews
                </text>
              </g>
            </svg>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
