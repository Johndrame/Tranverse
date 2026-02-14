import React from 'react'
import Bag from '../../src/assets/image 9.png'
import Search from '../../src/assets/search-sharp.png'
import Youtube from '../../src/assets/youtube.png'
import LinkedIn from '../../src/assets/linkedin.png'
import Facebook from '../../src/assets/facebook.png'
import Twitter from '../../src/assets/twitter.png'
import Instagram from '../../src/assets/instagram.png'

const Footer = () => {
  return (
    <div className='bg-neutral-600   md:py-10 '>
        <div className='  w-5/10  mx-auto pb-20 block md:flex justify-between md:w-11/12 md:place-items-center '> 
      <div className='flex   place-items-center md:gap-7 mb-8 '>
        <img src={Bag} alt="" />
         <h1 className='font-extrabold text-white text-3xl'>eTrANSVER</h1>
      </div>
      <div>
                  <div className='flex relative'>
                    <img src={Search} className='absolute left-5 top-3'  alt="search" />
                  <input type="text"   placeholder='Enter your email to get the latest news'  className=' text-black w-20 placeholder:text-white  bg-white py-2 font-bold border-white md:w-90 placeholder:pl-13 md:placeholder:text-gray-400 ' />
                  <button className='border-gray-400 text- px-7 border-none cursor-pointer text-white bg-orange-300 '>Search</button>
               </div>
               </div>
      </div>
      <div className=' text-white  w-5/10  mx-auto pt-20 md:border-t-2 md:flex justify-between md:w-11/12'>
      <div className='pt-9'>
        <a href="#" className='font-bold '>PRODUCTS</a>
        <h5 className='mt-5'>Wireless Speakers</h5>
        <a href="#">Noise Cancelling Headphones</a>
        </div>

           <div  className='pt-9'>
        <a href="#" className='font-bold'>SUPPORT</a>
          <h5 className='mt-5'>Help Center</h5>
            </div>

            <div  className='pt-9'>
              <a href="# " className='font-bold'>CONTENTS</a>
              <h5 className='mt-5'>Home</h5>
              <h5>About Us</h5>
              <h5>contact Us</h5>
              <a href="#">Categories</a>
            </div>

       <div className='pt-9'>
        <a href="#" className='font-bold '>STAY CONNECTED</a>
        <h5 className='mt-5'>Join Us</h5>
        <div className='hidden md:flex gap-3 mt-2'>
        <img src={Youtube} alt="" />
        <img src={Facebook} alt="" />
        <img src={Twitter} alt="" />
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />
        </div>
        </div>
      </div>
       </div>

  )
}

export default Footer
