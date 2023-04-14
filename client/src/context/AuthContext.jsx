import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userServiceFactory } from "../services/userService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const userService = userServiceFactory();
  const [auth, setAuth] = useState({});

  const onLoginSubmit = async (userData) => {
    try {
      const result = await userService.login(userData);
      setAuth(result);
    } catch (error) {}
  };

  const onRegisterSubmit = async (formData) => {
    const { repeatPassword, ...registerData } = formData;

    if (repeatPassword !== registerData.password) {
      throw new Error("Passwords do not match");
      return;
    }

    try {
      const result = await userService.register(formData);

      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };

  const contextValues = {
    auth,
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
