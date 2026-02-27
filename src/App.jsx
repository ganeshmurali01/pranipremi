import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app">
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <main>
        <Hero setCurrentPage={setCurrentPage} />
        <Services />
        <Products />
        <Testimonials />
        <Cart />
      </main>

      <Footer />
    </div>
  );
}

export default App;