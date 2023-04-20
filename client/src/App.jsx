import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import EditArt from "./components/EditArt/EditArt";
import CreateArt from "./components/CreateArt/CreateArt";
import Catalogue from "./components/Catalogue/Catalogue";
import ArtDetails from "./components/ArtDetails/ArtDetails";

import { AuthProvider } from "./context/AuthContext";
import { artServiceFactory } from "./services/artService";
import Artist from "./components/ArtistList/Artist/Artist";

function App() {
  const navigate = useNavigate();
  const [paintings, setPaintings] = useState([]);
  const [artists, setArtists] = useState([]);
  const artService = artServiceFactory();

  useEffect(() => {
    Promise.all([
      artService.getAll().then((data) => setPaintings(data)),
      fetch("/artists.json")
        .then((response) => response.json())
        .then((data) => setArtists(data)),
    ]);
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

  const onDeleteArt = async (artId) => {
    await artService.delete(artId);

    setPaintings((state) => state.filter((art) => art._id !== artId));

    navigate("/catalog");
  };

  const onSearchSubmit = async (values) => {
    const filteredPaintings = await artService.getAll(values);

    setPaintings(filteredPaintings);
  };

  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={<Home paintings={paintings} artists={artists} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create-art"
            element={<CreateArt onCreateArt={onCreateArt} />}
          />
          <Route
            path="/catalog"
            element={
              <Catalogue
                paintings={paintings}
                onSearchSubmit={onSearchSubmit}
              />
            }
          />
          <Route
            path="/catalog/:artId"
            element={<ArtDetails onDeleteArt={onDeleteArt} />}
          />
          <Route
            path="/catalog/:artId/edit"
            element={<EditArt onEditArtSubmit={onEditArt} />}
          />
          <Route
            path="/artists/:artistId"
            element={<Artist paintings={paintings} />}
          />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
