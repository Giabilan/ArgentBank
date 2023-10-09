const API_URL = "http://localhost:3001/api/v1/user";

export const loginAPI = async (data) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
  return response.json();
};

export const getUserDatas = async (token) => {
  const response = await fetch(`${API_URL}/profile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
