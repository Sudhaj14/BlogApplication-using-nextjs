import connectMongoDB from '@/lib/mongodb';
import Blog from '@/models/blog';

export async function POST(request) {
  try {
    const { title, content, author } = await request.json();
    console.log("📩 Received blog data:", { title, content, author });

    await connectMongoDB();
    console.log("✅ Connected to MongoDB");

    const newBlog = new Blog({ title, content, author });
    const savedBlog = await newBlog.save();

    console.log("✅ Blog saved to DB:", savedBlog);

    // ✅ SUCCESS RESPONSE
    return new Response(JSON.stringify({ message: 'Blog created successfully!', blog: savedBlog }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("❌ Error saving blog:", error);
    return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET() {
  try {
    await connectMongoDB();

    const blogs = await Blog.find().sort({ createdAt: -1 });

    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response("Failed to fetch blogs", { status: 500 });
  }
}
