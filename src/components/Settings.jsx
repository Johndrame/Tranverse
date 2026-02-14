import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Settings = () => {
  return (
    <div>
    <Header/>
    <div className=' my-12 w-11/12 mx-auto md:w-7/10 md:mr-8'>
      <h1 className='font-bold text-2xl text-orange-400'>Settings</h1>
      <p className='font-bold'>View all settings</p>

      <div className= ' rounded-xl my-4 bg-orange-100 py-5 '>
        <h1 className='font-bold pl-17 text-orange-400'>Profile</h1>
      </div>
      <div className=' flex justify-between place-items-center'>
        <div className='mb-5'>
                <h1 className='font-bold  text-orange-400 text-2xl'>Profile</h1>
 <h4 className='font-bold text-sm'>Manage Profile</h4>
 </div>
 <button className='bg-orange-300 text-white font-semibold py-2 px-3 rounded-lg'> save changes</button>
      </div>

      <h2 className='font-bold'>Edit your Profile</h2> 
      <p className='font-semibold text-xs'>photo</p>
      <div className='w-25 h-22 my-2 border rounded-lg border-gray-300'>
      </div>
      <button className='rounded-lg border text-xs font-bold border-gray-300  px-2 py-1.5 cursor-pointer'>Upload photo</button>
   
   <div className=' mt-12'>
    <div className='grid grid-cols-2 gap-y-9 gap-x-12'>
   <label htmlFor="input">
     <h1 className='font-bold mb-2'>Full Name</h1>
     <input type="text" name="input" className=' border-gray-900 border-0 shadow-2xl shadow-gray-900
     rounded-lg py-2.5 px-3 md:w-74 ' placeholder='My name' id="" />
   </label>
   <label htmlFor="input">
     <h1 className='font-bold mb-2'>Phone Number</h1>
     <input type="text" name="input"  className=' border-gray-900 border-0 shadow-2xl shadow-gray-900
     rounded-lg py-2.5 px-3 md:w-74 ' placeholder='+234 0123 456 789' id="" />
   </label>
   <label htmlFor="input">
     <h1 className='font-bold mb-2'>Email</h1>
     <input type="text" name="input"  className=' border-gray-900 border-0 shadow-2xl shadow-gray-900
     rounded-lg py-2.5 px-3 md:w-74' placeholder='eg@email.com' id="" />
   </label>
   <label htmlFor="input">
     <h1 className='font-bold mb-2'>Nationality/country</h1>
     <input type="text" name="input"  className=' border-gray-900 border-0 shadow-2xl shadow-gray-900
     rounded-lg py-2.5 px-3 md:w-74' placeholder='Select country' id="" />
   </label>
   </div>
    <h1 className='font-bold mb-6 mt-17'>Password</h1>
   <div className='flex  justify-between  md:w-8/10'>
   
    <label htmlFor="input" >
        <h1 className='font-bold mb-2 '>New Password </h1>
        <input type="text"  className=' border-gray-900 border-0 shadow-2xl shadow-gray-900
     rounded-lg py-2.5 px-3 md:w-74' placeholder='*******' />
    </label>
 <label htmlFor="input">
    <h1 className='font-bold mb-2 '>Confirm Password</h1>
    <input type="text" className=' border-gray-900 border-0 shadow-2xl shadow-gray-900
     rounded-lg py-2.5 px-3 md:w-74' placeholder='*******' />
 </label>
 </div>
 <button className='bg-orange-300  mt-23 px-4 py-2 rounded-lg text-white'>Save Changes</button>
   
   </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Settings
