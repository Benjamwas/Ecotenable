import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';
import axios from 'axios';
import {io} from 'socket.io-client';
const socket = io('http://localhost:5001'); // Connect to your backend server

const BlogAdminPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    featuredImage: '',
    author: '',
    category: ''
  });

  // Fetch blogs on mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('https://ecotenable-node-js.vercel.app/api/blogs');
        console.log('Fetched blogs:', res.data);
        setBlogs(res.data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
        setBlogs([]);
      }
    };
    fetchBlogs();
  }, []);

  // Reset form fields
  const resetForm = () => {
    setFormData({ title: '', content: '', featuredImage: '', author: '', category: '' });
    setEditingBlog(null);
    setFormOpen(false);
  };

  // Handle create and update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingBlog) {
      // Update blog
      try {
        const res = await axios.put(
          `https://ecotenable-node-js.vercel.app/api/blogs/${editingBlog.id}`,
          {
            ...formData,
            featured_image: formData.featuredImage // map to backend field
          }
        );
        setBlogs(blogs.map(blog => blog.id === editingBlog.id ? res.data : blog));
        resetForm();
      } catch (error) {
        console.error('Failed to update blog:', error);
      }
    } else {
      // Create blog
      try {
        const res = await axios.post('https://ecotenable-node-js.vercel.app/api/blogs', {
          ...formData,
          featured_image: formData.featuredImage // map to backend field
        });
        setBlogs([...blogs, res.data]);
        resetForm();
      } catch (error) {
        console.error('Failed to create blog:', error);
      }
    }
  };

  // Handle edit
  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title || '',
      content: blog.content || '',
      featuredImage: blog.featured_image || '',
      author: blog.author || '',
      category: blog.category || ''
    });
    setFormOpen(true);
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ecotenable-node-js.vercel.app/api/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Failed to delete blog:', error);
    }
  };

  return (
    <div className="p-18 pt-32 bg-[#F8F9FA] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-900">Blog Admin Panel</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-xl shadow-md hover:bg-green-800"
          onClick={() => {
            setEditingBlog(null);
            setFormOpen(true);
            setFormData({ title: '', content: '', featuredImage: '', author: '', category: '' });
          }}
        >
          <FiPlus /> Create Blog
        </motion.button>
      </div>

      {formOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow mb-6"
        >
          <h2 className="text-xl font-semibold text-green-800 mb-4">
            {editingBlog ? 'Edit Blog' : 'Create Blog'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Blog Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
            <textarea
              placeholder="Content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full border border-gray-300 rounded px-4 py-2 h-32"
              required
            ></textarea>
            <input
              type="text"
              placeholder="Featured Image URL"
              value={formData.featuredImage}
              onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Author"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <div className="flex gap-4">
              <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                {editingBlog ? 'Update' : 'Create'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border rounded-xl p-5 shadow-md hover:shadow-xl transition-all"
          >
            {(blog.featured_image || blog.featuredImage) && (
              <img
                src={blog.featured_image || blog.featuredImage}
                alt="Featured"
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold text-green-900 mb-2">{blog.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{blog.category && <b>Category:</b>} {blog.category}</p>
            <p className="text-gray-600 text-sm mb-2">{blog.author && <b>Author:</b>} {blog.author}</p>
            <p className="text-gray-600 text-sm mb-4">{blog.content}</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button onClick={() => handleEdit(blog)} className="text-green-700 hover:text-green-900">
                  <FiEdit size={18} />
                </button>
                <button onClick={() => handleDelete(blog.id)} className="text-red-600 hover:text-red-800">
                  <FiTrash2 size={18} />
                </button>
              </div>
              <button className="text-gray-600 hover:text-blue-600">
                <FaEye size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogAdminPage;