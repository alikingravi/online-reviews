import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  state = {};
  render() {
    const userCta = this.props.isAuthenticated ? (
      <div className="text-center">
        <Link className="btn btn-warning btn-lg m-2 text-light" to="/dashboard">
          Go to Dashboard
        </Link>
      </div>
    ) : (
      <div className="text-center">
        <Link
          to="/login"
          className="btn btn-warning btn-lg m-2 text-light login-btn"
          href="#"
          role="button"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="btn btn-warning btn-lg text-light register-btn"
          href="#"
          role="button"
        >
          Register
        </Link>
      </div>
    );
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <h1 className="display-4">Welcome to Online Reviews!</h1>
          <p className="lead">
            Please login to your account or register for a new one. Once logged
            in you can start reviewing our products!
          </p>
          <hr className="my-4" />
          <p>Please select what you would like to do.</p>
          {userCta}
        </div>
        <div className="row">
          <div className="col-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ isolation: "isolate" }}
              viewBox="0 0 800 200"
            >
              <defs>
                <clipPath id="_clipPath_J2deEGsrAwCwQWLb78tuNYr4FZu98qVL">
                  <path d="M0 0H800V200H0z"></path>
                </clipPath>
              </defs>
              <g
                fillRule="evenodd"
                clipPath="url(#_clipPath_J2deEGsrAwCwQWLb78tuNYr4FZu98qVL)"
              >
                <path
                  fill="#FFC107"
                  d="M325.899 64.221l11.537 23.677 26.082 3.656-18.952 18.289 4.582 25.936-23.249-12.373-23.251 12.373 4.582-25.936-18.952-18.289 26.083-3.656 11.538-23.677zM405.027 38.381l11.537 23.676 26.082 3.657-18.952 18.289 4.582 25.936-23.249-12.373-23.251 12.373 4.582-25.936-18.952-18.289 26.083-3.657 11.538-23.676z"
                ></path>
                <path
                  fill="#C3CFD9"
                  d="M486.204 64.221l11.537 23.677 26.082 3.656-18.952 18.289 4.582 25.936-23.249-12.373-23.251 12.373 4.582-25.936-18.952-18.289 26.083-3.656 11.538-23.677zM567.381 90.061l11.538 23.677L605 117.394l-18.952 18.289 4.582 25.936-23.249-12.373-23.251 12.373 4.582-25.936-18.952-18.289 26.083-3.656 11.538-23.677z"
                ></path>
                <path
                  fill="#FFC107"
                  d="M246.621 90.061l11.537 23.677 26.082 3.656-18.952 18.289 4.582 25.936-23.249-12.373-23.251 12.373 4.582-25.936L209 117.394l26.083-3.656 11.538-23.677z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Home);
