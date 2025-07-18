'use client';

import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        width: '100%',
        maxWidth: '400px',
        margin: '4rem auto',
        padding: '2rem',
        borderRadius: '12px',
        backgroundColor: '#1a1a1d',
        boxShadow: '0 0 20px rgba(0,0,0,0.4)',
        color: '#fff',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#ffffff' }}>Admin Login</h2>

      <input
        type="text"
        placeholder="Admin Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={{
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          border: '1px solid #333',
          backgroundColor: '#2a2a2e',
          color: '#fff',
        }}
      />

      <input
        type="password"
        placeholder="Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          border: '1px solid #333',
          backgroundColor: '#2a2a2e',
          color: '#fff',
        }}
      />

      <button
        type="submit"
        style={{
          padding: '0.75rem',
          borderRadius: '8px',
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          border: 'none',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.03)')}
        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
      >
        Login
      </button>
    </form>
  );
}
