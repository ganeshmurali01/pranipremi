import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Cart from './components/Cart';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="app">
      <Navbar 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
        onBookNow={() => setIsBookingOpen(true)}
      />

      <main>
        <Hero 
          setCurrentPage={setCurrentPage} 
          onBookNow={() => setIsBookingOpen(true)}
        />
        <Services />
        <Products />
        <Testimonials />
        <Cart />
      </main>

      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      <Footer />
    </div>
  );
}

export default App;