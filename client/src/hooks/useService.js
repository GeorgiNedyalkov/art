import { useAuthContext } from "../context/AuthContext";

export const useService = (serviceFactory) => {
  const { token } = useAuthContext();

  const service = serviceFactory(token);

  return service;
};
