import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userServiceFactory } from "../services/userService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [error, setError] = useState("");
  const userService = userServiceFactory(auth.token);

  const onLoginSubmit = async (userData) => {
    try {
      const result = await userService.login(userData);

      setAuth((state) => ({ ...state, accessToken: result }));

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

    setAuth({});
  };

  const contextValues = {
    auth,
    error,
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    token: auth.accessToken,
    isAuthenticated: !!auth.accessToken,
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
