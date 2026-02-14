import { useState } from "react";
import { NavLink } from "react-router-dom";

import MenuBar from "../assets/Menu.png";
import Bag from "../assets/image 9.png";
import Cart from "../assets/Frame 5.png";
import Search from "../assets/search-sharp.png";
import Locator from "../assets/location-outline.png";
import Person from "../assets/person-outline copy.png";

const Header = () => {
  const [showButton, setShowButton ]=useState(true);
 
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{
    setShowButton(false)
  }

  return (
    <header>
      <div className="hidden md:flex bg-black text-white justify-center ">
        <div className="flex w-11/12 justify-between py-4">


          <h1 className="font-bold cursor-pointer">
            PROMO!!! PROMO!!! PROMO!!! PROMO!!! PROMO!!!
          </h1>

     
          <div>
            {showButton &&(
        
           <button
          onClick={handleClick}
          className="mb-6 text-xl"
        >
          ✕
        </button>
        )}
          </div>
        

          </div>
        </div>

      {/* DESKTOP */}
      <div className="hidden md:block bg-orange-300">


        <div className="flex justify-between w-11/12 mx-auto py-3">
          <div className="flex gap-2">
            <img src={Locator} alt="location" />
            <span>LAGOS</span>
          </div>

          <div className="flex gap-3 relative">
            <img src={Person} className="w-6 h-6" alt="user" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded">
              9
            </span>
            <span>Sell On</span>
          </div>

          <div className="flex gap-2">
            <img src={Cart} alt="cart" />
            <span className="font-semibold">Cart</span>
          </div>
        </div>

        <div className="flex justify-between items-center w-11/12 mx-auto py-6">
          <img src={Bag} alt="logo" />
          <h1 className="text-3xl font-extrabold">eTrANSVER</h1>

          <div className="flex relative">
            <img src={Search} className="absolute left-3 top-3" alt="search" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 py-2 w-222 bg-white text-black"
            />
            <button className="border px-4 bg-white">All Categories</button>
          </div>

          <button className="border px-6 py-2 bg-white">Search</button>
        </div>

        {/* NAVBAR */}
        <nav className="w-11/12 mx-auto pb-4">
          <ul className="flex gap-8 font-semibold">
            <li>
              
              <NavLink
                to="/"
                end
                className="text-black hover:text-yellow-600"
                 
                
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/notification"
                className="text-black hover:text-yellow-600"
              >
                Notification
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/settings"
                 className="text-black hover:text-yellow-600"
              >
                Settings
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                 className="text-black hover:text-yellow-600"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* MOBILE HEADER */}
      <div className="md:hidden bg-orange-300 py-4 flex items-center justify-between px-4">
        <button onClick={() => setIsOpen(true)}>
          <img src={MenuBar} className="h-8" alt="menu" />
        </button>

        <h1 className="text-2xl font-extrabold">eTrANSVER</h1>
        <img src={Cart} className="h-7" alt="cart" />
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-orange-300 p-6 font-bold
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="mb-6 text-xl"
        >
          ✕
        </button>

        <ul className="space-y-4">
          <li>
            <NavLink to="/" end onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/notification" onClick={() => setIsOpen(false)}>
              Notification
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" onClick={() => setIsOpen(false)}>
              Settings
            </NavLink>
          </li>
         
        </ul>
      </div>
    </header>
  );
};

export default Header;
