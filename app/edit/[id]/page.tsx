'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Blog } from '@/types/blog';

export default function Edit() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('blogs');
    if (stored) {
      const blogs: Blog[] = JSON.parse(stored);
      const blog = blogs.find(b => b.id === id);
      if (blog) {
        setTitle(blog.title);
        setContent(blog.content);
      }
    }
  }, [id]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    const stored = localStorage.getItem('blogs');
    if (stored) {
      const blogs: Blog[] = JSON.parse(stored);
      const updated = blogs.map(blog =>
        blog.id === id ? { ...blog, title, content } : blog
      );
      localStorage.setItem('blogs', JSON.stringify(updated));
      router.push('/');
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Content"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}
