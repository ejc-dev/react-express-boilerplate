import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../store/alerts/alertsAction";
import { register, clearErrors } from "../../store/auths/authsAction";
import PropTypes from "prop-types";

const Register = ({
  history,
  auths: { error, isAuthenticated },
  register,
  clearErrors,
  setAlert
}) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    password2: ""
  });
  const { firstName,
    lastName,
    userName, email, password, password2 } = user;
  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(
    () => {
      if (isAuthenticated) {
        history.push("/");
      }
      if (error) {
        setAlert(error, "danger");
        clearErrors();
      }
    }, // eslint-disable-next-line
    [error, isAuthenticated, history]
  );

  const onSubmit = e => {
    e.preventDefault();
    if (userName === '' || lastName === '' || firstName === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        firstName,
        lastName,
        userName,
        email,
        password
      });
    }
  };

  return (
    <div className="form-container mt-2">
      <form className="form p-2" onSubmit={onSubmit}>
        <h1>
          Account <span className="text-primary">Register</span>
        </h1>
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Last Name</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            className="form-control"
            type="text"
            name="userName"
            value={userName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="7"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

Register.propTypes = {
  auths: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auths: state.auths
});

export default connect(
  mapStateToProps,
  { setAlert, register, clearErrors }
)(Register);
