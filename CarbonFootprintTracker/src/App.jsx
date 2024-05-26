import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'
import Contribution from './Contribution'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

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

    </>
  )
}

export default App
