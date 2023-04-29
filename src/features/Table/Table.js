import { useState, useEffect } from 'react';
import User from '../../shared/ui/User/User';
import './Table.css';

const Table = ({
  addHandler,
  delHandler,
  statusHandler,
  users,
  userPicker,
}) => {
  const categories = ['user', 'role', 'status', 'actions'];
  const buttons = [1, 2, 3, 4];

  return (
    <div className="table-container">
      <div className="table-header-wrapper">
        <div className="table-header-container">
          <div className="table-header-text">Project Access</div>
          <div onClick={addHandler} className="table-add">
            +
          </div>
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
                      alt="triangle"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="table-categories-divider" />

          <div className="table-users-container">
            {users.map((user) => {
              return (
                <User
                  user={user}
                  delHandler={delHandler}
                  statusHandler={statusHandler}
                  userPicker={userPicker}
                />
              );
            })}
            <div className="table-footer">
              <div className="table-count-container">
                Records on Page
                <div className="table-count-number">{users.length}</div>
                <img
                  src="images/triangle.svg"
                  className="table-count-triangle"
                />
              </div>
              {/* ----- buttons----- */}
              <div className="table-pagination">
                <div className="table-pagination-previous">Previous</div>
                <div className="table-pagination-buttons">
                  {buttons.map((item) => {
                    return (
                      <button className="table-pagination-button">
                        {item}
                      </button>
                    );
                  })}
                </div>
                <div className="table-pagination-next">Next</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
