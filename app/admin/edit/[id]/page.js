'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminHeader from '@/components/AdminHeader';

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch(`/api/blogs/${id}`);
      const data = await res.json();
      setBlog(data);
    }
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    });
    router.push('/admin/dashboard');
  };

  return (
    <>
      <AdminHeader />
      <main style={{ padding: '2rem' }}>
        <h2>Edit Blog</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
          <input
            type="text"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            required
          />
          <textarea
            rows="5"
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            required
          />
          <input
            type="text"
            value={blog.author}
            onChange={(e) => setBlog({ ...blog, author: e.target.value })}
            required
          />
          <button type="submit">Update</button>
        </form>
      </main>
    </>
  );
}
