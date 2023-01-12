import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Views from "./views";
import "./global.css";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Views />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
