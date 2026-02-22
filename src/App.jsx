import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PetStore from './components/PetStore';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Cart from './components/Cart';
import UserProfile from './components/UserProfile';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  let pageContent;

  if (currentPage === 'home') {
    pageContent = (
      <>
        <Hero setCurrentPage={setCurrentPage} />
        <Services />
        <PetStore />
        <Products addToCartEnabled={true} />
        <Testimonials />
      </>
    );
  } else if (currentPage === 'services') {
    pageContent = <Services fullPage={true} />;
  } else if (currentPage === 'products') {
    pageContent = <Products fullPage={true} addToCartEnabled={true} />;
  } else if (currentPage === 'pets') {
    pageContent = <PetStore fullPage={true} />;
  }

  return (
    <CartProvider>
      <div className="app">
        <Navbar 
          setCurrentPage={setCurrentPage} 
          currentPage={currentPage}
          setShowCart={setShowCart}
          setShowProfile={setShowProfile}
        />
        
        <main>
          {pageContent}
        </main>

        <Footer setCurrentPage={setCurrentPage} />
        <WhatsAppButton />
        
        {showCart && <Cart onClose={() => setShowCart(false)} />}
        {showProfile && <UserProfile onClose={() => setShowProfile(false)} />}
      </div>
    </CartProvider>
  );
}

export default App;