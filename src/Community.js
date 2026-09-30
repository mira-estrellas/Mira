import React, { useState } from 'react';
import NavBar from './NavBar';

function Community({ language, userZip, onTabChange }) {
  const [activeSection, setActiveSection] = useState('browse');
  const [maxMiles, setMaxMiles] = useState(10);
  const [listings, setListings] = useState([
    {
      id: 1,
      title: 'Solar Panel Cleaning Kit',
      category: '⚡ Energy & Solar',
      condition: 'Like New',
      zip: '45202',
      miles: '1.2',
      description: 'Complete kit for cleaning solar panels. Includes soft brush, squeegee and biodegradable soap.',
      verified: true,
      interested: 0,
      hasExpressedInterest: false,
      saved: false,
      reported: false,
    },
    {
      id: 2,
      title: 'Electric Lawn Mower',
      category: '🌱 Garden & Outdoor',
      condition: 'Good',
      zip: '45203',
      miles: '2.4',
      description: 'Cordless electric mower, fully charged and ready to use. Available weekends.',
      verified: false,
      interested: 3,
      hasExpressedInterest: false,
      saved: false,
      reported: false,
    },
    {
      id: 3,
      title: 'Home Energy Monitor',
      category: '🔧 Home & Repair',
      condition: 'Excellent',
      zip: '45201',
      miles: '0.8',
      description: 'Smart home energy monitor that tracks real time electricity usage by device.',
      verified: true,
      interested: 1,
      hasExpressedInterest: false,
      saved: false,
      reported: false,
    },
    {
      id: 4,
      title: 'EV Charging Cable',
      category: '🚗 EV & Transport',
      condition: 'Good',
      zip: '45205',
      miles: '3.1',
      description: 'Level 2 EV charging cable, compatible with most electric vehicles.',
      verified: true,
      interested: 2,
      hasExpressedInterest: false,
      saved: false,
      reported: false,
    },
  ]);

  const [newListing, setNewListing] = useState({
    title: '',
    category: '🔧 Home & Repair',
    condition: 'Good',
    zip: userZip || '',
    description: '',
  });

  const [filterCategory, setFilterCategory] = useState('All');
  const [reportedId, setReportedId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const categories = ['All', '🔧 Home & Repair', '⚡ Energy & Solar', '🌱 Garden & Outdoor', '🚗 EV & Transport', '📦 General'];
  const conditions = ['Like New', 'Excellent', 'Good', 'Fair'];

  const recycleCategories = [
    {
      icon: '📱',
      title: 'Electronics',
      tips: 'Old phones, laptops, TVs and cables. Never throw in regular trash — they contain toxic materials.',
      earth911Material: 'Electronics',
    },
    {
      icon: '🔋',
      title: 'Batteries',
      tips: 'Car batteries, AA/AAA, lithium-ion. Many hardware stores accept them for free.',
      earth911Material: 'Batteries',
    },
    {
      icon: '🪟',
      title: 'Glass',
      tips: 'Bottles and jars are widely accepted. Window glass and mirrors usually require special drop-off.',
      earth911Material: 'Glass',
    },
    {
      icon: '📦',
      title: 'Cardboard',
      tips: 'Break down boxes and keep dry. Greasy pizza boxes go in compost, not recycling.',
      earth911Material: 'Cardboard',
    },
    {
      icon: '🥤',
      title: 'Plastic',
      tips: 'Check the number on the bottom. #1 and #2 are most widely accepted. Plastic bags need special drop-off.',
      earth911Material: 'Plastic Bags',
    },
    {
      icon: '💡',
      title: 'Light Bulbs',
      tips: 'LED and CFL bulbs need special recycling. Many hardware stores accept them.',
      earth911Material: 'Light Bulbs',
    },
    {
      icon: '🛋️',
      title: 'Furniture',
      tips: 'Donate usable furniture first. For broken items check local bulk pickup or habitat for humanity.',
      earth911Material: 'Furniture',
    },
    {
      icon: '👕',
      title: 'Clothing',
      tips: 'Donate wearable clothes. Worn out textiles can go to H&M, Patagonia or TerraCycle.',
      earth911Material: 'Clothing',
    },
    {
      icon: '🚗',
      title: 'Motor Oil',
      tips: 'Never pour down the drain. Most auto parts stores accept used motor oil for free.',
      earth911Material: 'Motor Oil',
    },
    {
      icon: '💊',
      title: 'Medications',
      tips: 'Never flush medications. Use DEA drug take-back programs or approved disposal bags.',
      earth911Material: 'Medications',
    },
  ];

  const content = {
    EN: {
      title: 'Community',
      subtitle: 'Borrow and lend green tools with your neighbors.',
      browse: 'Browse',
      post: 'Post a Tool',
      saved: 'Saved',
      safety: 'Safety Tips',
      recycle: '♻️ Recycle',
      interested: 'Interested',
      alreadyInterested: 'Interest Sent ✓',
      save: '☆ Save',
      unsave: '⭐ Unsave',
      report: '🚩 Report Listing',
      verified: 'Verified Neighbor',
      postTitle: 'Tool Name',
      postCategory: 'Category',
      postCondition: 'Condition',
      postZip: 'Your Zip Code',
      postDesc: 'Description',
      postButton: 'Share Tool',
      postSuccess: 'Your tool has been listed! 🌱',
      milesAway: 'miles away',
      milesLabel: 'Show listings within',
      miles: 'miles',
      noListings: 'No listings found within this distance. Try increasing the range.',
      noSaved: 'No saved listings yet. Browse and save tools you\'re interested in!',
      recycleTitle: 'What can I recycle?',
      recycleSubtitle: 'Tap any category to find recycling locations near you.',
      findRecycling: '🗺️ Find Recycling Near You',
      findWater: '💧 Find Free Water Refill Stations',
      earth911Note: 'Opens Earth911 — the largest recycling directory in the US.',
      tapNote: 'Opens Tap — a worldwide map of free water refill stations.',
      safetyTips: [
        { icon: '📍', tip: 'Meet in a public place or your building lobby for exchanges.' },
        { icon: '👥', tip: 'Bring a friend or let someone know where you\'re going.' },
        { icon: '🔍', tip: 'Inspect the tool before agreeing to borrow it.' },
        { icon: '📸', tip: 'Take photos of the tool\'s condition before and after.' },
        { icon: '⏰', tip: 'Agree on a clear return date before borrowing.' },
        { icon: '🤝', tip: 'Leave an honest rating after your exchange.' },
      ],
      reportConfirm: 'Thank you for keeping Mira safe. This listing has been flagged for review.',
    },
    ES: {
      title: 'Comunidad',
      subtitle: 'Presta y toma prestado herramientas verdes con tus vecinos.',
      browse: 'Explorar',
      post: 'Publicar Herramienta',
      saved: 'Guardados',
      safety: 'Consejos de Seguridad',
      recycle: '♻️ Reciclar',
      interested: 'Interesado',
      alreadyInterested: 'Interés Enviado ✓',
      save: '☆ Guardar',
      unsave: '⭐ No Guardar',
      report: '🚩 Reportar Listado',
      verified: 'Vecino Verificado',
      postTitle: 'Nombre de la Herramienta',
      postCategory: 'Categoría',
      postCondition: 'Condición',
      postZip: 'Tu Código Postal',
      postDesc: 'Descripción',
      postButton: 'Compartir Herramienta',
      postSuccess: '¡Tu herramienta ha sido publicada! 🌱',
      milesAway: 'millas de distancia',
      milesLabel: 'Mostrar listados a menos de',
      miles: 'millas',
      noListings: 'No se encontraron listados en esta distancia. Intenta aumentar el rango.',
      noSaved: '¡Aún no hay listados guardados. Explora y guarda herramientas que te interesen!',
      recycleTitle: '¿Qué puedo reciclar?',
      recycleSubtitle: 'Toca cualquier categoría para encontrar lugares de reciclaje cerca de ti.',
      findRecycling: '🗺️ Encuentra Reciclaje Cerca de Ti',
      findWater: '💧 Encuentra Estaciones de Agua Gratis',
      earth911Note: 'Abre Earth911 — el directorio de reciclaje más grande de EE.UU.',
      tapNote: 'Abre Tap — un mapa mundial de estaciones de agua gratuitas.',
      safetyTips: [
        { icon: '📍', tip: 'Reúnete en un lugar público para los intercambios.' },
        { icon: '👥', tip: 'Lleva a un amigo o avisa a alguien adónde vas.' },
        { icon: '🔍', tip: 'Inspecciona la herramienta antes de aceptar tomarla prestada.' },
        { icon: '📸', tip: 'Toma fotos del estado de la herramienta antes y después.' },
        { icon: '⏰', tip: 'Acuerda una fecha de devolución clara antes de pedir prestado.' },
        { icon: '🤝', tip: 'Deja una calificación honesta después de tu intercambio.' },
      ],
      reportConfirm: 'Gracias por mantener Mira segura. Este listado ha sido marcado para revisión.',
    },
  };

  const current = content[language] || content.EN;

  const filteredListings = listings.filter(l => {
    const withinMiles = parseFloat(l.miles) <= maxMiles;
    const matchesCategory = filterCategory === 'All' || l.category === filterCategory;
    return withinMiles && matchesCategory;
  });

  const savedListings = listings.filter(l => l.saved);

  const handleInterested = (id) => {
    setListings(listings.map(l =>
      l.id === id && !l.hasExpressedInterest
        ? { ...l, interested: l.interested + 1, hasExpressedInterest: true }
        : l
    ));
  };

  const handleSave = (id) => {
    setListings(listings.map(l =>
      l.id === id ? { ...l, saved: !l.saved } : l
    ));
  };

  const handleReport = (id) => {
    setReportedId(id);
    setTimeout(() => setReportedId(null), 3000);
  };

  const handlePost = () => {
    if (!newListing.title || !newListing.description) return;
    const listing = {
      id: listings.length + 1,
      ...newListing,
      miles: '0.0',
      verified: false,
      interested: 0,
      hasExpressedInterest: false,
      saved: false,
      reported: false,
    };
    setListings([listing, ...listings]);
    setNewListing({ title: '', category: '🔧 Home & Repair', condition: 'Good', zip: userZip || '', description: '' });
    setSuccessMessage(current.postSuccess);
    setActiveSection('browse');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleEarth911 = (material) => {
    const zip = userZip || '';
    window.open(`https://search.earth911.com/?what=${encodeURIComponent(material)}&where=${zip}&radius=25&utm_source=mira`, '_blank');
  };

  const sectionStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    border: '2px solid #4F8C6F',
    fontSize: '15px',
    backgroundColor: '#FAF7F2',
    color: '#2C2C2C',
    boxSizing: 'border-box',
    outline: 'none',
    marginTop: '4px',
  };

  const tabStyle = (active) => ({
    flex: 1,
    padding: '10px',
    backgroundColor: active ? '#4F8C6F' : 'transparent',
    color: active ? 'white' : '#A0A0A0',
    border: 'none',
    borderRadius: '12px',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: active ? 'bold' : 'normal',
  });

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

          {successMessage && (
            <div style={{
              backgroundColor: '#EBF3EE',
              color: '#4F8C6F',
              padding: '12px 20px',
              borderRadius: '12px',
              marginBottom: '16px',
              fontSize: '14px',
              textAlign: 'center',
              animation: 'fadeIn 0.3s ease',
            }}>
              {successMessage}
            </div>
          )}

          {/* Section Tabs */}
          <div style={{
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '4px',
            marginBottom: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            gap: '4px',
          }}>
            {['browse', 'post', 'saved', 'recycle', 'safety'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={tabStyle(activeSection === section)}
              >
                {section === 'browse' ? current.browse :
                 section === 'post' ? current.post :
                 section === 'saved' ? current.saved :
                 section === 'recycle' ? current.recycle :
                 current.safety}
              </button>
            ))}
          </div>

          {/* Browse Section */}
          {activeSection === 'browse' && (
            <>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '16px 20px',
                marginBottom: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}>
                  <p style={{ color: '#2C2C2C', fontSize: '13px', margin: 0 }}>
                    📍 {current.milesLabel}
                  </p>
                  <span style={{
                    backgroundColor: '#EBF3EE',
                    color: '#4F8C6F',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                  }}>
                    {maxMiles} {current.miles}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={maxMiles}
                  onChange={(e) => setMaxMiles(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#4F8C6F',
                    cursor: 'pointer',
                  }}
                />
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '4px',
                }}>
                  <span style={{ color: '#A0A0A0', fontSize: '11px' }}>1 mi</span>
                  <span style={{ color: '#A0A0A0', fontSize: '11px' }}>25 mi</span>
                </div>
              </div>

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

              {filteredListings.length === 0 ? (
                <div style={{ ...sectionStyle, textAlign: 'center', padding: '48px 24px' }}>
                  <p style={{ fontSize: '48px', marginBottom: '16px' }}>📍</p>
                  <p style={{ color: '#A0A0A0', fontSize: '14px' }}>{current.noListings}</p>
                </div>
              ) : (
                filteredListings.map((listing) => (
                  <div key={listing.id} style={sectionStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <h3 style={{ color: '#2C2C2C', fontSize: '16px', margin: 0 }}>
                            {listing.title}
                          </h3>
                          {listing.verified && (
                            <span style={{
                              backgroundColor: '#EBF3EE',
                              color: '#4F8C6F',
                              fontSize: '11px',
                              padding: '2px 8px',
                              borderRadius: '10px',
                              fontWeight: 'bold',
                            }}>
                              🌱 {current.verified}
                            </span>
                          )}
                        </div>
                        <p style={{ color: '#A0A0A0', fontSize: '12px', margin: '4px 0' }}>
                          {listing.category} • {listing.condition} • {listing.miles} {current.milesAway} • {listing.zip}
                        </p>
                      </div>
                    </div>

                    <p style={{ color: '#666', fontSize: '13px', marginBottom: '12px' }}>
                      {listing.description}
                    </p>

                    {reportedId === listing.id ? (
                      <p style={{ color: '#4F8C6F', fontSize: '13px', textAlign: 'center', padding: '8px' }}>
                        {current.reportConfirm}
                      </p>
                    ) : (
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <button
                          onClick={() => handleInterested(listing.id)}
                          disabled={listing.hasExpressedInterest}
                          style={{
                            flex: 1,
                            padding: '10px',
                            borderRadius: '12px',
                            border: 'none',
                            backgroundColor: listing.hasExpressedInterest ? '#EBF3EE' : '#D4956A',
                            color: listing.hasExpressedInterest ? '#4F8C6F' : 'white',
                            fontSize: '13px',
                            cursor: listing.hasExpressedInterest ? 'default' : 'pointer',
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {listing.hasExpressedInterest
                            ? current.alreadyInterested
                            : `👋 ${current.interested} ${listing.interested > 0 ? `(${listing.interested})` : ''}`}
                        </button>
                        <button
                          onClick={() => handleSave(listing.id)}
                          style={{
                            flex: 1,
                            padding: '10px',
                            borderRadius: '12px',
                            border: `2px solid ${listing.saved ? '#4F8C6F' : '#E8E0D5'}`,
                            backgroundColor: listing.saved ? '#EBF3EE' : 'white',
                            color: listing.saved ? '#4F8C6F' : '#A0A0A0',
                            fontSize: '13px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {listing.saved ? current.unsave : current.save}
                        </button>
                        <button
                          onClick={() => handleReport(listing.id)}
                          style={{
                            padding: '10px 14px',
                            borderRadius: '12px',
                            border: '2px solid #E8E0D5',
                            backgroundColor: 'white',
                            color: '#A0A0A0',
                            fontSize: '13px',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {current.report}
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </>
          )}

          {/* Post Section */}
          {activeSection === 'post' && (
            <div style={sectionStyle}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <p style={{ color: '#A0A0A0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px 0' }}>
                    {current.postTitle}
                  </p>
                  <input
                    type="text"
                    value={newListing.title}
                    onChange={(e) => setNewListing({ ...newListing, title: e.target.value })}
                    style={inputStyle}
                    placeholder="e.g. Solar Panel Cleaning Kit"
                  />
                </div>

                <div>
                  <p style={{ color: '#A0A0A0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px 0' }}>
                    {current.postCategory}
                  </p>
                  <select
                    value={newListing.category}
                    onChange={(e) => setNewListing({ ...newListing, category: e.target.value })}
                    style={inputStyle}
                  >
                    {categories.filter(c => c !== 'All').map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <p style={{ color: '#A0A0A0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px 0' }}>
                    {current.postCondition}
                  </p>
                  <select
                    value={newListing.condition}
                    onChange={(e) => setNewListing({ ...newListing, condition: e.target.value })}
                    style={inputStyle}
                  >
                    {conditions.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <p style={{ color: '#A0A0A0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px 0' }}>
                    {current.postZip}
                  </p>
                  <input
                    type="number"
                    value={newListing.zip}
                    onChange={(e) => setNewListing({ ...newListing, zip: e.target.value })}
                    style={inputStyle}
                    placeholder="e.g. 45202"
                  />
                </div>

                <div>
                  <p style={{ color: '#A0A0A0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px 0' }}>
                    {current.postDesc}
                  </p>
                  <textarea
                    value={newListing.description}
                    onChange={(e) => setNewListing({ ...newListing, description: e.target.value })}
                    style={{ ...inputStyle, height: '100px', resize: 'vertical' }}
                    placeholder="Describe the tool, availability, any conditions..."
                  />
                </div>

                <button
                  onClick={handlePost}
                  disabled={!newListing.title || !newListing.description}
                  style={{
                    width: '100%',
                    backgroundColor: newListing.title && newListing.description ? '#D4956A' : '#E8E0D5',
                    color: newListing.title && newListing.description ? 'white' : '#A0A0A0',
                    border: 'none',
                    padding: '16px',
                    borderRadius: '30px',
                    fontSize: '16px',
                    cursor: newListing.title && newListing.description ? 'pointer' : 'not-allowed',
                    transition: 'all 0.3s ease',
                  }}
                >
                  🌱 {current.postButton}
                </button>
              </div>
            </div>
          )}

          {/* Saved Section */}
          {activeSection === 'saved' && (
            <>
              {savedListings.length === 0 ? (
                <div style={{ ...sectionStyle, textAlign: 'center', padding: '48px 24px' }}>
                  <p style={{ fontSize: '48px', marginBottom: '16px' }}>☆</p>
                  <p style={{ color: '#A0A0A0', fontSize: '14px' }}>{current.noSaved}</p>
                </div>
              ) : (
                savedListings.map((listing) => (
                  <div key={listing.id} style={sectionStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <div>
                        <h3 style={{ color: '#2C2C2C', fontSize: '16px', margin: 0 }}>{listing.title}</h3>
                        <p style={{ color: '#A0A0A0', fontSize: '12px', margin: '4px 0' }}>
                          {listing.category} • {listing.miles} {current.milesAway} • {listing.zip}
                        </p>
                      </div>
                      <button
                        onClick={() => handleSave(listing.id)}
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          fontSize: '20px',
                          cursor: 'pointer',
                        }}
                      >
                        ⭐
                      </button>
                    </div>
                    <p style={{ color: '#666', fontSize: '13px' }}>{listing.description}</p>
                  </div>
                ))
              )}
            </>
          )}

          {/* Recycle Section */}
          {activeSection === 'recycle' && (
            <>
              <h2 style={{ color: '#2C2C2C', fontSize: '20px', marginBottom: '8px' }}>
                {current.recycleTitle}
              </h2>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>
                {current.recycleSubtitle}
              </p>

              {/* Find Recycling Button */}
              <div style={{ ...sectionStyle, textAlign: 'center' }}>
                <button
                  onClick={() => window.open(`https://search.earth911.com/?where=${userZip || ''}&radius=25`, '_blank')}
                  style={{
                    width: '100%',
                    backgroundColor: '#4F8C6F',
                    color: 'white',
                    border: 'none',
                    padding: '16px',
                    borderRadius: '16px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginBottom: '8px',
                  }}
                >
                  {current.findRecycling}
                </button>
                <p style={{ color: '#A0A0A0', fontSize: '12px', margin: 0 }}>
                  {current.earth911Note}
                </p>
              </div>

              {/* Find Water Button */}
              <div style={{ ...sectionStyle, textAlign: 'center' }}>
                <button
                  onClick={() => window.open('https://www.findtap.com', '_blank')}
                  style={{
                    width: '100%',
                    backgroundColor: '#4F8C6F',
                    color: 'white',
                    border: 'none',
                    padding: '16px',
                    borderRadius: '16px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginBottom: '8px',
                  }}
                >
                  {current.findWater}
                </button>
                <p style={{ color: '#A0A0A0', fontSize: '12px', margin: 0 }}>
                  {current.tapNote}
                </p>
              </div>

              {/* Recycle Categories Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '12px',
                marginTop: '8px',
              }}>
                {recycleCategories.map((cat, index) => (
                  <div
                    key={index}
                    onClick={() => handleEarth911(cat.earth911Material)}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '16px',
                      padding: '16px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      border: '2px solid transparent',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4F8C6F'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '28px' }}>{cat.icon}</span>
                      <h3 style={{ color: '#2C2C2C', fontSize: '15px', margin: 0 }}>{cat.title}</h3>
                    </div>
                    <p style={{ color: '#666', fontSize: '13px', margin: '0 0 8px 0', lineHeight: '1.5' }}>
                      {cat.tips}
                    </p>
                    <span style={{
                      color: '#4F8C6F',
                      fontSize: '12px',
                      fontWeight: '600',
                    }}>
                      Find locations →
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Safety Tips Section */}
          {activeSection === 'safety' && (
            <div style={sectionStyle}>
              <p style={{ color: '#2C2C2C', fontSize: '16px', fontWeight: '500', marginBottom: '20px' }}>
                🛡️ Stay safe when exchanging tools with neighbors.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {current.safetyTips.map((tip, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '12px',
                    backgroundColor: '#FAF7F2',
                    borderRadius: '12px',
                  }}>
                    <span style={{ fontSize: '24px' }}>{tip.icon}</span>
                    <p style={{ color: '#2C2C2C', fontSize: '14px', margin: 0 }}>{tip.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      <NavBar activeTab="community" onTabChange={onTabChange} language={language} />
    </>
  );
}

export default Community;