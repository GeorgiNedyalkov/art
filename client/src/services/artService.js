const baseUrl = "http://localhost:3003/art-pieces";

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();

  return data;
};

export const create = async (artData) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(artData),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  return data;
};

export const deleteArt = async (artId) => {
  const response = await fetch(`${baseUrl}/${artId}`, {
    method: "DELETE",
  });

  const data = response.json();

  return data;
};
