import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What Sets Me Apart
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center text-5xl font-Ovo"
      >
        Professional Highlights
      </motion.h2>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        From technical expertise and certifications to notable achievements and
        the tools I master—here's a snapshot of what I bring to every project.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="custom-grid gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[var(--shadow-black)] cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-[var(--shadow-white)]"
          >
            <Image src={icon} alt="" className="w-11 rounded-lg" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            {/*
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image
                src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
                alt=""
                className="w-4"
              />
            </a> */}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
