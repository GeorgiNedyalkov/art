import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { userServiceFactory } from "../services/userService";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [auth, setAuth] = useLocalStorage("auth", {});
  const userService = userServiceFactory(auth.token);

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

  const onLogout = async () => {
    await userService.logout();

    localStorage.removeItem("auth");

    setAuth({});
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    error,
    auth,
    userId: auth.userId,
    token: auth.token,
    email: auth.email,
    isAuthenticated: !!auth.token,
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
