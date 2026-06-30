import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 🌐 Backend API Call
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      if (response.data.success) {
        // 🔑 Token ko browser mein save karo
        localStorage.setItem('token', response.data.token);
        
        // 🚀 Seedha secure dashboard par bhej do
        navigate('/admin/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'LOGIN_FAILED // INVALID_CREDENTIALS');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#05070C] min-h-screen flex justify-center items-center font-sans text-white px-4">
      <form 
        onSubmit={handleLogin} 
        className="border border-white/10 p-8 rounded-3xl bg-slate-900/30 w-100 max-w-md backdrop-blur-md shadow-2xl relative overflow-hidden"
      >
        {/* Top bar design clue */}
        <div className="text-[10px] font-mono text-gray-500 mb-6 border-b border-white/5 pb-2 uppercase tracking-widest text-center">
          GARAGE.PK // SECURE_AUTH_GATEWAY
        </div>

        <h3 className="text-2xl md:text-3xl italic font-black uppercase text-center mb-8 tracking-tight">
          ADMIN <span className="text-teal-500">PORTAL</span>
        </h3>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs p-3 rounded-xl mb-6 text-center">
            &gt; {error}
          </div>
        )}
        
        <div className="marginBottom mb-5">
          <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
            Console Login (Email)
          </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="admin@garage.pk"
            className="w-full bg-[#090D16]/90 border border-white/10 rounded-xl p-3 text-sm text-slate-200 focus:outline-none focus:border-teal-500/50 transition-colors font-mono"
          />
        </div>

        <div className="mb-8">
          <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
            Access Key (Password)
          </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="••••••••"
            className="w-full bg-[#090D16]/90 border border-white/10 rounded-xl p-3 text-sm text-slate-200 focus:outline-none focus:border-teal-500/50 transition-colors font-mono"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-3 bg-teal-600/20 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-wider rounded-xl hover:bg-teal-500/30 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none font-bold"
        >
          {loading ? 'INITIALIZING_SESSION...' : '[ INITIATE_LOGIN ]'}
        </button>
      </form>
    </div>
  );
};

export default Login;