import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChampPage from "./Components/ChampPage";
import App from "./Components/App";

const main = document.getElementById("root");
const root = ReactDom.createRoot(main);

root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/champDetails" element={<ChampPage />} />
    </Routes>
  </Router>
);
