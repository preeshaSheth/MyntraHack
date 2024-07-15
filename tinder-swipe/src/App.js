import React from 'react';
import CardsContainer from './components/ColorCard.js';
import './index.css';
import VideoStream from './components/Video.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardBasic from './components/CardBasicfinal.js';
import CardOccasion from './components/OccasionCard.js';
import Both from './components/Both.js';
const App = () => {
  return (
    <Router>
    <Routes>
      
      <Route path="/" element={<CardBasic/>}/>
    <Route path="/video" element={<VideoStream />} />
      <Route path="/api/color/:color" element={<CardsContainer />} />
      <Route path="api/occasion/:occasion" element={<CardOccasion/>}/>
      <Route path="api/color/:color/occasion/:occasion" element={<Both/>}/>
    </Routes>
  </Router>
  );
};

export default App;
