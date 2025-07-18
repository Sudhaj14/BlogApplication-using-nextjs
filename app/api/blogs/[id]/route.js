import connectMongoDB from '@/lib/mongodb';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

// GET blog by ID
export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const blog = await Blog.findById(id);
  return NextResponse.json(blog);
}

// PUT update blog by ID
export async function PUT(req, { params }) {
  const { id } = params;
  const { title, content, author } = await req.json();
  await connectMongoDB();
  await Blog.findByIdAndUpdate(id, { title, content, author });
  return NextResponse.json({ message: 'Blog updated' });
}

export async function DELETE(request, context) {
  const { id } = context.params;

  try {
    await connectMongoDB();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting blog", error }, { status: 500 });
  }
}
