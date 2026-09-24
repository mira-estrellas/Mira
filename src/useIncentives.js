import { useState, useEffect } from 'react';

function useIncentives(zipCode, ownerStatus) {
  const [incentives, setIncentives] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!zipCode || zipCode.length !== 5) return;

    const fetchIncentives = async () => {
      setLoading(true);
      setError(null);

      try {
        const owner = ownerStatus === 'rent' ? 'renter' : 'homeowner';
        const response = await fetch(
          `/api/incentives?zip=${zipCode}&owner_status=${owner}&household_income=80000&household_size=2`
        );

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
  }, [zipCode, ownerStatus]);

  return { incentives, loading, error };
}

export default useIncentives;