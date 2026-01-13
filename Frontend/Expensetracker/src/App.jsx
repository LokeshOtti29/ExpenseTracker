import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import AddExpense from "./Components/AddExpense";
import Updateexpense from "./Components/Updateexpense";
import Expenselist from "./Components/Expenselist";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home/addExpense" element={<AddExpense />} />
        <Route path="/Home/Expenselist" element={<Expenselist />} />
        <Route path="/Home/UpdateExpense" element={<Updateexpense />} />
      </Routes>
    </>
  );
}

export default App;
