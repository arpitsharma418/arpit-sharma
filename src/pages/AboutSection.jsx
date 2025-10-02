import { motion } from "motion/react";

function AboutSection() {
  return (
    <>
      <motion.div
        initial={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="bg-white flex justify-center items-center flex-wrap-reverse mt-20 lg:mt-40 p-10 lg:px-64 py-20"
      >
        <div className="w-[100%] lg:w-[40%] hidden md:inline">
          <motion.img
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            src="Images/Arpit.jpg"
            className="rounded-full"
            style={{ width: "20rem" }}
            alt=""
          />
        </div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-[100%] lg:w-[60%]"
        >
          <h1 className="lora-font text-5xl italic mb-5">About Me</h1>
          <p>
            Hi, I’m Arpit Sharma, a dedicated Full-Stack Developer with a strong
            foundation in web technologies and software engineering principles.
            I have hands-on experience working with the MERN Stack (MongoDB,
            Express.js, React, Node.js) to create responsive, user-focused
            applications. Currently, I am focused on advancing my expertise in
            Data Structures & Algorithms to enhance my problem-solving and
            coding efficiency. I am passionate about building scalable
            solutions, learning modern technologies, and continuously improving
            as a developer. My long-term goal is to contribute to impactful
            projects, explore system design, and grow as a well-rounded software
            engineer.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default AboutSection;
