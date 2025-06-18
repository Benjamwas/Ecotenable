import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imageenvironment from '../assets/eia-environmental-impact-assessment-concept-with-people-analyze-data-pollution-earth_25147-751-removebg-preview.png';
import {
  motion,
  useAnimation
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaLeaf, FaWater, FaRecycle, FaGlobe, FaSeedling, FaTree,
  FaMicrochip, FaCloud, FaRobot, FaSatellite, FaServer, FaBolt, FaCheckCircle,  FaQuoteLeft, FaSolarPanel, FaBrain, FaCloudSun
} from 'react-icons/fa';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import {io} from 'socket.io-client';



Modal.setAppElement('#root');


// Updated Services with descriptions
const climateServices = [
  { icon: <FaLeaf />, label: 'Sustainable Agriculture', description: 'Promoting eco-friendly farming methods for long-term soil and crop health.' },
  { icon: <FaWater />, label: 'Water Conservation', description: 'Strategies to reduce water waste and protect freshwater resources.' },
  { icon: <FaRecycle />, label: 'Waste Management', description: 'Solutions for efficient recycling and reducing landfill impact.' },
  { icon: <FaGlobe />, label: 'Climate Policy', description: 'Developing and guiding sustainable climate-related regulations.' },
  { icon: <FaSeedling />, label: 'Eco Restoration', description: 'Restoring damaged ecosystems to support biodiversity.' },
  { icon: <FaTree />, label: 'Forest Preservation', description: 'Protecting and maintaining global forest reserves.' },
];

const techServices = [
  { icon: <FaMicrochip />, label: 'IoT for Environment', description: 'Using sensors and devices for real-time environmental monitoring.' },
  { icon: <FaCloud />, label: 'Cloud Analysis', description: 'Leveraging cloud computing for big environmental data analysis.' },
  { icon: <FaRobot />, label: 'AI Modelling', description: 'AI-powered models to simulate climate impacts and environmental trends.' },
  { icon: <FaSatellite />, label: 'Web Development', description: 'Designing and Developing websites and web applications' },
  { icon: <FaServer />, label: 'System Design And Development', description: 'Design and develop custom systems and applications' },
  { icon: <FaBolt />, label: 'Mobile Application Development', description: 'Technologies for optimizing and providing solutions on your phone' },
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
  {
    name: "Noel Jensen",
    username: "nefarious_shop_47",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    feedback:
      "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and **challenging** words.",
  },
  {
    name: "Ahmad Khan",
    username: "antic_circus_76",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    feedback:
      "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and **challenging** words.",
  },
];

const benefits = [
  {
    icon: <FaLeaf className="text-3xl text-green-600" />,
    title: 'Eco-Friendly Solutions',
    description: 'We integrate sustainable practices into every service to help preserve the environment.',
  },
  {
    icon: <FaSolarPanel className="text-3xl text-yellow-500" />,
    title: 'Smart Technologies',
    description: 'Harness the power of AI, IoT, and automation to streamline your business operations.',
  },
  {
    icon: <FaBrain className="text-3xl text-indigo-500" />,
    title: 'Innovative Thinking',
    description: 'Creative problem-solving backed by deep industry knowledge and data insights.',
  },
  {
    icon: <FaCloudSun className="text-3xl text-blue-500" />,
    title: 'Reliable Support',
    description: 'From consultation to implementation, our team is with you every step of the way.',
  },
];


