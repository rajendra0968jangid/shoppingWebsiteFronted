import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Carsouel from "./Components/Carsouel";
import Card from "./Components/Card";
import Fotter from "./Components/Fotter";
import Signup from "./Components/Signup";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import ItemsForm from "./Components/ItemsForm";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/carsouel" element={<Carsouel />} />
          <Route path="/fotter" element={<Fotter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/itemform" element={<ItemsForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
