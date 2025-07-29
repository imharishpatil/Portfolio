import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <section id="work" className="w-full px-[6%] py-16 bg-transparent">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo"
      >
        Here are some of my most impactful and hands-on projects. Each project
        reflects my problem-solving skills, technical knowledge, and design
        sense.
      </motion.p>

      <div className="flex flex-col gap-16">
        {workData.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              className={`flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-16 rounded-2xl shadow-lg bg-white/80 dark:bg-[#11001f]/90 p-4 md:p-8 relative overflow-hidden ${!isEven ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="w-full md:w-1/2 h-56 md:h-72 rounded-xl overflow-hidden shadow-md flex-shrink-0"
              >
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  priority={index === 0}
                />
              </motion.div>

              {/* Info Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4">
                <h3 className="text-2xl md:text-3xl font-bold font-Ovo mb-2 text-gray-700 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-2">
                  {/* GitHub Button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="
                      flex items-center gap-2 px-5 py-2 rounded-full font-semibold
                      bg-black text-white border border-black
                      hover:bg-gray-900 hover:text-white
                      dark:bg-white dark:text-black dark:border-white
                      dark:hover:bg-gray-200 dark:hover:text-black
                      transition-colors duration-300
                    "
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                    GitHub
                  </motion.a>
                  {/* Live Demo Button */}
                  {project.live && project.live.trim() !== "" && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="
                        flex items-center gap-2 px-5 py-2 rounded-full font-semibold
                        bg-cyan-500 text-white border border-cyan-500
                        hover:bg-cyan-600 hover:text-white
                        transition-colors duration-300
                      "
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3v2h3.59L7 15.59 8.41 17 19 6.41V10h2V3z"/><path d="M5 19h14v2H5z"/></svg>
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
