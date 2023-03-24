import Home from "./components/Home/Home";
import CreateArt from "./components/CreateArt/CreateArt";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const baseUrl = "http://localhost:3030/jsonwebstore";

function App() {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    fetch("./paintings.json")
      .then((response) => response.json())
      .then((data) => setPaintings(data));
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home paintings={paintings} />} />
        <Route path="/create-art" element={<CreateArt />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
