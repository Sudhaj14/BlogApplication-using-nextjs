'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BlogCard from '@/components/BlogCard';
import AdminHeader from '@/components/AdminHeader';

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      setBlogs(blogs.filter((b) => b._id !== id));
    }
  };

  const handleEdit = (id) => {
    router.push(`/admin/edit/${id}`);
  };

  return (
    <>
      <AdminHeader />
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
