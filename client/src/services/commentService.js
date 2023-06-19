import { requestFactory } from "./requester";

const baseUrl = `${
  process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:5173/"
}/art-pieces`;

const request = requestFactory();

export const getAll = async (artId) => {
  const result = await request.get(`${baseUrl}/${artId}/comments`);
  return result;
};

export const create = async (artId, commentData) => {
  const result = await request.post(
    `${baseUrl}/${artId}/comments`,
    commentData
  );

  return result;
};
