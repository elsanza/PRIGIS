import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Terms from './components/Terms';
import Help from './components/Help';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Features />
      <Terms />
      <Help />
      <Footer />
    </div>
  );
}

export default App;