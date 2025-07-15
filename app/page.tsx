'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Blog } from '@/types/blog';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('blogs');
    if (stored) setBlogs(JSON.parse(stored));
  }, []);

  const deleteBlog = (id: string) => {
    const filtered = blogs.filter(blog => blog.id !== id);
    setBlogs(filtered);
    localStorage.setItem('blogs', JSON.stringify(filtered));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white p-6">
  <div className="max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 text-center">📝 My Blog</h1>
    <div className="text-right mb-6">
      <Link href="/create" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
        + Create New
      </Link>
    </div>

    {blogs.length === 0 ? (
      <p className="text-gray-400 text-center">No blogs yet.</p>
    ) : (
      blogs.map((blog) => (
        <div key={blog.id} className="bg-zinc-800 rounded-xl shadow-lg p-5 mb-6 border border-zinc-700 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold text-white mb-1">{blog.title}</h2>
          <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
          <p className="text-gray-200 mb-4">{blog.content}</p>
          <div className="flex gap-4">
            <Link href={`/edit/${blog.id}`} className="text-blue-400 hover:text-blue-200 transition">
              ✏️ Edit
            </Link>
            <button onClick={() => deleteBlog(blog.id)} className="text-red-400 hover:text-red-200 transition">
              🗑️ Delete
            </button>
          </div>
        </div>
      ))
    )}
  </div>
</div>  );
}
