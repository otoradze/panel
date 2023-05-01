import User from '../../shared/ui/User/User';
import PopModal from '../../shared/ui/PopModal/PopModal';
import './Table.css';

const Table = ({
  addHandler,
  delHandler,
  statusHandler,
  users,
  userPicker,
  btn,
  setBtn,
  toggleModal,
  modal,
}) => {
  const categories = ['user', 'role', 'status', 'actions'];
  const slicedUsers = users.slice(5 * btn, 5 * btn + 5);

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

      {modal && <PopModal toggleModal={toggleModal} />}

      <div className="table-main-wrapper">
        <div className="table-main-container">
          <div className="table-categories">
            {categories.map((item, index) => {
              return (
                <div key={index} className={`table-${item}`}>
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
            {users.slice(5 * btn, 5 * btn + 5).map((user) => {
              return (
                <User
                  user={user}
                  delHandler={delHandler}
                  statusHandler={statusHandler}
                  userPicker={userPicker}
                  key={user.id}
                />
              );
            })}
            <div className="table-footer">
              <div className="table-count-container">
                Records on Page
                <div className="table-count-number">{slicedUsers.length}</div>
                <img
                  src="images/triangle.svg"
                  className="table-count-triangle"
                />
              </div>
              {/* ----- buttons----- */}
              <div className="table-pagination">
                <div
                  className="table-pagination-previous"
                  onClick={() => btn >= 1 && setBtn(btn - 1)}
                >
                  Previous
                </div>
                <div className="table-pagination-buttons">
                  <button
                    className="table-pagination-btn"
                    onClick={() => setBtn(btn)}
                  >
                    {btn + 1}
                  </button>

                  <button
                    className="table-pagination-btn2"
                    onClick={() =>
                      slicedUsers.length % 5 === 0 && setBtn(btn + 1)
                    }
                  >
                    {btn + 2}
                  </button>
                </div>
                <div
                  className="table-pagination-next"
                  onClick={() =>
                    slicedUsers.length % 5 === 0 && setBtn(btn + 1)
                  }
                >
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
