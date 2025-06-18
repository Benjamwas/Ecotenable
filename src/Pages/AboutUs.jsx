// AboutUsPage.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaPeopleCarry, FaChartLine, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import {Link} from "react-router-dom";
import image4 from '../assets/The journey.png';
import image5 from '../assets/vertical-shot-some-beautiful-trees-sun-setting-background.jpg';
import image6 from '../assets/waterfall-forest-sunset.jpg';
import image7 from '../assets/Kennedy-672x1024.webp';
import image8 from '../assets/Passport.jpeg'

const teamMembers = [
  { name: "Dr Kennedy", role: "CEO", image: image7 },
  { name: "Benjamin", role: "Lead Engineer", image: image8 },
  { name: "Dr Kennedy", role: "Sustainability Lead", image: image7 },
];

  const timeline = [
    { year: '2019', description: 'Founded with a vision for sustainability.' },
    { year: '2020', description: 'Expanded our services to new industries.' },
    { year: '2021', description: 'Awarded for green technology innovations.' },
    { year: '2022', description: 'Worked with clients.' },
    { year: '2025', description: 'Still growing and evolving!' },
  ];

const AboutUsPage = () => {
  return (
    <div className="text-gray-900 font-sans bg-white">

      {/* Hero Section */}
      <section className="relative h-[90vh]  bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${image6})` }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center px-4">
          <h1 className="text-4xl md:text-6xl  text-left  mt-6 ml-56 font-bold text-white/500 mb-4">About Us</h1>
          <p className="text-black text-lg md:text-xl max-w-2xl mx-auto">Dedicated to transforming lives and protecting the planet with sustainable technology solutions.</p>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className=" px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img src={image7} alt="Expert Team" className="rounded-xl shadow-lg" />
        <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold mb-4 text-green-900">Welcome Message</h2>
          <p className="text-lg text-gray-700">Welcome to Ecotenable

As the world faces increasingly complex environmental challenges, it is more important than ever that we come together with courage, innovation, and a shared commitment to a sustainable future. At [Your Company Name], we believe that every step—no matter how small—counts toward building a world where people and nature thrive in harmony.

From Kenya to the United Kingdom and beyond, our work is driven by a deep sense of responsibility and purpose. We are here not just to provide consultancy, but to walk with you in creating lasting, transformative solutions for our planet. Whether you're a business striving for greener practices, a government shaping policy, or an organization working at the grassroots—we see you, we stand with you, and we’re ready to support your journey.

Together, we can turn challenges into opportunities, and vision into action. The future is not something we inherit—it’s something we build. Let’s build wisely, together.

With hope and determination, <br></br>
Dr Kennedy
Founder & CEO
Ecotenable.com</p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-10">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Mission</h3>
            <p>To innovate sustainable technology that serves people and the planet with integrity and impact.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Vision</h3>
            <p>Empowering communities globally through eco-friendly and technologically advanced solutions.</p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Quote Section */}
      <section className="p-90 w-full h-auto bg-cover bg-center bg-no-repeat text-white text-center relative py-12 px-4 sm:py-20" style={{ backgroundImage: `url(${image5})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-black/20 p-8 rounded-xl max-w-4xl mx-auto">
          <p className="text-xl italic text-white">“The greatest threat to our planet is the belief that someone else will save it.”</p>
        </motion.div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-900">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
              <img src={member.image} alt={member.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-green-800">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="bg-cover bg-center  bg-no-repeat text-white py-16" style={{ backgroundImage: `url(${image4})` }}>
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

      {/* Sustainability Stats */}
      <section className="py-20 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-10">Our Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <FaLeaf className="text-4xl mx-auto text-green-600" />
            <CountUp end={5000} duration={3} className="text-3xl font-bold text-green-800" />
            <p>Trees Planted</p>
          </div>
          <div>
            <FaChartLine className="text-4xl mx-auto text-blue-600" />
            <CountUp end={100000} duration={3} className="text-3xl font-bold text-blue-800" />
            <p>Litres of Water Saved</p>
          </div>
          <div>
            <FaPeopleCarry className="text-4xl mx-auto text-yellow-600" />
            <CountUp end={1200} duration={3} className="text-3xl font-bold text-yellow-800" />
            <p>Communities Empowered</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-green-900 text-white">
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="mb-6 max-w-xl mx-auto">Join our community of changemakers, innovators, and environmental stewards today.</p>
         <Link to="/contact" ><button className="bg-white text-green-900 px-6 py-2 rounded-full hover:bg-green-100">Get Involved</button> </Link> 
        </motion.div>
      </section>

    </div>
  );
};

export default AboutUsPage;