// app/page.js
'use client';
import UserHeader from '@/components/UserHeader';

export default function HomePage() {
  return (
    <>
      <UserHeader />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to Next Blogger App!</h1>
        <p>This is the user-facing homepage.</p>
      </main>
    </>
  );
}
