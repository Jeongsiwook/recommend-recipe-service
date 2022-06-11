import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Prolog from './pages/Prolog';
import Home from './pages/Home';
import Community from './pages/Community';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Prolog />} />
        <Route path='/home' element={<Home />} />
        <Route path='/community' element={<Community />} />
        <Route path='/*' element={<Prolog />} />
      </Routes>
    </Router>
  );
}

export default App;
