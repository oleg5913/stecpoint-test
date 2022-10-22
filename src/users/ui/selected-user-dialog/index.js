import { createPortal } from 'react-dom';
import './styles.css';

export const SelectedUserDialog = ({ close, user }) => {
  return createPortal(
    <div className="dialog-container">
      <div className="dialog-header">
        <button className="dialog-header-close-btn" onClick={close}>
          x
        </button>
      </div>
      <p className="dialog-user-name">{user.name}</p>
      <hr />
      <p className="dialog-user-mail">{user.email}</p>
      <p className="dialog-user-address">{user.address.city}</p>
      <p className="dialog-user-phone">{user.phone}</p>
    </div>,
    document.querySelector(`[data-id="user${user.id}"]`)
  );
};
