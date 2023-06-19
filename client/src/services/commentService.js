import { requestFactory } from "./requester";

const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/art-pieces`;

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
