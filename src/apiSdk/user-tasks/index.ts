import axios from 'axios';
import queryString from 'query-string';
import { UserTaskInterface, UserTaskGetQueryInterface } from 'interfaces/user-task';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserTasks = async (
  query?: UserTaskGetQueryInterface,
): Promise<PaginatedInterface<UserTaskInterface>> => {
  const response = await axios.get('/api/user-tasks', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserTask = async (userTask: UserTaskInterface) => {
  const response = await axios.post('/api/user-tasks', userTask);
  return response.data;
};

export const updateUserTaskById = async (id: string, userTask: UserTaskInterface) => {
  const response = await axios.put(`/api/user-tasks/${id}`, userTask);
  return response.data;
};

export const getUserTaskById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-tasks/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserTaskById = async (id: string) => {
  const response = await axios.delete(`/api/user-tasks/${id}`);
  return response.data;
};
