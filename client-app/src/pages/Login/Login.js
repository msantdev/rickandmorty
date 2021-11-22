import React from "react";
import { Link } from "react-router-dom";
import { useActions, useForm } from "../../hooks";
import { useSelector } from "react-redux";

import loginImage from "../../assets/login.png";

import "./Login.css";

function Login({ history }) {
  const { formData, handleInputChange } = useForm({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { errorLogin } = useSelector((state) => state.auth);

  const { login } = useActions();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password, history);
  };

  return (
    <div className="paper-login">
      <img alt="" src={loginImage} className="image-login" />
      <div className="form-container">
        <div className="block">
          <label className="label-login">User name</label>
          <input
            type="text"
            value={username}
            className="input"
            data-testid="username"
            name="username"
            onChange={handleInputChange}
            autoFocus
          />
        </div>
        <div className="block">
          <label className="label-login">Password</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={handleInputChange}
            name="password"
          />
        </div>
        <div className="error-container">
          <div className="error">
            {errorLogin && <div className="error-message">{errorLogin}</div>}
          </div>
        </div>
        <div className="button-container">
          <button className="login-btn" onClick={handleSubmit}>
            Log in
          </button>
          <div className="link-text">
            Do not have an account ? <Link to="/register"> Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
