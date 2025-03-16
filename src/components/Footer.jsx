import React from 'react'
import NavbarLogo from "../../public/Images/Navbar/navbar_logo.png"
const Footer = () => {
  return (
    <div className="footer md:p-12">
        <div className="flex flex-col items-center text-center space-y-4">
            <img src={NavbarLogo} alt="" />
            <h2 className='font-bold text-xl md:text-2xl text-gray-100'>Having workflow issues? We’ve got solutions.</h2>
            <p className='text-sm text-gray-400 font-semibold w-[80%] md::w-[20%]'>Join over 600+ teams already optimizing their operations with Bester. </p>
            <button className='text-white bg-[#6D27EB] rounded-full p-3.5 px-8 font-semibold text-sm my-6'>Get Started</button>
            <div className="flex text-gray-300 text-sm font-semibold items-center space-x-8 py-8">
                <li className='list-none'>Home</li>
                <li className='list-none'>Blog</li>
                <li className='list-none'>Changelog</li>
                <li className='list-none'>Contact</li>
            </div>
        </div>
        <hr className='my-6 border border-gray-700'/>
        <div className="flex flex-col md:flex-row items-center space-y-12 justify-between">
          <p className='text-gray-500 font-medium'>©Bester 2024, All rights reserved.</p>
          <div className="flex space-x-6">
            <img src="https://framerusercontent.com/images/YgM2VBoBNaArky3HiHy3xPOwpA.svg" alt="twitter_logo" className='p-1.5 bg-gray-700 rounded-full'/>
            <img src="http://framerusercontent.com/images/s29YL4NcMcBasGfXqfSa6iI5vqU.svg" alt="linkedin_logo"  className='p-1.5 bg-gray-700 rounded-full' />
            <img src="https://framerusercontent.com/images/mMlHYgmaelBUMVvmlQs5cKx7U.svg" alt="instagram_logo"  className='p-1.5 bg-gray-700 rounded-full' />
          </div>
          <p className='text-gray-500 font-medium'>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer