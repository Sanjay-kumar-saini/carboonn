import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'
import Contribution from './Contribution'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrackFootprint from './TrackFootprint'
import Leaderboard from './Leaderboard'
import axios from 'axios'


const App=()=> {
  const [data , setData] = useState([]);
  const fetchData = async ()=>{
    const response = await axios.get('http://localhost:3000/api');
    setData(response,data);
    useEffect(() => {
      fetchData();
    });
}
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Navbar />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path='/SignUpPage' element={<SignUpPage />} />
            
        
           
    </Routes>
    
    </Router>
    <Hero/>
      <Contribution/>
      <TrackFootprint/>
      <Leaderboard/>
        

    </>
  )
}

export default App
