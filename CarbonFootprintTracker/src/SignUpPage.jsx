import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import LoginPage from './LoginPage'
import { useNavigate } from 'react-router-dom';


function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Implement signup logic here (e.g., send signup request to backend)
    console.log('Signup attempted with:', { name, email, phone, password, isTermsAccepted });
    setName(''); // Clear form fields after submission (optional)
    setEmail('');
    setPhone('');
    setPassword('');
    setIsTermsAccepted(false);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/LoginPage');
  };





  return (
    <div className="signup-page p-3 h-screen items-center mx-auto">
    
      <h1>Sign Up</h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          className='outline mx-2'

          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className='outline mx-2'

          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          className='outline mx-2'

          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className='outline mx-2'

          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="terms-container my-8">
          <input
            type="checkbox"
            id="terms"
            checked={isTermsAccepted}
            onChange={(e) => setIsTermsAccepted(e.target.checked)}
          />
          <label htmlFor="terms">I agree to the terms and conditions.</label>
        </div>
        <button type="submit" disabled={!isTermsAccepted} className='bg-green-900 p-2 text-white'>
          Sign Up 
        </button>

      </form>
      <p >Already a member <span onClick={handleButtonClick} className='text-green-900 my-2 cursor-pointer'>Login</span></p>
    </div>
  );
}

export default SignupPage;