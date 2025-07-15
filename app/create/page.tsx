'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Blog } from '@/types/blog';
import { v4 as uuidv4 } from 'uuid';

export default function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBlog: Blog = {
      id: uuidv4(),
      title,
      content,
      date: new Date().toLocaleString(),
    };

    const stored = localStorage.getItem('blogs');
    const blogs = stored ? JSON.parse(stored) : [];
    blogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(blogs));

    router.push('/');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
}
