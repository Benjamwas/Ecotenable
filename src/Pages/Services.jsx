import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import imageenvironment from '../assets/eia-environmental-impact-assessment-concept-with-people-analyze-data-pollution-earth_25147-751-removebg-preview.png';
import {
  motion,
  useAnimation
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaLeaf,
  FaWater,
  FaRecycle,
  FaGlobe,
  FaSeedling,
  FaTree,
  FaMicrochip,
  FaCloud,
  FaRobot,
  FaSatellite,
  FaServer,
  FaBolt,
} from 'react-icons/fa';

// Services Data
const climateServices = [
  { icon: <FaLeaf />, label: 'Sustainable Agriculture' },
  { icon: <FaWater />, label: 'Water Conservation' },
  { icon: <FaRecycle />, label: 'Waste Management' },
  { icon: <FaGlobe />, label: 'Climate Policy' },
  { icon: <FaSeedling />, label: 'Eco Restoration' },
  { icon: <FaTree />, label: 'Forest Preservation' },
];

const techServices = [
  { icon: <FaMicrochip />, label: 'IoT for Environment' },
  { icon: <FaCloud />, label: 'Cloud Analysis' },
  { icon: <FaRobot />, label: 'AI Modelling' },
  { icon: <FaSatellite />, label: 'Satellite Monitoring' },
  { icon: <FaServer />, label: 'Green Datacenters' },
  { icon: <FaBolt />, label: 'Smart Energy Systems' },
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
      ease: 'easeOut'
    }
  }),
  exit: { opacity: 0, x: -50, transition: { duration: 0.4 } }
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut'
    }
  }),
  exit: { opacity: 0, x: 50, transition: { duration: 0.4 } }
};

const Services = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    }
  }, [inView, controls]);

  return (
    <>
      {/* Hero Section */}
      <section
        id="Hero-services"
        className="w-full flex bg-fixed items-center justify-center h-screen bg-[#E8F5E9]"
      >
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          className="flex w-full flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-16 lg:px-24"
        >
          {/* Left Side */}
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

          {/* Right Side */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={imageenvironment}
              alt="services"
              className="w-3/4 md:w-2/3 lg:w-1/2 h-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 w-full bg-[#f0fdf4]" id="select-service">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#004d40] mb-10">
            Select Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Climate Services */}
            <div className="flex flex-col gap-4">
              {climateServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-lg bg-[#e0f2f1] hover:bg-teal-500 text-[#004d40] hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
                  custom={index}
                  variants={fadeSlideLeft}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span className="text-lg font-semibold">{service.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech Services */}
            <div className="flex flex-col gap-4">
              {techServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-lg bg-[#e0f2f1] hover:bg-[#FFD700] text-[#004d40] hover:text-black transition-all duration-300 shadow-lg cursor-pointer"
                  custom={index}
                  variants={fadeSlideRight}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span className="text-lg font-semibold">{service.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
