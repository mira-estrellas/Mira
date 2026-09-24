import { useState, useEffect } from 'react';

function useIncentives(zipCode) {
  const [incentives, setIncentives] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!zipCode || zipCode.length !== 5) return;

    const fetchIncentives = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/incentives?zip=${zipCode}`);

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        setIncentives(data.incentives || []);
      } catch (err) {
        setError(err.message);
        console.error('Rewiring America API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchIncentives();
  }, [zipCode]);

  return { incentives, loading, error };
}

export default useIncentives;