module.exports = async function handler(req, res) {
  const { query, category } = req.query;

  if (!query && !category) {
    return res.status(400).json({ error: 'Query or category is required' });
  }

  const apiKey = process.env.GOOGLE_SEARCH_API_KEY;
  const searchEngineId = process.env.GOOGLE_SEARCH_ENGINE_ID;

  if (!apiKey || !searchEngineId) {
    return res.status(500).json({ error: 'Search not configured' });
  }

  // Build search query — combine user search with category context
  const searchQuery = category
    ? `${query || ''} ${category} clean energy`
    : `${query} clean energy product`;

  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(searchQuery)}&num=10`,
    );

    if (!response.ok) {
      const error = await response.text();
      return res.status(response.status).json({ error });
    }

    const data = await response.json();

    // Format results for Mira's Shop tab
    const results = (data.items || []).map(item => ({
      title: item.title,
      description: item.snippet,
      url: item.link,
      image: item.pagemap?.cse_image?.[0]?.src || null,
      source: item.displayLink,
    }));

    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}