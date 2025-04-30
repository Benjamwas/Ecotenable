import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

import image1 from '../assets/Hero section 1.jpg';
import image2 from '../assets/Hero section 2.jpg';
import image3 from '../assets/About section.jpg';
import image4 from '../assets/The journey.png';
import image5 from '../assets/images.jpeg';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const timeline = [
    { year: '2019', description: 'Founded with a vision for sustainability.' },
    { year: '2020', description: 'Expanded our services to new industries.' },
    { year: '2021', description: 'Awarded for green technology innovations.' },
    { year: '2022', description: 'Worked with clients.' },
    { year: '2025', description: 'Still growing and evolving!' },
  ];

  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer a range of services including technology consulting, water conservation, and climate consulting.' },
    { question: 'How can I book a consultation?', answer: 'You can book a consultation through our website or by contacting us directly.' },
    { question: 'What is your cancellation policy?', answer: 'You can cancel or reschedule your appointment up to 24 hours in advance without any charge.' },
    { question: 'Do you offer virtual consultations?', answer: 'Yes, we offer virtual consultations via video conferencing.' },
    { question: 'How do you ensure data privacy?', answer: 'We take data privacy seriously and follow strict protocols to protect your information.' },
    { question: 'Can I customize my consultation?', answer: 'Yes, we can tailor our services to meet your specific needs and requirements.' },
    { question: 'What are your payment options?', answer: 'We accept various payment methods including credit cards, PayPal, and bank transfers.' },
    { question: 'Do you provide follow-up support?', answer: 'Yes, we offer follow-up support after your consultation to ensure your satisfaction.' },
    { question: 'How can I contact you?', answer: 'You can contact us through our website or by email at info@ecotenable.com.' },
    { question: 'What is your mission?', answer: 'Our mission is to empower communities through sustainable climate solutions.' },
  ];

  const testimonials = [
    { name: 'John Doe', quote: 'This service changed my life!' },
    { name: 'Jane Smith', quote: 'Absolutely incredible experience.' },
    { name: 'Alice Johnson', quote: 'Highly recommend to everyone.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [testimonialIndex]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      service: selectedService,
      date: selectedDate,
    };

    try {
      const response = await axios.post('backend-url', data); // Replace 'backend-url' with your actual API endpoint
      console.log(response.data);
      alert('Booking successful!');
      setName('');
      setEmail('');
      setSelectedService('');
      setSelectedDate(null);
    } catch (error) {
      console.error('Error booking:', error);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <main
      style={{
        background: 'linear-gradient(135deg, #14463A 0%, #C6D3DA 100%)',
      }}
      className="min-h-screen w-screen text-white overflow-x-hidden"
    >
      {/* Section 1: Hero */}
      <section
  ref={ref}
  className="h-screen relative overflow-hidden w-full flex items-center justify-center md:px-15 px-6 py-24 bg-fixed bg-center bg-cover md:mb-16 lg:mb-24"
  id="hero"
  style={{
    backgroundImage: `url('/path-to-your-background.jpg')`, // Replace with your real background
  }}
>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
  >
    {/* Left Content */}
    <div className="space-y-6 px-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6FD9C0]">
        Ecotenable Consultancy
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
        Empowering communities through <br />
        <span className="text-[#6FD9C0]">sustainable climate solutions</span>
      </h2>
      <p className="text-black text-lg">
        Join us in making a greener tomorrow — one small step at a time. Together we restore, rethink, and rebuild nature.
      </p>

      <div className="flex items-center space-x-6 pt-4">
        <button className="bg-[#6FD9C0] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5bc8b0] transition ease-in-out duration-300">
          Book a Consultation
        </button>

        {/* Rotating Text Circle */}
        <div className="relative w-28 h-28">
          <motion.svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -40, 0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0"
                fill="none"
              />
            </defs>
            <text fill="black" fontSize="18" fontWeight="bold">
              <textPath href="#circlePath" startOffset="0%" textAnchor="start">
                Join us - Making greener tomorrow
              </textPath>
            </text>
          </motion.svg>

          <div className="absolute inset-0 flex items-center justify-center text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#6FD9C0"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Right Images */}
    <div className="relative w-full flex justify-center gap-8 px-6">
      {[image1, image2].map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`Sustainable image ${index + 1}`}
          className="w-52 md:w-64 h-72 md:h-80 object-cover rounded-3xl shadow-2xl rotate-[8deg]"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
        />
      ))}
    </div>
  </motion.div>
