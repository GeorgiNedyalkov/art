import { requestFactory } from "./requester";

const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/art-pieces`;

export const artServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async (query) => {
    if (query) {
      const { name, artist, movement, year } = query;

      if (name) {
        const filterArt = await request.get(`${baseUrl}/?name=${name}`);
        return filterArt;
      }

      if (artist) {
        const filterArt = await request.get(`${baseUrl}/?artist=${artist}`);
        return filterArt;
      }

      if (movement) {
        const filterArt = await request.get(`${baseUrl}/?movement=${movement}`);
        return filterArt;
      }

      if (year) {
        const filterArt = await request.get(`${baseUrl}/?year=${year}`);
        return filterArt;
      }
    }

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
