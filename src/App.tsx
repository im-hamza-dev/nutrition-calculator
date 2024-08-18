import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Questionnaire from "./pages/questionnaire/questionnaire";
import Settings from "./pages/settings/settings";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Questionnaire />} />
          <Route path="/settings" element={<Settings />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
