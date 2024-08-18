import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Questionnaire from "./pages/questionnaire/questionnaire";
import Settings from "./pages/settings/settings";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Questionnaire} exact />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default App;
