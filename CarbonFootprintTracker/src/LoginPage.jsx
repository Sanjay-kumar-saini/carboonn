import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupPage from './SignUpPage';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Implement login logic here (e.g., send login request to backend)
    console.log('Login attempted with email:', email, 'password:', password);
    setEmail(''); // Clear form fields after submission (optional)
    setPassword('');
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/SignUpPage');
  };
 
  

  return (
    <div className="login-page flex flex-col bg-gray-300 p-2 h-screen mx-auto items-center  ">
      <h1>Login</h1>
    <div className='flex flex-col'>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email" className='mx-2'>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password" className='mx-2'>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='mx-7 bg-green-900 p-2'>Login</button>
      </form>
    </div>
      <p className='my-5'>new here?Create new account</p>
    <button  onClick={handleButtonClick} className='p-2 bg-green-900'>Sign up</button>
    </div>
  );
}

export default LoginPage;