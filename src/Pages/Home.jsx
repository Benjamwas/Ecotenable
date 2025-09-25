import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useVelocity,useTransform, useSpring, useMotionValue,useAnimationFrame } from 'framer-motion';
import { FaQuoteLeft, FaLeaf, FaBolt, FaWater, FaRecycle, FaFacebookF,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import { FaPlay } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import BrandScroll from '../Components/Brandscroll';


import image1 from '../assets/Hero section 1.jpg';
import image2 from '../assets/Hero section 2.jpg';
import image3 from '../assets/About section.jpg';
import image4 from '../assets/The journey.png';
import image5 from '../assets/images.jpeg';


const Home = () => {
  const ref = useRef(null);
  

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
  {
    name: "Pastor Peter",
    username: "Oasis Of life Centres",
    avatar: "",
    feedback:
    "The Website and mobile application was very easy to use and navigate . ",
  },
  {
    name: "Kennedy Mutua",
    username: "Dr Kennedy Mutua",
    avatar: "",
    feedback:
      "The Services Offered by the team were very professional and they delivered on time. I highly recommend them.",
  },
  {
    name: "Sr Agnes",
    username: "Vendramini Schools",
    avatar: "",
    feedback:
      "The School Website and mobile application was very easy to use and navigate. The team was very professional and delivered on time.",
  },
  {
    name: "Dr Kiula",
    username: "KUTRRH",
    avatar: "",
    feedback:
      "As an International Hospital, we needed a website that could handle high traffic and provide a seamless user experience. The team delivered beyond our expectations.",
  },
  

];

const services = [
  {
    title: "Green Energy",
    icon: <FaBolt className="text-yellow-400 text-4xl" />,
    description: "Innovative solar and wind solutions for sustainable living.",
  },
  {
    title: "Water Management",
    icon: <FaWater className="text-blue-400 text-4xl" />,
    description: "Smart water conservation and irrigation systems.",
  },
  {
    title: "Eco Waste Solutions",
    icon: <FaRecycle className="text-green-400 text-4xl" />,
    description: "Waste reduction and recycling strategies for communities.",
  },
  {
    title: "Environmental Consulting",
    icon: <FaLeaf className="text-emerald-400 text-4xl" />,
    description: "Expert advice on achieving sustainability goals.",
  },
];
const backgroundImages = [
  image1,
  image2,
  image3,
];




  const [testimonialIndex, setTestimonialIndex] = useState(0);
  

  // Define prev and next functions
  const prev = () => {
    setTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ category, setCategory] = useState(''); // Added category state
  const [isInView, setIsInView] = useState(true);
  const [bgIndex, setBgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change background every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
// Hook to get element width


 
    
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      
      service: selectedService,
      booking_date: selectedDate,
    };
    console.log('Form data:', data);
    // Perform validation if needed
    if (!name || !email || !selectedService || !selectedDate) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/booking', data); 
      console.log(response.data);
      alert('Booking successful!');
      setName('');
      setEmail('');
      setSelectedService('');
      setSelectedDate(null);
      console.log('Booking data:', data);
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
      id="hero"
      className="min-h-screen h-[100dvh] w-full relative overflow-hidden flex items-center justify-center px-2 py-24 pt-32 bg-center bg-cover transition-all duration-1000"
      style={{
        backgroundImage: `url('${backgroundImages[bgIndex]}')`,
      }}
    >
      {/* Side Social Icons */}
      <div className="hidden md:flex flex-col gap-4 fixed top-1/3 right-4 z-20">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white bg-[#6FD9C0] p-3 rounded-full hover:bg-white hover:text-[#6FD9C0] transition">
          <FaFacebookF size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white bg-[#6FD9C0] p-3 rounded-full hover:bg-white hover:text-[#6FD9C0] transition">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white bg-[#6FD9C0] p-3 rounded-full hover:bg-white hover:text-[#6FD9C0] transition">
          <FaTwitter size={20} />
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10"
      >
        {/* Left Content */}
        <div className="space-y-6 px-6 text-white drop-shadow-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6FD9C0]">
            Ecotenable Consultancy
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            Empowering communities through <br />
            <span className="text-[#6FD9C0]">sustainable climate solutions</span>
          </h2>
          <p className="text-lg">
            Join us in making a greener tomorrow — one small step at a time. Together we restore, rethink, and rebuild nature.
          </p>

          <div className="flex items-center space-x-6 pt-4">
            <Link to="/Services">
              <button className="bg-[#6FD9C0] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5bc8b0] transition ease-in-out duration-300">
                Book a Consultation
              </button>
            </Link>

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
                <text fill="white" fontSize="14" fontWeight="bold">
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

        {/* Right Floating Images */}
        <div className="relative w-full flex justify-center gap-8 px-6 pb-8">
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
{/* Section 1: About Us */}
<section className="bg-white h-full w-full py-16 lg:px-20">
  <div className="text-center mb-12">
    <p className="text-sm text-blue-500 font-bold underline align-left tracking-widest uppercase">ABOUT US</p>
  </div>
  {/* Main Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
    {/* Single Circular Image with Leaf Stretch */}
    <div className="relative w-full flex justify-center items-center my-8">
      {/* Leaf Top Right */}
      <svg
        className="absolute -top-8 -right-8 w-20 h-20 text-green-400 opacity-70"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <ellipse cx="48" cy="16" rx="16" ry="32" transform="rotate(45 48 16)" />
      </svg>
      {/* Leaf Bottom Left */}
      <svg
        className="absolute -bottom-8 -left-8 w-20 h-20 text-green-600 opacity-60"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <ellipse cx="16" cy="48" rx="16" ry="32" transform="rotate(-45 16 48)" />
      </svg>
      {/* Circular Image */}
      <img
        src={image3}
        alt="Consultation"
        className="rounded-full shadow-2xl w-64 h-64 object-cover border-8 border-black m-8"
      />
    </div>
    {/* Text Content */}
    <div>
      
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug text-black">
        Ensuring Your Success Trusted <br /> IT and Climate Resolutions
      </h2>
      <p className="text-black mb-6">
        At Ecotenable.com we are a cross-continental environmental and climate resolution consultancy based in Kenya and the United Kingdom.
        We specialize in providing science-driven, practical, and scalable solutions to environmental challenges affecting communities, businesses, and governments.
        Our work spans across climate adaptation, environmental impact assessments, sustainable development planning, renewable energy integration, water resource management, and carbon reduction strategies. 
        Whether you’re an NGO seeking community-based climate interventions, a government agency navigating policy and compliance, or a business aiming for sustainability and ESG alignment—we bring tailored, data-informed strategies that drive measurable impact. With a team of experienced climate experts, environmental scientists, and policy advisors, we are dedicated to helping you build a greener, more resilient future.
      </p>
     
      {/* Contact + Button */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-md text-black font-semibold border border-black">
          <FaPhoneAlt />
          +44 7399 286 116/ 0739433017
        </div>
        <Link to="/About">
          <button className="bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-800 transition">
            More About Us
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>

   

      {/* Section 2: Services */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-100 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-sm text-black">{service.description}</p>
            </motion.div>
          ))}
        </div>

       <Link to="/services"><button className="mt-10 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
          Click for More
        </button>
        </Link> 
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
      {/* Section 5: Quote */}

<section className="bg-[#14463A] text-white py-16 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">"Empowering communities through sustainable climate solutions"</h2>
    <p className="text-lg mb-8">Join us in making a greener tomorrow — one small step at a time. Together we restore, rethink, and rebuild nature.</p>
    <div className="flex justify-center space-x-4">
     <Link to="/contact"> <button className="bg-[#6FD9C0] hover:bg-[#57b8a0] text-white px-6 py-3 rounded-lg font-semibold transition">
        Get Started
      </button>
      </Link>

     <Link to= "/About"><button className="bg-transparent border-2 border-white hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition">      
        Learn More
      </button>
      </Link> 
    </div>
  </div>
</section>

  <section>
  <BrandScroll />
  </section>



      {/* Section 4: Booking Form */}
  {/*<section
  className="relative min-h-screen flex items-center justify-center p-6"
  style={{
    backgroundImage: `url(${image5})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/40 to-[#14463A]/60 z-0"></div>
  <div className="relative z-10 flex flex-col md:flex-row w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden">
    <div className="hidden md:block  bg-transparent"></div>
    <div
      className="w-full  p-8 flex flex-col justify-center"
      style={{
        background: 'rgba(255,255,255,0.18)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.25)',
      }}
    >
      <h2 className="text-3xl font-bold text-[#14463A] mb-6 text-center drop-shadow-lg">Book a Service</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[#14463A] font-semibold mb-2">Select a Service</label>
          <select
            className="w-full p-3 rounded-lg border border-white/50 bg-white/30 backdrop-blur-md text-[#14463A] focus:ring-2 focus:ring-[#6FD9C0] transition"
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
            className="w-full p-3 rounded-lg border border-white/50 bg-white/30 backdrop-blur-md text-[#14463A] focus:ring-2 focus:ring-[#6FD9C0] transition"
            required
            placeholderText="Select a date"
          />
        </div>
        <div>
          <label className="block text-[#14463A] font-semibold mb-2">Your Name</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-white/50 bg-white/30 backdrop-blur-md text-[#14463A] focus:ring-2 focus:ring-[#6FD9C0] transition"
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
            className="w-full p-3 rounded-lg border border-white/50 bg-white/30 backdrop-blur-md text-[#14463A] focus:ring-2 focus:ring-[#6FD9C0] transition"
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
      
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-12">
        <p className="text-sm text-orange-500 font-semibold tracking-widest">WHAT OUR CLIENTS SAY:</p>
        <h2 className="text-3xl  text-black font-s/ bold mt-2">Our trusted clients</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white shadow-md rounded-2xl p-6 relative border border-gray-100"
          >
            <FaQuoteLeft className="text-gray-300 text-2xl mb-4" />
            <p className="text-gray-700 mb-4">
              {t.feedback.split("**").map((part, i) =>
                i % 2 === 1 ? (
                  <span key={i} className="text-orange-500 font-semibold">
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full border"
              />
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.username}</p>
              </div>
            </div>
          </motion.div>
        ))}
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