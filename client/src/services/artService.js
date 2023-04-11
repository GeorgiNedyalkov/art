import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3003/art-pieces";

export const artServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const art = await request.get(baseUrl);

    return art;
  };

  const getOne = async (artId) => {
    const artPiece = await request.get(`${baseUrl}/${artId}`);

    return artPiece;
  };

  const create = async (artData) => {
    const result = await request.post(baseUrl, artData);

    return result;
  };

  const edit = (artId, artData) =>
    request.put(`${baseUrl}/${artId}/edit`, artData);

  const deleteArt = (artId) => request.delete(`${baseUrl}/${artId}`);

  return {
    getAll,
    getOne,
    create,
    edit,
    delete: deleteArt,
  };
};
