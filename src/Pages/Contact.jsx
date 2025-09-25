import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle form input changes
  // This function updates the formData state with the values entered by the user in the form fields.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
// This function handles the form submission when the user clicks the submit button.
  // It prevents the default form submission behavior, validates the form data, and sends it to the backend API.
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log('Form data before sending:', formData);

    const response = await axios.post('https://ecotenable-node-js.vercel.app/api/contact', formData);

    // Axios only throws for non-2xx, so if we get here, it's a success
    toast.success('Message sent successfully!');
    alert('Thank you for reaching out! Your message has been sent successfully.');

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });

    console.log('Message sent successfully!', response.data);
  } catch (error) {
    // Axios error handling
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Backend responded with error:', error.response.data);
      if (error.response.status === 400) {
        toast.error(`Validation error: ${error.response.data.message || 'Bad Request'}`);
        alert(`Validation error: ${error.response.data.message || 'Bad Request'}`);
      } else if (error.response.status === 500) {
        toast.error('Server error: Failed to send message. Please try again later.');
        alert('Server error: Failed to send message. Please try again later.');
      } else {
        toast.error(`Unexpected error: ${error.response.data.message || 'Unknown error'}`);
        alert(`Unexpected error: ${error.response.data.message || 'Unknown error'}`);
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', error.request);
      toast.error('No response from server. Please check your network connection.');
      alert('No response from server. Please check your network connection.');
    } else {
      // Something else happened
      console.error('Error setting up request:', error.message);
      toast.error(`Error: ${error.message}`);
      alert(`Error: ${error.message}`);
    }
  }
};

  return (
    <div className="flex py-8 pt-34 h-screen text-[#1F1F1F] md:flex-row  sm: mb- 8 flex-col">
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className=" md:w-1/2 bg-[#102820] text-white p-16  flex flex-col justify-center"
      >
        <h1 className="text-4xl font-bold mb-4">We’d love to hear from you</h1>
        <div className="flex space-x-6 mt-8 pl-16">
          <div className="w-24 h-24 border-2 border-dashed rounded-full"></div>
          <div className="w-24 h-24 border-2 border-dashed rounded-full"></div>
          <div className="w-24 h-24 border-2 border-dashed rounded-full"></div>
        </div>
        <div className="mt-auto text-sm pt-10">
          <p>Privacy Policy · Modern Day Statement · Social Impact Statement</p>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2 bg-[#F0F5F1] p-16 flex flex-col justify-center"
      >
        <div className="flex justify-end mb-6 md:mb-0 text-sm">
          <nav className="space-x-6">
            <a href="#About" className="text-sm text-gray-700">About</a>
            <a href="#Services" className="text-sm text-gray-700">Services</a>
            <button className="text-sm text-black border px-3 py-1 rounded-full hover:bg-[#102820] hover:text-white transition">Contact us</button>
          </nav>
        </div>

        <h2 className="text-3xl font-semibold mb-6">Contact us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                className="w-full border-b border-gray-500 bg-transparent py-2 focus:outline-none focus:border-[#102820]" 
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                className="w-full border-b border-gray-500 bg-transparent py-2 focus:outline-none focus:border-[#102820]" 
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full border-b border-gray-500 bg-transparent py-2 focus:outline-none focus:border-[#102820]" 
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full border-b border-gray-500 bg-transparent py-2 focus:outline-none focus:border-[#102820]" 
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="3" 
              className="w-full border-b border-gray-500 bg-transparent py-2 focus:outline-none focus:border-[#102820]" 
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            className="mt-4 inline-flex items-center text-black hover:underline hover:underline-offset-4"
          >
            Submit &rarr;
          </button>

          <p className="text-sm pt-6">EMAIL US: <a href="mailto:enquiries@glassmoon.co" className="underline">info@ecotenable.com</a></p>
          <p className="text-sm">Instagram · Facebook</p>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
