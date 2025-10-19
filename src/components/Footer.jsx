import React from "react";
import {Link} from "react-scroll";

function Footer() {
  return (
    <>
      <div className="bg-white/10 mt-40 text-white flex flex-col items-center pt-10 space-y-8 opacity-90">
        <div className="text-center">
          <h1 className="cursive text-3xl mb-2">Arpit Sharma</h1>
          <p>Full Stack Developer | MERN Stack Developer</p>
        </div>

        <div className="md:flex w-[90%] md:w-[70%] justify-around space-y-4">
          <div>
            <h1 className="font-semibold">Quick Links</h1>
            <div className="flex flex-col space-y-1 md:mt-2 opacity-80 cursor-pointer">
              <Link to="about">About</Link>
              <Link to="projects">Project</Link>
              <Link to="about">Skills</Link>
            </div>
          </div>

          <div>
            <h1 className="font-semibold">Contact Info.</h1>
            <div className="flex flex-col space-y-1 md:mt-2 opacity-80">
              <p>arpitsharma1228@gmail.com</p>
            </div>
          </div>

          <div>
            <h1 className="font-semibold">Social links</h1>
            <div className="flex flex-col space-y-1 md:mt-2 opacity-80">
              <a href="https://github.com/arpitsharma418">GitHub</a>
              <a href="https://linkedin.com/in/arpitsharma418">LinkedIn</a>
              <a href="https://x.com/arpitsharma418">Twitter</a>
            </div>
          </div>
        </div>

        <div className="bg-white/10 text-center p-4 w-full">
          <h1>&copy; 2025 Arpit Sharma</h1>
          <p>Developed by <span className="cursive text-2xl font-medium">Arpit Sharma</span></p>
        </div>
      </div>
    </>
  );
}

export default Footer;
