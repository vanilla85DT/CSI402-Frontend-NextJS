"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TempAccessModal from '../component/token';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showTempAccessModal, setShowTempAccessModal] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const registeredUser = localStorage.getItem('registeredUser');
    
    if (username === registeredUser) {
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleTempAccessConfirm = () => {
    localStorage.setItem('tempAccessExpiry', 
      (Date.now() + 30 * 60 * 1000).toString()
    );
    setShowTempAccessModal(false);
    router.push('/dashboard');
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-pink-100 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-pink-700 mb-4">
            Login
          </h2>

          {error && (
            <div className="bg-red-200 text-red-700 p-2 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-pink-800 mb-2">Username</label>
              <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-pink-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-pink-800 mb-2">Password</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-pink-300 rounded"
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4 space-y-2">
            <button 
              onClick={() => setShowTempAccessModal(true)}
              className="text-pink-600 hover:underline"
            >
              Temporary Access
            </button>
            <div>
              <a href="/register" className="text-pink-600 hover:underline">
                Register New Account
              </a>
            </div>
          </div>
        </div>
      </div>

      {showTempAccessModal && (
        <TempAccessModal 
          onClose={() => setShowTempAccessModal(false)}
          onConfirm={handleTempAccessConfirm}
        />
      )}
    </div>
  );
}