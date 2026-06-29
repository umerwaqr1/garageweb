import React from 'react'
import { Link,Outlet } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <div className='w-screen h-20 fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md hover:bg-black transition-all duration-300'>
      <div className='max-w-7xl mx-auto flex justify-between items-center h-full px-6'>
     <p className='text-center text-5xl text-gray-300 pt-3 font-extrabold me-15'>GA<span className='text-teal-700'>RA</span>GE.PK</p>
     <div className=" pt-6 flex flex-row space-x-18 mx-105">
       <Link as={Link} to="/home" ><i class="fa-solid fa-house-chimney text-2xl text-lime-500 bg-transparent hover:text-gray-400 cursor-pointer"></i></Link>
    <Link as={Link} to="/about">  <i class="fa-solid fa-car text-2xl text-gray-400"></i></Link>
      <Link as={Link} to="/details" > <i class="fa-solid fa-bars text-2xl text-amber-200"></i></Link>
  <Link as={Link} to="/tyres"><i class="fa-solid fa-drum-steelpan text-2xl  text-fuchsia-300"></i></Link>
  <Link as={Link} to="/contact" ><i class="fa-regular fa-address-card text-2xl text-teal-600"></i></Link> 
  <Link as={Link} to="/admin" ><i class="fa-solid fa-user-gear text-2xl text-teal-600"></i></Link> 
     </div>
     </div>
    </div>
       <Outlet />
    </>
  )
}

export default Header
