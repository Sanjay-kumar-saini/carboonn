import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrackFootprint() {
  const [footprint, setFootprint] = useState(0);
  const [userId, setUserId] = useState(''); // Replace with logic for user ID
  const [history, setHistory] = useState([]);
  const [topDaily, setTopDaily] = useState([]);
  const [topMonthly, setTopMonthly] = useState([]);
  const [topYearly, setTopYearly] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFootprintChange = (event) => {
    setFootprint(parseFloat(event.target.value));
  };

 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post('/footprints', { userId, footprint });
      console.log(response.data);
      setFootprint(0); // Clear footprint input after submission
      fetchHistory(); // Update history after submission
    } catch (error) {
      console.error(error);
      setErrorMessage('Error storing footprint. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchHistory = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.get(/footprints/user/${userId});
      console.log(response.data);
      setHistory(response.data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Error fetching footprint history. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTopRankings = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const dailyResponse = await axios.get('/footprints/daily/top5');
      const monthlyResponse = await axios.get('/footprints/monthly/top5');
      const yearlyResponse = await axios.get('/footprints/yearly/top5');

      setTopDaily(dailyResponse.data);
      setTopMonthly(monthlyResponse.data);
      setTopYearly(yearlyResponse.data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Error fetching top rankings. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
    fetchTopRankings();
  }, []); // Run these on component mount

  return (
    <div className="track-footprint">
      <h1>Track Your Carbon Footprint</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="footprint">Daily CO2 Footprint (kg):</label>
        <input
          type="number"
          id="footprint"
          value={footprint}
          onChange={handleFootprintChange}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Submit'}
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
     
      <h2>Your Footprint History</h2>
      {isLoading ? (
        <p>Loading history...</p>
      ) : history.length > 0 ? (
        <ul>
          {history.map((item) => (
            <li key={item._id}>
              {new Date(item.date).toLocaleDateString()} - {item.footprint} kg CO2
            </li>
          ))}
        </ul>
      ) : (
        <p>No footprint data found yet.</p>
      )}
    
      </div> );
      }

      export default TrackFootprint;