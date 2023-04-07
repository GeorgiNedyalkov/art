const baseUrl = "http://localhost:3003/art-pieces";

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();

  return data;
};