// Animation Variants
const fadeSlideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
  exit: { opacity: 0, x: -50, transition: { duration: 0.4 } },
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
  exit: { opacity: 0, x: 50, transition: { duration: 0.4 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
};



const Services = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    }
  }, [inView, controls]);

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
      const response = await axios.post('http://localhost:5001/api/booking', data); // Replace 'backend-url' with your actual API endpoint
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
    <>
{/* Hero Section */}
<section id="Hero-services" className="w-full flex bg-fixed items-center justify-center h-screen bg-[#E8F5E9] p-0 m-0">
  <motion.div
    ref={ref}
    animate={controls}
    initial={{ opacity: 0, y: 50 }}
    className="flex w-full flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24"
  >
    <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-[#004d40]"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        We Focus On a Sustainable Future
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-[#004d40]"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We pride ourselves in offering climate and environmental solutions. With our team of experts, we tailor solutions to meet your needs or problems. With 10 years of experience in the field, we are confident in our ability to deliver results.
      </motion.p>
      <motion.button
        onClick={() => navigate('/Booking-section')}
        className="mt-8 px-6 py-2 text-lg font-semibold text-white bg-[#004d40] rounded hover:bg-[#FFD700] hover:text-[#004d40] transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </div>

    <motion.div
      className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img src={imageenvironment} alt="services" className="w-3/4 md:w-2/3 lg:w-1/2 h-auto" />
    </motion.div>
  </motion.div>
</section>

{/* Selected Service Section */}
<section className="py-20 w-full bg-[#f0fdf4]" id="select-service">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="w-full max-w-6xl mx-auto px-4"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#004d40] mb-14">
      Select Service
    </h2>

    {/* Unified Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...climateServices, ...techServices].map((service, index) => (
        <motion.div
          key={index}
          onClick={() => setSelectedService(service.label)}
          className={`relative group p-6 rounded-2xl bg-white/10 backdrop-blur-md border scale[1.03] border-white/20 transition-all duration-300  shadow-2xl ${
            selectedService === service.label ? 'ring-2 ring-[#00bfa5]' : ''
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {/* Card Header */}
          <div className="flex gap-4 items-center mb-2">
            <span className="text-4xl">{service.icon}</span>
            <h3 className="text-xl font-bold text-[#004d40]">{service.label}</h3>
          </div>

          {/* Description */}
         <p className="text-sm text-[#004d40] mb-6">
  {service.description}
</p>
   <button
    onClick={() =>
      setExpandedService(expandedService === service.label ? null : service.label)
    }
    className="mt-4 px-4 py-2 bg-[#004d40] text-white rounded-md hover:bg-[#00695c] transition duration-300"
  >
    {expandedService === service.label ? 'Hide Details' : 'More Details'}
  </button>

          {/* Expanded Details */}
          {expandedService === service.label && (
            <div className="mt-4 text-sm text-gray-700">
              <p>
                {service.label === 'Sustainable Agriculture' && 'We implement eco-friendly farming techniques to enhance soil health and crop yield.'}
                {service.label === 'Water Conservation' && 'Our strategies focus on reducing water waste and protecting freshwater resources.'}
                {service.label === 'Waste Management' && 'We provide solutions for efficient recycling and reducing landfill impact.'}
                {service.label === 'Climate Policy' && 'We develop and guide sustainable climate-related regulations.'}
                {service.label === 'Eco Restoration' && 'We work on restoring damaged ecosystems to support biodiversity.'}
                {service.label === 'Forest Preservation' && 'We focus on protecting and maintaining global forest reserves.'}
                {service.label === 'IoT for Environment' && 'We use sensors and devices for real-time environmental monitoring.'}
                {service.label === 'Cloud Analysis' && 'We leverage cloud computing for big environmental data analysis.'}
                {service.label === 'AI Modelling' && 'We create AI-powered models to simulate climate impacts and environmental trends.'}
                {service.label === 'Web Development' && 'We design and develop websites and web applications to enhance user engagement.'}
                {service.label === 'System Design And Development' && 'We design and develop custom systems and applications tailored to your needs.'}
                {service.label === 'Mobile Application Development' && 'We create mobile applications that optimize and provide solutions on your phone.'}
              </p>
            </div>
          )}
          

          {/* Checkmark */}
          {selectedService === service.label && (
            <FaCheckCircle className="text-green-500 text-xl absolute top-4 right-4" />
          )}
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

 <section className="w-full py-20 px-4 bg-[#ecfdf5]" id="benefits">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#004d40] mb-4">Why Choose Us</h2>
        <p className="text-md md:text-lg text-gray-700 max-w-2xl mx-auto">
          Discover the benefits of working with a team that's passionate about technology and sustainability.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.03] text-left"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-[#004d40] mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-700">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

 <section
 
   className="relative min-h-screen flex items-center justify-center p-6"
   style={{
     backgroundImage: `url(${imageenvironment})`,
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
  {selectedService ? (
    <div className="flex items-center gap-2">
      <input
        type="text"
        className="w-full p-3 rounded-lg border border-white/50 bg-white/30 backdrop-blur-md text-[#14463A] focus:ring-2 focus:ring-[#6FD9C0] transition cursor-not-allowed"
        value={selectedService}
        readOnly
      />
      <button
        type="button"
        onClick={() => setSelectedService('')}
        className="ml-2 px-3 py-1 bg-[#FFD700] text-[#14463A] rounded hover:bg-[#ffe066] font-semibold transition"
      >
        Change
      </button>
    </div>
  ) : (
    <select
      className="w-full p-3 rounded-lg border border-white/50 bg-white/30 backdrop-blur-md text-[#14463A] focus:ring-2 focus:ring-[#6FD9C0] transition"
      value={selectedService}
      onChange={(e) => setSelectedService(e.target.value)}
      required
    >
      <option value="">-- Select Service --</option>
      <option value="Sustainable Agriculture">Sustainable Agriculture</option>
      <option value="Water Conservation">Water Conservation</option>
      <option value="Waste Management">Waste Management</option>
      <option value="Climate Policy">Climate Policy</option>
      <option value="Eco Restoration">Eco Restoration</option>
      <option value="Forest Preservation">Forest Preservation</option>
      <option value="IoT for Environment">IoT for Environment</option>
      <option value="Cloud Analysis">Cloud Analysis</option>
      <option value="AI Modelling">AI Modelling</option>
      <option value="Satellite Monitoring">Satellite Monitoring</option>
      <option value="Green Datacenters">Green Datacenters</option>
      <option value="Smart Energy Systems">Smart Energy Systems</option>
    </select>
  )}
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
    <section className="py-16 px-4 bg-white">
       <div className="text-center mb-12">
         <p className="text-sm text-orange-500 font-semibold tracking-widest">TESTIMONIALS</p>
         <h2 className="text-3xl font-bold mt-2">Our trusted clients</h2>
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
 
    </>
  );
};

export default Services;