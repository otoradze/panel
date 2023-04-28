import React from 'react';
import './User.css';

const User = ({ user }) => {
  return (
    <>
      <div className="User-container">
        <div>
          <img
            src="/images/avatar.svg"
            className={'User-avatar'}
            alt="avatar"
          />
        </div>

        <div className="User-info">
          <div className="User-name">{user.info.name}</div>
          <div className="User-email">{user.info.email}</div>
        </div>

        <div className="User-role">{user.role}</div>
        <div className="User-status">
          {/* {user.status} */}
          <img src="/images/toggle.svg" alt="avatar" />
        </div>
      </div>

      <div className="User-divider"></div>
    </>
  );
};

export default User;
