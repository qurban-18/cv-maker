import React from "react";
import "./app.css";
// import ShowCV from "./components/cv/showcv";
// import CV_template2 from "./components/cv_2/CV_template2";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Create from "./pages/Create";
import Sreach from "./pages/Sreach";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/search">
          <Sreach />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
