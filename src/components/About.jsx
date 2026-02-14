import React from 'react'
import Rectangle from '../../src/assets/Group 1000005938.png'
import Employees from '../../src/assets/Rectangle 3135.png'
import Store from '../../src/assets/Rectangle 3133.png'
import Header from './Header'
import Footer from './Footer'


const About = () => {
  return (
    <div>
      <Header/>
      <div className='w-11/12 mx-auto flex gap-5 '>
        <p>Home </p>
        <p className='text-orange-300 '>About us</p>
      </div>
      <div className=' w-11/12 mt-12 md:flex justify-between mx-auto'>
      <div className=' md:w-5/10'>
        <h1 className='text-center font-bold  md:mb-5 md:font-bold md:text-left  md:text-4xl mb-5'>Providing through marketing</h1>
      <p className='text-1xl leading-8 mb-5 md:text-2xl'>We are the best marketing platform ever, we specialized in selling variety of goods and services all over the world.</p>
      <p className='text-1xl leading-8 mb-5 md:text-2xl'>We also make it possible for marketers to come in and automatically become a vendor in our app, thats what makes us the best.</p>
      <button className='mt-7 mb-22 px-22 bg-orange-300 py-2  cursor-pointer  text-white md:py-2 md:px-7'>See More</button>
      </div>
   
    <img src={Rectangle} className='h-100' alt="" />
     </div>
       <div className='text-center  md:grid grid-cols-4  md:gap-y-16 my-28  w-11/12 mx-auto place-content-center'>
      <div className='mb-13'>
     <h1 className='text-orange-400 text-6xl font-bold'>200+</h1>
     <p className=' mt-3 font-bold text-2xl'>Worldwide offices.</p>
     </div>
      <div className='mb-13'>
     <h1 className='text-orange-400 text-6xl font-bold'>85+</h1>
     <p className='mt-3 font-bold text-2xl'>Team members</p>
     </div>
     <div className=' hidden md:block'>
     <h3 className='font-bold text-2xl'>Experience and Expertise</h3>
     <p className='mt-3 text-2xl'>Over 20years of experience</p>
    </div>

    <div className='hidden md:block'>
      <h1 className='font-bold text-2xl'>customer Loyalty</h1>
      <p className='mt-3 text-2xl'>Our customers trusts us wholesomely</p>
    </div>
      <div className='mb-13'>
     <h1 className='text-orange-400 text-6xl font-bold'>10M+</h1>
     <p className='mt-3 font-bold text-2xl'>Capital raised</p>
     </div>


<div className=' block  mt-10  md:hidden'>
     <h3 className='font-bold text-2xl'>Experience and Expertise</h3>
     <p className='mt-3 text-2xl'>Over 20years of experience</p>
    </div>

    <div className='block  mt-10  md:hidden'>
      <h1 className='font-bold text-2xl'>customer Loyalty</h1>
      <p className='mt-3 text-2xl w-90 mx-auto'>Our customers trusts us wholesomely</p>
    </div>

<div className='block  mt-10  md:hidden'>
      <h3 className=' text-2xl font-bold'>warranty</h3>
      <p className='mt-3 text-2xl  w-80 mx-auto'>User gets a 3 months warranty</p>
    </div>


 <div className='block mt-10 md:hidden'>
     <h3 className='text-2xl font-bold'>Team</h3>
     <p className='text-2xl  w-90 mx-auto'>The enterprise has a total of 30+ active staffs</p>
    </div>
    


      <div className='hidden md:block'>
     <h1 className='text-orange-400 text-6xl font-bold'>500K+</h1>
     <p className='mt-3 font-bold text-2xl'>Active users</p>
     </div>

     


    <div className='hidden md:block'>
      <h3 className=' text-2xl font-bold'>warranty</h3>
      <p className='mt-3 text-2xl'>User gets a 3 months warranty</p>
    </div>
    <div className='hidden md:block'>
     <h3 className='text-2xl font-bold'>Team</h3>
     <p className='text-2xl'>The enterprise has a total of 30+ active staffs</p>
    </div>
     </div>

     <div className=' hidden md:flex w-11/12 mb-33   mx-auto  justify-between'>
      <h1 className='font-bold text-5xl w-183.5 '>We're a team of experts</h1>
      <p className='pl-44 text-2xl w-300 text-orange-400 '>This enterprise has honed a lot of skilled mind, raning from different sectors of marketing, be it the logistics,fashion,electronics,gadgets and many more.</p>
     </div>
     <div className=' bg-gray-300 py-12 w-11/12  mx-auto'>
      <img src={Employees}  className='hidden  md:mx-auto md:block' alt="" />
     <div className='block py-3 md:mt-12 md:flex justify-around'>
      <img src={Store} className=' w-70 mx-auto md:h-1/5 md:w-134' alt="" />
      <div className='pt-10 w-140 px-16 '>
        <h1 className='text-2xl font-bold w-2/3 md:font-bold md:w-full md:text-4xl mb-4'>Our Industry - Explicit Competence</h1>
        <p className='w-2/3 md:mb-8 font-semibold md:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit officiis illum quas adipisci modi, eveniet nam iure nihil amet.</p>
        <p className='w-2/3 my-9 font-semibold md:mb-8  md:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit officiis illum quas adipisci modi, eveniet nam iure nihil amet.</p>
     <button className='text-white bg-orange-300 px-6 py-2 cursor-pointer'>Leave us a message</button>
      </div>
     </div>
     </div>
<Footer/>
    </div>
  )
}

export default About
