import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { register } from "../../actions/auth-actions";
import { clearErrors } from "../../actions/error-actions";
import { PropTypes } from "prop-types";

class Register extends Component {
  state = { msg: null };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      error.id === "REGISTER_FAIL"
        ? this.setState({ msg: error.msg })
        : this.setState({ msg: null });
    }

    if (this.props.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4">
            <div className="card mx-auto mt-5">
              <div className="card-header">Register</div>
              <div className="card-body">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    admin: false,
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    const { name, email, password, admin } = values;
                    const newUser = { name, email, password, admin };
                    this.props.register(newUser);
                  }}
                  validationSchema={Yup.object().shape({
                    name: Yup.string()
                      .required()
                      .min(2, "Name must be at least 2 characters")
                      .max(255),
                    email: Yup.string().required().email().min(6).max(255),
                    password: Yup.string()
                      .required()
                      .min(6, "Password must be at least 6 characters")
                      .max(1024),
                  })}
                >
                  {(props) => {
                    const {
                      values,
                      touched,
                      errors,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                    } = props;
                    return (
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.name && touched.name && (
                            <div className="text-danger">{errors.name}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.email && touched.email && (
                            <div className="text-danger">{errors.email}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.password && touched.password && (
                            <div className="text-danger">{errors.password}</div>
                          )}
                        </div>
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            id="admin"
                            className="form-check-input"
                            checked={values.admin}
                            onChange={handleChange}
                          />
                          <label className="form-check-label">
                            Register as Admin (for demo purposes)
                          </label>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Register
                          </button>
                        </div>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
            {this.state.msg ? (
              <div className="alert alert-danger mt-3 text-center mx-auto">
                {this.state.msg}
              </div>
            ) : null}
            <p className="text-center m-5">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(Register);
