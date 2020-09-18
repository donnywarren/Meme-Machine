import React, { useState } from "react";

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
      <h3>Register</h3>
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
          name="email"
          placeholder="email"
          type="email"
          value={email}
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
      <label>
        <input
          name="confirmpassword"
          placeholder="confirm password"
          type="password"
          value={confirmpassword}
          onChange={handleChange}
        ></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
