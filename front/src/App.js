import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Prolog from './pages/Prolog';
import Home from './pages/Home';
import Community from './pages/Community';
import Result from './pages/Result';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Prolog />} />
        <Route path="/home" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
