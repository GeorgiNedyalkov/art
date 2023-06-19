import { requestFactory } from "./requester";

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/artists`;

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
