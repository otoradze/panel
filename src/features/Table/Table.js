import { useState } from 'react';
import User from '../../shared/User/User';
import './Table.css';

const Table = () => {
  const [users, setUsers] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-header-text">Project Access</div>
        <div className="table-add">+</div>
      </div>

      <div className="table-main">
        {users.map(() => {
          return <User />;
        })}
      </div>
    </div>
  );
};

export default Table;
