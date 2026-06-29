import React , { useState } from 'react';
import axios from 'axios'
import { motion as Motion } from "framer-motion"


function Contact() {
  const [formData, setFormData]=useState({
  driverName:'',
  email:'',
  carModel:'',
  serviceBay:'alignment',
  symptoms:''
});

const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);


const handleChange=(e)=>{
  setFormData({
    ...formData,[e.target.name]:e.target.value
  });
};
const handleSubmit= async (e)=>{
e.preventDefault();
setLoading('true');
setStatusMessage('');
setIsSuccess('false');

try{
  const response= await axios.post('http://localhost:5000/api/intake', formData);
  if(response.data.success){
    setIsSuccess('true');
    setStatusMessage('🎯 INTAKE_LOGGED_SUCCESSFULLY // BAY_RESERVED');
    setFormData({
      driverName:'',
      email:'',
      carModel:'',
      serviceBay:'alignment',
      sympyoms:''
    });
  }
}catch(error){
console.log("Connection Error", error);
setIsSuccess(false);
setStatusMessage(error.response?.data?.error || 'TRANSMISSION_FAILED // TRY_AGAIN');
} finally{
  setLoading(false);
}
}

  const contactInfo=[
    { label: "GARAGE_LOCATION" , value: "Main Bulevard Gulberg, Lahore " , icon:"fa-location-dot", color:"text-teal-500"},
    { label: "COMMUNICATION_LINE" , value: "+90 300 1234567" , icon:"fa-phone", color:"text-teal-500"},
    { label: "SECURE_INBOX" , value: "supportGaragepk@gmail.com " , icon:"fa-envelope", color:"text-teal-500"},
    { label: "OPERATIONAL_HOURS" , value: "Mon - Sat : 10:00 AM To 8:00 PM " , icon:"fa-clock", color:"text-amber-600"},
  ]
  return (
    <div className='bg-[#05070C] min-h-screen overflow-hidden px-6 py-24 font-sans text-white'>
      <div className='max-w-7xl mx-auto'>

{/* Status Bar */}
<div className='flex justify-between items-center pb-4 mb-20 border-b border-white/5 text-xs font-mono text-gray-500'>
<div>GARAGE.PK // { statusMessage? statusMessage:'SECURE_INTAKE_TERMINAL'}</div>
<div className='flex items-center gap-2'>
<span className='w-2 h-2 rounded-full  bg-emerald-500 animate-ping'></span>
<span className={isSuccess? 'text-teal-700':'text-emerald-400'}>{ loading ? 'TRANSMITTING' : 'COMMS_LINK_STABLE'}</span>
</div>
</div>

{/* Section Header */}
<div className='mb-20'>
<span className='font-mono text-sm tracking-[0.4em] uppercase mb-3 block text-teal-600'>
Get In Touch
</span>
<h3 className='text-5xl md:text-7xl italic uppercase font-black leading-none tracking-tighter'>BOOK YOUR <br/><span className='text-teal-500'>SERVICE BAY</span></h3>
</div>
{/* Collumn-2 Split-Grid */}

<div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-start'>
  {/* Left Side */}
  <div className='lg:col-span-5'>
    <div>
<h3 className='text-2xl uppercase text-slate-300 font-black mb-3 italic'>
  CREW HEADQUATERS
</h3>
<p className='leading-relaxed text-gray-400 mb-8 text-sm'>Have questions or need an emergency diagnostic? Reach out to our technicians directly or drop by our high-tech facility in Lahore.</p>
    </div>
{/* Info Cards */}
<div className='space-y-4'>
{contactInfo.map((info,ind)=>(
  <Motion.div key={ind} whileHover={{x:8}} className='flex group items-center bg-slate-900/30 gap-5 rounded-2xl relative border border-white/20 p-6'>
<div className={`w-12 h-12 rounded-2xl bg-slate-800/80 flex justify-center items-center shadow-inner text-xl ${info.color}`}>
<i className={`fa-solid ${info.icon}`}></i>
</div>
<div>
  <span className='tracking-widest font-mono text-gray-400 block mb-0.5 uppercase text-[10px]'>{info.label}</span>
  <span className='tracking-wide text-sm md:text-base font-bold text-slate-200'>{info.value}</span>
</div>
  </Motion.div>
))}

</div>
{/* Mechanical BluePrint */}
<div className='pt-6 border-white/5 border-t lg:block space-y-1 hidden text-[10px] font-mono text-gray-600'>
<div>&gt; COORD_X: 31.5204° N, COORD_Y: 74.3587° E</div>
              <div>&gt; ANTENNA_GAIN: +4.2dB // FREQ_BAND: 5.8GHz</div>
</div>
  </div>
  {/* Right SIde */}
  <div className='lg:col-span-7 relative border border-white/10 p-8 md:p-12 rounded-[3rem] bg-slate-900/30'>

  <div className='absolute -bottom-10 -right-10 blur-[120px] w-64 h-64 bg-teal-500/10 rounded-full pointer-events-none'></div>
  <form onSubmit={handleSubmit} className='relative z-10 space-y-6'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-15'>
  <div>
<label className='font-bold text-sm tracking-wider uppercase text-gray-500'>Driver Name</label>
<input type='text' name='driverName' value={formData.driverName} onChange={handleChange} required placeholder='eg..Ali Khan' className='w-full mt-2 bg-[#090D16]/90 px-5 py-4 border focus:ring-1 border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:bg-teal-600/60 focus:ring-teal-500/30 transition-all duration-300  '/>
  </div>
<div>
<label className='font-bold text-sm tracking-wider uppercase text-gray-500'> Secure Email</label>
<input type='text' name='email' value={formData.email} onChange={handleChange} required placeholder='e.g.. AliKhan@gmail.com' className='w-full mt-2 bg-[#090D16]/90 px-5 py-4 focus:ring-1 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:bg-teal-600/60 focus:ring-teal-500/30 transition-all duration-300  '/>
  </div>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-15'>
  <div>
<label className='font-bold text-sm tracking-wider uppercase text-gray-500'>Vehicle Model</label>
<input type='text' name='carModel' value={formData.carModel} onChange={handleChange} required placeholder='e.g.. Toyota 2024' className='w-full mt-2 bg-[#090D16]/90 px-5 py-4 border focus:ring-1 border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:bg-teal-600/60 focus:ring-teal-500/30 transition-all duration-300  '/>
  </div>
<div>
<label className='font-bold text-sm tracking-wider uppercase text-gray-500'> Select Diagnostic Day</label>
<select name='serviceBay' value={formData.serviceBay} onChange={handleChange} required className='w-full mt-2 bg-[#090D16]/90 px-5 py-4 border border-white/10 rounded-xl text-sm focus:ring-1  placeholder-gray-600 focus:outline-none focus:bg-teal-600/60 focus:ring-teal-500/30 transition-all duration-300 appearance-none cursor-pointer text-gray-300'>
<option value="alignment">Laser Wheel Alignment</option>
<option value="tyres">Premium Tyre Tread Swap</option>
<option value="balancing">Dynamic High-RPM Balancing</option>
<option value="general">Full Vehicle Health Scan</option>
</select>
  </div>
</div>
<div className='space-y-2'>
                <label className='font-mono text-xs text-gray-400 uppercase tracking-wider'>Describe Vehicle Symptoms / Requirements</label>
                <textarea 
                name='symptoms'
                value={formData.sympyoms} 
                onChange={handleChange} required
                  rows="4"
                  placeholder="Tell us what's wrong with your ride (e.g., steering pulling right at 100 km/h)..."
                  className='w-full bg-[#090D16]/90 border border-white/10 rounded-xl p-5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-all duration-300 resize-none'
                ></textarea>
              </div>
{/* Button */}
<Motion.button type='submit' disabled={loading} whileHover={{scale:1.02}} whileTap={{scale:0.92}} className='w-full py-4 bg-linear-to-r from-teal-600 to-teal-500 text-white font-black uppercase italic tracking-wider shadow-lg rounded-xl shadow-teal-600/20 hover:shadow-teal-500/40 transition-all duration-300 flex justify-center items-center gap-3 border border-teal-400/20'>
<span>{loading?'LOGGING REQUEST...':'Initialize Intake Request'}</span>
<i className='fa-solid fa-arrow-right-long text-sm'></i>
</Motion.button>
  </form>

  </div>

</div>
      </div>
      
    </div>
  )
}

export default Contact
