import { API_URL, axiosInstance } from '.';

const url: string = 'todo';

const create = async (data: any): Promise<any> => {
  const res = await axiosInstance.post(`${API_URL}/${url}/create`, data);
  return res.data;
};

const mytodos = async (page: number, limit: number): Promise<any> => {
  const res = await axiosInstance.get(
    `${API_URL}/${url}/my-todos?page=${page}&limit=${limit}`
  );
  return res.data;
};

const todobyid = async (id: string): Promise<any> => {
  const res = await axiosInstance.get(`${API_URL}/${url}/detail?todoId=${id}`);
  return res.data;
};

const update = async (data: any): Promise<any> => {
  const res = await axiosInstance.patch(`${API_URL}/${url}/update`, data);
  return res.data;
};

const deleted = async (todoId: string): Promise<any> => {
  console.log('todoId: ', todoId);
  const res = await axiosInstance.delete(`${API_URL}/${url}/delete`, {
    data: { todoId: todoId },
  });
  return res.data;
};

export const todoApi = {
  create,
  mytodos,
  todobyid,
  update,
  deleted,
};
