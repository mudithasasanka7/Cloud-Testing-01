import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateCV from './components/CreateCV';
import ViewCV from './components/ViewCV';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app-container">
      <nav>
        <Link to="/">Create CV</Link>
        <Link to="/view">View CV</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CreateCV />} />
        <Route path="/view" element={<ViewCV />} />
      </Routes>
    </div>
  );
}

export default App;
