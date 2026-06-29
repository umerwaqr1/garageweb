import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
    <div className='bg-white overflow-hidden'>

      {/* {Hero section & Bold and Modern} */}
      <section className='flex items-center relative h-[80vh] bg-slate-900'>
        <div className='absolute inset-0 opacity-40'>
          <img src='/images/about2.jpg' alt='workshop' className='w-full h-full object-cover'/>
        </div>
        <div className='relative max-w-7xl mx-auto px-15 grid md:grid-cols-2 z-10 gap-30  items-center'>
<motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:0.8}}>
  <h1 className='text-6xl md:text-7xl leading-tight text-white font-black'>MORE THAN<br/><span className='text-teal-600'>JUST A GARAGRE</span></h1>
  <p className='text-gray-300 mt-6 text-lg leading-relaxed max-w-md'>Since 2018, Garage.pk has been the benchmark for automotive excellence in Pakistan. We don't just repair; we engineer perfection.</p>

</motion.div>
<motion.div initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} transition={{duration:0.8}} className='hidden md:block relative'>
<div className="absolute w-85 h-80 md:w-70 md:h-70 border-2 border-teal-500/20 rounded-full animate-pulse"></div>

<div className='border-8 border-teal-600/30 rounded-full p-4 w-64 h-64 md:w-80 md:h-80 lg:w-70 lg:h-70 overflow-hidden bg-slate-800/50 backdrop-blur-sm shadow-2xl relative z-10'>
    <img 
      src='/images/rim.jpg' 
      alt='rim' 
      className='rounded-full animate-spin-slow w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer'
    />
  </div>

</motion.div>
        </div>

      </section>

      {/* {Stats strip . Section 2} */}

      <section className='bg-teal-900 py-12'>
<div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center'>
  {[
    {label:'Cars Revived', value:'12k+'},
    {label:'Expert Staff', value:'45+'},
{label:'Service Bays', value:'15'},
{label:'Happy Clients', value:'100%'},
  ].map((stat,index)=>(
    <motion.div key={index} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:index*0.1}}>
<h2 className='font-black text-white text-4xl'>{stat.value}</h2>
<p className='text-teal-400 text-sm tracking-widest uppercase font-medium mt-2'>{stat.label}</p>
    </motion.div>
  ))}

</div>
      </section>
      {/* { 3 Our philosophy  } */}

      <section className='py-20 px-12 bg-slate-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-20'>
<h2 className='text-4xl font-bold text-slate-900'>Our <span className='text-teal-600'>Core Philosophy</span></h2>
<div className='w-24 h-2 bg-teal-600 mt-3 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {/* {Card 1} */}
            <motion.div whileHover={{y:-15}} className='bg-white shadow-xl p-10 rounded-4xl border-b-8 border-teal-700'>
              <i className="fa-solid fa-microchip text-5xl text-teal-600 mb-6"></i>
              <h3 className="text-2xl font-bold mb-4">Precision Tech</h3>
              <p className="text-gray-600 leading-relaxed">We perform computerized diagnostics and laser alignment to ensure perfection of every millimeter.</p>

            </motion.div>
            {/* {Card 2} */}
<motion.div whileHover={{y:-15}} className='bg-white shadow-xl p-10 rounded-4xl border-b-8 border-teal-700'>
  <i className='fa-solid fa-oil-can text-5xl text-teal-600 mb-6'></i>
  <h3 className='text-2xl font-bold mb-4'>Genuine Parts</h3>
  <p className='text-gray-600 leading-relaxed'>Our commitment is to use only original parts and world-class lubricants, with no compromises.</p>

</motion.div>
{/* {Card 3} */}
<motion.div whileHover={{y:-15}} className='bg-white shadow-xl p-10 rounded-4xl border-b-8 border-teal-700'>
  <i className='fa-solid fa-oil-can text-5xl text-teal-600 mb-6'></i>
  <h3 className='text-2xl font-bold mb-4'>Time Value</h3>
  <p className='text-gray-600 leading-relaxed'>Your time is valuable. Our team works fast and efficiently to deliver cars on-time.</p>

</motion.div>
          </div>

        </div>

      </section>

      {/* {Team Section } */}

      <section className='py-24 px-6'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-4xl teat-slate-900 uppercase tracking-tighter mb-16 font-bold'>The <span className='text-teal-700'>Masters</span> Behind The Hood</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
            {[1 , 2 , 3].map((item)=>(
<div key={item} className='group relative overflow-hidden rounded-3xl bg-slate-600 aspect-4/5'>
<img src={`/images/mechanics${item}.jpg`} alt={`mechanics-${item}`} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
<div className='absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-8 text-left'>

  <h2 className='text-white font-bold text-2xl uppercase'>AHMED KHAN</h2>
  <p className='text-teal-400 font-semibold'>Senior Hybrid Specialist</p>

</div>
</div>
             ))}

          </div>

        </div>

      </section>
      {/* {Call To Action} */}

      <section className='py-20 px-6'>
        <div className='max-w-5xl mx-auto bg-slate-900 overflow-hidden rounded-4xl md:rounded-[4rem] p-10 md:p-20 shadow-2xl relative'> 

          {/* <div className='absolute top-0 right-0 w-75 h-75 bg-teal-600/20 blur-[100px] -mr-20 -mt-20'></div>
          <div className='absolute bottom-0 left-0 w-64 h-64 bg-teal-900/30 blur-[100px] -ml-20 -mb-20'></div> */}
          <div className='flex z-10 flex-col items-center text-center'>
            <motion.span initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className='text-teal-500 font-mono tracking-[0.3em] uppercase text-sm mb-4'>
Fast & Realiable Service 
            </motion.span>
          <h2 className='text-4xl md:text-6xl uppercase  font-black leading-tight mb-8 text-white'>Ready for <span className='text-teal-500'>Next-Level </span><br/>Car Care</h2>
          <p className='text-gray-500 max-w-xl mb-10 leading-relaxed text-lg'>Don't settle for average repairs. Join 12,000+ happy car owners and experience automotive engineering at its best.</p>
          <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.90}} className='group bg-teal-700 hover:bg-teal-600 text-white px-12 py-5 rounded-full flex shadow-[0_0_30px_rgba(20,184,166,0.3)] gap-3  font-bold transition-all transform hover:scale-105 items-center'>BOOK AN APPOINTMENT <i className='fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform'></i></motion.button>
</div>
        </div>

      </section>

    </div>
    </>
  )
};

export default About;