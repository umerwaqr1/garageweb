import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
      <footer className='bg-gray-900 text-gray-400 py-10 px-10 border-t border-gray-900'>
 <div className='max-w-7xl ms-15'>
  <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 '>
{/* {Column No 1 } */}
<div className='flex flex-col space-y-6 -my-1'>
  <p className='text-3xl text-white font-extrabold tracking-tight'>GA<span className='text-teal-600'>RA</span>GE.PK</p>
  <p className='text-sm leading-relaxed'>Pakistan's premium car care destination. We provide top-notch mechanical services, genuine parts, and expert consultancy for your ride.</p>
  <div className='flex space-x-4 pt-2'>
<i class="fa-brands fa-square-facebook text-xl hover:text-teal-600 cursor-pointer transition-all"></i>
<i class="fa-brands fa-square-instagram text-xl hover:text-teal-600 cursor-pointer transition-all"></i>
<i class="fa-brands fa-square-whatsapp text-xl hover:text-teal-600 cursor-pointer transition-all"></i>

  </div>
</div>
{/* {Column No 2} */}
<div className='space-y-7 -my-1'>
  <h2 className='text-white text-xl font-extrabold tracking-wider uppercae'>Quick <span className='text-teal-600'>Links</span> </h2>
  <ul className='space-y-4'>
  <li><Link to="/home" className='hover:text-teal-500 hover:pl-2 transition-all duration 300' >HOME</Link></li>
  <li><Link to="/about" className='hover:text-teal-500 hover:pl-2 transition-all duration 300' >ABOUT</Link></li>
  <li><Link to="/details" className='hover:text-teal-500 hover:pl-2 transition-all duration 300' >DETAILS</Link></li>
  <li><Link to="/tyres" className='hover:text-teal-500 hover:pl-2 transition-all duration 300' >TYRE SHOP</Link></li>
  </ul>
</div>
{/* {Column No 3} */}
<div className='-my-1'>
<h3 className='text-white font-extrabold text-xl mb-6 -ms-15 uppercase tracking-wider'>Contact <span className='text-teal-600'>Information</span></h3>
<div className='space-y-10 -ms-17'>
  <p className='flex items-start gap-3 text-sm'><i class="fa-solid fa-location-dot text-teal-600 mt-1"></i>123 Main Auto Market, Gulberg, Lahore, Pakistan</p>
  <p className='flex items-start gap-3 text-sm'><i class="fa-solid fa-phone text-teal-600"></i>+92 300 1234567</p>
  <p className='flex items-start gap-3 text-sm'><i class="fa-solid fa-envelope text-teal-600"></i>SupportGarage.pk@gmail.com</p>
</div>
</div>
{/* {Column No 4} */}
<div>
<h3 className='text-white font-extrabold text-xl mb-6 ms-8 uppercase tracking-wider'>Opening <span className='text-teal-600'>Hours</span></h3>
<ul className='space-y-5 text-sm'>
  <li className='flex justify-center gap-3 font-bold text-lg '><span>Monday - Friday :</span><span className='text-white'>9:00 to 20:00</span></li>
   <li className='flex justify-center gap-3 font-bold text-lg'><span>Saturday :</span><span className='text-white'>10:00 to 18:00</span></li>
    <li className='flex justify-center gap-3 font-bold text-lg'><span>Sunday :</span><span className='text-teal-600 font-black'>Closed</span></li>
</ul>
</div>
  </div>

  {/* {Bottom Bar} */}
  <div className='border-gray-600 border-t pt-4 flex flex-col md:flex-row justify-between items-center uppercase text-sm tracking-[0.2rem] '>
<p>@ 2026 Garage.pk . All Rights Reserved. </p>
<p className='mt-4 md:mt-0'>Design & Developed By Me</p>
  </div>
    </div>
    </footer>
  )
}

export default Footer
