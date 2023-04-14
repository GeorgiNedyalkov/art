import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userServiceFactory } from "../services/userService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const userService = userServiceFactory();
  const [auth, setAuth] = useState({});
  const [error, setError] = useState("");

  const onLoginSubmit = async (userData) => {
    try {
      const result = await userService.login(userData);

      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      setError(error.msg);
      console.log(error);
    }
  };

  const onRegisterSubmit = async (formData) => {
    const { repeatPassword, ...registerData } = formData;

    if (repeatPassword !== registerData.password) {
      setError("Passwords do not match");
      throw new Error("Passwords do not match");
    }

    try {
      const result = await userService.register(formData);

      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      setError(error.msg);
      console.log(error);
    }
  };

  const contextValues = {
    auth,
    error,
    onLoginSubmit,
    onRegisterSubmit,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
