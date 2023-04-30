import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = ({ user, delHandler, statusHandler, userPicker, id }) => {
  return (
    <>
      <div className="user-container">
        <img src="/images/avatar.svg" className={'user-avatar'} alt="avatar" />
        <div className="user-info">
          <div className="user-name">{user.name}</div>
          <div className="user-email">{user.email}</div>
        </div>
        {user.role === 'Admin' && (
          <img src="images/key.svg" className="user-role-key" />
        )}
        <div className="user-role">{user.role}</div>

        <div className="user-status">
          {/* {user.status} */}

          <img
            src={`/images/${user.status ? 'toggle.svg' : 'toggle-red.svg'} `}
            className="user-toggle"
            alt="toggle"
            onClick={() => statusHandler(user.id)}
          />
        </div>

        <div className="user-actions">
          <Link
            style={{ textDecoration: 'none' }}
            to="/Settings"
            onClick={() => userPicker(user.id)}
          >
            <img src="/images/settings.svg" className="user-actions-settings" />
          </Link>

          <img
            src="/images/del.svg"
            onClick={() => delHandler(user.id)}
            className="user-actions-del"
          />
        </div>
      </div>

      <div className="user-divider"></div>
    </>
  );
};

export default User;
