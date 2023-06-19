import { requestFactory } from "./requester";

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/users`;

export const userServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    login: (data) => request.post(`${baseUrl}/login`, data),
    register: (data) => request.post(`${baseUrl}/register`, data),
    logout: () => request.get(`${baseUrl}/logout`),
  };
};
