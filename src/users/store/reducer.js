import { actionTypes } from './actionTypes';

export const initialState = {
  isLoading: true,
  users: [],
  selectedUser: null,
  error: null
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setUsers:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        selectedUser: null
      };
    case actionTypes.setError:
      return { ...state, isLoading: false, error: action.payload };
    case actionTypes.setSelectedUser:
      return { ...state, selectedUser: action.payload };
    case actionTypes.clearSelectedUser:
      return { ...state, selectedUser: null };
    default:
      return state;
  }
};
