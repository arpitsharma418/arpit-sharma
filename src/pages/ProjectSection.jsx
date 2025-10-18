import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import projects from "../../public/data.js";
import { motion } from "framer-motion";

function ProjectSection() {
  return (
    <>
      <div className="mt-30 lg:p-10">
        <motion.h1
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white text-5xl text-center font-bold"
        >
          My <span className="text-sky-400">Projects</span>
        </motion.h1>
        <span className="block mx-auto mt-2 h-2 w-30 rounded-b-sm bg-white mb-10"></span>

        {projects.map((project, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              key={index}
              className="text-white lg:flex border-1 rounded-2xl border-white/20 gap-5 w-[90%] lg:w-[75%] mx-auto p-5 hover:border-sky-400 transition duration-200 mt-10"
            >
              <div className="w-full lg:w-[50%]">
                <img
                  src={project.imgLink}
                  alt="project"
                  className="rounded-xl"
                />
              </div>

              <div className="w-full lg:w-[40%] flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl font-semibold mb-2 mt-3 lg:mt-0 ">
                    {project.name}
                  </h1>
                  <p className="text-wrap mb-3 opacity-70">
                    {project.description}
                  </p>
                  <ul className="flex gap-3 flex-wrap">
                    {project.skills.map((skill, index) => {
                      return (
                        <li
                          key={index}
                          className="px-3 py-1 text-sm bg-white/10 border-1 border-white/20 rounded-full"
                        >
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex gap-5 mt-4 lg:mt-0">
                  <a
                    href={project.LiveLink}
                    className="px-3 py-2 border-1 border-sky-400 rounded-xl flex justify-between items-center gap-3 text-sky-400 hover:bg-sky-400 hover:text-black transition cursor-pointer"
                  >
                    {" "}
                    <RxExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="px-3 py-2 border-1 border-white rounded-xl flex justify-between items-center gap-3 hover:bg-white hover:text-black transition cursor-pointer"
                  >
                    {" "}
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectSection;
