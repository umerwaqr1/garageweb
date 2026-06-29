import React from 'react';
import { motion } from 'framer-motion';

const Tyres = () => {
  return (
    <>
      <div className='bg-[#090D16] min-h-screen py-24 px-6 overflow-hidden text-white'>
        <div className='max-w-7xl mx-auto'>

          {/* Header Section */}
          <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6'>
            <div>
              <span className='text-teal-600 font-mono tracking-[0.4em] text-sm mb-3 block'>
                Grip & Control Station
              </span>
              <h2 className='text-5xl md:text-7xl italic leading-none uppercase font-black'>
                Premium <br /> <span className='text-teal-600'>Tyre Care</span>
              </h2>
            </div>
            <p className='text-gray-400 max-w-sm text-sm md:text-base leading-relaxed'>
              From computerized wheel balancing to high-performance tread matching, we keep your car glued to the tarmac.
            </p>
          </div>

          {/* Categories Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-24'>
            {[
              { title: "Sport & Track ", sub: "Maximum Grip ", bg: " bg-gradient-to-br from-red-950/40 to-slate-900", icon: "fa-gauge-high ", color: "text-red-500 " },
              { title: "Off-Road At ", sub: "Mud & Terrain ", bg: " bg-gradient-to-br from-amber-950/40 to-slate-900", icon: "fa-mountain-sun ", color: "text-amber-500 " },
              { title: "City Comfort ", sub: "Silent & Fuel Safe ", bg: " bg-gradient-to-br from-teal-950/40 to-slate-900", icon: "fa-leaf ", color: "text-teal-600 " },
            ].map((cat, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className={`p-10 border border-white/5 rounded-[2.5rem] ${cat.bg} backdrop-blur-sm relative overflow-hidden group cursor-pointer`}>
                <div className='flex justify-between items-start mb-16'>
                  <i className={`fa-solid ${cat.icon} text-3xl ${cat.color}`}></i>
                </div>
                <div>
                  <p className='text-gray-500 font-mono text-xs uppercase tracking-widest'>{cat.sub}</p>
                  <h3 className='text-2xl italic font-black uppercase'>{cat.title}</h3>
                </div>
                <div className='absolute -bottom-20 -right-20 w-40 h-40 bg-teal-500/10 blur-[50px] group-hover:bg-teal-500/30 transition-all rounded-full duration-600'></div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Tech Display (Corrected Layout) */}
          <div className='bg-slate-900/40 border border-white/5 relative p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-[3.5rem]'>
            <div className='absolute top-0 left-1/4 w-72 h-72 blur-[120px] bg-teal-500/10 rounded-full pointer-events-none'></div>
            
            {/* Left Side: Tyre Image Showcase */}
            <div className='relative flex flex-col justify-center items-center h-80 md:h-[450px]'>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className='relative flex justify-center items-center'>
                
                {/* Outer Pulse Rings */}
                <div className="absolute w-72 h-72 md:w-96 md:h-96 border-2 border-teal-500/20 rounded-full animate-pulse z-0"></div>
                
                {/* Image Container */}
                <div className='border-8 border-teal-600/30 rounded-full p-4 w-64 h-64 md:w-80 md:h-80 overflow-hidden bg-slate-800/50 backdrop-blur-sm shadow-2xl relative z-10'>
                  <img
                    src='/images/tyre5.jpg'
                    alt='rim'
                    className='rounded-full animate-spin-slow w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer'
                  />
                </div>
              </motion.div>

              {/* Status Badge floating at the bottom of the image */}
              <div className="absolute top-106 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-teal-400 z-20 shadow-md">
                ALIGNMENT_CHECK_PASSED
              </div>
            </div>

            {/* Right Side: Content and Stats */}
            <div className='flex flex-col justify-center relative z-10'>
              <div>
                <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 px-4 py-1 rounded-full text-xs font-mono tracking-wider uppercase mb-4 inline-block">
                  Laser Diagnostics
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-8">
                Wheel Alignment & Balance
              </h3>

              {/* Stats Breakdown */}
              <div className="space-y-6">
                {[
                  { name: 'Tread Depth Analysis', desc: '3D laser scanning for uneven wear detection.', val: '98%' },
                  { name: 'Camber & Caster Tuning', desc: 'Precision angle alignment to prevent highway pulling.', val: '100%' },
                  { name: 'Dynamic Balancing', desc: 'Zero-vibration calibration using weights at high RPM.', val: '95%' }
                ].map((stat, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-4">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-bold text-lg">{stat.name}</h4>
                      <span className="text-teal-500 font-mono text-sm font-bold">{stat.val}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Tyres;