import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Products = ({ fullPage, addToCartEnabled }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const { addToCart } = useCart();
  const [addedProducts, setAddedProducts] = useState([]);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'food', label: 'Pet Food' },
    { id: 'toys', label: 'Toys' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'grooming', label: 'Grooming' },
    { id: 'health', label: 'Health Care' },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Dog Food - Chicken",
      category: "food",
      price: 1299,
      originalPrice: 1599,
      rating: 4.8,
      reviews: 256,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Interactive Ball Launcher",
      category: "toys",
      price: 2499,
      originalPrice: 2999,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=800",
      badge: "New"
    },
    {
      id: 3,
      name: "Luxury Pet Bed - Large",
      category: "accessories",
      price: 3999,
      originalPrice: 4999,
      rating: 4.9,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800",
      badge: "Popular"
    },
    {
      id: 4,
      name: "Professional Grooming Kit",
      category: "grooming",
      price: 1899,
      originalPrice: 2299,
      rating: 4.7,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1516222338250-863216ce01ea?w=800",
      badge: ""
    },
    {
      id: 5,
      name: "Cat Scratching Tower",
      category: "toys",
      price: 4599,
      originalPrice: 5499,
      rating: 4.8,
      reviews: 278,
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800",
      badge: "Hot"
    },
    {
      id: 6,
      name: "Premium Cat Food - Salmon",
      category: "food",
      price: 899,
      originalPrice: 1099,
      rating: 4.5,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800",
      badge: ""
    },
    {
      id: 7,
      name: "Flea & Tick Collar",
      category: "health",
      price: 599,
      originalPrice: 799,
      rating: 4.4,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800",
      badge: "Essential"
    },
    {
      id: 8,
      name: "LED Light-up Leash",
      category: "accessories",
      price: 799,
      originalPrice: 999,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800",
      badge: "Safety"
    },
    {
      id: 9,
      name: "Automatic Pet Feeder",
      category: "accessories",
      price: 5999,
      originalPrice: 7499,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1585499193151-0f50d54c4e0c?w=800",
      badge: "Smart"
    },
    {
      id: 10,
      name: "Pet Shampoo - Natural",
      category: "grooming",
      price: 399,
      originalPrice: 499,
      rating: 4.3,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800",
      badge: "Organic"
    },
    {
      id: 11,
      name: "Dental Care Treats",
      category: "health",
      price: 449,
      originalPrice: 549,
      rating: 4.5,
      reviews: 201,
      image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=800",
      badge: ""
    },
    {
      id: 12,
      name: "Squeaky Plush Toy Set",
      category: "toys",
      price: 699,
      originalPrice: 899,
      rating: 4.7,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=800",
      badge: "Bundle"
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return b.reviews - a.reviews;
    }
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProducts(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedProducts(prev => prev.filter(id => id !== product.id));
    }, 1500);
  };

  return (
    <section className={`products-section ${fullPage ? 'full-page' : ''}`} id="products">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <i className="fas fa-box"></i>
            Pet Products
          </span>
          <h2 className="section-title">
            Everything Your Pet <span className="highlight">Needs & Loves</span>
          </h2>
          <p className="section-subtitle">
            Quality products for happy and healthy pets
          </p>
        </div>

        <div className="products-toolbar">
          <div className="category-pills">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          
          <div className="sort-dropdown">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {sortedProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card"
              style={{ '--delay': `${index * 0.05}s` }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
                <div className="product-discount">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </div>
                <div className="product-actions">
                  <button className="action-btn wishlist">
                    <i className="far fa-heart"></i>
                  </button>
                  <button className="action-btn quick-view">
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
              
              <div className="product-content">
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                      ></i>
                    ))}
                  </div>
                  <span className="rating-text">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                <h3 className="product-name">{product.name}</h3>
                
                <div className="product-pricing">
                  <span className="current-price">₹{product.price.toLocaleString()}</span>
                  <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                </div>
                
                {addToCartEnabled && (
                  <button
                    className={`btn btn-add-cart ${addedProducts.includes(product.id) ? 'added' : ''}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={addedProducts.includes(product.id)}
                  >
                    {addedProducts.includes(product.id) ? (
                      <>
                        <i className="fas fa-check"></i>
                        Added!
                      </>
                    ) : (
                      <>
                        <i className="fas fa-shopping-cart"></i>
                        Add to Cart
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {fullPage && (
          <div className="load-more">
            <button className="btn btn-outline">
              <i className="fas fa-sync-alt"></i>
              Load More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;