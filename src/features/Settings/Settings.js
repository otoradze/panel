import { useNavigate } from 'react-router-dom';
import './Settings.css';

const Settings = ({ user, toggle, setSaved, statusHandler }) => {
  const navigate = useNavigate();

  const saveHandler = () => {
    setSaved(true);
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
            {/* ------left------------ */}
            <div className="settings-left">
              <img src="images/avatar.svg" className="settings-avatar" />
              <img src="images/key.svg" className="settings-key" />

              <div className={!user.status && 'settings-opacity'}>
                <div className="settings-upload-text">upload a photo</div>
                <div className="settings-user-info">{user.name}</div>
                <div className="settings-email">{user.email}</div>
              </div>

              {user.status && (
                <button className="settings-invite-btn">
                  Resend the invite
                </button>
              )}
            </div>
            {/* -------middle---------- */}
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
                <input value="Danniel" className="settings-input" />
                <div className="settings-divider"></div>
                <label className={user.status ? 'labels' : 'labels-op'}>
                  *Last Name
                </label>
                <input value="Blichman" className="settings-input" />
                <div className="settings-divider"></div>
                <label className={user.status ? 'labels' : 'labels-op'}>
                  *Role
                </label>
                <input value="Admin" className="settings-input" />
                <div className="settings-divider"></div>
                {user.status && (
                  <button className="settings-save-btn" onClick={saveHandler}>
                    Save Changes
                  </button>
                )}
              </div>
            </div>

            {/* ------right----------- */}
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
                {/* -----groups---- */}
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
                {/* ----group1---- */}
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
                {/* ----group---- */}
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
            {/* -------end------ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
