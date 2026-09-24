export default async function handler(req, res) {
  const { zip, owner_status, household_income, household_size } = req.query;

  if (!zip) {
    return res.status(400).json({ error: 'ZIP code is required' });
  }

  const apiKey = process.env.REWIRING_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const url = `https://api.rewiringamerica.org/api/v1/calculator?zip=${zip}&owner_status=${owner_status || 'homeowner'}&household_income=${household_income || '80000'}&household_size=${household_size || '2'}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Accept': 'application/json',
      },
    });

    const text = await response.text();

    if (!response.ok) {
      return res.status(response.status).json({
        error: `Rewiring America error: ${response.status}`,
        details: text,
      });
    }

    const data = JSON.parse(text);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}