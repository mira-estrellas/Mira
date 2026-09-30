import React, { useState } from 'react';

const QUESTIONS = {
  EN: [
    {
      id: 'shower',
      icon: '🚿',
      question: 'How long are your showers on average?',
      options: [
        { label: '⚡ Under 5 minutes', value: 25 },
        { label: '🚿 5-10 minutes', value: 50 },
        { label: '🕐 10-15 minutes', value: 87 },
        { label: '🛁 Over 15 minutes or I take baths', value: 140 },
      ],
      tip: (answer) => answer.value >= 87 ? 'Showers are your biggest direct water use. Cutting 2 minutes off your shower saves up to 10 gallons a day.' : 'Great shower habits! Short showers make a real difference. 🌱',
    },
    {
      id: 'diet',
      icon: '🥩',
      question: 'How would you describe your diet?',
      options: [
        { label: '🌱 Vegan', value: 600 },
        { label: '🥗 Vegetarian', value: 900 },
        { label: '🍗 Some meat (a few times a week)', value: 1200 },
        { label: '🥩 Meat with most meals', value: 1600 },
      ],
      tip: (answer) => answer.value >= 1200 ? 'Food is your biggest water impact. One beef burger takes about 660 gallons to produce. Swapping one meat meal a week saves thousands of gallons a year.' : 'Your diet has a much lower water footprint than average. 🌱',
    },
    {
      id: 'laundry',
      icon: '👕',
      question: 'How often do you do laundry?',
      options: [
        { label: '✅ Once a week or less', value: 25 },
        { label: '🔄 2-3 times a week', value: 55 },
        { label: '📦 Almost every day', value: 100 },
      ],
      tip: (answer) => answer.value >= 55 ? 'Washing full loads less frequently can save 15-45 gallons per week.' : 'Efficient laundry habits! 🌱',
    },
    {
      id: 'shopping',
      icon: '👕',
      question: 'How often do you buy new clothes or products?',
      options: [
        { label: '✅ Rarely — I buy secondhand or only when needed', value: 50 },
        { label: '🛒 Occasionally — a few times a year', value: 150 },
        { label: '🛍️ Regularly — most months', value: 300 },
        { label: '📦 Frequently — every few weeks', value: 500 },
      ],
      tip: (answer) => answer.value >= 300 ? 'Shopping habits have a huge hidden water cost. One cotton t-shirt takes about 700 gallons to produce. Buying secondhand skips that entirely.' : 'Mindful shopping saves thousands of gallons a year. 🌱',
    },
    {
      id: 'outdoor',
      icon: '🌿',
      question: 'Do you water a lawn, garden, or wash your car at home?',
      options: [
        { label: '🚫 No outdoor water use', value: 0 },
        { label: '🌱 Small garden, occasional watering', value: 50 },
        { label: '🌿 Regular lawn or garden watering', value: 150 },
        { label: '🏡 Large lawn and frequent car washing', value: 300 },
      ],
      tip: (answer) => answer.value >= 150 ? 'Outdoor water use adds up fast. Watering early morning reduces evaporation by up to 30%. A rain barrel can collect free water for your garden.' : answer.value === 0 ? 'No outdoor water use — great for conservation! 🌱' : 'Modest outdoor use. Consider drought-resistant plants to reduce this further. 🌱',
    },
  ],
  ES: [
    {
      id: 'shower',
      icon: '🚿',
      question: '¿Cuánto tiempo duras en la ducha en promedio?',
      options: [
        { label: '⚡ Menos de 5 minutos', value: 25 },
        { label: '🚿 5-10 minutos', value: 50 },
        { label: '🕐 10-15 minutos', value: 87 },
        { label: '🛁 Más de 15 minutos o me baño en tina', value: 140 },
      ],
      tip: (answer) => answer.value >= 87 ? 'La ducha es tu mayor uso directo de agua. Reducir 2 minutos ahorra hasta 10 galones al día.' : '¡Excelentes hábitos de ducha! Las duchas cortas hacen una diferencia real. 🌱',
    },
    {
      id: 'diet',
      icon: '🥩',
      question: '¿Cómo describirías tu dieta?',
      options: [
        { label: '🌱 Vegana', value: 600 },
        { label: '🥗 Vegetariana', value: 900 },
        { label: '🍗 Algo de carne (pocas veces a la semana)', value: 1200 },
        { label: '🥩 Carne en la mayoría de las comidas', value: 1600 },
      ],
      tip: (answer) => answer.value >= 1200 ? 'La alimentación es tu mayor impacto hídrico. Una hamburguesa requiere unas 660 galones para producirse. Cambiar una comida con carne a la semana ahorra miles de galones al año.' : 'Tu dieta tiene una huella hídrica mucho menor que el promedio. 🌱',
    },
    {
      id: 'laundry',
      icon: '👕',
      question: '¿Con qué frecuencia haces la colada?',
      options: [
        { label: '✅ Una vez a la semana o menos', value: 25 },
        { label: '🔄 2-3 veces a la semana', value: 55 },
        { label: '📦 Casi todos los días', value: 100 },
      ],
      tip: (answer) => answer.value >= 55 ? 'Lavar cargas completas con menos frecuencia puede ahorrar 15-45 galones por semana.' : '¡Hábitos de lavado eficientes! 🌱',
    },
    {
      id: 'shopping',
      icon: '👕',
      question: '¿Con qué frecuencia compras ropa o productos nuevos?',
      options: [
        { label: '✅ Raramente — compro de segunda mano o solo cuando lo necesito', value: 50 },
        { label: '🛒 Ocasionalmente — pocas veces al año', value: 150 },
        { label: '🛍️ Regularmente — la mayoría de los meses', value: 300 },
        { label: '📦 Con frecuencia — cada pocas semanas', value: 500 },
      ],
      tip: (answer) => answer.value >= 300 ? 'Los hábitos de compra tienen un costo hídrico oculto enorme. Una camiseta de algodón requiere unas 700 galones para producirse.' : 'Las compras conscientes ahorran miles de galones al año. 🌱',
    },
    {
      id: 'outdoor',
      icon: '🌿',
      question: '¿Riegas un jardín o lavas tu auto en casa?',
      options: [
        { label: '🚫 Sin uso exterior de agua', value: 0 },
        { label: '🌱 Jardín pequeño, riego ocasional', value: 50 },
        { label: '🌿 Riego regular de jardín o césped', value: 150 },
        { label: '🏡 Jardín grande y lavado frecuente del auto', value: 300 },
      ],
      tip: (answer) => answer.value >= 150 ? 'El uso exterior de agua se acumula rápido. Regar temprano en la mañana reduce la evaporación hasta un 30%.' : answer.value === 0 ? 'Sin uso exterior de agua — ¡excelente para la conservación! 🌱' : 'Uso exterior moderado. Considera plantas resistentes a la sequía. 🌱',
    },
  ],
};

