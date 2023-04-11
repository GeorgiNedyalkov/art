import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import EditArt from "./components/EditArt/EditArt";
import CreateArt from "./components/CreateArt/CreateArt";
import Catalogue from "./components/Catalogue/Catalogue";
import ArtDetails from "./components/ArtDetails/ArtDetails";

import { artServiceFactory } from "./services/artService";
import { createUser, login } from "./services/userService";

function App() {
  const navigate = useNavigate();
  const [paintings, setPaintings] = useState([]);
  const artService = artServiceFactory();

  useEffect(() => {
    artService.getAll().then((data) => setPaintings(data));
  }, []);

  const onCreateArt = async (artData) => {
    const newArtPiece = await artService.create(artData);

    setPaintings((state) => [newArtPiece, ...state]);

    navigate("/catalog");
  };

  const onEditArt = async (values) => {
    const updatedArtPiece = await artService.edit(values._id, values);

    setPaintings((state) =>
      state.map((painting) =>
        painting._id === values._id ? updatedArtPiece : painting
      )
    );

    navigate(`/catalog/${values._id}`);
  };

  const onRegisterHandler = async (values) => {
    const newUser = await createUser(values);

    navigate("/");
  };

  const onLoginSubmit = async (values) => {
    const token = await login(values);

    // console.log(token);

    navigate("/");
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
          element={<EditArt onEditArtSubmit={onEditArt} />}
        />
      </Routes>
    </div>
  );
}

export default App;
