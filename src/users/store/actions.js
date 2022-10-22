import { fetchUsers } from '../api/users';
import { actionTypes } from './actionTypes';

const getUsers = async (query) => {
  try {
    const response = await fetchUsers(query);
    return { type: actionTypes.setUsers, payload: response };
  } catch (error) {
    return { type: actionTypes.setError, payload: error.message };
  }
};

const selectUser = (user) => {
  return { type: actionTypes.setSelectedUser, payload: user };
};

const clearSelectedUser = () => {
  return { type: actionTypes.clearSelectedUser, payload: null };
};

export const userActions = {
  getUsers,
  selectUser,
  clearSelectedUser
};
