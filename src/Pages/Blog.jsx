import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5001');

const BlogPage = () => {
  const [filter, setFilter] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/blogs');
        setBlogs(res.data);
        const uniqueCategories = Array.from(new Set(res.data.map(blog => blog.category).filter(Boolean)));
        setCategories(uniqueCategories);
      } catch (error) {
        setBlogs([]);
        setCategories([]);
      }
    };
    fetchBlogs();

    // WebSocket listeners
    socket.on('blogCreated', (blog) => {
      setBlogs(prev => [blog, ...prev]);
      setCategories(prev => prev.includes(blog.category) ? prev : [...prev, blog.category]);
    });
    socket.on('blogUpdated', (updatedBlog) => {
      setBlogs(prev => prev.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog));
    });
    socket.on('blogDeleted', ({ id }) => {
      setBlogs(prev => prev.filter(blog => blog.id !== id));
    });

    return () => {
      socket.off('blogCreated');
      socket.off('blogUpdated');
      socket.off('blogDeleted');
    };
  }, []);

  const filteredBlogs =
    filter === 'All' ? blogs : blogs.filter(blog => blog.category === filter);

  return (
    <div className="bg-green-50 py-8 w-full min-h-screen font-sans text-gray-800">
      <header className="bg-green-100 py-10 px-4 text-center w-full ">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-green-800"
        >
          Let's Save Nature Together For People & Planet
        </motion.h1>
        <p className="mt-4 text-green-700">Discover inspiring stories & conservation efforts.</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {['All', ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-700 border-green-300 hover:bg-green-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <section className="px-4 py-10 w-full mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.1, 1) }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {blog.featured_image && (
              <img src={blog.featured_image} alt={blog.title || 'Blog image'} className="w-full h-48 object-cover" />
            )}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-green-700 mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{blog.content?.slice(0, 120)}...</p>
              <span className="text-xs text-green-500 font-medium">{blog.category}</span>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;