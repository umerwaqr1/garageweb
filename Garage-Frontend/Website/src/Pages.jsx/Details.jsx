import React from 'react'
import { motion as Motion } from 'framer-motion';
function Details() {
  return (
    <div className='min-h-screen bg-[#0B0F1A] text-white overflow-hidden'>

      {/* Split Hero section */}
<section className='relative flex flex-col md:flex-row border-b h-screen border-white/5'>
  <div className='w-full md:w-1/2 flex flex-col justify-center p-8 md:p-20 z-10 relative'>
  <Motion.div initial={{opacity:0,y:20}} animate={{opacity:5,y:0}} transition={{duration:0.6}}>
    <span className='bg-teal-500/10 text-teal-600 px-6 py-1 rounded-full text-sm font-mono mb-6 inline-block border border-teal-500/20'>
SYSTEM_DIAGNOSTIC_v4.0
    </span>
<h1 className='text-6xl md:text-8xl font-black mb-6 leading-none uppercase italic'>Percision <br/><span className='text-teal-600'>Tuning</span></h1>
<p className='text-gray-600 text-lg max-w-sm mb-10'>Unlock your vehicle's true potential with our advanced ECU remapping and performance calibration.</p>
<button className='bg-white text-black px-10 py-4 font-black hover:bg-teal-600 hover:text-white uppercase italic transition-all rounded-sm'>Check Availability</button>
  </Motion.div>

  </div>
  <div className='w-full md:w-1/2 relative bg-slate-800'>
<img src='/images/details.jpg' alt='details' className='w-full h-full object-cover grayscale contrast-130'/>
<div className='absolute inset-0 bg-linear-to-r from-[#0B0F1A] to-transparent'></div>
  </div>
  </section>     
  {/* Section no 2   */}

  <section className='py-24 px-6 max-w-7xl mx-auto'>
    <div className='flex flex-col md:flex-row gap-12 items-start'>
<div className='sticky md:w-1/3 top=24'>
<h2 className='text-4xl leading-tight uppercase font-black italic'>Technical <br/>Specifications</h2>
<div className='w-20 h-1 bg-teal-600 mt-4'></div>
</div>
<div className='md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-2xl'>
{[
  { label: 'Equipment', value: 'Dyno-Tested OBD II' },
              { label: 'Timeframe', value: '2-4 Hours' },
              { label: 'Accuracy', value: '99.9% Digital' },
              { label: 'Technician', value: 'Master Certified' },
              { label: 'Software', value: 'European Standard' },
              { label: 'Warranty', value: '6 Months Included' },
].map((index,i)=>(
  <div key={i} className='bg-[#0B0F1A] p-8 hover:bg-slate-800 transition-colors'>
<p className='text-teal-600 font-mono text-sm uppercase mb-2'>{index.label}</p>
<p className='text-xl font-bold'>{index.value}</p>
  </div>
))}
</div>
    </div>

  </section>
  {/* Section 3 */}

  <section className='py-20 bg-white text-black rounded-[3rem] md:rounded-[5rem]'>
    <div className='max-w-6xl mx-auto px-6'>
<div className='text-center mb-16'>
<h2 className='font-black text-5xl italic uppercase'>The Garage.pk Edge</h2>
<p className='text-gray-500 mt-4'>Compare our standards with ordinary workshops.</p>
</div>
<div className='grid md:grid-cols-2 gap-8'>
<div className='p-10 border-2 border-gray-300 rounded-[3rem]'>
<h3 className='font-bold mb-6 text-2xl text-gray-500'>Ordinary Workshop</h3>
<ul className='space-y-4'>
<li className='flex items-center text-gray-500 gap-3'><i className="fa-solid fa-xmark text-red-400"></i>Guess-Based Repairs</li>
<li className='flex items-center text-gray-500 gap-3'><i className="fa-solid fa-xmark text-red-400"></i>Non-Certified Labours</li>
<li className='flex items-center text-gray-500 gap-3'><i className="fa-solid fa-xmark text-red-400"></i>Basic Hand Tools</li>
</ul>
</div>
<div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-shield-halved text-8xl text-teal-500"></i>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-teal-500 italic">Garage.pk Standard</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-teal-500"></i> Computerized Diagnostics</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-teal-500"></i> European Trained Mechanics</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-teal-500"></i> Precision Calibrated Tools</li>
              </ul>
            </div>
          </div>


    </div>

  </section>
    </div>
  )
}

export default Details
