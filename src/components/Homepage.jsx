import React from 'react'
import Rectangle from '../../src/assets/Rectangle 17.png'
import Sofa from '../assets/Cart2.png'
import Pendant from  '../assets/cart101.png'
import Pendant2 from '../../src/assets/Cart105.png'
import Rolex from '../../src/assets/cart103.png'
import Headset from '../../src/assets/cart104.png'
import Iphone17 from '../../src/assets/cart106.png'
import Iphone16 from '../../src/assets/cart107.png'
import ApplePad from '../../src/assets/Cart108.png' 
import LeftArrow from '../../src/assets/Fill With Left Arrow.png'
import RightArrow from '../../src/assets/Fill with Right Arrow.png'
import CyberTruck from '../../src/assets/Cart.png'
import PS5 from '../../src/assets/Cart (1).png'
import Iphone16A from '../../src/assets/Cart (2).png'
import JBL from '../../src/assets/Cart (3).png'
import Gadgets from '../../src/assets/Prodcut view 2 (1).png'
import Dress from '../../src/assets/Prodcut view 2.png'
import Cars from '../../src/assets/Prodcut view 3.png'
import House from '../../src/assets/Prodcut view 4.png'
import Furniture from '../../src/assets/Prodcut view 5.png'
import Creams from '../../src/assets/Prodcut view 6.png'
import Time from '../../src/assets/Group 1000005937.png'
import Earing from '../../src/assets/Cart41.png'
import WashingMachine from '../../src/assets/Cart42.png'
import StarLink from '../../src/assets/Cart43.png'
import Sneakers from '../../src/assets/Cart44.png'
import HotSale from '../../src/assets/download 1.png'
import PhoneCase from '../../src/assets/Cart54.png'
import Pendant3 from '../../src/assets/Cart (4).png'
import Sneaker2 from '../../src/assets/Cart (5).png'
import Teddy from '../../src/assets/Cart (6).png'
import Dj from '../../src/assets/dj.png'
import BasketBall from '../../src/assets/basketball.png'
import Jacket from '../../src/assets/leatherJacket.png'
import Jordan from  '../../src/assets/jordans.png'
import Sneaker4 from '../../src/assets/Prodcut view 3 (2).png'
import Party from '../../src/assets/Prodcut view 3 (3).png'
import GreenSneakers from '../../src/assets/greenSneaker.png'
import Sweater from '../assets/Sweater.png'
import TvConsole from '../assets/tvConsole.png'
import Jeans from '../assets/jeans.png'
import Header from './Header'
import Footer from './Footer'


