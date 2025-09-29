import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Topics from './components/Topics';
import About from './components/About';
import Editors from './components/Editors';
import Footer from './components/Footer';

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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/editors/:editorPath" element={<Editors />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
