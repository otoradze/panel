import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { data } from './shared/modal/data';
import Table from './features/Table/Table';
import Settings from './features/Settings/Settings';

let getLocal = (inp) => {
  let returnable = inp === 'users' ? data : '';
  if (localStorage.getItem(inp)) {
    return JSON.parse(localStorage.getItem(inp));
  } else {
    return returnable;
  }
};

function App() {
  const [users, setUsers] = useState(getLocal('users'));
  const [user, setUser] = useState(getLocal('user'));
  const [saved, setSaved] = useState(false);
  const [btn, setBtn] = useState(1);

  useEffect(() => {
    if (saved) {
      localStorage.setItem('users', JSON.stringify(users));
    }

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('saved', JSON.stringify(saved));
  }, [users, user, saved]);

  useEffect(() => {
    if (user.id) {
      userPicker(user.id);
    }
  }, [users]);

  const addHandler = () => {
    setUsers([
      {
        avatar: true,
        name: 'test',
        email: 'test@gmail.com',
        role: 'admin',
        status: 'true',
        id: Date.now(),
      },
      ...users,
    ]);

    setSaved(true);
    setBtn(Math.floor(users.length / 5));
  };

  const statusHandler = (id) => {
    const updated = users.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setUsers(updated);
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
    // console.log(item, id);
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
              />
            }
          />

          <Route
            path="/Settings"
            element={<Settings user={user} toggle={toggle} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
