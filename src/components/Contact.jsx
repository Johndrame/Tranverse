import React from 'react'
import Facebook from '../../src/assets/fb.png'
import Instagram from '../../src/assets/insta.png'
import Twitter from '../../src/assets/twitter2.png'
import Map from '../../src/assets/Rectangle 56 (2).png'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
      <Header/>
      <div  className=' w-11/12 mx-auto mt-12'>
      <div className='flex justify-between '>
        <div className=''>
<div className='flex gap-4'>
  <h2>Home</h2>
  <h2 className='text-orange-300'>Contact Us</h2>
</div>
<h1 className='mt-6 font-semibold text-2xl'>Get Started</h1>
<h1 className=' mb-3 mt-7 font-semibold text-2xl md:text-5xl'>Get in touch with us</h1>
<h1 className='font-semibold text-2xl md:text-5xl '>We're here to assist you</h1>
    </div>
    <div className=''>
      <img src={Facebook} className='mt-17 mb-6' alt="" />
      <img src={Instagram} className='mb-6' alt="" />
      <img src={Twitter} alt="" />
    </div>
    </div>
    
   <div className='mt-33 flex justify-between text-center'> 
<div className=''>
  <h1 className='font-medium text-xs md:text-2xl'>Your Name</h1>
    <label htmlFor="input" >
      <input type="text" className=' w-30 border-b-gray-400 border-2  border-t-0 border-x-0 md:w-90' />
    </label>
    </div>
    <div>
  <h1 className='font-medium text-xs md:text-2xl'>Email address</h1>
    <label htmlFor="input" >
      <input type="email" className= 'w-30 border-b-gray-400 border-2  border-t-0 border-x-0 md:w-90' />
    </label>
    </div>
<div>
  <h1 className='font-medium text-xs md:text-2xl'>Phone Number</h1>
    <label htmlFor="input" >
      <input type="number" className='w-30 border-b-gray-400 border-2  border-t-0 border-x-0 md:w-90' />
    </label>
    </div>

    </div>
    <div className='mt-23 md:text-2xl'>
  <h1 className='font-medium '>Message</h1>
    <label htmlFor="input" >
      <input type="number" className='w-full border-b-gray-400 border-2  border-t-0 border-x-0 md:w-170' />
    </label>
    </div> 
    <div className='mt-10 mb-16 text-center md:text-left'>
    <button className='bg-orange-300 py-3 px-8 text-white'>Leave us a Message</button>
</div>
</div>

<img src={Map} className=' w-full h-93' alt="" />
 <div className=' w-7/12 mx-auto  mb-16 md:w-11/12 md:mx-auto md:mt-23'>
 <div className='md:flex justify-between'> 
  <div>
 <h2 className='mt-22 font-medium md:mt-0'>Contacy Info</h2>
 <h1 className='font-bold text-3xl  mt-6  w-9/12'>We are always happy to assist you</h1>
 </div>
 <div>
 <h2 className=' font-medium'>Email Address</h2>
  <h2 className='mt-4 font-medium border w-8'></h2>
 <h2 className='mt-4 font-bold'>Musk.E@gmail.com</h2>
 <h2 className='mt-2 font-medium'>Assistance hours:</h2>
 <h2 className='mt-2 font-medium w-2/3'>Monday - Friday 7 am to 9 pm EST</h2>
</div>
<div>
 <h2 className=' font-bold'>Number</h2>
  <h2 className='mt-4 font-medium border w-8'></h2>
 <h2 className='mt-4 font-bold'>090 543-85432</h2>
 <h2 className='mt-2 font-semi-bold'>Assistance hours:</h2>
 <h2 className='mt-2 font-medium w-2/3'>Monday - Friday 7 am to 9 pm EST</h2>
 </div>
 </div>
 </div>



<Footer/>
 
 </div>
   
  )
}

export default Contact
