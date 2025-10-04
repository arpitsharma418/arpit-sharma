import { Typewriter } from "react-simple-typewriter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Download from "@mui/icons-material/Download";
import Twitter from "@mui/icons-material/X";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" text-white w-[80%] mx-auto flex flex-wrap-reverse justify-around mt-20 lg:mt-36"
      >
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="left w-full lg:w-xl my-auto lg:text-start text-center"
        >
          <h1 className="text-7xl lora-font italic mb-10 mt-10 lg:mt-0">
            Hey! I am
            <div className="text-5xl lg:text-7xl mt-4 lg:mt-0">
              Arpit Sharma
            </div>
          </h1>
          <h1>
            I'm a{" "}
            <span className="text-blue-700 p-2 rounded-lg">
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "MERN Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Software Developer",
                ]}
                loop={6}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>{" "}
          </h1>
          <p className="mt-5">
            I specialize in building web applications with the MERN Stack and
            I’m currently strengthening my Data Structures & Algorithms skills
            to write efficient, scalable code.
          </p>

          <div className="flex my-5 space-x-6 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/arpitsharma418?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <LinkedIn />
            </a>
            <a href="https://github.com/arpitsharma418" target="_blank">
              <GitHub />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="https://leetcode.com/u/arpitsharma418/" target="_blank">
              <img
                src="Images/leetcode.png"
                style={{ width: "1.5rem" }}
                alt=""
              />
            </a>
          </div>
          <div className="resume">
            <a href="pdf/Arpit_Sharma_Resume.pdf" download="Arpit_Sharma_Resume.pdf" rel="noopener noreferrer" target="_blank">
              <button className="px-5 text-sm py-2 w-[100%] lg:w-auto bg-black/80 text-white rounded-lg hover:bg-black/90 transition focus:ring-3 ring-black/40">
                Resume
                <Download />
              </button>
            </a>
          </div>
        </motion.div>
        <div>
          <motion.img
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src="Images/Arpit.jpg"
            style={{ width: "24rem" }}
            alt=""
            className="rounded-full"
          />
        </div>
      </motion.div>
    </>
  );
}

export default HeroSection;
