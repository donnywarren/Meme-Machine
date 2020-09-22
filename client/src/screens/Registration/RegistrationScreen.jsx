import React, { useState } from "react";
import "./RegistrationScreen.css";

export default function Registration(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { username, password, email, confirmpassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="background-guy">
      <div className="register-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (password === confirmpassword) {
              props.registerSubmit(formData);
            } else {
              alert("Your password and confirmation do not match");
            }
          }}
        >
          <div className="register-top-inputs">
            <label>
              <input
                className="register-input"
                name="username"
                placeholder="username"
                type="text"
                value={username}
                onChange={handleChange}
              ></input>
            </label>
            <label>
              <input
                className="register-input"
                name="email"
                placeholder="email"
                type="email"
                value={email}
                onChange={handleChange}
              ></input>
            </label>
          </div>

          <div className="register-bottom-inputs">
            <label>
              <input
                className="register-input"
                name="password"
                placeholder="password"
                type="password"
                value={password}
                onChange={handleChange}
              ></input>
            </label>
            <label>
              <input
                className="register-input"
                name="confirmpassword"
                placeholder="confirm password"
                type="password"
                value={confirmpassword}
                onChange={handleChange}
              ></input>
            </label>
          </div>

          <button className="register-btn">Submit</button>
          <h3>REGISTER</h3>
        </form>
      </div>
    </div>
  );
}
