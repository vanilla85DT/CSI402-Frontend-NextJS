"use client";
import { useState } from 'react';
import LoginForm from './login/page';
import RegisterForm from './register/page';
export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      {isLogin ? (
        <LoginForm onToggle={() => setIsLogin(false)} />
      ) : (
        <RegisterForm onToggle={() => setIsLogin(true)} />
      )}
    </div>
  );
}