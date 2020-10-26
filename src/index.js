import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <meta name="description" content="Galerie web d'Éric Fayolle" />
      </Helmet>
      <Routes />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
