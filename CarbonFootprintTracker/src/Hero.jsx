import React from 'react'

function Hero() {
  return (
    <div className='md:h-screen w-full relative max-h-screen z-0 '>
    <img src="https://i.pinimg.com/564x/07/a3/63/07a363a320934fbdf1e6c61243e6d496.jpg" alt=""  className='w-full h-2/3 object-cover content-center'/>

    <div className='absolute w-full h-full top-0 left-0 bg-gray-500/15'>
      <div className='absolute top-0 w-full h-3/4 flex flex-col justify-center text-center p-3 '>
        <h1 className='text-4xl text-white md:text-6xl'>Together, We can Heal the Earth</h1>
        <h2 className='py-4 font-bold text-white'>Small Steps, Big Impact</h2>
      
          <div><button className='bg-white text-green  border-green-800 border-2 px-4 py-2 rounded-lg  font-extrabold'>Get started</button></div>
         
       
      </div>   </div>
       <h1 className='text-center my-2'>We aim at:</h1>
   <div id='sec' className="flex flex-wrap w-full my-4 mx-2 items-center justify-center gap-5">


    <div className='w-full  text-center  bg-white z-10 px-2 py-2 rounded-full'>
      <h2 className='text-green'><b>Co2 Control Awareness</b></h2>
      <p className='text-sm'>We envision a world where individuals are fully aware of their environmental impact and are motivated to take steps towards sustainability. By providing the tools and knowledge needed to reduce carbon footprints, we aim to foster a community committed to environmental stewardship.</p>
    </div>


   </div>




  </div>
  )
}

export default Hero
