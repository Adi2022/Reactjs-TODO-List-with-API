import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import SingleTodo from "../pages/SingleTodo";

const Routing = () => {
  return (
    <div className="text-center">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/singleTodo/:id" element={<SingleTodo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Routing;
