import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Grass from './pages/Grass';
import Hedge from './pages/Hedge';
import Panel from './pages/Panel';
import Wall from './pages/Wall';
import Clean from './pages/Clean';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grass" element={<Grass />} />
        <Route path="/hedge" element={<Hedge />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/wall" element={<Wall />} />
        <Route path="/clean" element={<Clean />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;