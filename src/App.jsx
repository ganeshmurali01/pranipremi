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

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Services />
            <PetStore />
            <Products addToCartEnabled={true} />
            <Testimonials />
          </>
        );
      case 'services':
        return <Services fullPage={true} />;
      case 'products':
        return <Products fullPage={true} addToCartEnabled={true} />;
      case 'pets':
        return <PetStore fullPage={true} />;
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Services />
            <PetStore />
            <Products addToCartEnabled={true} />
            <Testimonials />
          </>
        );
    }
  };

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
          {renderPage()}
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