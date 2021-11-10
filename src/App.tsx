import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/Auth/Login.page";
import SignUpPage from "./Pages/Auth/SignUp.page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        {/* <Route path="/"><></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
