'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = (username, password) => {
    const adminUser = process.env.NEXT_PUBLIC_ADMIN_USER;
    const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASS;

    if (username === adminUser && password === adminPass) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Login as Admin</h2>
      <LoginForm onLogin={handleLogin} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </main>
  );
}
