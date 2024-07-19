
import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="grid capitalize min-h-screen">
      <Header />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}

export default App;
