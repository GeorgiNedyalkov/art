import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Navbar = () => {
  const { email, isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>

        {isAuthenticated && (
          <>
            <li>
              <Link to="/create-art">Create Art</Link>
            </li>
            <li style={{ fontWeight: "bold" }}>{email}</li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        )}
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
