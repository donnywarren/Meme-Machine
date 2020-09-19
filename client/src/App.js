import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import "./App.css";
import MainContainer from "./containers/MainContainer";
import LayoutWelcome from "./layouts/Layouts/LayoutWelcome";
import Login from "./screens/Login/LoginScreen";
import Registration from "./screens/Registration/RegistrationScreen";
import UserHomeScreen from "./screens/UserHome/UserHomeScreen";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) history.push("/");
    };

    handleVerify();
    // handleLogout() -- include this if you want to logout when the window closes (unmount)
  }, []);

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    !userData ? history.push("/") : history.push("/userhome");
  };

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    !userData ? history.push("/") : history.push("/userhome");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
    history.push("/");
  };

  return (
    <LayoutWelcome currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route path="/login">
          <Login loginSubmit={loginSubmit} />
        </Route>

        <Route path="/register">
          <Registration registerSubmit={registerSubmit} />
        </Route>

        <Route path="/main">
          <MainContainer currentUser={currentUser} component={MainContainer} />
        </Route>

        <Route path="/userhome">
          <UserHomeScreen currentUser={currentUser} />
        </Route>
      </Switch>
    </LayoutWelcome>
  );
}

export default App;
