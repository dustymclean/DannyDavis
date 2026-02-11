import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InfoBubble from './components/InfoBubble';
import Home from './pages/Home';
import Facility from './pages/Facility';
import About from './pages/About';
import Partnership from './pages/Partnership';

const App: React.FC = () => {
  return (
    // HashRouter is imperative for stable rendering on GitHub Pages
    <Router>
      <div className="flex flex-col min-h-screen selection:bg-[#2E4D3E] selection:text-white relative">
        <Navbar />
        <main id="main-content" className="flex-grow pt-20" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/facility" element={<Facility />} />
            <Route path="/partner" element={<Partnership />} />
            {/* Legacy pathing for secondary links */}
            <Route path="/connect" element={<Partnership />} />
          </Routes>
        </main>
        <Footer />
        <InfoBubble />
      </div>
    </Router>
  );
};

export default App;
