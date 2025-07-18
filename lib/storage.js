// lib/storage.js

export const getBlogs = () => {
  return JSON.parse(localStorage.getItem('blogs')) || [];
};

export const saveBlogs = (blogs) => {
  localStorage.setItem('blogs', JSON.stringify(blogs));
};

export const deleteBlog = (index) => {
  const blogs = getBlogs();
  blogs.splice(index, 1);
  saveBlogs(blogs);
};

export const updateBlog = (index, newBlog) => {
  const blogs = getBlogs();
  blogs[index] = newBlog;
  saveBlogs(blogs);
};
