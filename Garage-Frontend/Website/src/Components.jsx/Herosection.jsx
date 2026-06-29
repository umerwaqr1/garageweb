import React from 'react'
function Herosection() {

  return (
    <>
    <div className='relative w-full'>
      <img src="/images/car1.jpg" alt='car' className='w-full h-200 object-cover'/>
    </div>

     <h1 className='text-center text-4xl pt-10 font-extrabold'>Are You <span className='text-teal-700 font-extrabold text-4xl'>Interesting In</span> that Stuff</h1>
     <div className="w-100 h-1 bg-teal-700 mx-auto mt-4 rounded-full"></div>
     <br/>
     <br/>

    <div className='flex flex-row gap-25 mx-35'>
      
<img src='/images/car2.jpg' alt='car1' className='w-140 h-130 object-cover pl-5 transition delay-150 duration-300 ease-in-out hover:translate-x-2 hover:scale-100 rounded-3xl'/>
<button className='w-40 h-14 bg-gray-700 text-neutral-400 font-bold absolute top-340 left-80 text-xl rounded-2xl  animate-bounce'
>Details <i class="fa-solid fa-angle-right text-xl text-emerald-600 font-bold"></i></button>
<img src='/images/car3.jpg' alt='car3' className='w-140 h-130 object-cover pl-5 transition delay-150 duration-300 ease-in-out hover:translate-x-2 hover:scale-100 rounded-3xl'/>
<button className='w-40 h-14 bg-gray-700 text-neutral-400 font-bold absolute top-340 left-250 text-xl rounded-2xl  animate-bounce'
>Details <i class="fa-solid fa-angle-right text-xl text-emerald-600 font-bold"></i></button>
</div>

        
        
    <div className='w-full bg-slate-50 px-10 py-10'>
      {/* {Section heading} */}
      <div className='text-center mb-16'>
        <h1 className='text-4xl text-gray-800 font-extrabold'>Our <span className='text-teal-700 font-extrabold'>Expertise</span></h1>
        <div className="w-30 h-1 bg-teal-700 mx-auto mt-4 rounded-full"></div>
      </div>
      {/* {cards container} */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto'>

        {/* {card1} */}
<div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 border-b-4 border-transparent hover:border-teal-700">
<div className='w-16 h-16 bg-teal-100 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-teal-700 transition-colors'>
  <i class="fa-solid fa-screwdriver-wrench text-3xl text-teal-700 group-hover:text-white"></i>
</div>
<h3 className='text-2xl font-bold mb-3'>Mechanical Works</h3>
<p className='text-gray-700 leading-relaxed'>From engine diagnostics to suspension tuning, our certified mechanics handle everything with precision.</p>
</div>

{/* {card2} */}
<div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 border-b-4 border-transparent hover:border-teal-700">
  <div className='w-16 h-16 bg-teal-100 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-teal-700 transition-colors'>
    <i className='fa-solid fa-drum-steelpan text-teal-700 text-3xl group-hover:text-white'></i>
  </div>
  <h2 className='text-2xl font-bold mb-3'>Tyres & Rims</h2>
  <p className='text-gray-700 leading-relaxed'>Premium alloy rims and world-class tyre brands to give your car the grip and style it deserves.
      </p>
</div>
<div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 border-b-4 border-transparent hover:border-teal-700">
  <div className='w-16 h-16 bg-teal-100 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-teal-700 transition-colors'>
    <i className='fa-solid fa-hands-bubbles text-teal-700 text-3xl group-hover:text-white'></i>
  </div>
  <h2 className='text-2xl font-bold mb-3'>Exterior Polish</h2>
  <p className='text-gray-700 leading-relaxed'>Deep cleaning and ceramic coating that makes your car shine like it just rolled out of the showroom.
      </p>
</div>

      </div>
    </div>
    {/* {Add Subscription} */}
    <div className='w-full py-16 px-4 bg-white'>
      <div className='max-w-5xl mx-auto bg-gray-900 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative shadow-2xl text-center'>
        <div className='absolute -top-10 -left-10 w-40 h-40 bg-teal-700/20 blur-3xl rounded-full '></div>
<h2 className='text-3xl md:text-3xl font-bold text-white mb-4'>Stay <span className='text-teal-500'>Updated !</span></h2>
<p className='text-gray-400 mb-8 max-w-xl leading-relaxed text-lg mx-auto'>"Get early access to new car arrivals and exclusive discounts. Enter your email address below to stay updated."</p>
<div className='flex flex-row md:flex-row gap-4 justify-center items-center'>
  <input type='email' placeholder='Enter Your Email.... ' className='w-full md:w-80 px-6 py-4 rounded-xl bg-gray-800 border border-gray-500 text-white focus:outline-none focus:border-teal-600 transition-all'/>
<button className='w-full md:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold  transition-transform active:scale-95 shadow-lg shadow-teal-900/40'>Subscribe</button>
</div>
      </div>

    </div>
  </>
  )
}

export default Herosection
