module.exports = async function handler(req, res) {
  const { zip } = req.query;

  if (!zip) {
    return res.status(400).json({ error: 'ZIP code is required' });
  }

  const apiKey = process.env.USDA_FARMERS_MARKET_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  // We need lat/lng from zip — use a free geocoding service
  try {
    const geoResponse = await fetch(
      `https://nominatim.openstreetmap.org/search?postalcode=${zip}&country=US&format=json&limit=1`,
      { headers: { 'User-Agent': 'MiraApp/1.0' } }
    );
    const geoData = await geoResponse.json();

    if (!geoData || geoData.length === 0) {
      return res.status(404).json({ error: 'Could not find location for this ZIP code' });
    }

    const { lat, lon } = geoData[0];

    const marketsResponse = await fetch(
      `https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=${apiKey}&x=${lon}&y=${lat}&radius=25`
    );

    const marketsData = await marketsResponse.json();
    res.status(200).json(marketsData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};