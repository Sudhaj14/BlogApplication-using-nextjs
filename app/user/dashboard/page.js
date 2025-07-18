'use client';

import { useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCard';
import UserHeader from '@/components/UserHeader';

export default function UserDashboard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <UserHeader />
      <main style={{ padding: '2rem' }}>
  <h2>Admin Dashboard</h2>
  {blogs.length === 0 ? (
    <p>No blogs found.</p>
  ) : (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          blog={blog}
          isAdmin
          onDelete={() => handleDelete(blog._id)}
          onEdit={() => handleEdit(blog._id)}
        />
      ))}
    </div>
  )}
</main>
    </>
  );
}
