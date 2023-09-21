import axios from 'axios';
import queryString from 'query-string';
import { UserTeamInterface, UserTeamGetQueryInterface } from 'interfaces/user-team';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserTeams = async (
  query?: UserTeamGetQueryInterface,
): Promise<PaginatedInterface<UserTeamInterface>> => {
  const response = await axios.get('/api/user-teams', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserTeam = async (userTeam: UserTeamInterface) => {
  const response = await axios.post('/api/user-teams', userTeam);
  return response.data;
};

export const updateUserTeamById = async (id: string, userTeam: UserTeamInterface) => {
  const response = await axios.put(`/api/user-teams/${id}`, userTeam);
  return response.data;
};

export const getUserTeamById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-teams/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserTeamById = async (id: string) => {
  const response = await axios.delete(`/api/user-teams/${id}`);
  return response.data;
};
