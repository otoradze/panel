import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
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
  let [user, setUser] = useState('');

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

  const userPicker = (id) => {
    const filtered = users.filter((item) => item.id === id);
    setUser(filtered[0]);
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
              />
            }
          />

          <Route path="/Settings" element={<Settings user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
