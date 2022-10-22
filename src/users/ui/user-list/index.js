import { UserCard } from '../user-card';
import './styles.css';

export const UserList = ({ isLoading, users, onUserClick, error }) => {
  const renderContent = () => {
    if (isLoading) return <span>loading...</span>;

    if (error) return <span>{error}</span>;

    return users.length ? (
      users.map((user) => (
        <UserCard
          key={user.id}
          onUserClick={() => onUserClick(user)}
          user={user}
        />
      ))
    ) : (
      <span>Ничего не найдено</span>
    );
  };

  return <div className="users-list">{renderContent()}</div>;
};
