import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Description from "./pages/Description";

function App() {
  const { search, pathname } = useLocation();
  return (
    <>
      {pathname != "/" && search.length > 0}
      <div>
        <div className="flex justify-center font-semibold cursor-pointer bg-gray-300">
          Go to Home
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/description/id?" element={<Description />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
