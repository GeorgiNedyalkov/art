import { requestFactory } from "./requester";

const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/users`;

export const userServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    login: (data) => request.post(`${baseUrl}/login`, data),
    register: (data) => request.post(`${baseUrl}/register`, data),
    logout: () => request.get(`${baseUrl}/logout`),
  };
};
