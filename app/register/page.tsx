"use client"

import React, { useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';

const Register = () => {
  const { signUp } = useUserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);

    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการลงสมัคร:', error);
    }
  };

  return (
    <div>
      <h2>ลงทะเบียน</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email">อีเมล:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">รหัสผ่าน:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};

export default Register;