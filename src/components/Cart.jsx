import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Cart = ({ onClose }) => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    cartTotal 
  } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'PET10') {
      setDiscount(cartTotal * 0.1);
    } else if (promoCode.toUpperCase() === 'FIRST20') {
      setDiscount(cartTotal * 0.2);
    } else {
      alert('Invalid promo code');
    }
  };

  const handleCheckout = () => {
    const items = cartItems.map(item => `${item.name} (x${item.quantity})`).join(', ');
    const total = (cartTotal - discount).toLocaleString();
    const message = encodeURIComponent(
      `Hi! I'd like to place an order:\n\nItems: ${items}\n\nTotal: ₹${total}\n\nPlease confirm my order.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content cart-modal" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>
            <i className="fas fa-shopping-cart"></i>
            Your Cart
          </h2>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="empty-icon">
              <i className="fas fa-shopping-basket"></i>
            </div>
            <h3>Your cart is empty</h3>
            <p>Add some products to get started!</p>
            <button className="btn btn-primary" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p className="item-price">₹{item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="item-quantity">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  
                  <div className="item-total">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>
                  
                  <button 
                    className="item-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-promo">
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={applyPromo}>Apply</button>
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
              {discount > 0 && (
                <div className="summary-row discount">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
              )}
              <div className="summary-row">
                <span>Shipping</span>
                <span className="free-shipping">FREE</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{(cartTotal - discount).toLocaleString()}</span>
              </div>
            </div>

            <div className="cart-actions">
              <button className="btn btn-outline" onClick={clearCart}>
                <i className="fas fa-trash"></i>
                Clear Cart
              </button>
              <button className="btn btn-primary" onClick={handleCheckout}>
                <i className="fab fa-whatsapp"></i>
                Checkout via WhatsApp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;