import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import CreateArt from "./components/CreateArt/CreateArt";
import Catalogue from "./components/Catalogue/Catalogue";

import { getAll } from "./services/artService";

function App() {
  const [paintings, setPaintings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAll().then((data) => setPaintings(data));
  }, []);

  const onCreateArt = async (artData) => {
    setPaintings((state) => [artData, ...state]);

    navigate("/catalog");
  };

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home paintings={paintings} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/create-art"
          element={<CreateArt onCreateArt={onCreateArt} />}
        />
        <Route path="/catalog" element={<Catalogue paintings={paintings} />} />
      </Routes>
    </div>
  );
}

export default App;
