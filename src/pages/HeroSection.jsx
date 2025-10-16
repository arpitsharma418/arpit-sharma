import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { TbMessage } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function HeroSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-white min-h-[calc(100vh-72px)] flex flex-col justify-center items-center"
      >
        <div className="text-center w-[80%] lg:w-[38%]">
          <p className="text-sky-300 mb-7 text-lg">Hi, my name is</p>
          <h1 className="text-6xl font-bold mb-4">Arpit Sharma</h1>
          <h2 className="text-4xl font-bold opacity-60">
            I craft powerful web experiences
          </h2>
          <p className="mt-5 font-medium text-wrap leading-7">
            I'm a full-stack developer student passionate about creating
            beautiful, functional, web applications. Currently focused on
            building responsive and accessible digital experiences.
          </p>
        </div>

        <div className="mt-7 space-x-3  ">
          <Link
            to="projects"
            className="py-3 px-6 text-black/80 font-medium  bg-sky-400 rounded-xl text-sm border-2 border-sky-400 cursor-pointer"
          >
            View My Work
          </Link>
          <Link
            to="footer"
            className="py-3 px-6 text-sky-400 border-2 border-sky-400 font-medium  hover:bg-sky-400 hover:text-black/80 transition rounded-xl text-sm cursor-pointer"
          >
            Contact Me
          </Link>
        </div>

        <div className="flex items-center cursor-pointer space-x-5 text-2xl mt-7">
          <a href="https://github.com/arpitsharma418">
            <FiGithub className="hover:text-sky-400 transition" />
          </a>

          <a href="https://linkedin.com/in/arpitsharma418">
            <FiLinkedin className="hover:text-sky-400 transition" />
          </a>

          <a href="#">
            <TbMessage className="text-3xl hover:text-sky-400 transition" />
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default HeroSection;
