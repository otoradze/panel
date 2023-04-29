import { useState } from 'react';
import './Settings.css';

const Settings = ({ user }) => {
  const [superAdmin, setSuperAdmin] = useState(false);
  const [group1, setGroup1] = useState(false);
  const [group2, setGroup2] = useState(false);
  const [group3, setGroup3] = useState(false);

  const [permissions, setPermissions] = useState([
    { name: 'permission11', toggle: true },
    { name: 'permission12', toggle: true },
    { name: 'permission13', toggle: false },
    { name: 'permission14', toggle: true },
    { name: 'permission15', toggle: true },
  ]);

  const toggle = (item, index) => {
    const updated = [...permissions];
    updated[index] = {
      ...item,
      toggle: !item.toggle,
    };
    setPermissions(updated);
  };

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
              <div className="settings-user-info">{user.name}</div>
              <div className="settings-email">{user.email}</div>
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
                  src={`images/${superAdmin ? 'toggle.svg' : 'toggle-red.svg'}`}
                  onClick={() => setSuperAdmin(!superAdmin)}
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
                  src={`images/${group1 ? 'toggle.svg' : 'toggle-red.svg'}`}
                  onClick={() => setGroup1(!group1)}
                />
              </div>
              {/* ----group1---- */}
              <div className="settings-group">
                {permissions.map((item, index) => {
                  return (
                    <div className="settings-group-each">
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
                        onClick={() => toggle(item, index)}
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
                  src={`images/${group2 ? 'toggle.svg' : 'toggle-red.svg'}`}
                  onClick={() => setGroup2(!group2)}
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
                  src={`images/${group3 ? 'toggle.svg' : 'toggle-red.svg'}`}
                  onClick={() => setGroup3(!group3)}
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

export default Settings;
