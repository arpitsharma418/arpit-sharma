import React from "react";
import { motion } from "motion/react";

function ProjectCard({ imageLink, title, description, github, liveDemo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{scale: 1.02}}
      viewport={{ once: true }}
      className="w-[90%] md:w-[30%] bg-black/80 rounded-2xl ring-3 ring-black/50"
    >
      <img src={imageLink} alt="app image" className="rounded-t-2xl" />
      <div className="p-3 text-white">
        <h1 className="my-3 text-2xl">{title}</h1>
        <p className="text-sm">{description}</p>
        <div className="my-4 space-x-2">
          <a href={github} className="py-2 px-2 text-sm bg-white/10 rounded-xl">
            GitHub
          </a>
          <a
            href={liveDemo}
            className="py-2 px-2 text-sm bg-white/10 rounded-xl"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
