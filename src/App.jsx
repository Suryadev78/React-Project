import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Description from "./pages/Description";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/description/id?" element={<Description />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
