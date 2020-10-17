import React, { useEffect, useState, createRef } from "react";
import "./LoginScreen.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const focusInput = createRef();

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  return (
    <div className="background-guy">
      <div className="login-container">
        <form
          className="login-form"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            props.loginSubmit(formData);
          }}
        >
          <label>
            <input
              ref={focusInput}
              className="login-input"
              name="username"
              placeholder="username"
              type="text"
              value={username}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            <input
              className="login-input"
              name="password"
              placeholder="password"
              type="password"
              value={password}
              onChange={handleChange}
            ></input>
          </label>
          <button className="btn login-btn login-submit">Submit</button>

          <h3 className="login-word">LOGIN</h3>
        </form>
      </div>
    </div>
  );
}
