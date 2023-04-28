import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './features/Table/Table';
import UserSettings from './features/UserSettings/UserSettings';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route
            path="/UserSettings"
            element={
              <UserSettings />
              // personal={personal}
              // setPersonal={setPersonal}
              // resetter={resetter}
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
