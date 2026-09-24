import React, { useState } from 'react';
import NavBar from './NavBar';

function Shop({ language, onTabChange }) {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [renterOnly, setRenterOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [maxPrice, setMaxPrice] = useState('');
  const [savedProducts, setSavedProducts] = useState([]);

  const categories = ['All', '💡 Lighting', '🌡️ Heating & Cooling', '☀️ Solar', '🚗 EV & Charging', '🏠 Home & Insulation', '🌱 Garden & Outdoor', '📦 General'];

  const products = [
    {
      id: 1,
      name: 'Philips LED Smart Bulb Pack (4)',
      category: '💡 Lighting',
      price: 14.99,
      description: 'Energy efficient smart bulbs compatible with Alexa and Google Home. Lasts up to 25,000 hours.',
      energySavings: 'Saves ~$8/year per bulb',
      rebateEligible: false,
      renterFriendly: true,
      popular: 98,
      url: 'https://www.amazon.com',
    },
    {
      id: 2,
      name: 'Nest Learning Thermostat',
      category: '🌡️ Heating & Cooling',
      price: 129.99,
      description: 'Learns your schedule and programs itself. Can reduce heating and cooling bills significantly.',
      energySavings: 'Saves ~$150/year',
      rebateEligible: true,
      renterFriendly: false,
      popular: 95,
      url: 'https://www.amazon.com',
    },
    {
      id: 3,
      name: 'Jackery Solar Generator 300',
      category: '☀️ Solar',
      price: 299.99,
      description: 'Portable solar generator perfect for renters. No installation needed. Powers small appliances.',
      energySavings: 'Offsets ~$20/month',
      rebateEligible: true,
      renterFriendly: true,
      popular: 87,
      url: 'https://www.amazon.com',
    },
    {
      id: 4,
      name: 'ChargePoint Home Flex EV Charger',
      category: '🚗 EV & Charging',
      price: 179.99,
      description: 'Level 2 home EV charger. Charges up to 9x faster than a standard outlet.',
      energySavings: 'Saves ~$600/year vs gas',
      rebateEligible: true,
      renterFriendly: false,
      popular: 91,
      url: 'https://www.amazon.com',
    },
    {
      id: 5,
      name: 'Weatherstrip Door Seal Kit',
      category: '🏠 Home & Insulation',
      price: 12.99,
      description: 'Easy to install door seal that prevents drafts and reduces heating and cooling costs.',
      energySavings: 'Saves ~$30/year',
      rebateEligible: false,
      renterFriendly: true,
      popular: 82,
      url: 'https://www.amazon.com',
    },
    {
      id: 6,
      name: 'Kasa Smart Power Strip',
      category: '📦 General',
      price: 27.99,
      description: 'Smart power strip that eliminates phantom energy drain. Control each outlet individually.',
      energySavings: 'Saves ~$50/year',
      rebateEligible: false,
      renterFriendly: true,
      popular: 89,
      url: 'https://www.amazon.com',
    },
    {
      id: 7,
      name: 'Solatube Solar Skylight',
      category: '☀️ Solar',
      price: 449.99,
      description: 'Brings natural daylight into any room, reducing the need for electric lighting during the day.',
      energySavings: 'Saves ~$100/year',
      rebateEligible: true,
      renterFriendly: false,
      popular: 74,
      url: 'https://www.amazon.com',
    },
    {
      id: 8,
      name: 'Rain Bird Drip Irrigation Kit',
      category: '🌱 Garden & Outdoor',
      price: 34.99,
      description: 'Efficient drip irrigation system that uses up to 50% less water than traditional sprinklers.',
      energySavings: 'Saves ~$40/year on water',
      rebateEligible: false,
      renterFriendly: true,
      popular: 78,
      url: 'https://www.amazon.com',
    },
    {
      id: 9,
      name: 'GE Heat Pump Water Heater',
      category: '🌡️ Heating & Cooling',
      price: 899.99,
      description: 'Uses 70% less energy than traditional water heaters. Qualifies for federal tax credit.',
      energySavings: 'Saves ~$330/year',
      rebateEligible: true,
      renterFriendly: false,
      popular: 85,
      url: 'https://www.amazon.com',
    },
    {
      id: 10,
      name: 'Lutron Caseta Smart Dimmer',
      category: '💡 Lighting',
      price: 39.99,
      description: 'Smart dimmer switch that extends bulb life and reduces energy use. Easy DIY install.',
      energySavings: 'Saves ~$25/year',
      rebateEligible: false,
      renterFriendly: false,
      popular: 86,
      url: 'https://www.amazon.com',
    },
  ];

  const content = {
    EN: {
      title: 'Shop',
      subtitle: 'Curated clean energy products from trusted sellers.',
      searchPlaceholder: 'Search products...',
      renterToggle: 'Renter Friendly Only',
      sortPopular: 'Most Popular',
      sortPrice: 'Price: Low to High',
      maxPricePlaceholder: 'Max price $',
      rebadge: '💰 Rebate Eligible',
      renterBadge: '🏠 Renter Friendly',
      viewDeal: 'View Deal',
      save: '☆',
      saved: '⭐',
      noResults: 'No products match your filters. Try adjusting your search or price range.',
      popular: 'popular',
    },
    ES: {
      title: 'Tienda',
      subtitle: 'Productos de energía limpia de vendedores de confianza.',
      searchPlaceholder: 'Buscar productos...',
      renterToggle: 'Solo Apto para Inquilinos',
      sortPopular: 'Más Popular',
      sortPrice: 'Precio: Menor a Mayor',
      maxPricePlaceholder: 'Precio máx $',
      rebadge: '💰 Elegible para Reembolso',
      renterBadge: '🏠 Apto para Inquilinos',
      viewDeal: 'Ver Oferta',
      save: '☆',
      saved: '⭐',
      noResults: 'Ningún producto coincide con tus filtros. Intenta ajustar tu búsqueda.',
      popular: 'popular',
    },
  };

  const current = content[language] || content.EN;

  const handleSave = (id) => {
    setSavedProducts(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const filteredProducts = products
    .filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = filterCategory === 'All' || p.category === filterCategory;
      const matchesRenter = !renterOnly || p.renterFriendly;
      const matchesPrice = !maxPrice || p.price <= parseFloat(maxPrice);
      return matchesSearch && matchesCategory && matchesRenter && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      return b.popular - a.popular;
    });

  const sectionStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  };

  return (
    <>
      <div style={{
        backgroundColor: '#F0EBE3',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '24px',
        paddingBottom: '100px',
      }}>
        <div style={{ width: '100%', maxWidth: '900px' }}>

          <h1 style={{ color: '#4F8C6F', fontSize: '28px', marginBottom: '8px', marginTop: '16px' }}>
            {current.title}
          </h1>
          <p style={{ color: '#2C2C2C', fontSize: '14px', marginBottom: '24px' }}>
            {current.subtitle}
          </p>

          {/* Search Bar */}
          <div style={{ position: 'relative', marginBottom: '16px' }}>
            <span style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '16px',
            }}>🔍</span>
            <input
              type="text"
              placeholder={current.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 44px',
                borderRadius: '12px',
                border: '2px solid #4F8C6F',
                fontSize: '15px',
                backgroundColor: 'white',
                color: '#2C2C2C',
                boxSizing: 'border-box',
                outline: 'none',
              }}
            />
          </div>

          {/* Filters Row */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '16px',
            marginBottom: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  borderRadius: '12px',
                  border: '2px solid #E8E0D5',
                  fontSize: '13px',
                  backgroundColor: '#FAF7F2',
                  color: '#2C2C2C',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                <option value="popular">{current.sortPopular}</option>
                <option value="price">{current.sortPrice}</option>
              </select>

              <div style={{ position: 'relative', flex: 1 }}>
                <span style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#4F8C6F',
                  fontSize: '14px',
                }}>$</span>
                <input
                  type="number"
                  placeholder={current.maxPricePlaceholder}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 28px',
                    borderRadius: '12px',
                    border: '2px solid #E8E0D5',
                    fontSize: '13px',
                    backgroundColor: '#FAF7F2',
                    color: '#2C2C2C',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <p style={{ color: '#2C2C2C', fontSize: '13px', margin: 0 }}>
                🏠 {current.renterToggle}
              </p>
              <button
                onClick={() => setRenterOnly(!renterOnly)}
                style={{
                  backgroundColor: renterOnly ? '#4F8C6F' : '#E8E0D5',
                  border: 'none',
                  borderRadius: '20px',
                  width: '52px',
                  height: '28px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: renterOnly ? '26px' : '3px',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                }}/>
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '12px',
            marginBottom: '16px',
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: `2px solid ${filterCategory === cat ? '#4F8C6F' : '#E8E0D5'}`,
                  backgroundColor: filterCategory === cat ? '#EBF3EE' : 'white',
                  color: filterCategory === cat ? '#4F8C6F' : '#A0A0A0',
                  fontSize: '13px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p style={{ color: '#A0A0A0', fontSize: '13px', marginBottom: '12px' }}>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>

          {/* Product Cards */}
          {filteredProducts.length === 0 ? (
            <div style={{ ...sectionStyle, textAlign: 'center', padding: '48px 24px' }}>
              <p style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</p>
              <p style={{ color: '#A0A0A0', fontSize: '14px' }}>{current.noResults}</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '12px',
            }}>
              {filteredProducts.map((product) => (
                <div key={product.id} style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <p style={{ color: '#A0A0A0', fontSize: '11px', margin: 0 }}>{product.category}</p>
                    <button
                      onClick={() => handleSave(product.id)}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        fontSize: '20px',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      {savedProducts.includes(product.id) ? current.saved : current.save}
                    </button>
                  </div>

                  <div>
                    <h3 style={{ color: '#2C2C2C', fontSize: '15px', margin: '0 0 4px 0', lineHeight: '1.4' }}>
                      {product.name}
                    </h3>
                    <p style={{ color: '#4F8C6F', fontSize: '20px', fontWeight: '700', margin: 0 }}>
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <p style={{ color: '#666', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>
                    {product.description}
                  </p>

                  <div style={{
                    backgroundColor: '#FDF0E8',
                    borderRadius: '8px',
                    padding: '8px 12px',
                  }}>
                    <p style={{ color: '#D4956A', fontSize: '12px', margin: 0, fontWeight: '500' }}>
                      ⚡ {product.energySavings}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {product.rebateEligible && (
                      <span style={{
                        backgroundColor: '#EBF3EE',
                        color: '#4F8C6F',
                        fontSize: '11px',
                        padding: '4px 8px',
                        borderRadius: '8px',
                        fontWeight: '600',
                      }}>
                        {current.rebadge}
                      </span>
                    )}
                    {product.renterFriendly && (
                      <span style={{
                        backgroundColor: '#EBF3EE',
                        color: '#4F8C6F',
                        fontSize: '11px',
                        padding: '4px 8px',
                        borderRadius: '8px',
                        fontWeight: '600',
                      }}>
                        {current.renterBadge}
                      </span>
                    )}
                  </div>

                  
                  <button
                    onClick={() => window.open(product.url, '_blank')}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'center',
                      backgroundColor: '#D4956A',
                      color: 'white',
                      padding: '12px',
                      borderRadius: '12px',
                      fontSize: '14px',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer',
                      marginTop: 'auto',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {current.viewDeal}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <NavBar activeTab="shop" onTabChange={onTabChange} language={language} />
    </>
  );
}

export default Shop;