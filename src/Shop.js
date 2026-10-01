import React, { useState } from 'react';
import NavBar from './NavBar';

function Shop({ language, onTabChange }) {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [renterOnly, setRenterOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [maxPrice, setMaxPrice] = useState('');
  const [savedProducts, setSavedProducts] = useState([]);

  const categories = [
    'All',
    '💡 Lighting',
    '🌡️ Heating & Cooling',
    '☀️ Solar & Power',
    '🚗 EV & Transport',
    '🏠 Home & Insulation',
    '🍽️ Kitchen & Food',
    '👕 Fashion & Clothing',
    '🎒 On The Go',
    '🧴 Personal Care',
    '🐾 Pets',
    '🌱 Garden & Outdoor',
  ];

  const products = [
    // 💡 Lighting
    {
      id: 1,
      name: 'Philips Hue White LED Smart Bulb Starter Kit',
      category: '💡 Lighting',
      price: 34.99,
      description: 'Energy efficient smart bulbs using 75% less energy than incandescent. Voice and app controlled.',
      energySavings: 'Saves ~$10/year per bulb',
      rebateEligible: false,
      renterFriendly: true,
      popular: 98,
      amazonUrl: 'https://www.amazon.com/s?k=philips+hue+white+led+smart+bulb+starter+kit',
      homedepotUrl: 'https://www.homedepot.com/s/philips+hue+smart+bulb',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=philips+hue+smart+bulb',
      brandUrl: null,
    },
    {
      id: 2,
      name: 'Lutron Caseta Wireless Smart Dimmer Switch',
      category: '💡 Lighting',
      price: 39.95,
      description: 'Smart dimmer that extends bulb life and reduces energy use. Works without neutral wire.',
      energySavings: 'Saves ~$25/year per switch',
      rebateEligible: false,
      renterFriendly: false,
      popular: 86,
      amazonUrl: 'https://www.amazon.com/s?k=lutron+caseta+wireless+smart+dimmer',
      homedepotUrl: 'https://www.homedepot.com/s/lutron+caseta+dimmer',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=lutron+caseta+dimmer',
      brandUrl: null,
    },
    {
      id: 3,
      name: 'Feit Electric LED Night Light 6-Pack',
      category: '💡 Lighting',
      price: 12.99,
      description: 'Ultra low energy LED night lights. Uses 0.5W vs 7W incandescent — 93% less energy.',
      energySavings: 'Saves ~$8/year',
      rebateEligible: false,
      renterFriendly: true,
      popular: 79,
      amazonUrl: 'https://www.amazon.com/s?k=feit+electric+led+night+light+6+pack',
      homedepotUrl: 'https://www.homedepot.com/s/led+night+light+6+pack',
      bestbuyUrl: null,
      brandUrl: null,
    },

    // 🌡️ Heating & Cooling
    {
      id: 4,
      name: 'Google Nest Learning Thermostat',
      category: '🌡️ Heating & Cooling',
      price: 129.99,
      description: 'Learns your schedule and programs itself. Saves an average of 10-12% on heating and 15% on cooling.',
      energySavings: 'Saves ~$150/year',
      rebateEligible: true,
      renterFriendly: false,
      popular: 95,
      amazonUrl: 'https://www.amazon.com/s?k=google+nest+learning+thermostat',
      homedepotUrl: 'https://www.homedepot.com/s/nest+learning+thermostat',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=nest+learning+thermostat',
      brandUrl: null,
    },
    {
      id: 5,
      name: 'Rheem Heat Pump Water Heater',
      category: '🌡️ Heating & Cooling',
      price: 899.00,
      description: 'Uses 70% less energy than traditional water heaters. Qualifies for federal tax credit up to $2,000.',
      energySavings: 'Saves ~$330/year',
      rebateEligible: true,
      renterFriendly: false,
      popular: 84,
      amazonUrl: 'https://www.amazon.com/s?k=rheem+heat+pump+water+heater',
      homedepotUrl: 'https://www.homedepot.com/s/rheem+heat+pump+water+heater',
      bestbuyUrl: null,
      brandUrl: null,
    },
    {
      id: 6,
      name: 'BLACK+DECKER Portable Air Conditioner',
      category: '🌡️ Heating & Cooling',
      price: 329.99,
      description: 'Portable AC perfect for renters — no permanent installation. Energy Star certified.',
      energySavings: 'Up to 30% more efficient than window units',
      rebateEligible: false,
      renterFriendly: true,
      popular: 81,
      amazonUrl: 'https://www.amazon.com/s?k=black+decker+portable+air+conditioner+energy+star',
      homedepotUrl: 'https://www.homedepot.com/s/portable+air+conditioner+energy+star',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=portable+air+conditioner+energy+star',
      brandUrl: null,
    },
    {
      id: 7,
      name: 'Dyson Hot+Cool Fan Heater',
      category: '🌡️ Heating & Cooling',
      price: 449.99,
      description: 'Heats and cools efficiently year-round. No exposed heating elements — safer for families.',
      energySavings: 'Saves ~$80/year vs traditional heaters',
      rebateEligible: false,
      renterFriendly: true,
      popular: 83,
      amazonUrl: 'https://www.amazon.com/s?k=dyson+hot+cool+fan+heater',
      homedepotUrl: null,
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=dyson+hot+cool+fan+heater',
      brandUrl: null,
    },

    // ☀️ Solar & Power
    {
      id: 8,
      name: 'Jackery Solar Generator 300 Plus',
      category: '☀️ Solar & Power',
      price: 299.99,
      description: 'Portable solar generator for renters. No installation needed. Powers small appliances and devices.',
      energySavings: 'Offsets ~$20/month in electricity',
      rebateEligible: true,
      renterFriendly: true,
      popular: 87,
      amazonUrl: 'https://www.amazon.com/s?k=jackery+solar+generator+300',
      homedepotUrl: 'https://www.homedepot.com/s/jackery+solar+generator',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=jackery+solar+generator',
      brandUrl: 'https://www.jackery.com',
    },
    {
      id: 9,
      name: 'EcoFlow DELTA 2 Portable Power Station',
      category: '☀️ Solar & Power',
      price: 499.99,
      description: 'Powerful portable solar generator. Runs appliances, charges via solar panels. No installation.',
      energySavings: 'Offsets ~$40/month in electricity',
      rebateEligible: true,
      renterFriendly: true,
      popular: 85,
      amazonUrl: 'https://www.amazon.com/s?k=ecoflow+delta+2+portable+power+station',
      homedepotUrl: 'https://www.homedepot.com/s/ecoflow+delta+2',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=ecoflow+delta+2',
      brandUrl: 'https://www.ecoflow.com',
    },
    {
      id: 10,
      name: 'Renogy 100W Foldable Solar Panel',
      category: '☀️ Solar & Power',
      price: 89.99,
      description: 'Portable solar panel for renters. Charges power stations, phones, laptops. No installation needed.',
      energySavings: 'Offsets ~$10/month in electricity',
      rebateEligible: false,
      renterFriendly: true,
      popular: 83,
      amazonUrl: 'https://www.amazon.com/s?k=renogy+100w+foldable+solar+panel',
      homedepotUrl: 'https://www.homedepot.com/s/renogy+portable+solar+panel',
      bestbuyUrl: null,
      brandUrl: 'https://www.renogy.com',
    },

    // 🚗 EV & Transport
    {
      id: 11,
      name: 'ChargePoint Home Flex EV Charger',
      category: '🚗 EV & Transport',
      price: 174.99,
      description: 'Level 2 home EV charger. Charges up to 9x faster than a standard outlet. Works with all EVs.',
      energySavings: 'Saves ~$600/year vs gas',
      rebateEligible: true,
      renterFriendly: false,
      popular: 91,
      amazonUrl: 'https://www.amazon.com/s?k=chargepoint+home+flex+ev+charger',
      homedepotUrl: 'https://www.homedepot.com/s/chargepoint+home+flex',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=chargepoint+home+flex',
      brandUrl: null,
    },
    {
      id: 12,
      name: 'Lectric XP 3.0 Electric Bike',
      category: '🚗 EV & Transport',
      price: 999.00,
      description: 'Affordable foldable e-bike. Replace car trips for errands and commutes. Qualifies for federal tax credit.',
      energySavings: 'Saves ~$1,200/year vs car costs',
      rebateEligible: true,
      renterFriendly: true,
      popular: 88,
      amazonUrl: 'https://www.amazon.com/s?k=lectric+xp+electric+bike',
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://lectricebikes.com',
    },
    {
      id: 13,
      name: 'Segway Ninebot Electric Scooter',
      category: '🚗 EV & Transport',
      price: 349.99,
      description: 'Electric scooter for short commutes. Zero emissions, low cost per mile. Folds for easy storage.',
      energySavings: 'Saves ~$500/year vs car costs',
      rebateEligible: false,
      renterFriendly: true,
      popular: 82,
      amazonUrl: 'https://www.amazon.com/s?k=segway+ninebot+electric+scooter',
      homedepotUrl: null,
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=segway+ninebot+electric+scooter',
      brandUrl: null,
    },
    {
      id: 14,
      name: 'Level 1 Portable EV Charger',
      category: '🚗 EV & Transport',
      price: 89.99,
      description: 'Portable EV charger that plugs into any standard outlet. Perfect for renters or travel.',
      energySavings: 'Saves ~$400/year vs gas',
      rebateEligible: false,
      renterFriendly: true,
      popular: 77,
      amazonUrl: 'https://www.amazon.com/s?k=portable+level+1+ev+charger',
      homedepotUrl: 'https://www.homedepot.com/s/portable+ev+charger',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=portable+ev+charger',
      brandUrl: null,
    },

    // 🏠 Home & Insulation
    {
      id: 15,
      name: 'Duck Brand Weatherstrip Door Seal',
      category: '🏠 Home & Insulation',
      price: 12.99,
      description: 'Peel and stick door seal stops drafts instantly. No tools needed — perfect for renters.',
      energySavings: 'Saves ~$30/year on heating',
      rebateEligible: false,
      renterFriendly: true,
      popular: 82,
      amazonUrl: 'https://www.amazon.com/s?k=duck+brand+weatherstrip+door+seal',
      homedepotUrl: 'https://www.homedepot.com/s/weatherstrip+door+seal',
      bestbuyUrl: null,
      brandUrl: null,
    },
    {
      id: 16,
      name: 'Kasa Smart Power Strip EP40',
      category: '🏠 Home & Insulation',
      price: 27.99,
      description: 'Smart power strip that eliminates phantom energy drain. Control each outlet individually via app.',
      energySavings: 'Saves ~$50/year',
      rebateEligible: false,
      renterFriendly: true,
      popular: 89,
      amazonUrl: 'https://www.amazon.com/s?k=kasa+smart+power+strip+EP40',
      homedepotUrl: 'https://www.homedepot.com/s/kasa+smart+power+strip',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=kasa+smart+power+strip',
      brandUrl: null,
    },
    {
      id: 17,
      name: 'Owens Corning R-38 Attic Insulation',
      category: '🏠 Home & Insulation',
      price: 54.97,
      description: 'Blown-in attic insulation that dramatically reduces heating and cooling costs for homeowners.',
      energySavings: 'Saves ~$200/year on energy',
      rebateEligible: true,
      renterFriendly: false,
      popular: 76,
      amazonUrl: 'https://www.amazon.com/s?k=owens+corning+attic+insulation+r38',
      homedepotUrl: 'https://www.homedepot.com/s/owens+corning+attic+insulation',
      bestbuyUrl: null,
      brandUrl: null,
    },

    // 🍽️ Kitchen & Food
    {
      id: 18,
      name: 'Duxtop Portable Induction Cooktop',
      category: '🍽️ Kitchen & Food',
      price: 49.99,
      description: 'Electric induction cooktop — cleaner and safer than gas. 84% more energy efficient. Perfect for renters.',
      energySavings: 'Saves ~$60/year vs gas cooking',
      rebateEligible: true,
      renterFriendly: true,
      popular: 88,
      amazonUrl: 'https://www.amazon.com/s?k=duxtop+portable+induction+cooktop',
      homedepotUrl: 'https://www.homedepot.com/s/portable+induction+cooktop',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=portable+induction+cooktop',
      brandUrl: null,
    },
    {
      id: 19,
      name: 'Stasher Reusable Silicone Food Bags',
      category: '🍽️ Kitchen & Food',
      price: 21.99,
      description: 'Replaces single-use plastic bags. Dishwasher safe, microwave safe, lasts years.',
      energySavings: 'Eliminates ~500 plastic bags/year',
      rebateEligible: false,
      renterFriendly: true,
      popular: 85,
      amazonUrl: 'https://www.amazon.com/s?k=stasher+reusable+silicone+food+bags',
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://www.stasherbag.com',
    },
    {
      id: 20,
      name: 'OXO Good Grips Compost Bin',
      category: '🍽️ Kitchen & Food',
      price: 29.99,
      description: 'Countertop compost bin that reduces food waste going to landfill. Sleek and odor-resistant.',
      energySavings: 'Diverts ~200 lbs of waste/year from landfill',
      rebateEligible: false,
      renterFriendly: true,
      popular: 80,
      amazonUrl: 'https://www.amazon.com/s?k=oxo+good+grips+compost+bin',
      homedepotUrl: 'https://www.homedepot.com/s/oxo+compost+bin',
      bestbuyUrl: null,
      brandUrl: null,
    },
    {
      id: 21,
      name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
      category: '🍽️ Kitchen & Food',
      price: 79.99,
      description: 'Uses up to 70% less energy than traditional cooking. Replaces 7 appliances in one.',
      energySavings: 'Saves ~$50/year on cooking energy',
      rebateEligible: false,
      renterFriendly: true,
      popular: 93,
      amazonUrl: 'https://www.amazon.com/s?k=instant+pot+duo+7+in+1',
      homedepotUrl: 'https://www.homedepot.com/s/instant+pot+duo',
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=instant+pot+duo',
      brandUrl: null,
    },
    {
      id: 22,
      name: 'Beeswax Wraps Variety Pack',
      category: '🍽️ Kitchen & Food',
      price: 18.99,
      description: 'Natural alternative to plastic wrap. Reusable, biodegradable, keeps food fresh.',
      energySavings: 'Eliminates ~150 feet of plastic wrap/year',
      rebateEligible: false,
      renterFriendly: true,
      popular: 78,
      amazonUrl: 'https://www.amazon.com/s?k=beeswax+wraps+variety+pack',
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: null,
    },

    // 👕 Fashion & Clothing
    {
      id: 23,
      name: 'ThredUp — Online Secondhand Store',
      category: '👕 Fashion & Clothing',
      price: 0,
      description: 'The largest online thrift store. Buy and sell secondhand clothing — huge selection, all brands.',
      energySavings: 'Each secondhand item saves ~700 gallons of water',
      rebateEligible: false,
      renterFriendly: true,
      popular: 92,
      amazonUrl: null,
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://www.thredup.com',
    },
    {
      id: 24,
      name: 'Patagonia Worn Wear — Repaired & Recycled Gear',
      category: '👕 Fashion & Clothing',
      price: 0,
      description: 'Buy repaired and recycled Patagonia gear at a discount. Same quality, fraction of the environmental cost.',
      energySavings: 'Saves 2/3 of new item\'s carbon footprint',
      rebateEligible: false,
      renterFriendly: true,
      popular: 88,
        amazonUrl: null,
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://wornwear.patagonia.com',
    },
    {
      id: 25,
      name: 'Poshmark — Buy & Sell Fashion',
      category: '👕 Fashion & Clothing',
      price: 0,
      description: 'Social marketplace for secondhand fashion. Find any brand, any style, at a fraction of retail price.',
      energySavings: 'Every secondhand purchase extends clothing life by 2+ years',
      rebateEligible: false,
      renterFriendly: true,
      popular: 85,
      amazonUrl: null,
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://www.poshmark.com',
    },
    {
      id: 26,
      name: 'Allbirds Natural Material Sneakers',
      category: '👕 Fashion & Clothing',
      price: 98.00,
      description: 'Shoes made from natural materials like merino wool and eucalyptus. Carbon neutral certified.',
      energySavings: 'Carbon footprint 30% lower than industry average',
      rebateEligible: false,
      renterFriendly: true,
      popular: 82,
      amazonUrl: null,
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://www.allbirds.com',
    },

    // 🎒 On The Go
    {
      id: 27,
      name: 'Hydro Flask Wide Mouth Water Bottle',
      category: '🎒 On The Go',
      price: 44.95,
      description: 'Insulated stainless steel bottle keeps drinks cold 24hrs, hot 12hrs. Replaces hundreds of plastic bottles.',
      energySavings: 'Eliminates ~156 plastic bottles/year',
      rebateEligible: false,
      renterFriendly: true,
      popular: 94,
      amazonUrl: 'https://www.amazon.com/s?k=hydro+flask+wide+mouth+water+bottle',
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://www.hydroflask.com',
    },
    {
      id: 28,
      name: 'Anker PowerCore Solar Charger',
      category: '🎒 On The Go',
      price: 49.99,
      description: 'Solar powered portable charger for phones and devices on the go. No outlet needed.',
      energySavings: 'Powers devices entirely from sunlight',
      rebateEligible: false,
      renterFriendly: true,
      popular: 80,
      amazonUrl: 'https://www.amazon.com/s?k=anker+powercore+solar+charger',
      homedepotUrl: null,
      bestbuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=anker+solar+charger',
      brandUrl: null,
    },
    {
      id: 29,
      name: 'KeepCup Reusable Coffee Cup',
      category: '🎒 On The Go',
      price: 24.00,
      description: 'Barista standard reusable cup. Many coffee shops offer discounts for bringing your own.',
      energySavings: 'Eliminates ~500 disposable cups/year',
      rebateEligible: false,
      renterFriendly: true,
      popular: 83,
      amazonUrl: 'https://www.amazon.com/s?k=keepcup+reusable+coffee+cup',
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://www.keepcup.com',
    },

    // 🧴 Personal Care
    {
      id: 30,
      name: 'Blueland Clean Essentials Kit',
      category: '🧴 Personal Care',
      price: 46.00,
      description: 'Refillable cleaning kit — just add water to tablets. Eliminates plastic bottles from your home forever.',
      energySavings: 'Eliminates ~10 plastic bottles/year',
      rebateEligible: false,
      renterFriendly: true,
      popular: 90,
      amazonUrl: 'https://www.amazon.com/s?k=blueland+clean+essentials+kit',
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://www.blueland.com',
    },
    {
      id: 31,
      name: 'The Earthling Co. Shampoo & Conditioner Bars',
      category: '🧴 Personal Care',
      price: 14.99,
      description: 'Plastic-free solid shampoo and conditioner bars. Each bar replaces 2-3 bottles. Natural ingredients.',
      energySavings: 'Eliminates 6+ plastic bottles/year',
      rebateEligible: false,
      renterFriendly: true,
      popular: 85,
      amazonUrl: 'https://www.amazon.com/s?k=earthling+co+shampoo+bar',
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://theearthlingco.com',
    },
    {
      id: 32,
      name: 'Dr. Bronner\'s Pure Castile Liquid Soap',
      category: '🧴 Personal Care',
      price: 16.99,
      description: 'Concentrated multipurpose soap — body wash, shampoo, cleaning. One bottle replaces many products.',
      energySavings: 'Replaces 5+ single-use products',
      rebateEligible: false,
      renterFriendly: true,
      popular: 88,
      amazonUrl: 'https://www.amazon.com/s?k=dr+bronner+pure+castile+liquid+soap',
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://www.drbronner.com',
    },

    // 🐾 Pets
    {
      id: 33,
      name: 'Open Farm Sustainable Dry Dog Food',
      category: '🐾 Pets',
      price: 38.99,
      description: 'Humanely raised, sustainably sourced pet food. Certified humane, transparent supply chain.',
      energySavings: '60% lower carbon footprint than conventional pet food',
      rebateEligible: false,
      renterFriendly: true,
      popular: 81,
      amazonUrl: 'https://www.amazon.com/s?k=open+farm+sustainable+dry+dog+food',
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://openfarmpet.com',
    },
    {
      id: 34,
      name: 'West Paw Zogoflex Eco Dog Toy',
      category: '🐾 Pets',
      price: 14.95,
      description: 'Made in USA from recycled materials. 100% recyclable at end of life. Durable and non-toxic.',
      energySavings: 'Made from recycled plastic — diverts waste from landfill',
      rebateEligible: false,
      renterFriendly: true,
      popular: 76,
      amazonUrl: 'https://www.amazon.com/s?k=west+paw+zogoflex+eco+dog+toy',
      homedepotUrl: null,
      bestbuyUrl: null,
      brandUrl: 'https://www.westpaw.com',
    },

    // 🌱 Garden & Outdoor
    {
      id: 35,
      name: 'Rain Bird Drip Irrigation Kit',
      category: '🌱 Garden & Outdoor',
      price: 34.99,
      description: 'Efficient drip irrigation that uses up to 50% less water than sprinklers. Easy DIY setup.',
      energySavings: 'Saves ~$40/year on water bills',
      rebateEligible: false,
      renterFriendly: true,
      popular: 78,
      amazonUrl: 'https://www.amazon.com/s?k=rain+bird+drip+irrigation+kit',
      homedepotUrl: 'https://www.homedepot.com/s/rain+bird+drip+irrigation',
      bestbuyUrl: null,
      brandUrl: null,
    },
    {
      id: 36,
      name: 'Good Ideas Rain Wizard Rain Barrel',
      category: '🌱 Garden & Outdoor',
      price: 99.99,
      description: 'Collects rainwater for garden use — free water for your plants. Reduces runoff and water bills.',
      energySavings: 'Saves ~1,300 gallons of water/year',
      rebateEligible: true,
      renterFriendly: false,
      popular: 74,
      amazonUrl: 'https://www.amazon.com/s?k=good+ideas+rain+wizard+rain+barrel',
      homedepotUrl: 'https://www.homedepot.com/s/rain+barrel+garden',
      bestbuyUrl: null,
      brandUrl: null,
    },
    {
      id: 37,
      name: 'Miracle-Gro Potting Mix + Worm Castings Bundle',
      category: '🌱 Garden & Outdoor',
      price: 22.99,
      description: 'Grow your own food at home — balcony or windowsill friendly. Reduces food transport emissions.',
      energySavings: 'Home grown food saves ~2 lbs CO₂ per meal',
      rebateEligible: false,
      renterFriendly: true,
      popular: 71,
      amazonUrl: 'https://www.amazon.com/s?k=potting+mix+worm+castings+container+garden',
      homedepotUrl: 'https://www.homedepot.com/s/potting+mix+worm+castings',
      bestbuyUrl: null,
      brandUrl: null,
    },
  ];

  const content = {
    EN: {
      title: 'Shop',
      subtitle: 'Curated sustainable products across every part of your life.',
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
      visitBrand: '🔗 Visit Brand',
      save: '☆',
      saved: '⭐',
      noResults: 'No products match your filters. Try adjusting your search or price range.',
      priceNote: '* Prices are approximate and may vary by retailer. Free items link directly to the brand.',
      free: 'Free to browse',
    },
    ES: {
      title: 'Tienda',
      subtitle: 'Productos sostenibles para cada parte de tu vida.',
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
      visitBrand: '🔗 Visitar Marca',
      save: '☆',
      saved: '⭐',
      noResults: 'Ningún producto coincide con tus filtros. Intenta ajustar tu búsqueda.',
      priceNote: '* Los precios son aproximados y pueden variar según el minorista.',
      free: 'Gratis para explorar',
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
    const query = encodeURIComponent(search + ' sustainable eco friendly');
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
      <NavBar activeTab="shop" onTabChange={onTabChange} language={language} fixed={false} />
      <div style={{
        backgroundColor: '#F0EBE3',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '24px',
        paddingBottom: '40px',
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
                      {product.price === 0 ? current.free : `~$${product.price.toFixed(2)}`}
                    </p>
                  </div>

                  {/* Description */}
                  <p style={{ color: '#666', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>
                    {product.description}
                  </p>

                  {/* Energy/Impact Savings */}
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

                  {/* Buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 'auto' }}>
                    {/* Brand URL for brand-direct items */}
                    {product.brandUrl && (
                      <button
                        onClick={() => window.open(product.brandUrl, '_blank')}
                        style={{
                          width: '100%',
                          textAlign: 'center',
                          backgroundColor: '#4F8C6F',
                          color: 'white',
                          padding: '10px',
                          borderRadius: '10px',
                          fontSize: '13px',
                          fontWeight: '600',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        {current.visitBrand}
                      </button>
                    )}
                    {/* Amazon */}
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
                    {/* Home Depot + Best Buy */}
                    {(product.homedepotUrl || product.bestbuyUrl) && (
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
                    )}
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
      <NavBar activeTab="shop" onTabChange={onTabChange} language={language} fixed={false} />
    </>
  );
}

export default Shop;