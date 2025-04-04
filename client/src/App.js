import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Feedback from './components/Feedback';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Categories />
      <Feedback />
    </Router>
  );
}

export default App;