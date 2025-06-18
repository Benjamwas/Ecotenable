import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Logo1 from '../assets/OASIS-LOGO-1024x1024.png';
import Logo2 from '../assets/kutrrh_logoAsset-8@4x-1-e1646987889806.png';
import Logo3 from '../assets/vendramini logo.jpg';

export default function BrandLogoScroll() {
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 600], [0, -50]); // subtle horizontal movement

  const logos = [Logo1, Logo2, Logo3];

  return (
    <section className="w-full p-18 bg-white">
      <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-700 mb-8 px-4">
        Brands We've Worked With
      </h2>

      <div className="overflow-hidden">
        <motion.div
          style={{ x }}
          className="mx-auto w-full max-w-6xl flex justify-between items-center px-4 sm:px-8"
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-12 sm:h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
