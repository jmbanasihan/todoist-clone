import React from "react";

//components
import { Button } from "../../components";

//hooks
import useSignup from "./signup.hooks";

//styles
import "./signup.styles.scss";

const Signup = (props) => {
  const {} = useSignup(props);

  return (
    <div className="signup d-flex justify-content-center">
      <div className="signup__wrapper d-flex flex-column">
        <div className="signup__logo d-flex justify-content-start align-items-center">
          <img src="/todoist-logo.png" alt="todoist" /> <span>clone</span>
        </div>
        <div className="signup__content d-flex flex-column">
          <span className="signup__title">Sign up</span>
          <div className="signup__input-group d-flex flex-column">
            <div className="signup__input d-flex flex-column">
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="signup__input d-flex flex-column">
              <label for="password">Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <Button label="Sign up with Email" />

            <div className="d-flex justify-content-center">
              <span className="signup__go-to-login">
                Already signed up? <span>Go to login</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="signup__image d-none d-lg-flex justify-content-center align-items-center">
        <img src="/login-img.png" alt="todoist" />
      </div>
    </div>
  );
};

export default Signup;
