import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import LayoutWelcome from "./layouts/Layouts/LayoutWelcome";
import Login from "./screens/Login/Login";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const loginSubmit = () => {};

  return (
    <LayoutWelcome>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        {/* <Route path="/register">
          <MyComponent handleSubmit={handleSubmit} />
        </Route>

        <Route path="/" component={mainContainer} /> */}
      </Switch>
    </LayoutWelcome>
  );
}

export default App;
