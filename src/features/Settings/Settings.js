import { useState } from 'react';
import './Settings.css';

const UserSettings = () => {
  const [permission, setPermission] = useState([
    { name: 'Permission11', toggle: true },
    { name: 'Permission12', toggle: true },
    { name: 'Permission13', toggle: true },
    { name: 'Permission14', toggle: true },
    { name: 'Permission15', toggle: true },
  ]);
  const [isPermission, setIsPermission1] = useState(true);

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

              <div className="settings-upload-text">upload a photo</div>
              <div className="settings-user-info">Danniel Blichman</div>
              <div className="settings-email">daniel.blichman@testtask.com</div>
              <button className="settings-invite-btn">Resend the invite</button>
            </div>
            {/* -------middle---------- */}
            <div className="settings-middle">
              <div className="settings-details-text">Details</div>
              <div className="settings-active-container">
                <img
                  src="images/toggle.svg"
                  className="settings-active-toggle"
                />
                <div className="settings-active-text">
                  The user is
                  <span className="settings-active-bold">Active</span>
                </div>
              </div>

              <div className="settings-inputs-container">
                <label className="settings-labels">*First Name</label>
                <input value="Danniel" className="settings-input" />
                <div className="settings-divider"></div>
                <label className="settings-labels">*Last Name</label>
                <input value="Blichman" className="settings-input" />
                <div className="settings-divider"></div>
                <label className="settings-labels">*Role</label>
                <input value="Admin" className="settings-input" />
                <div className="settings-divider"></div>
                <button className="settings-save-btn">Save Changes</button>
              </div>
            </div>

            {/* ------right----------- */}
            <div className="settings-right">
              <div className="settings-permission-container">
                <div className="settings-permission-text">Permissions</div>
                <div className="settings-admin-text">Admin</div>
              </div>
              <div className="settings-superadmin-container">
                <div className="settings-superadmin-text"> Super Admin</div>
                <img
                  className="settings-permission-toggle"
                  src="images/toggle.svg"
                />
              </div>
              <div className="settings-permission-divider"></div>
              {/* -----groups---- */}
              <div className="settings-group-container">
                {' '}
                <img
                  src="images/cut-triangle.svg"
                  className="settings-triangle"
                />
                <div className="settings-group-text">Permission group 1</div>
                <img
                  className="settings-permission-toggle"
                  src="images/toggle.svg"
                />
              </div>
              {/* ----group1---- */}
              <div className="settings-group">
                {isPermission &&
                  permission.map((item) => {
                    return (
                      <div className="settings-group-each">
                        <div className="settings-grou-each-left">
                          <div className="settings-checkbox"></div>
                          <div className="settings-name">{item.name}</div>
                        </div>

                        <img src="images/toggle.svg" />
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
                  src="images/toggle.svg"
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
                  src="images/toggle.svg"
                />
              </div>
              <div className="settings-permission-divider"></div>
            </div>

            {/* -------end------ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