const Homepage = () => {
  return (
    <div>
      <Header/>
    
    <div className='w-11/12 mt-30 mx-auto '>

      <div className='flex gap-3 place-items-center mb-10'>
    <img src={Rectangle} className='h-3 w-16 rounded md:w-135' alt="" />
    <h2 className='text-red-500 text-2xl font-bold'>Our Products</h2>
    </div>
    <div className='flex justify-between mb-10'>
    <h1 className=' font-semibold  md:font-bold text-3xl'>Explore Our Products</h1>
    <div className=' hidden md:flex '>
    <img src={LeftArrow} alt="" />
    <img src={RightArrow} alt="" />
    </div>
    </div>
    <div className='flex justify-between md:hidden'>
      <img src={Dj} alt="" />
      <img src={BasketBall} alt="" />
    </div>
    <div className='hidden md:grid grid-cols-4 gap-26  '>
<img src={Pendant} alt="" />
<img src={Sofa} alt="" />
<img src={Rolex} alt="" />
<img src={Headset} alt="" />
<img src={Pendant2} alt="" />
<img src={Iphone17} alt="" />
<img src={Iphone16} alt="" />
<img src={ApplePad} alt="" />

    </div>
    <div className='  flex justify-center '>
    <button className='bg-orange-300     text-white my-9 rounded  py-3 px-8'>View All Products</button>
    </div>

      <div className='flex gap-3 place-items-center mt-22'>
    <img src={Rectangle} className='h-3 w-16 rounded md:w-135' alt="" />
    <h2 className='text-red-500 text-2xl font-bold'>This Month</h2>
    </div>
     <div className='flex justify-between  place-items-center mb-10'>
    <h1 className='font-bold text-3xl '>Best Selling Products</h1>
     <button className='bg-orange-300  hidden  text-white my-9 rounded  py-3 px-8 md:block'>View All</button>
    </div>

  <div className='flex justify-between md:hidden'>
    <img src={Jacket} alt="" />
    <img src={Jordan} alt="" />
  </div> 
     <div className='  flex justify-center md:hidden'>
    <button className='bg-orange-300     text-white my-9 rounded  py-3 px-8'>View All Products</button>
    </div>
    <div className=' place-items-center md:hidden '>
    <img src={Sneaker4}className='mb-12' alt="" />
    <img src={Party} alt="" />
    </div>

     <div className='flex gap-3 place-items-center mt-22 md:hidden'>
    <img src={Rectangle} className='h-3 w-16 rounded md:w-135' alt="" />
    <h2 className='text-red-500 text-2xl font-bold'>Today</h2>
    </div>
     <div className='flex place-items-center my-10 md:hidden'>
    <h1 className='font-semibold text-2xl md:font-bold md:text-3xl '>Flash Sales</h1>
    <img src={Time} className='mx-auto h-9' alt="" />
    </div>

    <div className=' flex justify-between md:hidden'>
      <img src={GreenSneakers} alt="" />
      <img src={Sweater} alt="" />
    </div>
     <div className='  flex justify-center md:hidden'>
        <button className='bg-orange-300     text-white my-9 rounded  py-3 px-8'>View All Products</button>
</div>

    <div className=' hidden md:flex justify-between mb-28'>
      <img src={CyberTruck} alt="" />
      <img src={PS5} alt="" />
      <img src={Iphone16A} alt="" />
      <img src={JBL} alt="" />
    </div>

    <div className='hidden md:flex justify-between mb-7'>
      <img src={Gadgets} alt="" />
      <img src={Cars} alt="" />
      <img src={House} className='rounded-r-3xl' alt="" />
      </div>
      <div className='hidden md:flex justify-between mb-20'>
      <img src={Dress} alt="" />
      <img src={Furniture} alt="" />
      <img src={Creams} className='rounded-r-3xl' alt="" />
    </div>
    <div className='flex gap-3 place-items-center mt-22'>




    <img src={Rectangle} className=' hidden md:h-3 md:block' alt="" />
    <h2 className='hidden  md:text-red-500 text-2xl  font-bold  '>Today's</h2>
    </div>
     <div className='hidden md:flex place-items-center my-10'>
    <h1 className='font-bold text-3xl '>Flash Sales</h1>
    <img src={Time} className='mx-auto' alt="" />
    </div>
    <div className='hidden md:flex justify-between mb-20'>
      <img src={Earing} alt="" />
      <img src={WashingMachine} alt="" />
      <img src={StarLink} alt="" />
      <img src={Sneakers} alt="" />
    </div>
    <img src={HotSale} className='h-120 w-full mb-20' alt="" />
       <div className='hidden md:flex gap-3 place-items-center mt-22'>
    <img src={Rectangle} className='h-3' alt="" />
    <h2 className='text-red-500 text-2xl font-bold'>up to 30% off</h2>
    </div>
     <div className='flex place-items-center my-10'>
    <h1 className='font-bold text-2xl  md:font-bold md:text-3xl '>Special Offer</h1>
    <img src={Time} className='mx-auto' alt="" />
    </div>

    <div className='flex justify-between mb-20 md:hidden'>
      <img src={TvConsole} alt="" />
      <img src={Jeans} alt="" />
    </div>
     <div className='hidden md:flex justify-between mb-20 '>
      <img src={Pendant3} alt="" />
      <img src={Sneaker2} alt="" />
      <img src={Teddy} alt="" />
      <img src={PhoneCase} alt="" />
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Homepage
