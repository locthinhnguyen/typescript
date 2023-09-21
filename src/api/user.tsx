import { API_URL, axiosInstance } from '.';

const url: string = 'users';

const login = async (data: any): Promise<any> => {
  const res = await axiosInstance.post(`${API_URL}/${url}/login`, data);
  return res.data;
};

const register = async (data: any): Promise<any> => {
  const res = await axiosInstance.post(`${API_URL}/${url}/register`, data);
  return res.data;
};

export const userApi = {
  login,
  register,
};
