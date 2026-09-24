import { useState, useEffect } from 'react';

function useIncentives(zipCode, ownerStatus, householdSize, householdIncome) {
  const [incentives, setIncentives] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!zipCode || zipCode.length !== 5) return;

    const fetchIncentives = async () => {
      setLoading(true);
      setError(null);

      const owner = ownerStatus === 'own' ? 'homeowner' : 'renter';
      const size = householdSize || 2;
      const income = householdIncome || 80000;
      const url = `/api/incentives?zip=${zipCode}&owner_status=${owner}&household_income=${income}&household_size=${size}`;

      try {
        const response = await fetch(url);

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
  }, [zipCode, ownerStatus, householdSize, householdIncome]);

  return { incentives, loading, error };
}

export default useIncentives;