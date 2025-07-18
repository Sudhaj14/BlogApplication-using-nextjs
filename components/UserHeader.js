'use client';

import Link from 'next/link';

export default function UserHeader() {
  return (
    <header
      style={{
        background: '#121212',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2 style={{ color: '#fff', margin: 0 }}>Next Blogger</h2>

      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        {['/', '/user/dashboard', '/user/login'].map((href, i) => {
          const label = ['Home', 'Dashboard', 'Login'][i];
          return (
            <Link
              key={href}
              href={href}
              style={{
                color: '#bbb',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#fff')}
              onMouseLeave={(e) => (e.target.style.color = '#bbb')}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
