import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Topics from './components/Topics';
import About from './components/About';
import Editors from './components/Editors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Topics />
      <About />
      <Editors />
      <Footer />
    </div>
  );
}

export default App;
