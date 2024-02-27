import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
