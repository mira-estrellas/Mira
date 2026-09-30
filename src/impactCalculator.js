// EPA average: 1 kWh = 0.386 kg CO2 (national average)
// Average household uses ~10,500 kWh/year
// Clean swaps can reduce this by 20-40% depending on housing type

const STATE_GRID_FACTORS = {
  // kg CO2 per kWh - cleaner states save more
  WA: 0.09, OR: 0.27, CA: 0.21, ID: 0.14, NV: 0.35,
  AZ: 0.44, MT: 0.55, WY: 0.83, CO: 0.57, NM: 0.54,
  ND: 0.77, SD: 0.44, NE: 0.56, KS: 0.62, OK: 0.57,
  TX: 0.42, MN: 0.45, IA: 0.49, MO: 0.73, AR: 0.46,
  LA: 0.45, WI: 0.56, IL: 0.40, MI: 0.51, IN: 0.71,
  OH: 0.62, KY: 0.77, TN: 0.40, MS: 0.50, AL: 0.52,
  GA: 0.44, FL: 0.43, SC: 0.36, NC: 0.36, VA: 0.30,
  WV: 0.85, PA: 0.43, NY: 0.21, VT: 0.03, NH: 0.19,
  ME: 0.16, MA: 0.28, RI: 0.29, CT: 0.24, NJ: 0.26,
  DE: 0.38, MD: 0.31, DC: 0.31, HI: 0.63, AK: 0.55,
};

// Map zip code prefix to state
const ZIP_TO_STATE = {
  '0': 'CT', '06': 'CT', '07': 'NJ', '08': 'NJ',
  '1': 'NY', '10': 'NY', '11': 'NY', '12': 'NY',
  '13': 'NY', '14': 'NY', '15': 'PA', '16': 'PA',
  '17': 'PA', '18': 'PA', '19': 'PA', '20': 'DC',
  '21': 'MD', '22': 'VA', '23': 'VA', '24': 'VA',
  '25': 'WV', '26': 'WV', '27': 'NC', '28': 'NC',
  '29': 'SC', '30': 'GA', '31': 'GA', '32': 'FL',
  '33': 'FL', '34': 'FL', '35': 'AL', '36': 'AL',
  '37': 'TN', '38': 'TN', '39': 'MS', '40': 'KY',
  '41': 'KY', '42': 'KY', '43': 'OH', '44': 'OH',
  '45': 'OH', '46': 'IN', '47': 'IN', '48': 'MI',
  '49': 'MI', '50': 'IA', '51': 'IA', '52': 'IA',
  '53': 'WI', '54': 'WI', '55': 'MN', '56': 'MN',
  '57': 'SD', '58': 'ND', '59': 'MT', '60': 'IL',
  '61': 'IL', '62': 'IL', '63': 'MO', '64': 'MO',
  '65': 'MO', '66': 'KS', '67': 'KS', '68': 'NE',
  '69': 'NE', '70': 'LA', '71': 'LA', '72': 'AR',
  '73': 'OK', '74': 'OK', '75': 'TX', '76': 'TX',
  '77': 'TX', '78': 'TX', '79': 'TX', '80': 'CO',
  '81': 'CO', '82': 'WY', '83': 'ID', '84': 'UT',
  '85': 'AZ', '86': 'AZ', '87': 'NM', '88': 'NM',
  '89': 'NV', '90': 'CA', '91': 'CA', '92': 'CA',
  '93': 'CA', '94': 'CA', '95': 'CA', '96': 'CA',
  '97': 'OR', '98': 'WA', '99': 'AK',
};

function getStateFromZip(zip) {
  if (!zip) return null;
  const prefix2 = zip.substring(0, 2);
  const prefix1 = zip.substring(0, 1);
  return ZIP_TO_STATE[prefix2] || ZIP_TO_STATE[prefix1] || null;
}

function getGridFactor(zip) {
  const state = getStateFromZip(zip);
  return state ? (STATE_GRID_FACTORS[state] || 0.386) : 0.386;
}

export function calculateImpact(zip, housingType, householdSize, language) {
  const size = householdSize || 2;
  const gridFactor = getGridFactor(zip);

  // Base energy reduction percentages by housing type
  const reductionRate = housingType === 'own' ? 0.35 : 0.18;

  // Average annual kWh usage scaled by household size
  const baseKwh = 8000 + (size * 500);

  // CO2 saved in kg, then convert to tons
  const co2SavedKg = baseKwh * reductionRate * gridFactor;
  const co2SavedTons = (co2SavedKg / 1000).toFixed(1);

  // Dollar savings — homeowners save more
  const baseSavings = housingType === 'own'
    ? 900 + (size * 120)
    : 200 + (size * 60);
  const dollarSavings = Math.round(baseSavings / 100) * 100;

  // Trees equivalent — 1 tree absorbs ~21 kg CO2/year
  const trees = Math.round(co2SavedKg / 21);

  // Get state name for display
  const state = getStateFromZip(zip);

  const labels = {
    EN: {
      co2Desc: `of CO₂ saved per year with clean swaps${state ? ` in ${state}` : ''}`,
      savingsDesc: 'average annual energy savings',
      treesDesc: 'trees worth of carbon absorbed',
    },
    ES: {
      co2Desc: `de CO₂ ahorradas por año con cambios limpios${state ? ` en ${state}` : ''}`,
      savingsDesc: 'ahorros promedio anuales de energía',
      treesDesc: 'árboles equivalentes de carbono absorbido',
    },
  };

  const lang = labels[language] || labels.EN;

  return [
    { stat: `${co2SavedTons} tons`, description: lang.co2Desc },
    { stat: `$${dollarSavings.toLocaleString()}`, description: lang.savingsDesc },
    { stat: `🌳 ${trees}`, description: lang.treesDesc },
  ];
}