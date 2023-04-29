import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = ({ user }) => {
  const [status, setStatus] = useState(true);
  return (
    <>
      <div className="user-container">
        <img src="/images/avatar.svg" className={'user-avatar'} alt="avatar" />
        <div className="user-info">
          <div className="user-name">{user.info.name}</div>
          <div className="user-email">{user.info.email}</div>
        </div>

        <div className="user-role">{user.role}</div>

        <div className="user-status">
          {/* {user.status} */}
          <img
            src={`/images/${status ? 'toggle.svg' : 'toggle-red.svg'} `}
            className="user-toggle"
            alt="toggle"
            onClick={() => setStatus(!status)}
          />
        </div>

        <div className="user-actions">
          <Link style={{ textDecoration: 'none' }} to="/Settings">
            <img src="/images/settings.svg" className="user-actions-settings" />
          </Link>

          <img src="/images/del.svg" className="user-actions-del" />
        </div>
      </div>

      <div className="user-divider"></div>
    </>
  );
};

export default User;
