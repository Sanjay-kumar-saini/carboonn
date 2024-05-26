import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrackFootprint() {
  const [footprint, setFootprint] = useState(0);
  const [userId, setUserId] = useState(''); 
  const [history, setHistory] = useState([]);
  const [apiBaseUrl, setApiBaseUrl] = useState('');
  const [topDaily, setTopDaily] = useState([]);
  const [topMonthly, setTopMonthly] = useState([]);
  const [topYearly, setTopYearly] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFootprintChange = (event) => {
    setFootprint(parseFloat(event.target.value));
  };

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await axios.get('/config.json'); // Fetch configuration file
        setApiBaseUrl(response.data.apiBaseUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchConfig();
  }, []); // Run on component mount

  const handleSubmit = async () => {
    const url = `${apiBaseUrl}/footprints`; // Construct URL using fetched baseUrl
    try {
      const response = await fetch(url, {
        method: 'POST',
        // ... other request options
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, token })

      })  
      const data = await response.json();
      // Accessing 0th and 1st index of the data items
      console.log(data[0]);
      console.log(data[1]);
      // ... handle response
    } catch (error) {
      console.error(error);
    }
  };  



  // ...



  const fetchHistory = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.get(`/footprints/user/${userId}`);
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
    <div className="track-footprint h-screeen w-full">
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
     

{/* The carbon footprint calculation section gors here--- */}


       {/* <h2>Your Footprint History</h2>
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
      )} */}
     <label htmlFor="">Vehicle: </label> <input type="text" />
      </div> 
      
    
    ); 
      }

      export default TrackFootprint;