import { useState } from 'react';
import User from '../../shared/User/User';

import './Table.css';

const Table = () => {
  const [users, setUsers] = useState([
    {
      avatar: true,
      info: {
        name: 'Danniel Blichman',
        email: 'danniel.blichman@testtask.com',
      },
      role: 'admin',
      status: 'true',
    },
    {
      avatar: true,
      info: {
        name: 'Margarette Jones',
        email: 'margarette.jones@testtask.com',
      },
      role: 'admin',
      status: 'true',
    },
    {
      avatar: true,
      info: {
        name: 'Bethany Doe',
        email: 'bethany.doe@testtask.com',
      },
      role: 'admin',
      status: 'true',
    },
    {
      avatar: true,
      info: {
        name: 'Samuel Jackson',
        email: 'samuel.jackson@testtask.com',
      },
      role: 'admin',
      status: 'true',
    },
    {
      avatar: true,
      info: {
        name: 'Persival Blinn',
        email: 'persival.blinn@testtask.com',
      },
      role: 'admin',
      status: 'true',
    },
  ]);
  const categories = ['user', 'role', 'status', 'actions'];

  return (
    <div className="table-container">
      <div className="table-header-wrapper">
        <div className="table-header-container">
          <div className="table-header-text">Project Access</div>
          <div className="table-add">+</div>
        </div>
      </div>

      <div className="table-main-wrapper">
        <div className="table-main-container">
          <div className="table-categories">
            {categories.map((item) => {
              return (
                <div className={`table-${item}`}>
                  {item}
                  {item !== 'actions' && (
                    <img
                      src={`/images/${
                        item === 'user' ? 'triangle.svg' : 'triangle-gray.svg'
                      }`}
                      className={'table-icon-triangle'}
                      alt="polygon"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="table-categories-divider" />

          <div className="table-users-container">
            {users.map((user) => {
              return <User user={user} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
