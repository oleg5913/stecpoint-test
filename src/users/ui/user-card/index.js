import { memo } from 'react';
import './styles.css';

export const UserCard = memo(
  ({ onUserClick, user }) => {
    return (
      <div
        className="user-card"
        data-id={'user' + user.id}
        onClick={onUserClick}
      >
        <p className="user-card-name">{user.name}</p>
        <p className="user-card-mail">{user.email}</p>
      </div>
    );
  },
  () => true
); // Юзеры не мутабельные, коллбек тоже. Поэтому компаратор просто возвращает true
