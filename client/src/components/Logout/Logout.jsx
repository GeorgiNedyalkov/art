import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

const Logout = () => {
  const { onLogout } = useAuthContext();

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Navigate to="/" />;
};

export default Logout;
