import React, { useState } from "react";

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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.loginSubmit(formData);
      }}
    >
      <h3>Login</h3>
      <label>
        <input
          name="username"
          placeholder="username"
          type="text"
          value={username}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        <input
          name="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={handleChange}
        ></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
