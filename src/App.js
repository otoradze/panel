import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { data, permissionsData } from './shared/modal/data';
import Table from './features/Table/Table';
import Settings from './features/Settings/Settings';

let getUsers = () => {
  if (localStorage.getItem('users')) {
    return JSON.parse(localStorage.getItem('users'));
  } else {
    return data;
  }
};

function App() {
  const [users, setUsers] = useState(getUsers());
  const [user, setUser] = useState(null);
  const [saved, setSaved] = useState(false);
  const [btn, setBtn] = useState(0);

  useEffect(() => {
    if (saved) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, [users, user, saved]);

  const addHandler = () => {
    setUsers([
      {
        avatar: true,
        name: 'test',
        email: 'test@gmail.com',
        role: 'admin',
        status: true,
        id: Date.now(),
        permissions: permissionsData,
      },
      ...users,
    ]);

    setSaved(true);
    setBtn(0);
  };

  const statusHandler = (id) => {
    const updated = users.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setUsers(updated);
    setUser(updated.filter((item) => item.id === id)[0]);
  };

  const delHandler = (id) => {
    const filtered = users.filter((item) => item.id !== id);
    setUsers(filtered);
    setSaved(true);
  };

  const userPicker = (id) => {
    const filtered = users.filter((item) => item.id === id);
    setUser(filtered[0]);
  };

  const toggle = (item, id) => {
    const updated = users.map((el) => {
      if (el.id === id) {
        const newPermissions = el.permissions.map((permission) => {
          if (permission.name === item) {
            return { ...permission, toggle: !permission.toggle };
          }

          return permission;
        });

        return { ...el, permissions: newPermissions };
      }
      return el;
    });

    setUsers(updated);
    setUser(updated.filter((item) => item.id === id)[0]);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Table
                addHandler={addHandler}
                delHandler={delHandler}
                statusHandler={statusHandler}
                users={users}
                userPicker={userPicker}
                btn={btn}
                setBtn={setBtn}
              />
            }
          />

          <Route
            path="/Settings"
            element={
              <Settings
                user={user}
                toggle={toggle}
                setSaved={setSaved}
                statusHandler={statusHandler}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
