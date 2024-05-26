import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupPage from './SignUpPage';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';




function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show,setShow] = useState(true);


  const handleClose = ()=>{
    setShow(false);
  }

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
 
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      const result = await fetch('login');
      const jsonResult = await result.json();
      setData(jsonResult);
    }
    
    fetchData()
  },[])
  
  
  useEffect(() => {
    if (data.length > 0) {
      const indexes = data.map(item => item[0]);
      setFirstIndexes(indexes);
    }
  }, [data]);


  return (
    <>
        

    <div className={show?"login-page flex flex-col bg-gray-300 p-2 h-screen mx-auto items-center  w-full ":"hidden"}>
    <AiOutlineClose onClick={handleClose} size={24} color="red" style={{ cursor: 'pointer' }} />
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
    </div> </>
  );
}

export default LoginPage;