import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import EditArt from "./components/EditArt/EditArt";
import CreateArt from "./components/CreateArt/CreateArt";
import Catalogue from "./components/Catalogue/Catalogue";

import { getAll, create, update } from "./services/artService";
import { createUser, login } from "./services/userService";
import ArtDetails from "./components/ArtDetails/ArtDetails";

function App() {
  const [paintings, setPaintings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAll().then((data) => setPaintings(data));
  }, []);

  const onRegisterHandler = async (values) => {
    const newUser = await createUser(values);

    navigate("/");
  };

  const onLoginSubmit = async (values) => {
    const token = await login(values);

    console.log(token);

    navigate("/");
  };

  const onCreateArt = async (artData) => {
    const newArtPiece = await create(artData);

    setPaintings((state) => [newArtPiece, ...state]);

    navigate("/catalog");
  };

  const onEditArt = async (artId, artData) => {
    const updatedArtPiece = await update(artId, artData);

    setPaintings((state) =>
      state.map((painting) =>
        painting._id === artId ? updatedArtPiece : painting
      )
    );

    navigate(`/catalog/${artId}`);
  };

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home paintings={paintings} />} />
        <Route
          path="/login"
          element={<Login onLoginSubmit={onLoginSubmit} />}
        />
        <Route
          path="/register"
          element={<Register onRegisterHandler={onRegisterHandler} />}
        />
        <Route
          path="/create-art"
          element={<CreateArt onCreateArt={onCreateArt} />}
        />
        <Route path="/catalog" element={<Catalogue paintings={paintings} />} />
        <Route path="/catalog/:artId" element={<ArtDetails />} />
        <Route
          path="/catalog/:artId/edit"
          element={<EditArt onEditArt={onEditArt} />}
        />
      </Routes>
    </div>
  );
}

export default App;