const US_AVERAGE = 2000;

function WaterTracker({ language }) {
  const [expanded, setExpanded] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = QUESTIONS[language] || QUESTIONS.EN;

  const content = {
    EN: {
      title: 'Track My Water Footprint',
      subtitle: 'See how much water your daily habits use — including hidden virtual water.',
      calculate: 'Calculate My Water Footprint',
      recalculate: 'Recalculate',
      yourFootprint: 'Your estimated daily water footprint',
      usAverage: 'US average: ~2,000 gallons/day',
      gallons: 'gallons per day',
      belowAverage: 'Below US average 🌱',
      aboveAverage: 'Above US average',
      atAverage: 'Around US average',
      topTips: 'Your top areas to reduce:',
      virtualNote: '💧 Most of this is "virtual water" — hidden in the food you eat and products you buy.',
    },
    ES: {
      title: 'Rastrear Mi Huella Hídrica',
      subtitle: 'Descubre cuánta agua usan tus hábitos diarios, incluyendo el agua virtual oculta.',
      calculate: 'Calcular Mi Huella Hídrica',
      recalculate: 'Recalcular',
      yourFootprint: 'Tu huella hídrica diaria estimada',
      usAverage: 'Promedio EE.UU.: ~2,000 galones/día',
      gallons: 'galones por día',
      belowAverage: 'Por debajo del promedio de EE.UU. 🌱',
      aboveAverage: 'Por encima del promedio de EE.UU.',
      atAverage: 'Alrededor del promedio de EE.UU.',
      topTips: 'Tus principales áreas a reducir:',
      virtualNote: '💧 La mayoría es "agua virtual" — oculta en los alimentos que comes y los productos que compras.',
    },
  };

  const current = content[language] || content.EN;

  const totalWater = Object.values(answers).reduce((sum, a) => sum + a.value, 0) + 100;

  const allAnswered = questions.every(q => answers[q.id]);

  const getComparison = () => {
    if (totalWater < US_AVERAGE - 300) return current.belowAverage;
    if (totalWater > US_AVERAGE + 300) return current.aboveAverage;
    return current.atAverage;
  };

  const getColor = () => {
    if (totalWater < US_AVERAGE - 300) return '#4F8C6F';
    if (totalWater > US_AVERAGE + 300) return '#D4956A';
    return '#2C2C2C';
  };

  const topTips = questions
    .filter(q => answers[q.id])
    .map(q => ({ question: q, tip: q.tip(answers[q.id]) }))
    .filter(item => answers[item.question.id]?.value >= 150)
    .slice(0, 2);

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      marginTop: '16px',
    }}>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '100%',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 0,
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ color: '#2C2C2C', fontSize: '18px', margin: 0 }}>
            💧 {current.title}
          </h2>
          {!expanded && (
            <p style={{ color: '#A0A0A0', fontSize: '13px', margin: '4px 0 0 0' }}>
              {current.subtitle}
            </p>
          )}
        </div>
        <span style={{ color: '#4F8C6F', fontSize: '20px' }}>
          {expanded ? '▲' : '▼'}
        </span>
      </button>

      {expanded && (
        <div style={{ marginTop: '24px' }}>

          {!submitted ? (
            <>
              {questions.map((q) => (
                <div key={q.id} style={{ marginBottom: '24px' }}>
                  <p style={{
                    color: '#2C2C2C',
                    fontSize: '15px',
                    fontWeight: '500',
                    marginBottom: '12px',
                  }}>
                    {q.icon} {q.question}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {q.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setAnswers({ ...answers, [q.id]: option })}
                        style={{
                          padding: '12px 16px',
                          borderRadius: '12px',
                          border: `2px solid ${answers[q.id]?.label === option.label ? '#4F8C6F' : '#E8E0D5'}`,
                          backgroundColor: answers[q.id]?.label === option.label ? '#EBF3EE' : '#FAF7F2',
                          color: '#2C2C2C',
                          fontSize: '14px',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <button
                disabled={!allAnswered}
                onClick={() => setSubmitted(true)}
                style={{
                  width: '100%',
                  backgroundColor: allAnswered ? '#D4956A' : '#E8E0D5',
                  color: allAnswered ? 'white' : '#A0A0A0',
                  border: 'none',
                  padding: '16px',
                  borderRadius: '30px',
                  fontSize: '16px',
                  cursor: allAnswered ? 'pointer' : 'not-allowed',
                  transition: 'all 0.3s ease',
                  marginTop: '8px',
                }}
              >
                {current.calculate}
              </button>
            </>
          ) : (
            <div>
              {/* Result */}
              <div style={{
                backgroundColor: '#FAF7F2',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
                marginBottom: '16px',
              }}>
                <p style={{ color: '#A0A0A0', fontSize: '14px', margin: '0 0 8px 0' }}>
                  {current.yourFootprint}
                </p>
                <p style={{
                  color: getColor(),
                  fontSize: '56px',
                  fontWeight: '700',
                  margin: '0 0 4px 0',
                  letterSpacing: '-2px',
                }}>
                  {totalWater.toLocaleString()}
                </p>
                <p style={{ color: '#2C2C2C', fontSize: '16px', margin: '0 0 12px 0' }}>
                  {current.gallons}
                </p>
                <div style={{
                  backgroundColor: getColor() === '#4F8C6F' ? '#EBF3EE' : '#FDF0E8',
                  borderRadius: '20px',
                  padding: '6px 16px',
                  display: 'inline-block',
                  marginBottom: '8px',
                }}>
                  <p style={{ color: getColor(), fontSize: '14px', fontWeight: '600', margin: 0 }}>
                    {getComparison()}
                  </p>
                </div>
                <p style={{ color: '#A0A0A0', fontSize: '12px', margin: '0 0 12px 0' }}>
                  {current.usAverage}
                </p>
                <p style={{ color: '#4F8C6F', fontSize: '12px', margin: 0, lineHeight: '1.5' }}>
                  {current.virtualNote}
                </p>
              </div>

              {/* Visual bar */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  width: '100%',
                  height: '12px',
                  backgroundColor: '#E8E0D5',
                  borderRadius: '10px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${Math.min((totalWater / 3000) * 100, 100)}%`,
                    height: '100%',
                    backgroundColor: getColor(),
                    borderRadius: '10px',
                    transition: 'width 1s ease',
                  }}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                  <span style={{ color: '#A0A0A0', fontSize: '11px' }}>0 gal</span>
                  <span style={{ color: '#A0A0A0', fontSize: '11px' }}>3,000 gal</span>
                </div>
              </div>

              {/* Tips */}
              {topTips.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ color: '#2C2C2C', fontSize: '15px', fontWeight: '500', marginBottom: '12px' }}>
                    {current.topTips}
                  </p>
                  {topTips.map((item, index) => (
                    <div key={index} style={{
                      backgroundColor: '#EBF3EE',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      marginBottom: '8px',
                    }}>
                      <p style={{ color: '#2C2C2C', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>
                        {item.question.icon} {item.tip}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => {
                  setSubmitted(false);
                  setAnswers({});
                }}
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  color: '#4F8C6F',
                  border: '2px solid #4F8C6F',
                  padding: '14px',
                  borderRadius: '30px',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                {current.recalculate}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WaterTracker;