</section>

      {/* Section 2: Services */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <section className="bg-[#E6F2EF] p-8 flex flex-col items-center justify-start min-h-screen w-full mb-2 lg:mb-24">
          <div className="text-center w-full text-white mb-8">
            <h2 className="text-4xl text-black/60 font-bold mb-4">Our Services</h2>
            <p className="text-lg text-black/60">
              We offer a range of services to help you achieve your sustainability goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto group">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white/30 group-hover:blur-sm hover:!blur-none cursor-pointer backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/40 flex flex-col justify-between items-center h-[350px]"
              >
                <img src="" alt={`Service ${index + 1}`} className="w-full h-40 object-cover rounded-lg mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-[#14463A] mb-2">Service {index + 1}</h3>
                <p className="text-[#14463A] text-center text-sm">
                  A brief description of service {index + 1} and how it contributes to sustainability.
                </p>
                <a href="#services" className="text-lg text-[#6FD9C0] underline mt-4">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </section>
      </motion.div>

      {/* Section 3: Timeline */}
      <section className="bg-cover bg-center bg-no-repeat text-white py-16" style={{ backgroundImage: `url(${image4})` }}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">The Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-700"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="w-1/2 px-6">
                    <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                      <h3 className="text-2xl font-semibold text-blue-400">{item.year}</h3>
                      <p className="mt-2 text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <span className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full z-10"></span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Booking Form */}
      <section className="relative min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg overflow-hidden">
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <img src={image5} alt="Booking illustration" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/70 to-transparent"></div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-[#14463A] mb-6 text-center">Book a Service</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#14463A] font-semibold mb-2">Select a Service</label>
                <select
                  className="w-full p-3 rounded-lg border border-white/50 bg-white/20 backdrop-blur-md text-[#14463A]"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                >
                  <option value="">-- Select Service --</option>
                  <option value="Technology">Technology & Science</option>
                  <option value="Water Conservation">Water Conservation</option>
                  <option value="Climate Consulting">Climate Consulting</option>
                </select>
              </div>
              <div>
                <label className="block text-[#14463A] font-semibold mb-2">Select a Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                  className="w-full p-3 rounded-lg border border-white/50 bg-white/20 backdrop-blur-md text-[#14463A]"
                  required
                  placeholderText="Select a date"
                />
              </div>
              <div>
                <label className="block text-[#14463A] font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-white/50 bg-white/20 backdrop-blur-md text-[#14463A]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-[#14463A] font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg border border-white/50 bg-white/20 backdrop-blur-md text-[#14463A]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#6FD9C0] hover:bg-[#57b8a0] text-white font-bold py-3 rounded-lg transition"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#FFF6E0] to-[#FCEABB] p-8">
        <div className="flex w-full max-w-6xl items-center relative">
          <motion.div
            key={testimonialIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-1/2 p-6"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#14463A]">Testimonial</h2>
            <p className="text-lg text-gray-700 italic">"{testimonials[testimonialIndex].quote}"</p>
            <p className="mt-2 text-[#14463A] font-semibold">- {testimonials[testimonialIndex].name}</p>
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -150 }}
            transition={{ duration: 1 }}
            className="w-1/2 flex justify-center"
          >
            <img
              src={image5}
              alt="Testimonial Visual"
              className="w-80 h-80 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="min-h-screen bg-[#0B1D19] flex items-center justify-center py-16 px-4">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-center text-[#6FD9C0] mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 cursor-pointer transition hover:bg-white/20"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl text-white font-semibold">{faq.question}</h3>
                  <span className="text-[#6FD9C0] text-2xl">{activeIndex === index ? '-' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-gray-300 text-base">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;