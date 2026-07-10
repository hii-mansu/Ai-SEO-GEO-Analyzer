import api from "../lib/api";


export const updateProfile = async (userData) => {
  const response = await api.patch("/user/update", userData);

  return response.data;
};



