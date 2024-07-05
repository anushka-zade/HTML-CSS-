import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-2'>
        <img src="./public/assets/Logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-blue-600 to-violet-600 text-xs text-white px-2.5 py-1.5 rounded-2xl font-lato'>Hoster is hiring</button>
      </div>
      <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
        <li> <a href="#">Plans</a></li>
        <li> <a href="#">Find Domain</a></li>
        <li> <a href="#">Why Hoster</a></li>
      </ul>
      <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
    <a href="#" className='text-gray-400 font-lato'>Sign In</a>
    <button className='rounded-md px-4 py-3 bg-blue-400  hover:bg-blue-600 text-white'>Join Waitlist</button>
    </div>
    <div className='lg:hidden'>
    </div>
    </div>
  )
}

export default Header