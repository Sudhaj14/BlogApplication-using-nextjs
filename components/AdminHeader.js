'use client';

import { useRouter } from 'next/navigation';

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = () => {
    // Optional: Clear tokens or session data
    router.push('/');
  };

  return (
    <header
      style={{
        background: '#111',
        padding: '1rem 2rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2 style={{ color: '#fff', margin: 0 }}>Next Blogger Admin</h2>

      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <a
          href="/admin/dashboard"
          style={{
            color: '#bbb',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#fff')}
          onMouseLeave={(e) => (e.target.style.color = '#bbb')}
        >
          Dashboard
        </a>

        <a
          href="/admin/create"
          style={{
            color: '#bbb',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#fff')}
          onMouseLeave={(e) => (e.target.style.color = '#bbb')}
        >
          Create Blog
        </a>

        <button
          onClick={handleLogout}
          style={{
            background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
            border: 'none',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
