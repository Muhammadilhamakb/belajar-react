// UpcomingBillsCard.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const UpcomingBillsCard = () => {
  const [bills, setBills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          throw new Error('No token found');
        }

        const response = await axios.get('https://jwt-auth-eight-neon.vercel.app/bills', {
          headers: {
            Authorization: `Bearer ${refreshToken}`
          }
        });

        setBills(response.data);
      } catch (err) {
        setError(err.response?.data?.msg || 'Failed to fetch bills');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBills();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Upcoming Bills</h2>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Upcoming Bills</h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Upcoming Bills</h2>
      <div className="space-y-4">
        {bills.map((bill) => (
          <div key={bill.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <h3 className="font-medium">{bill.title}</h3>
              <p className="text-sm text-gray-500">{new Date(bill.dueDate).toLocaleDateString()}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">${bill.amount}</p>
              <span className={`text-sm ${
                bill.status === 'paid' ? 'text-green-500' : 'text-orange-500'
              }`}>
                {bill.status}
              </span>
            </div>
          </div>
        ))}
        {bills.length === 0 && (
          <p className="text-gray-500 text-center">No upcoming bills</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingBillsCard;