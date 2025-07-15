'use client';

import Link from 'next/link';
import { Blog } from '@/types/blog';

type Props = {
  blog: Blog;
  onDelete: (id: string) => void;
};

export default function BlogCard({ blog, onDelete }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
      <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
      <p className="text-gray-700 mb-4">{blog.content}</p>
      <div className="flex gap-4">
        <Link
          href={`/edit/${blog.id}`}
          className="text-blue-600 hover:underline"
        >
          ✏️ Edit
        </Link>
        <button
          onClick={() => onDelete(blog.id)}
          className="text-red-600 hover:underline"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
