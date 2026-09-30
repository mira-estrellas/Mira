import React, { useState } from 'react';

const QUESTIONS = {
  EN: [
    {
      id: 'transport',
      icon: '🚗',
      question: 'How do you mainly get around?',
      options: [
        { label: '🚶 Walk or bike mostly', value: 0.5 },
        { label: '🚌 Public transit', value: 1.5 },
        { label: '⚡ Electric or hybrid vehicle', value: 2.5 },
        { label: '⛽ Gas vehicle', value: 4.5 },
      ],
      tip: (answer) => answer.value >= 4 ? 'Transportation is your biggest impact area. Even carpooling once a week makes a real difference.' : 'Great choice for transportation! 🌱',
    },
    {
      id: 'diet',
      icon: '🥩',
      question: 'How would you describe your diet?',
      options: [
        { label: '🌱 Vegan', value: 1.5 },
        { label: '🥗 Vegetarian', value: 2.0 },
        { label: '🍗 Some meat (a few times a week)', value: 2.8 },
        { label: '🥩 Meat with most meals', value: 3.8 },
      ],
      tip: (answer) => answer.value >= 3.5 ? 'Food is your biggest impact area. Swapping one meat meal a day for a plant-based one saves about 0.5 tons of CO₂ a year.' : 'Your diet has a lower carbon impact. Keep it up! 🌱',
    },
    {
      id: 'flights',
      icon: '✈️',
      question: 'How often do you fly per year?',
      options: [
        { label: '🚫 Never', value: 0 },
        { label: '✈️ 1-2 flights', value: 1.0 },
        { label: '✈️✈️ 3-5 flights', value: 2.5 },
        { label: '🌍 6+ flights', value: 5.0 },
      ],
      tip: (answer) => answer.value >= 2.5 ? 'Air travel is your biggest impact area. One transatlantic flight emits more CO₂ than a month of driving.' : answer.value === 0 ? 'Flying never — that\'s one of the biggest single things you can do. 🌱' : 'Moderate air travel. Consider offsetting your flights when you do fly. 🌱',
    },
    {
      id: 'shopping',
      icon: '🛍️',
      question: 'How often do you buy new things?',
      options: [
        { label: '✅ Only when necessary', value: 0.5 },
        { label: '🛒 Occasionally', value: 1.2 },
        { label: '🛍️ Regularly', value: 2.0 },
        { label: '📦 Frequently', value: 3.0 },
      ],
      tip: (answer) => answer.value >= 2.5 ? 'Shopping habits are your biggest impact area. Buying secondhand or borrowing from your community (like Mira\'s Community tab!) can cut this significantly.' : 'Mindful shopping. Every item not bought is carbon not spent. 🌱',
    },
    {
      id: 'recycling',
      icon: '♻️',
      question: 'Do you recycle regularly?',
      options: [
        { label: '✅ Always', value: -0.3 },
        { label: '🔄 Sometimes', value: -0.1 },
        { label: '❌ Rarely', value: 0 },
        { label: '🚫 Never', value: 0.2 },
      ],
      tip: (answer) => answer.value >= 0 ? 'Recycling more consistently could reduce your footprint. Check Mira\'s Recycle tab to find drop-off locations near you!' : 'Consistent recycler! Every item recycled keeps it out of the landfill. 🌱',
    },
  ],
  ES: [
    {
      id: 'transport',
      icon: '🚗',
      question: '¿Cómo te desplazas principalmente?',
      options: [
        { label: '🚶 Camino o uso bicicleta', value: 0.5 },
        { label: '🚌 Transporte público', value: 1.5 },
        { label: '⚡ Vehículo eléctrico o híbrido', value: 2.5 },
        { label: '⛽ Vehículo de gasolina', value: 4.5 },
      ],
      tip: (answer) => answer.value >= 4 ? 'El transporte es tu mayor área de impacto. Incluso compartir el auto una vez a la semana hace una gran diferencia.' : '¡Gran elección de transporte! 🌱',
    },
    {
      id: 'diet',
      icon: '🥩',
      question: '¿Cómo describirías tu dieta?',
      options: [
        { label: '🌱 Vegana', value: 1.5 },
        { label: '🥗 Vegetariana', value: 2.0 },
        { label: '🍗 Algo de carne (pocas veces a la semana)', value: 2.8 },
        { label: '🥩 Carne en la mayoría de las comidas', value: 3.8 },
      ],
      tip: (answer) => answer.value >= 3.5 ? 'La alimentación es tu mayor área de impacto. Cambiar una comida con carne al día por una basada en plantas ahorra unas 0.5 toneladas de CO₂ al año.' : '¡Tu dieta tiene un impacto de carbono más bajo. Sigue así! 🌱',
    },
    {
      id: 'flights',
      icon: '✈️',
      question: '¿Con qué frecuencia vuelas al año?',
      options: [
        { label: '🚫 Nunca', value: 0 },
        { label: '✈️ 1-2 vuelos', value: 1.0 },
        { label: '✈️✈️ 3-5 vuelos', value: 2.5 },
        { label: '🌍 6+ vuelos', value: 5.0 },
      ],
      tip: (answer) => answer.value >= 2.5 ? 'Los vuelos son tu mayor área de impacto. Un vuelo transatlántico emite más CO₂ que un mes de conducción.' : answer.value === 0 ? 'No volar es una de las cosas más grandes que puedes hacer. 🌱' : 'Viajes aéreos moderados. Considera compensar tus vuelos cuando vueles. 🌱',
    },
    {
      id: 'shopping',
      icon: '🛍️',
      question: '¿Con qué frecuencia compras cosas nuevas?',
      options: [
        { label: '✅ Solo cuando es necesario', value: 0.5 },
        { label: '🛒 Ocasionalmente', value: 1.2 },
        { label: '🛍️ Regularmente', value: 2.0 },
        { label: '📦 Con frecuencia', value: 3.0 },
      ],
      tip: (answer) => answer.value >= 2.5 ? 'Los hábitos de compra son tu mayor área de impacto. Comprar de segunda mano o pedir prestado puede reducir esto significativamente.' : 'Compras conscientes. Cada artículo no comprado es carbono no gastado. 🌱',
    },
    {
      id: 'recycling',
      icon: '♻️',
      question: '¿Reciclas regularmente?',
      options: [
        { label: '✅ Siempre', value: -0.3 },
        { label: '🔄 A veces', value: -0.1 },
        { label: '❌ Raramente', value: 0 },
        { label: '🚫 Nunca', value: 0.2 },
      ],
      tip: (answer) => answer.value >= 0 ? 'Reciclar más consistentemente podría reducir tu huella. ¡Revisa la pestaña de Reciclaje de Mira para encontrar lugares cercanos!' : '¡Reciclador consistente! Cada artículo reciclado lo mantiene fuera del vertedero. 🌱',
    },
  ],
};

