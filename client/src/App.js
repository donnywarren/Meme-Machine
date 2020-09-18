import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import LayoutWelcome from "./layouts/Layouts/LayoutWelcome";
import Login from "./screens/Login/LoginScreen";
import Registration from "./screens/Registration/RegistrationScreen";

import { loginUser, registerUser } from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
  };

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
  };
  return (
    <LayoutWelcome>
      <Switch>
        <Route path="/login">
          <Login loginSubmit={loginSubmit} />
        </Route>

        <Route path="/register">
          <Registration registerSubmit={registerSubmit} />
        </Route>

        {/* <Route path="/" component={mainContainer} /> */}
      </Switch>
    </LayoutWelcome>
  );
}

export default App;
