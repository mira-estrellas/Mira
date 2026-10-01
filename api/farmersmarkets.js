module.exports = async function handler(req, res) {
  const { zip } = req.query;

  if (!zip) {
    return res.status(400).json({ error: 'ZIP code is required' });
  }

  const apiKey = process.env.USDA_FARMERS_MARKET_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch(
      `https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=${apiKey}&zip=${zip}&radius=25`
    );

    const text = await response.text();
    console.log('USDA response:', text.substring(0, 300));

    if (!response.ok) {
      return res.status(response.status).json({ error: `USDA error: ${response.status}`, details: text });
    }

    const data = JSON.parse(text);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};