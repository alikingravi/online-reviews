import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { login } from "../../actions/auth-actions";
import { clearErrors } from "../../actions/error-actions";

class Login extends Component {
  state = { msg: null };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      error.id === "LOGIN_FAIL"
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
              <div className="card-header">Login</div>
              <div className="card-body">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    const { email, password } = values;
                    const user = { email, password };
                    this.props.login(user);
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().required().email().min(6).max(255),
                    password: Yup.string().required(),
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
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Login
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
              Don't have an account yet? <Link to="/register">Register</Link>
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

export default connect(mapStateToProps, { login, clearErrors })(Login);
