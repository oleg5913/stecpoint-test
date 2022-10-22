import { useEffect, useReducer, useCallback } from 'react';

import { initialState, usersReducer } from './users/store/reducer';
import { userActions } from './users/store/actions';

import { UsersFilter } from './users/ui/user-filter';
import { SelectedUserDialog } from './users/ui/selected-user-dialog';
import { UserList } from './users/ui/user-list';

import './App.css';

export default function App() {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const fetchUsers = useCallback(
    (query) => userActions.getUsers(query).then((res) => dispatch(res)),
    [state.selectedUser]
  );

  const setSelectedUser = useCallback(
    (user) => dispatch(userActions.selectUser(user)),
    []
  );

  const clearSelectedUser = useCallback(
    () => dispatch(userActions.clearSelectedUser()),
    []
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h2>List of users</h2>
        <UsersFilter handleChange={fetchUsers} />
        <hr />

        <UserList
          isLoading={state.isLoading}
          error={state.error}
          users={state.users}
          onUserClick={setSelectedUser}
        />
      </div>
      {state.selectedUser && (
        <SelectedUserDialog
          close={clearSelectedUser}
          user={state.selectedUser}
        />
      )}
    </div>
  );
}
