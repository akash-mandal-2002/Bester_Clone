// Navbar.jsx
import React, { useState } from "react";
import Navbar_logo from "../../public/Images/Navbar/navbar_logo.png";
import Twitter_logo from "../../public/Images/Navbar/twitter_logo.png";
import { HiBars3BottomLeft } from "react-icons/hi2";
import "../Style/navbar.css"
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar sticky top-6 w-[90%] mx-auto p-3 z-50 my-6 rounded-full md:w-[60%]">
      <div className="flex  justify-between">
        <div className="logo">
          <img
            src="https://framerusercontent.com/images/cIFkJyF2ZXvm3JZW647CddER16E.svg"
            alt="navbar_logo"
            className="w-32 md:w-32 transition-all duration-300"
          />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none bg-[#752AFF] p-2.5  rounded-full"
          onClick={() => {
            setToggle(!toggle);
            console.log('Toggle state:', !toggle);
          }}
        
        >
          <HiBars3BottomLeft />
        </button>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center absolute md:static top-20 left-0 w-full md:w-auto bg-[#1a1a1a] md:bg-transparent p-4 md:p-0 transition-all duration-300`}
        >
          <nav className="w-full md:w-auto">
            <ul className="flex flex-col md:flex-row  md:pr-20 space-y-4 md:space-y-0 md:space-x-6 text-gray-400 text-md font-semibold">
              <li className="hover:text-white cursor-pointer py-2 md:py-0 border-b border-gray-800 md:border-0 transition-colors duration-200">
                Home
              </li>
              <li className="hover:text-white cursor-pointer py-2 md:py-0 border-b border-gray-800 md:border-0 transition-colors duration-200">
                Blog
              </li>
              <li className="hover:text-white cursor-pointer py-2 md:py-0 border-b border-gray-800 md:border-0 transition-colors duration-200">
                Changelog
              </li>
              <li className="hover:text-white cursor-pointer py-2 md:py-0 border-b border-gray-800 md:border-0 transition-colors duration-200">
                Contact
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img
              src={Twitter_logo}
              alt="twitter_logo"
              className="w-12 md:w-8"
            />
            <button className="bg-[#4E12BD] text-md text-white font-semibold py-3 px-6 rounded-full hover:bg-[#5f22d9] transition-colors duration-300 hover:cursor-pointer">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;