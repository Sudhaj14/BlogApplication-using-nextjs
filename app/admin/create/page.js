'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminHeader from '@/components/AdminHeader';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const router = useRouter();

 const handleSubmit = async (e) => {
  e.preventDefault();
  const newBlog = { title, content, author };

  try {
    const res = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    });

    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      const errorData = await res.json();
      alert('Failed to create blog: ' + errorData.message);
    }
  } catch (error) {
    console.error('Error submitting blog:', error);
    alert('Something went wrong. Please try again.');
  }
};

  return (
    <>
      <AdminHeader />
      <main style={{ padding: '2rem' }}>
        <h2>Create New Blog</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="5"
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <button type="submit">Create</button>
        </form>
      </main>
    </>
  );
}