const US_AVERAGE = 16;

function CarbonTracker({ language }) {
  const [expanded, setExpanded] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = QUESTIONS[language] || QUESTIONS.EN;

  const content = {
    EN: {
      title: 'Track My Carbon Footprint',
      subtitle: 'Answer 5 quick questions to estimate your annual carbon footprint.',
      calculate: 'Calculate My Footprint',
      recalculate: 'Recalculate',
      yourFootprint: 'Your estimated annual footprint',
      usAverage: 'US average: 16 tons',
      tons: 'tons of CO₂',
      belowAverage: 'Below US average 🌱',
      aboveAverage: 'Above US average',
      atAverage: 'At US average',
      topTips: 'Your top areas to improve:',
      collapse: '▲ Collapse',
      expand: '🌍 Track My Carbon Footprint',
    },
    ES: {
      title: 'Rastrear Mi Huella de Carbono',
      subtitle: 'Responde 5 preguntas rápidas para estimar tu huella de carbono anual.',
      calculate: 'Calcular Mi Huella',
      recalculate: 'Recalcular',
      yourFootprint: 'Tu huella anual estimada',
      usAverage: 'Promedio EE.UU.: 16 toneladas',
      tons: 'toneladas de CO₂',
      belowAverage: 'Por debajo del promedio de EE.UU. 🌱',
      aboveAverage: 'Por encima del promedio de EE.UU.',
      atAverage: 'En el promedio de EE.UU.',
      topTips: 'Tus principales áreas a mejorar:',
      collapse: '▲ Colapsar',
      expand: '🌍 Rastrear Mi Huella de Carbono',
    },
  };

  const current = content[language] || content.EN;

  const totalFootprint = Object.values(answers).reduce((sum, a) => sum + a.value, 0) + 3.5; // 3.5 base for housing/utilities

  const allAnswered = questions.every(q => answers[q.id]);

  const getComparison = () => {
    if (totalFootprint < US_AVERAGE - 2) return current.belowAverage;
    if (totalFootprint > US_AVERAGE + 2) return current.aboveAverage;
    return current.atAverage;
  };

  const getColor = () => {
    if (totalFootprint < US_AVERAGE - 2) return '#4F8C6F';
    if (totalFootprint > US_AVERAGE + 2) return '#D4956A';
    return '#2C2C2C';
  };

  const topTips = questions
    .filter(q => answers[q.id])
    .map(q => ({ question: q, tip: q.tip(answers[q.id]) }))
    .filter(item => answers[item.question.id]?.value >= 2.5)
    .slice(0, 2);

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      marginTop: '32px',
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
            🌍 {current.title}
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
                marginBottom: '24px',
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
                  {totalFootprint.toFixed(1)}
                </p>
                <p style={{ color: '#2C2C2C', fontSize: '16px', margin: '0 0 12px 0' }}>
                  {current.tons}
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
                <p style={{ color: '#A0A0A0', fontSize: '12px', margin: 0 }}>
                  {current.usAverage}
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
                    width: `${Math.min((totalFootprint / 20) * 100, 100)}%`,
                    height: '100%',
                    backgroundColor: getColor(),
                    borderRadius: '10px',
                    transition: 'width 1s ease',
                  }}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                  <span style={{ color: '#A0A0A0', fontSize: '11px' }}>0 tons</span>
                  <span style={{ color: '#A0A0A0', fontSize: '11px' }}>20 tons</span>
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
                      backgroundColor: '#FDF0E8',
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

export default CarbonTracker;