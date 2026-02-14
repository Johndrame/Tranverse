import React from 'react'
import './index.css'
import About from './components/About'
import Homepage from './components/Homepage'
import Settings from './components/Settings'
import Notification from './components/Notification'
import Contact from './components/Contact'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

function App() {

  return (
    <> 
   <BrowserRouter> 
     <Routes> 
     <Route path ="/" element={<Homepage/>}/>
     <Route path="/notification" element={<Notification />} /> 
     <Route path="/settings" element={<Settings />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
       </Routes> 
       </BrowserRouter>
    </>
  )
}

export default App
