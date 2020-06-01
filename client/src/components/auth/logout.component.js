import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth-actions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoIosLogOut } from "react-icons/io";
import ReactTooltip from "react-tooltip";

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };
  render() {
    return (
      <Fragment>
        <Link
          onClick={this.props.logout}
          to=""
          className="nav-link ml-3"
          data-tip="Logout"
        >
          <ReactTooltip place="bottom" type="dark" effect="float" />
          <IoIosLogOut size={30} />
        </Link>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
