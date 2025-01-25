"use client";
import { useState, useEffect } from 'react';
import Homebtn from "./component/Homebtn";
import Holabtn from "./component/Holaaa";

const TextInput = ({ labelText, inputId, value, onChange }) => (
  <div className="space-y-2">
    <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
      {labelText}
    </label>
    <input
      id={inputId}
      type="text"
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>
);

const Alert = ({ type, message, title, onClose }) => (
  <div className={`p-4 rounded-lg ${
    type === 'success' 
      ? 'bg-green-100 text-green-700' 
      : 'bg-red-100 text-red-700'
  } flex justify-between items-center`}>
    <div>
      <div className="font-bold">{title}</div>
      <div>{message}</div>
    </div>
    <button onClick={onClose} className="ml-4">
      ×
    </button>
  </div>
);

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    type: 'success',
    message: '',
    title: ''
  });

  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert(prev => ({ ...prev, show: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert.show]);

  const handleSubmit = () => {
    if (!firstName || !lastName) {
      setAlert({
        show: true,
        type: 'error',
        title: 'ผิดพลาด',
        message: 'กรุณากรอกข้อมูลให้ครบถ้วน'
      });
      return;
    }
    setAlert({
      show: true,
      type: 'success',
      title: 'สำเร็จ',
      message: `ข้อมูลที่กรอก: ${firstName} ${lastName}`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-4">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/30 relative overflow-hidden">
        {alert.show && (
          <div className="mb-6 animate-bounce">
            <Alert
              type={alert.type}
              message={alert.message}
              title={alert.title}
              onClose={() => setAlert(prev => ({ ...prev, show: false }))}
            />
          </div>
        )}
        
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-8 tracking-tight">
          กรอกข้อมูล
        </h1>
        
        <div className="space-y-6">
          <TextInput
            labelText="ชื่อ"
            inputId="txtFirstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextInput
            labelText="นามสกุล"
            inputId="txtLastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full mt-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95 transition duration-300 ease-in-out"
        >
          ส่งข้อมูล
        </button>
      </div>

      <div className="flex justify-center space-x-4">
        <Homebtn />
        <Holabtn />
      </div>
    </div>
  );
}
