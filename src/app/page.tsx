"use client";

import TextInput from "./component/TextInput";
import Alert from "./component/AlertBox/index";
import { useState, useEffect } from 'react';
import Homebtn from "./component/Homebtn";
import Holaaabtn from "./component/Holaaa";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [alert, setAlert] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
    title: string;
  }>({
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
  
    <div 
      className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 p-8"
    >
      <div 
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg"
        style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
      >
        {alert.show && (
          <Alert
            type={alert.type}
            message={alert.message}
            title={alert.title}
            onClose={() => setAlert(prev => ({ ...prev, show: false }))}
          />
        )}

        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">กรุณากรอกข้อมูล</h1>

        <div className="space-y-4">
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 mt-6 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </div>
      <Homebtn></Homebtn>
      <Holaaabtn></Holaaabtn>
    </div>
  );
}
