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
      name: 'Philips Hue White LED Smart Bulb Starter Kit',
      category: '💡 Lighting',
      price: 34.99,
      description: 'Energy efficient smart bulbs that use 75% less energy than incandescent. Voice and app controlled.',
      energySavings: 'Saves ~$10/year per bulb',
      rebateEligible: false,
      renterFriendly: true,
      popular: 98,
      amazonUrl: 'https://www.amazon.com/s?k=philips+hue+white+led+smart+bulb+starter+kit',
      homedepotUrl: 'https://www.homedepot.com/s/philips%20hue%20smart%20bulb',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=philips+hue+smart+bulb',
    },
    {
      id: 2,
      name: 'Google Nest Learning Thermostat',
      category: '🌡️ Heating & Cooling',
      price: 129.99,
      description: 'Learns your schedule and programs itself. Saves an average of 10-12% on heating and 15% on cooling.',
      energySavings: 'Saves ~$150/year',
      rebateEligible: true,
      renterFriendly: false,
      popular: 95,
      amazonUrl: 'https://www.amazon.com/s?k=google+nest+learning+thermostat',
      homedepotUrl: 'https://www.homedepot.com/s/nest%20learning%20thermostat',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=nest+learning+thermostat',
    },
    {
      id: 3,
      name: 'Jackery Solar Generator 300 Plus',
      category: '☀️ Solar',
      price: 299.99,
      description: 'Portable solar generator perfect for renters. No installation needed. Powers small appliances and charges devices.',
      energySavings: 'Offsets ~$20/month in electricity',
      rebateEligible: true,
      renterFriendly: true,
      popular: 87,
      amazonUrl: 'https://www.amazon.com/s?k=jackery+solar+generator+300',
      homedepotUrl: 'https://www.homedepot.com/s/jackery%20solar%20generator',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=jackery+solar+generator',
    },
    {
      id: 4,
      name: 'ChargePoint Home Flex EV Charger',
      category: '🚗 EV & Charging',
      price: 174.99,
      description: 'Level 2 home EV charger. Charges up to 9x faster than a standard outlet. Works with all EVs.',
      energySavings: 'Saves ~$600/year vs gas',
      rebateEligible: true,
      renterFriendly: false,
      popular: 91,
      amazonUrl: 'https://www.amazon.com/s?k=chargepoint+home+flex+ev+charger',
      homedepotUrl: 'https://www.homedepot.com/s/chargepoint%20home%20flex',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=chargepoint+home+flex',
    },
    {
      id: 5,
      name: 'Duck Brand Weatherstrip Door Seal',
      category: '🏠 Home & Insulation',
      price: 12.99,
      description: 'Easy peel and stick door seal that stops drafts instantly. No tools needed — perfect for renters.',
      energySavings: 'Saves ~$30/year on heating',
      rebateEligible: false,
      renterFriendly: true,
      popular: 82,
      amazonUrl: 'https://www.amazon.com/s?k=duck+brand+weatherstrip+door+seal',
      homedepotUrl: 'https://www.homedepot.com/s/weatherstrip%20door%20seal',
      bestbuyUrl: null,
    },
    {
      id: 6,
      name: 'Kasa Smart Power Strip EP40',
      category: '📦 General',
      price: 27.99,
      description: 'Smart power strip that eliminates phantom energy drain. Control each outlet individually via app.',
      energySavings: 'Saves ~$50/year',
      rebateEligible: false,
      renterFriendly: true,
      popular: 89,
      amazonUrl: 'https://www.amazon.com/s?k=kasa+smart+power+strip+EP40',
      homedepotUrl: 'https://www.homedepot.com/s/kasa%20smart%20power%20strip',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=kasa+smart+power+strip',
    },
    {
      id: 7,
      name: 'EcoFlow DELTA 2 Portable Power Station',
      category: '☀️ Solar',
      price: 499.99,
      description: 'Powerful portable solar generator for renters. Runs appliances, charges via solar panels. No installation.',
      energySavings: 'Offsets ~$40/month in electricity',
      rebateEligible: true,
      renterFriendly: true,
      popular: 85,
      amazonUrl: 'https://www.amazon.com/s?k=ecoflow+delta+2+portable+power+station',
      homedepotUrl: 'https://www.homedepot.com/s/ecoflow%20delta%202',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=ecoflow+delta+2',
    },
    {
      id: 8,
      name: 'Rain Bird Drip Irrigation Kit',
      category: '🌱 Garden & Outdoor',
      price: 34.99,
      description: 'Efficient drip irrigation that uses up to 50% less water than sprinklers. Easy DIY setup.',
      energySavings: 'Saves ~$40/year on water bills',
      rebateEligible: false,
      renterFriendly: true,
      popular: 78,
      amazonUrl: 'https://www.amazon.com/s?k=rain+bird+drip+irrigation+kit',
      homedepotUrl: 'https://www.homedepot.com/s/rain%20bird%20drip%20irrigation',
      bestbuyUrl: null,
    },
    {
      id: 9,
      name: 'Rheem Performance Platinum Heat Pump Water Heater',
      category: '🌡️ Heating & Cooling',
      price: 899.00,
      description: 'Uses 70% less energy than traditional water heaters. Qualifies for federal tax credit up to $2,000.',
      energySavings: 'Saves ~$330/year',
      rebateEligible: true,
      renterFriendly: false,
      popular: 84,
      amazonUrl: 'https://www.amazon.com/s?k=rheem+heat+pump+water+heater',
      homedepotUrl: 'https://www.homedepot.com/s/rheem%20heat%20pump%20water%20heater',
      bestbuyUrl: null,
    },
    {
      id: 10,
      name: 'Lutron Caseta Wireless Smart Dimmer Switch',
      category: '💡 Lighting',
      price: 39.95,
      description: 'Smart dimmer that extends bulb life and reduces energy use. Works without neutral wire — easy install.',
      energySavings: 'Saves ~$25/year per switch',
      rebateEligible: false,
      renterFriendly: false,
      popular: 86,
      amazonUrl: 'https://www.amazon.com/s?k=lutron+caseta+wireless+smart+dimmer',
      homedepotUrl: 'https://www.homedepot.com/s/lutron%20caseta%20dimmer',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=lutron+caseta+dimmer',
    },
    {
      id: 11,
      name: 'Renogy 100W Portable Solar Panel',
      category: '☀️ Solar',
      price: 89.99,
      description: 'Foldable portable solar panel for renters. Charges power stations, phones, laptops. No installation.',
      energySavings: 'Offsets ~$10/month in electricity',
      rebateEligible: false,
      renterFriendly: true,
      popular: 83,
      amazonUrl: 'https://www.amazon.com/s?k=renogy+100w+portable+solar+panel',
      homedepotUrl: 'https://www.homedepot.com/s/renogy%20portable%20solar%20panel',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=renogy+portable+solar+panel',
    },
    {
      id: 12,
      name: 'Owens Corning R-38 Attic Insulation',
      category: '🏠 Home & Insulation',
      price: 54.97,
      description: 'Blown-in attic insulation that dramatically reduces heating and cooling costs for homeowners.',
      energySavings: 'Saves ~$200/year on energy',
      rebateEligible: true,
      renterFriendly: false,
      popular: 76,
      amazonUrl: 'https://www.amazon.com/s?k=owens+corning+attic+insulation+r38',
      homedepotUrl: 'https://www.homedepot.com/s/owens%20corning%20attic%20insulation',
      bestbuyUrl: null,
    },
  ];

  const content = {
    EN: {
      title: 'Shop',
      subtitle: 'Curated clean energy products from trusted sellers.',
      searchPlaceholder: 'Search products...',
      searchOn: 'Search across retailers:',
      searchAmazon: '🛒 Amazon',
      searchHomeDepot: '🏠 Home Depot',
      searchBestBuy: '💻 Best Buy',
      searchLowes: '🔨 Lowe\'s',
      searchWalmart: '🏪 Walmart',
      renterToggle: 'Renter Friendly Only',
      sortPopular: 'Most Popular',
      sortPrice: 'Price: Low to High',
      maxPricePlaceholder: 'Max price $',
      rebadge: '💰 Rebate Eligible',
      renterBadge: '🏠 Renter Friendly',
      viewOn: 'View on',
      save: '☆',
      saved: '⭐',
      noResults: 'No products match your filters. Try adjusting your search or price range.',
      priceNote: '* Prices are approximate and may vary by retailer.',
    },
    ES: {
      title: 'Tienda',
      subtitle: 'Productos de energía limpia de vendedores de confianza.',
      searchPlaceholder: 'Buscar productos...',
      searchOn: 'Buscar en tiendas:',
      searchAmazon: '🛒 Amazon',
      searchHomeDepot: '🏠 Home Depot',
      searchBestBuy: '💻 Best Buy',
      searchLowes: '🔨 Lowe\'s',
      searchWalmart: '🏪 Walmart',
      renterToggle: 'Solo Apto para Inquilinos',
      sortPopular: 'Más Popular',
      sortPrice: 'Precio: Menor a Mayor',
      maxPricePlaceholder: 'Precio máx $',
      rebadge: '💰 Elegible para Reembolso',
      renterBadge: '🏠 Apto para Inquilinos',
      viewOn: 'Ver en',
      save: '☆',
      saved: '⭐',
      noResults: 'Ningún producto coincide con tus filtros. Intenta ajustar tu búsqueda.',
      priceNote: '* Los precios son aproximados y pueden variar según el minorista.',
    },
  };

  const current = content[language] || content.EN;

  const handleSave = (id) => {
    setSavedProducts(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleRetailerSearch = (retailer) => {
    if (!search.trim()) return;
    const query = encodeURIComponent(search + ' energy efficient');
    const urls = {
      amazon: `https://www.amazon.com/s?k=${query}`,
      homedepot: `https://www.homedepot.com/s/${query}`,
      bestbuy: `https://www.bestbuy.com/site/searchpage.jsp?st=${query}`,
      lowes: `https://www.lowes.com/search?searchTerm=${query}`,
      walmart: `https://www.walmart.com/search?q=${query}`,
    };
    window.open(urls[retailer], '_blank');
  };

  const filteredProducts = products
    .filter(p => {
      const matchesSearch = !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
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
          <div style={{ position: 'relative', marginBottom: '12px' }}>
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

          {/* Retailer Search Buttons */}
          {search.trim() && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '16px',
              marginBottom: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}>
              <p style={{ color: '#2C2C2C', fontSize: '13px', fontWeight: '500', margin: '0 0 12px 0' }}>
                {current.searchOn}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[
                  { key: 'amazon', label: current.searchAmazon },
                  { key: 'homedepot', label: current.searchHomeDepot },
                  { key: 'bestbuy', label: current.searchBestBuy },
                  { key: 'lowes', label: current.searchLowes },
                  { key: 'walmart', label: current.searchWalmart },
                ].map((retailer) => (
                  <button
                    key={retailer.key}
                    onClick={() => handleRetailerSearch(retailer.key)}
                    style={{
                      padding: '10px 16px',
                      borderRadius: '20px',
                      border: '2px solid #4F8C6F',
                      backgroundColor: '#EBF3EE',
                      color: '#4F8C6F',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {retailer.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filters */}
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

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                  {/* Header */}
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

                  {/* Name and Price */}
                  <div>
                    <h3 style={{ color: '#2C2C2C', fontSize: '15px', margin: '0 0 4px 0', lineHeight: '1.4' }}>
                      {product.name}
                    </h3>
                    <p style={{ color: '#4F8C6F', fontSize: '20px', fontWeight: '700', margin: 0 }}>
                      ~${product.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Description */}
                  <p style={{ color: '#666', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>
                    {product.description}
                  </p>

                  {/* Energy Savings */}
                  <div style={{
                    backgroundColor: '#FDF0E8',
                    borderRadius: '8px',
                    padding: '8px 12px',
                  }}>
                    <p style={{ color: '#D4956A', fontSize: '12px', margin: 0, fontWeight: '500' }}>
                      ⚡ {product.energySavings}
                    </p>
                  </div>

                  {/* Badges */}
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

                  {/* Retailer Buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 'auto' }}>
                    {product.amazonUrl && (
                      <button
                        onClick={() => window.open(product.amazonUrl, '_blank')}
                        style={{
                          width: '100%',
                          textAlign: 'center',
                          backgroundColor: '#FF9900',
                          color: 'white',
                          padding: '10px',
                          borderRadius: '10px',
                          fontSize: '13px',
                          fontWeight: '600',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        🛒 {current.viewOn} Amazon
                      </button>
                    )}
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {product.homedepotUrl && (
                        <button
                          onClick={() => window.open(product.homedepotUrl, '_blank')}
                          style={{
                            flex: 1,
                            textAlign: 'center',
                            backgroundColor: '#F96302',
                            color: 'white',
                            padding: '8px',
                            borderRadius: '10px',
                            fontSize: '12px',
                            fontWeight: '600',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          🏠 Home Depot
                        </button>
                      )}
                      {product.bestbuyUrl && (
                        <button
                          onClick={() => window.open(product.bestbuyUrl, '_blank')}
                          style={{
                            flex: 1,
                            textAlign: 'center',
                            backgroundColor: '#003B64',
                            color: 'white',
                            padding: '8px',
                            borderRadius: '10px',
                            fontSize: '12px',
                            fontWeight: '600',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          💻 Best Buy
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Price note */}
          <p style={{ color: '#A0A0A0', fontSize: '12px', marginTop: '24px', textAlign: 'center' }}>
            {current.priceNote}
          </p>

        </div>
      </div>
      <NavBar activeTab="shop" onTabChange={onTabChange} language={language} />
    </>
  );
}

export default Shop;