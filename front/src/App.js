import './App.css';
import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Prolog from './pages/Prolog';
import Home from './pages/Home';
import Community from './pages/Community';
import Result from './pages/Result';
import NotFound from './pages/NotFound';

export const ResultContext = createContext();

function App() {
  const [resultCooking, setResultCooking] = useState('');
  const [resultIngredients, setResultIngredients] = useState([]);
  const [resultRecipe, setResultRecipe] = useState('');

  const saveResult = {
    resultCooking,
    setResultCooking,
    resultIngredients,
    setResultIngredients,
    resultRecipe,
    setResultRecipe,
  };

  return (
    <ResultContext.Provider value={saveResult}>
      <Router>
        <Routes>
          <Route path="/" element={<Prolog />} />
          <Route path="/home" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/result" element={<Result />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </ResultContext.Provider>
  );
}

export default App;
