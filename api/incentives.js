export default async function handler(req, res) {
  const { zip } = req.query;

  if (!zip) {
    return res.status(400).json({ error: 'ZIP code is required' });
  }

  try {
    const response = await fetch(
      `https://api.rewiringamerica.org/api/v1/incentives?zip=${zip}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REWIRING_API_KEY}`,
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch incentives' });
  }
}