import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './features/Table/Table';
import Settings from './features/Settings/Settings';
import { data } from './shared/modal/data';

let getLocalStorage = () => {
  if (localStorage.getItem('users')) {
    return JSON.parse(localStorage.getItem('users'));
  } else {
    return data;
  }
};

function App() {
  let [users, setUsers] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
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
  };

  const statusHandler = (id) => {
    console.log(id);
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
                dellHandler={delHandler}
                statusHandler={statusHandler}
                users={users}
              />
            }
          />
          <Route
            path="/Settings"
            element={
              <Settings />
              // personal={personal}
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
