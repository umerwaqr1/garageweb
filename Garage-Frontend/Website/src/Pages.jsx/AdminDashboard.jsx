import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [intakes, setIntakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // 🔑 Browser ke localStorage se token nikalo
  const token = localStorage.getItem('token');

  useEffect(() => {
    // 🛡️ SECURITY CHECK: Agar token nahi hai toh direct login page par phenk do
    if (!token) {
      navigate('/admin/login');
      return; // Aage ka code execute na ho
    }

    // 📥 Function ko useEffect ke andar move kar diya taake dependency panga na kare
    const fetchIntakes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/intake', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (response.data.success) {
          setIntakes(response.data.data);
        }
      } catch (err) {
        console.error(err);
        setError('CRITICAL_ERROR // FAILED_TO_FETCH_DATA');
      } finally {
        setLoading(false);
      }
    };

    fetchIntakes();
  }, [token, navigate]); // ✅ Ab compiler bilkul khush hai aur koi error nahi dega!

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/intake/${id}`, 
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        setIntakes(intakes.map(item => item._id === id ? { ...item, status: newStatus } : item));
      }
    } catch (err) {
      console.error(err);
      setError('TRANSMISSION ERROR // STATUS_UPDATE_FAILED');
    }
  };

  // 🚪 LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  const getStatusColor = (status) => {
    if (status === 'completed') return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    if (status === 'in-progress') return 'bg-amber-500/20 text-amber-400 border-amber-500/20';
    return 'bg-blue-500/20 text-blue-400 border-blue-500/20';
  };

  if (loading) {
    return (
      <div className='bg-[#05070C] min-h-screen flex justify-center items-center text-teal-500 font-mono'>
        <span className='animate-pulse'>LOADING_CORE_DATABASE</span>
      </div>
    );
  }

  return (
    <div className='bg-[#05070C] min-h-screen overflow-hidden px-6 py-24 font-sans text-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Status Top Bar */}
        <div className='flex justify-between items-center pb-4 mb-16 border-b border-white/5 text-xs font-mono text-gray-500'>
          <div>GARAGE.PK // PIT_CREW_OPERATIONS_CENTER</div>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-teal-500 animate-ping'></span>
              <span className='text-teal-500'>LIVE_DATABASE_LINKED</span>
            </div>
            <button 
              onClick={handleLogout} 
              className='text-red-400 border border-red-500/20 bg-red-500/5 px-3 py-1 rounded-md hover:bg-red-500/20 transition-all cursor-pointer'
            >
              [ TERMINATE_SESSION ]
            </button>
          </div>
        </div>
        {/* Header */}
        <div className='mb-16'>
          <span className='font-mono text-sm tracking-[0.4em] mb-3 block uppercase text-teal-600'> Management Console</span>
          <h3 className='text-4xl md:text-6xl leading-none tracking-tighter italic font-black uppercase'> PIT CREW <br /> <span className='text-teal-500'>INTAKE LOGS</span></h3>
        </div>
        {error && <div className='text-red-600 font-mono text-sm mb-6'>&gt; {error}</div>}
        {/* Card Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {intakes.map((item) => (
            <Motion.div key={item._id} layout className='border border-white/10 p-6 rounded-3xl bg-slate-900/30 flex flex-col justify-between relative overflow-hidden group'>
              <div>
                {/* Upper row */}
                <div className='flex justify-between items-start mb-4'>
                  <div>
                    <span className='text-gray-500 text-[10px] font-mono uppercase tracking-wider block'>DRIVER</span>
                    <h4 className='text-lg font-bold text-slate-200'>{item.driverName}</h4>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-mono border ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                {/* Vehicle Info */}
                <div className='space-y-2 text-sm text-gray-400 mb-4'>
                  <p><strong className='text-gray-500 font-mono text-xs uppercase'>Model:</strong> {item.carModel}</p>
                  <p><strong className='text-gray-500 font-mono text-xs uppercase'>Bay:</strong> {item.serviceBay}</p>
                  <p className='text-xs truncate'><strong className='text-gray-500 font-mono text-xs uppercase'>Comms:</strong> {item.email}</p>
                </div>
                {/* Symptoms Block */}
                <div className='bg-[#090D16]/90 p-4 rounded-xl border border-white/6 mb-6 min-h-20'>
                  <span className='text-[9px] font-mono block text-gray-500 mb-1 uppercase tracking-widest'>
                    SYMPTOMS REPORT:
                  </span>
                  <p className='text-xs text-slate-300 leading-relaxed italic'>"{item.symptoms || 'No symptoms specified'}"</p>
                </div>
              </div>
              {/* Action buttons inside */}
              <div className='grid grid-cols-2 gap-2 pt-4 border-t border-white/5 relative z-10'>
                <button 
                  className='py-2 bg-amber-600/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider hover:bg-amber-500/30 transition-all disabled:opacity-30 disabled:pointer-events-none' 
                  onClick={() => handleStatusUpdate(item._id, 'in-progress')} 
                  disabled={item.status === 'in-progress'}
                >
                  In Progress
                </button>
                <button 
                  onClick={() => handleStatusUpdate(item._id, 'completed')} 
                  disabled={item.status === 'completed'} 
                  className='py-2 bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider hover:bg-emerald-500/30 transition-all disabled:opacity-30 disabled:pointer-events-none'
                >
                  Complete
                </button>
              </div>
            </Motion.div>
          ))}
        </div>
        {intakes.length === 0 && (
          <div className='text-center py-20 border border-dashed border-white/10 rounded-3xl text-gray-500 font-mono text-sm'>
            &gt; NO_ACTIVE_VEHICLES_IN_THE_INTAKE_QUEUE
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;