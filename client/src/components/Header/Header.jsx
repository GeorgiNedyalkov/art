import { Link } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1>Art Hub</h1>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
