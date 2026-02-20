import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const UserProfile = ({ onClose }) => {
  const { user, login, logout } = useCart();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Simulate login
      login({
        name: formData.email.split('@')[0],
        email: formData.email,
        phone: '9876543210',
        address: 'Mumbai, India',
        avatar: null,
        orders: [
          { id: 1, date: '2024-01-15', total: 2599, status: 'Delivered' },
          { id: 2, date: '2024-01-20', total: 1899, status: 'In Transit' },
        ]
      });
    } else {
      // Simulate registration
      login({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        avatar: null,
        orders: []
      });
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (user) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content profile-modal" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>

          <div className="profile-header">
            <div className="profile-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>

          <div className="profile-tabs">
            <div className="profile-section">
              <h3><i className="fas fa-user"></i> Profile Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">Name</span>
                  <span className="value">{user.name}</span>
                </div>
                <div className="info-item">
                  <span className="label">Email</span>
                  <span className="value">{user.email}</span>
                </div>
                <div className="info-item">
                  <span className="label">Phone</span>
                  <span className="value">{user.phone}</span>
                </div>
                <div className="info-item">
                  <span className="label">Address</span>
                  <span className="value">{user.address}</span>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h3><i className="fas fa-shopping-bag"></i> Recent Orders</h3>
              {user.orders.length > 0 ? (
                <div className="orders-list">
                  {user.orders.map(order => (
                    <div key={order.id} className="order-item">
                      <div className="order-info">
                        <span className="order-id">Order #{order.id}</span>
                        <span className="order-date">{order.date}</span>
                      </div>
                      <div className="order-details">
                        <span className="order-total">₹{order.total}</span>
                        <span className={`order-status ${order.status.toLowerCase().replace(' ', '-')}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-orders">No orders yet</p>
              )}
            </div>

            <div className="profile-section">
              <h3><i className="fas fa-paw"></i> My Pets</h3>
              <button className="btn btn-outline btn-full">
                <i className="fas fa-plus"></i>
                Add Pet Profile
              </button>
            </div>
          </div>

          <button className="btn btn-logout" onClick={logout}>
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content auth-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="auth-header">
          <div className="auth-logo">
            <i className="fas fa-paw"></i>
          </div>
          <h2>{isLogin ? 'Welcome Back!' : 'Join PraniPremi'}</h2>
          <p>{isLogin ? 'Sign in to your account' : 'Create your account'}</p>
        </div>

        <div className="auth-tabs">
          <button 
            className={isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Phone Number</label>
              <div className="input-wrapper">
                <i className="fas fa-phone"></i>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Address</label>
              <div className="input-wrapper">
                <i className="fas fa-map-marker-alt"></i>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {isLogin && (
            <div className="form-options">
              <label className="checkbox-wrapper">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="forgot-link">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-full">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        <div className="social-login">
          <button className="social-btn google">
            <i className="fab fa-google"></i>
            Google
          </button>
          <button className="social-btn facebook">
            <i className="fab fa-facebook-f"></i>
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;