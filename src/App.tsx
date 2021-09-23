import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./pages/global/GlobalStyles";
import Intro from "./pages/purple-shoes/Intro";
import Chat from "./pages/purple-shoes/chat";

function App() {
  return (
    // TODO:
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Intro} />;
        <Route path="/intro" exact component={Intro} />;
        <Route path="/chat" exact component={Chat} />;
      </Switch>
    </BrowserRouter>
  );
}

export default App;
