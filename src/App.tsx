import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Questionnaire from "./pages/questionnaire/questionnaire";
import Settings from "./pages/settings/settings";
import QuestionProvider from "./context/questionsProvider";

const App = () => {
  return (
    <div className="App">
      <QuestionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Questionnaire />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Routes>
        </BrowserRouter>
      </QuestionProvider>
    </div>
  );
};

export default App;
