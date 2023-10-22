import React from "react";

//components
import { Button } from "../../components";

//hooks
import useLogin from "./login.hooks";

//styles
import "./login.styles.scss";

const Login = (props) => {
  const {} = useLogin(props);

  return (
    <div className="login d-flex justify-content-center">
      <div className="login__wrapper d-flex flex-column">
        <div className="login__logo d-flex justify-content-start align-items-center">
          <img src="/todoist-logo.png" alt="todoist" />
          <span>clone</span>
        </div>
        <div className="login__content d-flex flex-column">
          <span className="login__title">Log in</span>
          <div className="login__input-group d-flex flex-column">
            <div className="login__input d-flex flex-column">
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="login__input d-flex flex-column">
              <label for="password">Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <Button label="Log in" />
            <span className="login__forgot-password">
              Forgot your password?
            </span>
            <div className="d-flex justify-content-center">
              <span className="login__create-account">
                Don't have an account? <span>Sign up</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="login__image d-none d-lg-flex justify-content-center align-items-center">
        <img src="/login-img.png" alt="todoist" />
      </div>
    </div>
  );
};

export default Login;
