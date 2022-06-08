import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Prolog from './pages/Prolog';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Prolog />} />
        <Route path='/home' element={<Home />} />
        <Route path='/*' element={<Prolog />} />
      </Routes>
    </Router>
  );
}

export default App;
