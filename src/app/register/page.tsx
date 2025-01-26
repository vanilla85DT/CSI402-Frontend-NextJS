"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
  });
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // validation
    const { username, password, email, firstName, lastName } = formData;
    if (username && password && email && firstName && lastName) {
      localStorage.setItem('userData', JSON.stringify(formData));
      
      // Show success 
      setNotification('Registration Successful!');
      
      // Hide notifi after 3 seconds
      setTimeout(() => {
        setNotification('');
        router.push('/login');
      }, 3000);
    } else {
      setError('Please fill in all required fields');
    }
  };

  return (
    <div className="w-full max-w-md relative">
      {}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {notification}
        </div>
      )}

      <div className="bg-pink-100 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-pink-700 mb-4">
            Register
          </h2>

          {error && (
            <div className="bg-red-200 text-red-700 p-2 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-pink-800 mb-2">First Name *</label>
                <input 
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-pink-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-pink-800 mb-2">Last Name *</label>
                <input 
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-pink-300 rounded"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-pink-800 mb-2">Username *</label>
              <input 
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-pink-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-pink-800 mb-2">Email *</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-pink-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-pink-800 mb-2">Password *</label>
              <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-pink-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-pink-800 mb-2">Phone Number</label>
              <input 
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-pink-300 rounded"
              />
            </div>

            <div>
              <label className="block text-pink-800 mb-2">Date of Birth</label>
              <input 
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-pink-300 rounded"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
            >
              Register
            </button>
          </form>

          <div className="text-center mt-4">
            <a href="/login" className="text-pink-600 hover:underline">
              Already have an account? Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}