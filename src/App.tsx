import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./Pages/Auth/Login.page";
import SignUpPage from "./Pages/Auth/SignUp.page";
import ResumeTemplatePage from "./ResumeTemplate.page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/edit-resume">
          <ResumeTemplatePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default React.memo(App);
