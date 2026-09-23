import React, { useState } from 'react';
import NavBar from './NavBar';

function Profile({ language, zipCode, housingType, budget, onUpdateProfile, onTabChange }) {

  const [editing, setEditing] = useState(false);
  const [newZip, setNewZip] = useState(zipCode);
  const [newHousing, setNewHousing] = useState(housingType);
  const [newBudget, setNewBudget] = useState(budget || '');
  const [saved, setSaved] = useState(false);

  const content = {
    EN: {
      title: 'My Profile',
      subtitle: 'Manage your preferences and saved information.',
      location: 'Location',
      housing: 'Housing Type',
      monthlyBudget: 'Monthly Budget',
      renter: 'Renter',
      homeowner: 'Homeowner',
      flexible: 'Flexible',
      edit: 'Edit Profile',
      save: 'Save Changes',
      cancel: 'Cancel',
      saved: 'Saved Items',
      savedEmpty: 'No saved items yet. Browse your dashboard to save incentives and swaps!',
      language: 'Language',
      notifications: 'Notifications',
      notifDesc: 'Get updates when new incentives become available in your area.',
      on: 'On',
      off: 'Off',
    },
    ES: {
      title: 'Mi Perfil',
      subtitle: 'Administra tus preferencias e información guardada.',
      location: 'Ubicación',
      housing: 'Tipo de Vivienda',
      monthlyBudget: 'Presupuesto Mensual',
      renter: 'Inquilino',
      homeowner: 'Propietario',
      flexible: 'Flexible',
      edit: 'Editar Perfil',
      save: 'Guardar Cambios',
      cancel: 'Cancelar',
      saved: 'Elementos Guardados',
      savedEmpty: '¡Aún no hay elementos guardados. Explora tu panel para guardar incentivos!',
      language: 'Idioma',
      notifications: 'Notificaciones',
      notifDesc: 'Recibe actualizaciones cuando haya nuevos incentivos disponibles en tu área.',
      on: 'Activado',
      off: 'Desactivado',
    },
  };

  const current = content[language] || content.EN;
  const [notifications, setNotifications] = useState(true);

  const sectionStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  };

  const labelStyle = {
    color: '#A0A0A0',
    fontSize: '12px',
    marginBottom: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const valueStyle = {
    color: '#2C2C2C',
    fontSize: '16px',
    fontWeight: '500',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    border: '2px solid #7A9E87',
    fontSize: '16px',
    backgroundColor: '#FAF7F2',
    color: '#2C2C2C',
    boxSizing: 'border-box',
    outline: 'none',
    marginTop: '4px',
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
        <div style={{
          width: '100%',
          maxWidth: '600px',
        }}>

          <h1 style={{
            color: '#7A9E87',
            fontSize: '28px',
            marginBottom: '8px',
            marginTop: '16px',
          }}>
            {current.title}
          </h1>
          <p style={{
            color: '#2C2C2C',
            fontSize: '14px',
            marginBottom: '32px',
          }}>
            {current.subtitle}
          </p>

          {/* Profile Info Section */}
          <div style={sectionStyle}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#EBF3EE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
              }}>
                🌱
              </div>
              <button
                onClick={() => setEditing(!editing)}
                style={{
                  backgroundColor: editing ? 'transparent' : '#7A9E87',
                  color: editing ? '#A0A0A0' : 'white',
                  border: editing ? '1px solid #E8E0D5' : 'none',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                {editing ? current.cancel : current.edit}
              </button>
            </div>

            {editing ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <p style={labelStyle}>{current.location}</p>
                  <input
                    type="number"
                    value={newZip}
                    onChange={(e) => setNewZip(e.target.value)}
                    maxLength={5}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <p style={labelStyle}>{current.housing}</p>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                    {['rent', 'own'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setNewHousing(option)}
                        style={{
                          flex: 1,
                          padding: '12px',
                          borderRadius: '12px',
                          border: `2px solid ${newHousing === option ? '#7A9E87' : '#E8E0D5'}`,
                          backgroundColor: newHousing === option ? '#EBF3EE' : '#FAF7F2',
                          color: '#2C2C2C',
                          fontSize: '14px',
                          cursor: 'pointer',
                        }}
                      >
                        {option === 'rent' ? `🏠 ${current.renter}` : `🏡 ${current.homeowner}`}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p style={labelStyle}>{current.monthlyBudget}</p>
                  <div style={{ position: 'relative' }}>
                    <span style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#7A9E87',
                      fontSize: '16px',
                    }}>$</span>
                    <input
                      type="number"
                      value={newBudget}
                      onChange={(e) => setNewBudget(e.target.value)}
                      style={{ ...inputStyle, paddingLeft: '28px' }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSaved(true);
                    setTimeout(() => {
                      onUpdateProfile({ zipCode: newZip, housingType: newHousing, budget: newBudget });
                      setEditing(false);
                      setSaved(false);
                    }, 1500);
                  }}
                  style={{
                    width: '100%',
                    backgroundColor: saved ? '#7A9E87' : '#D4956A',
                    transition: 'all 0.3s ease',
                    color: 'white',
                    border: 'none',
                    padding: '16px',
                    borderRadius: '30px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginTop: '8px',
                  }}
                >
                  {saved ? '✓ Saved!' : current.save}
                </button>
                {saved && (
                  <p style={{
                    color: '#7A9E87',
                    fontSize: '14px',
                    textAlign: 'center',
                    marginTop: '12px',
                    animation: 'fadeIn 0.3s ease',
                  }}>
                    Taking you back to your dashboard with updated options... 🌱
                  </p>
                )}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <p style={labelStyle}>📍 {current.location}</p>
                  <p style={valueStyle}>{zipCode}</p>
                </div>
                <div>
                  <p style={labelStyle}>🏠 {current.housing}</p>
                  <p style={valueStyle}>{housingType === 'rent' ? current.renter : current.homeowner}</p>
                </div>
                <div>
                  <p style={labelStyle}>💰 {current.monthlyBudget}</p>
                  <p style={valueStyle}>{budget ? `$${budget}/mo` : current.flexible}</p>
                </div>
              </div>
            )}
          </div>

          {/* Notifications Section */}
          <div style={sectionStyle}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <p style={{ color: '#2C2C2C', fontSize: '16px', fontWeight: '500', margin: 0 }}>
                  🔔 {current.notifications}
                </p>
                <p style={{ color: '#A0A0A0', fontSize: '13px', marginTop: '4px' }}>
                  {current.notifDesc}
                </p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                style={{
                  backgroundColor: notifications ? '#7A9E87' : '#E8E0D5',
                  border: 'none',
                  borderRadius: '20px',
                  width: '52px',
                  height: '28px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                  marginLeft: '16px',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: notifications ? '26px' : '3px',
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

          {/* Saved Items Section */}
          <div style={sectionStyle}>
            <p style={{ color: '#2C2C2C', fontSize: '16px', fontWeight: '500', marginBottom: '12px' }}>
              ⭐ {current.saved}
            </p>
            <p style={{ color: '#A0A0A0', fontSize: '14px', textAlign: 'center', padding: '24px 0' }}>
              {current.savedEmpty}
            </p>
          </div>

        </div>
      </div>
      <NavBar activeTab="profile" onTabChange={onTabChange} language={language} />

    </>
  );
}

export default Profile;