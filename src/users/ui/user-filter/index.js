import { memo } from 'react';
import './styles.css';

export const UsersFilter = memo(
  ({ handleChange }) => {
    return (
      <div className="users-filter">
        <span className="users-filter-label">Mail filter: </span>
        <input
          type="text"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </div>
    );
  },
  () => true
);
