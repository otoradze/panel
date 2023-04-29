import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './features/Table/Table';
import Settings from './features/Settings/Settings';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
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
