import { useNavigate } from 'react-router-dom';
import './Settings.css';
import { useState } from 'react';

const Settings = ({ user, toggle, statusHandler, detailsUpdate }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name);
  const [lastName, setLastName] = useState(user?.lastname);
  const [role, setRole] = useState(user?.role);

  const saveHandler = () => {
    detailsUpdate(user?.id, name, lastName, role);
    navigate('/');
  };

  if (!user) {
    return saveHandler();
  }

  return (
    <div className="settings-container">
      <div className="settings-header-wrapper">
        <div className="settings-header-container">
          <div className="settings-header-text">User Setup</div>
          <div className="settings-add">
            <img src="images/settings-white.svg" width={40} />
          </div>
        </div>
      </div>
      <div className="settings-main-container">
        <div className="settings-categories-container">
          <div className="settings-categories">
            <div className="settings-left">
              <img src="images/avatar.svg" className="settings-avatar" />
              <img src="images/key.svg" className="settings-key" />
              <div className={!user.status && 'settings-opacity'}>
                <div className="settings-upload-text">upload a photo</div>
                <div className="settings-user-info">
                  {user.name + ' ' + user.lastname}
                </div>
                <div className="settings-email">{user.email}</div>
              </div>
              {user.status && (
                <button className="settings-invite-btn">
                  Resend the invite
                </button>
              )}
            </div>
            <div className="settings-middle">
              <div className="settings-details-text">Details</div>
              <div className="settings-active-container">
                <img
                  src={`/images/${
                    user.status ? 'toggle.svg' : 'toggle-red.svg'
                  } `}
                  className="settings-active-toggle"
                  alt="toggle"
                  onClick={() => statusHandler(user.id)}
                />
                <div className="settings-active-text">
                  The user is
                  <span className="settings-active-bold">
                    {user.status ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
              <div
                className={
                  user.status
                    ? 'settings-inputs-container'
                    : 'settings-inputs-container-op'
                }
              >
                <label className={user.status ? 'labels' : 'labels-op'}>
                  *First Name
                </label>
                <input
                  value={name}
                  className="settings-input"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <div className="settings-divider"></div>
                <label className={user.status ? 'labels' : 'labels-op'}>
                  *Last Name
                </label>
                <input
                  value={lastName}
                  className="settings-input"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <div className="settings-divider"></div>
                <label className={user.status ? 'labels' : 'labels-op'}>
                  *Role
                </label>
                <div className="dropdown">
                  <div className="settings-role-name">{role}</div>
                  <img src="images/triangle.svg"></img>
                  <div className="dropdown-content">
                    <div onClick={() => setRole('User')}>User</div>
                    <div onClick={() => setRole('Admin')}>Admin</div>
                  </div>
                </div>
                <div className="settings-divider"></div>
                {user.status && (
                  <button className="settings-save-btn" onClick={saveHandler}>
                    Save Changes
                  </button>
                )}
              </div>
            </div>
            <div className={!user.status && 'settings-opacity'}>
              <div className="settings-right">
                <div className="settings-permission-container">
                  <div className="settings-permission-text">Permissions</div>
                  <div className="settings-admin-text">Admin</div>
                </div>
                <div className="settings-superadmin-container">
                  <div className="settings-superadmin-text"> Super Admin</div>
                  <img
                    className="settings-permission-toggle"
                    src={`images/${
                      user.permissions[5].toggle
                        ? 'toggle.svg'
                        : 'toggle-red.svg'
                    }`}
                    onClick={() => toggle(user.permissions[5].name, user.id)}
                  />
                </div>
                <div className="settings-permission-divider"></div>
                <div className="settings-group-container">
                  <img
                    src="images/cut-triangle.svg"
                    className="settings-triangle"
                  />
                  <div className="settings-group-text">Permission group 1</div>
                  <img
                    className="settings-permission-toggle"
                    src={`images/${
                      user.permissions[6].toggle
                        ? 'toggle.svg'
                        : 'toggle-red.svg'
                    }`}
                    onClick={() => toggle(user.permissions[6].name, user.id)}
                  />
                </div>
                <div className="settings-group">
                  {user.permissions &&
                    user.permissions.slice(0, 5).map((item, index) => {
                      return (
                        <div key={index} className="settings-group-each">
                          <div className="settings-grou-each-left">
                            <div
                              className={`settings-${
                                item.toggle ? 'checkbox' : 'checkbox-red'
                              }`}
                            ></div>
                            <div className="settings-name">{item.name}</div>
                          </div>
                          <img
                            className="settings-permission-toggle"
                            src={`images/${
                              item.toggle ? 'toggle.svg' : 'toggle-red.svg'
                            }`}
                            onClick={() => toggle(item.name, user.id)}
                          />
                        </div>
                      );
                    })}
                </div>
                <div className="settings-permission-divider"></div>
                <div className="settings-group-container">
                  <img
                    src="images/cut-triangle.svg"
                    className="settings-triangle"
                  />
                  <div className="settings-group-text">Permission group 2</div>
                  <img
                    className="settings-permission-toggle"
                    src={`images/${
                      user.permissions[7].toggle
                        ? 'toggle.svg'
                        : 'toggle-red.svg'
                    }`}
                    onClick={() => toggle(user.permissions[7].name, user.id)}
                  />
                </div>
                <div className="settings-permission-divider"></div>
                <div className="settings-group-container">
                  <img
                    src="images/cut-triangle.svg"
                    className="settings-triangle"
                  />
                  <div className="settings-group-text">Permission group 3</div>
                  <img
                    className="settings-permission-toggle"
                    src={`images/${
                      user.permissions[8].toggle
                        ? 'toggle.svg'
                        : 'toggle-red.svg'
                    }`}
                    onClick={() => toggle(user.permissions[8].name, user.id)}
                  />
                </div>
                <div className="settings-permission-divider"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
