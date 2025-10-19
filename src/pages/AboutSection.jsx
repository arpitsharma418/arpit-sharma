import React from "react";
import { motion } from "framer-motion";

const frontendSkills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Bootstrap",
  "Redux",
];
const backendSkills = [
  "Node.js",
  "express.js",
  "MongoDB",
  "MySQL",
  "REST APIs",
];
const tools = [
  "Git",
  "GitHub",
  "MongoDB Atlas",
  "Render",
  "Vercel",
  "VS code",
  "Postman",
];
const Concepts = ["Java", "SQL", "Data Structures"];

function AboutSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h1 className="text-white text-3xl text-center font-semibold">
          About Me
        </h1>

        <div className="text-white flex md:flex-row flex-col justify-center mt-10 ">
          <div className="mx-auto md:mx-2 w-[90%] md:w-[40%] border-1 p-5 rounded-2xl border-white/10 mb-5 md:mb-0 ">
            <h1 className="text-3xl font-semibold my-3">Get to know me</h1>
            <p className="mt-4 opacity-90">
              I’m Arpit Sharma, a passionate Full Stack Developer (MERN) who
              loves building modern, user-friendly, and efficient web
              applications. I enjoy turning complex problems into simple,
              elegant solutions through clean code and creative design.
            </p>
            <p className="mt-4 opacity-90">
              I’m always eager to learn new technologies, explore innovative
              ideas, and contribute to impactful projects. When I’m not coding,
              I enjoy exploring tech trends and enhancing my development skills.
            </p>
          </div>

          <div className="mx-auto md:mx-2 w-[90%] md:w-[40%] p-5 border-1 border-white/10 rounded-2xl mb-5 md:mb-0">
            <h1 className="text-3xl font-semibold my-3">My Skills</h1>
            <h1 className="text-lg font-medium text-green-100">
              frontend
            </h1>

            <ul className="flex gap-1 flex-wrap my-2">
              {frontendSkills.map((skill, index) => {
                return (
                  <li
                    key={index}
                    className="bg-white/10 rounded-full py-1 px-3 border-1 border-green-100 text-sm"
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>

            <h1 className="text-lg font-medium text-yellow-100">backend</h1>
            <ul className="flex gap-1 flex-wrap my-2">
              {backendSkills.map((skill, index) => {
                return (
                  <li
                    key={index}
                    className="bg-white/10 rounded-full py-1 px-3 border-1 border-yellow-100 text-sm"
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>

            <h1 className="text-lg font-medium text-red-100">tools & others</h1>
            <ul className="flex gap-1 flex-wrap my-2">
              {tools.map((tool, index) => {
                return (
                  <li
                    key={index}
                    className="bg-white/10 rounded-full py-1 px-3 border-1 border-red-100 text-sm"
                  >
                    {tool}
                  </li>
                );
              })}
            </ul>

            <h1 className="text-lg font-medium text-amber-100">concepts</h1>
            <ul className="flex gap-1 flex-wrap my-2">
              {Concepts.map((concept, index) => {
                return (
                  <li
                    key={index}
                    className="bg-white/10 rounded-full py-1 px-3 border-1 border-amber-100 text-sm"
                  >
                    {concept}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AboutSection;
