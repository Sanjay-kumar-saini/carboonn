import React from 'react'
import {useState} from 'react'
import { FaChevronDown, FaMinus } from 'react-icons/fa'
import { FaCalculator } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa';
import CarbonReductionPage from './CarbonReductionPage';
import SignupPage from './SignUpPage';

function Contribution() {
  
    const [showDiv, setShowDiv] = useState(false);
    const [userstatus,setUserStatus] = useState(false);
    const [isButtonClicked,setClick] = useState(false);

    const handleClick = ()=>{
      setClick(!isButtonClicked);
    }

    const handleUserStatus=()=>{
      setUserStatus(!userstatus);
    }
  
    const handleLearnMoreClick = () => {
      setShowDiv(!showDiv);
    };
  
   

  const [expandedEvent, setExpandedEvent] = useState(null);

  const toggleEventDescription = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };






  
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col  ">
      <div className="container mx-auto py-8 text-green">
        <h2 className="text-3xl font-bold mb-4 text-center text-green-950">Take Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Event 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            
            <div className=" justify-between items-center">
            <FaCalculator size={100} className="text-3xl text-yellow-600 " />
              <h3 className="text-lg font-bold my-10">Calculate</h3>
              <button
                onClick={() => toggleEventDescription(1)}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {expandedEvent === 1 ? <FaMinus/>:<FaChevronDown/>}
              </button>
            </div>
            {expandedEvent === 1 && (
              <>
                <p className="mt-2 text-gray-600">Use our carbon footprint calculator to calculate carbon emmision at individual level</p>
                
              </>
            )}
            <div className="flex justify-center mt-2">
              <button className="bg-yellow-600 px-4 py-2 rounded-md text-white" onClick={handleClick}>Calculate</button>
            </div>
          </div>

          {/* Event 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md ">
           
            <div className=" justify-between items-center ">
            <FaArrowDown size={100} className="text-3xl text-blue-500" />
              <h3 className="text-lg font-bold text-green my-10">Reduce</h3>
              <button
                onClick={() => toggleEventDescription(2)}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {expandedEvent === 2 ? <FaMinus/>:<FaChevronDown/>}
              </button>
            </div>
            {expandedEvent === 2 && (
              <>
                <p className="mt-2 text-gray-600">Learn more about how to reduce your carbon footprint.</p>
               
              </>
            )}
            <div className="flex justify-center mt-2">
              <button className="bg-blue-500 px-4 py-2 rounded-md text-white"   onClick={handleLearnMoreClick}>Learn more</button>
            </div>
          </div>

          {/* Event 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
          
            <div className="justify-between items-center">
            <FaLeaf size={100} className="text-green-500 text-3xl" />
              <h3 className="text-lg font-bold text-green m-10">Buy a plant</h3>
              <button
                onClick={() => toggleEventDescription(3)}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {expandedEvent === 3 ? <FaMinus/>:<FaChevronDown/>}
              </button>
            </div>
            {expandedEvent === 3 && (
              <>
                <p className="mt-2 text-gray-600">even a little help can make a change</p>
               
              </>
            )}
            <div className="flex justify-center mt-2">
              <button className="bg-green-900 px-4 py-2 rounded-md text-white">Donate</button>
            </div>
          </div>

        </div>

     


      </div>

      {userstatus && isButtonClicked ? (
        <div className="p-4 bg-blue-500 text-white rounded">
          <h2 className="text-2xl">This is Div 2</h2>
          <p>State is true</p>
        </div>
      ) :''}


{!userstatus && isButtonClicked ? (
       <SignupPage/>
      ) :''}






    </div>
    );
  
}

export default Contribution
