import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = ({ user, delHandler, userPicker, key }) => {
  return (
    <>
      <div className="user-container">
        <img
          className={user.status ? 'user-avatar' : 'user-avatar-opacity'}
          src="/images/avatar.svg"
          alt="avatar"
        />

        <div className={user.status ? 'user-info' : 'user-info-opacity'}>
          <div className="user-name">{user.name + '  ' + user.lastname}</div>
          <div className="user-email">{user.email}</div>
        </div>
        {user.role === 'Admin' && (
          <img
            src={`images/${user.status ? 'key.svg' : 'key-gray.svg'}`}
            className={user.status ? 'user-role-key' : 'user-role-key-opacity'}
          />
        )}
        <div className={user.status ? 'user-role' : 'user-role-opacity'}>
          {user.role}
        </div>

        <div className="user-status">
          {/* {user.status} */}

          <img
            src={`/images/${user.status ? 'toggle.svg' : 'toggle-red.svg'} `}
            alt="toggle"
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
