import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, useActions } from "../../hooks";
import { useSelector } from "react-redux";

import registerImg from "../../assets/register.png";

import "./Register.css";

function Register({ history }) {
  const [errors, setErrors] = useState(null);
  const { formData, handleInputChange } = useForm({
    username: "",
    password: "",
    repeatPassword: "",
  });
  const { register } = useActions();
  const { errorRegister } = useSelector((state) => state.auth);

  const { username, password, repeatPassword } = formData;

  const handleSubmit = (e) => {
    const valid = isValid();
    valid && register(username, password, history);
  };

  const isValid = () => {
    if (!username || !password || !repeatPassword) {
      setErrors("Please complete all the fields");
      return false;
    } else if (password !== repeatPassword) {
      setErrors("Password does not match");
      return false;
    } else if (password === repeatPassword) {
      if (password.length < 5) {
        setErrors("Password length should be greather than 5 characters");
        return false;
      }
      if (password.length > 10) {
        setErrors("Password length should not be greather than 10 characters");
        return false;
      }
      setErrors("");
      return true;
    }
  };

  return (
    <div className="paper-register">
      <img alt="login" src={registerImg} className="image-login" />
      <div className="form-container">
        <div className="block">
          <label className="label-login">Username</label>
          <input
            type="text"
            className="input"
            data-testid="textbox"
            name="username"
            value={username}
            autoFocus
            onChange={handleInputChange}
          />
        </div>
        <div className="block">
          <label className="label-login">Password</label>
          <input
            type="password"
            className="input"
            data-testid="textbox"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="block">
          <label className="label-login">Repeat Password</label>
          <input
            type="password"
            className="input"
            name="repeatPassword"
            onChange={handleInputChange}
            value={repeatPassword}
          />
        </div>
        <div className="error-container">
          {errors ? (
            <div className="error-message">{errors}</div>
          ) : errorRegister ? (
            <div className="error-message">{errorRegister}</div>
          ) : null}
        </div>

        <div className="button-container">
          <button className="login-btn" onClick={handleSubmit}>
            Register
          </button>
          <div className="link-text">
            Already have an account ? <Link to="/login"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
