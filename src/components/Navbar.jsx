import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <div className="w-full backdrop-blur-md flex justify-between items-center px-5 md:px-20 py-4 border-b-1 border-white/10 sticky top-0 z-40">
        <div>
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
            Arpit Sharma
          </h1>
        </div>
        <div>
          <div
            className="md:hidden p-2 text-white cursor-pointer text-3xl"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <GrClose/>
            ) : (
              <GiHamburgerMenu/>
            )}
          </div>
          <ul className={`hidden md:flex space-x-8 text-gray-400 items-center`}>
            <li key={1} className="hover:text-sky-500 transition">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li key={2} className="hover:text-sky-500 transition">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li key={3} className="hover:text-sky-500 transition">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li
              key={4}
              className="hover:bg-sky-400 text-sky-400 hover:text-black transition p-2 border-2 border-sky-400 rounded-lg text-sm hidden md:inline cursor-pointer"
            >
              <Link to="footer" smooth={true} duration={500}  >Get in Touch</Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`fixed w-full backdrop-blur-md transition-all duration-300 ease ${
          isOpen ? "top-[60px] opacity-100" : "top-[-100%] opacity-0"
        } md:hidden z-40`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          <li className="hover:text-sky-500 transition text-white">
            <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link>
          </li>
          <li className="hover:text-sky-500 transition text-white">
            <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </Link>
          </li>
          <li className="hover:text-sky-500 transition text-white">
            <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Skills
              </Link>
          </li>
          <li className="hover:text-sky-500 transition text-white">
            <Link
                to="footer"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contact
              </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
