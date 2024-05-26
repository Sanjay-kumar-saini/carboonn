import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { useState } from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import LoginPage from './LoginPage'
import { useNavigate } from 'react-router-dom';






function Navbar() {
  const [nav,setNav] = useState(false);
  const [logo,setLogo] = useState(false);
 const [isclick,setClick] = useState(false);





  const handleNav = ()=>{
    setNav(!nav);
    setLogo(!logo);
  }

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/LoginPage');
  };



  return (
    <>
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white bg-green-950 bg-opacity-60 p-8 rounded-lg shadow-lg  '>
      <div className='flex my-10'>
        {/* yaha image aayega */}
        <h1 onClick={handleNav} className={logo ? 'hidden':'block text-3xl text-white font-extrabold'}>Green</h1>
      </div>
      <ul className='hidden md:flex gap-5 text-green font-bold '>
        <li className='hover:underline text-green  cursor-pointer'>Home</li>
        <li className='hover:underline text-green cursor-pointer'>About us</li>
        <li className='hover:underline text-green cursor-pointer'>Blog</li>
      </ul>

      <div className='hidden md:flex text-green-900 rounded-full border-2 p-2 border-green-950 bg-white '>
    
      <BsPerson onClick={handleButtonClick}  />
       
      </div>

{/*Hamburger*/}

      <div onClick={handleNav} className='md:hidden z-10 text-green-900'>
     {nav? <AiOutlineClose size={20}/>: <HiOutlineMenuAlt4 size={20}/> }
      </div>
      <div className={nav? 'absolute text-black left-[0] top-0 w-full px-4 py-7 flex flex-col bg-gray-100/90':'absolute left-[-100%] top-0 w-full px-4 py-7 flex flex-col bg-gray-100/90'}> 
        <h1>Beaches.</h1>
        <li className='border-b'>Home</li>
        <li className='border-b'>Destination</li>
        <li className='border-b'>Travel</li>
        <li className='border-b'>Book</li>
        <div className=' flex flex-col'>
          <button className='my-2'>Search</button>
          <button>Account</button>
        </div>

        <div className='flex justify-between my-4'> 
          <FaFacebook className='icon'/>
          <FaTwitter className='icon'/>
          <FaYoutube className='icon'/>
          <FaPinterest className='icon'/>
          <FaInstagram className='icon'/>
        </div>
      </div>
     



    </div>
    
    </>
  )
}

export default Navbar
