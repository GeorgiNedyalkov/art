import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3003/artists";

export const artistServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const artists = await request.get(baseUrl);

    return artists;
  };

  const getOne = async (artistId) => {
    const artist = await request.get(`${baseUrl}/${artistId}`);

    return artist;
  };

  return {
    getAll,
    getOne,
  };
};
