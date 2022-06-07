import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Prolog from './pages/Prolog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/prolog' element={<Prolog />} />
      </Routes>
    </Router>
  );
}

export default App;
