import React from 'react';
import CardsContainer from './components/CardContainer.js';
import './index.css';
import VideoStream from './components/Video.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardBasic from './components/CardBasic.js';
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<CardBasic/>}/>
    <Route path="/video" element={<VideoStream />} />
      <Route path="/api/color/:color" element={<CardsContainer />} />
    </Routes>
  </Router>
  );
};

export default App;
