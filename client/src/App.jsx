import Home from "./components/Home/Home";
import CreateArt from "./components/CreateArt/CreateArt";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-art" element={<CreateArt />} />
      </Routes>
    </div>
  );
}

export default App;
