import React, { useState, useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

const App = () => {
  const [logged, setLogged] = useState(false);

  function handleLogin() {
    console.log("yeah");
    setLogged(!logged);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/home"
            element={<Home logged={logged} setLogged={handleLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
