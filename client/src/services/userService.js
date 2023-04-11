const baseUrl = "http://localhost:3003/users";

export const createUser = async (userData) => {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "content-type": "application/json",
    },
  });

  const result = await response.json();

  return result;
};

export const login = async (userData) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "content-type": "application/json",
    },
  });

  const result = await response.json();

  return result;
};
