import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./pages/global/GlobalStyles";
import Intro from "./pages/purple-shoes/Intro";
import Chat from "./pages/purple-shoes/chat";
import Register from "./pages/purple-shoes/register";
import Login from "./pages/purple-shoes/login";

function App() {
  return (
    // TODO:
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Intro} />;
        <Route path="/intro" exact component={Intro} />;
        <Route path="/chat" exact component={Chat} />;
        <Route path="/register" exact component={Register} />;
        <Route path="/login" exact component={Login} />;
      </Switch>
    </BrowserRouter>
  );
}

export default App;
