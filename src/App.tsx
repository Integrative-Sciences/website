import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Topics from './components/Topics';
import About from './components/About';
import Editors from './components/Editors';
import Footer from './components/Footer';
import ReviewCriteria from './components/ReviewCriteria';
import { usePageTracking } from './lib/useAnalytics';
import { WipProvider } from './components/ui/WipContext';
import WipModal from './components/ui/WipModal';

function HomePage() {
  return (
    <>
      <Hero />
      <Topics />
      <About />
      <Editors />
    </>
  );
}

function AppContent() {
  // Track page views automatically
  usePageTracking();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editors/:editorPath" element={<Editors />} />
        <Route path="/review-criteria" element={<ReviewCriteria />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <WipProvider>
        <AppContent />
        <WipModal />
      </WipProvider>
    </Router>
  );
}

export default App;
