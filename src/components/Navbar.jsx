import OpenMenu from "@mui/icons-material/Menu";
import CloseMenu from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="p-3 top-0 fixed w-full flex justify-around bg-white">
        <div>
          <h1 className="py-1">Arpit's Portfolio</h1>
        </div>
        <div className="hidden lg:inline">
          <ul className="flex space-x-10 ">
            <li className="hover:bg-black/10 px-2 py-1 rounded-lg transition">
              <Link
                to="home"
                smooth={true}
                duration={600}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="hover:bg-black/10 px-2 py-1 rounded-lg transition">
              <Link
                to="about"
                smooth={true}
                duration={600}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="hover:bg-black/10 px-2 py-1 rounded-lg transition">
              <Link
                to="skills"
                smooth={true}
                duration={600}
                className="cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li className="hover:bg-black/10 px-2 py-1 rounded-lg transition">
              <Link
                to="projects"
                smooth={true}
                duration={600}
                className="cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li className="hover:bg-black/10 px-2 py-1 rounded-lg transition">
              <Link
                to="home"
                smooth={true}
                duration={600}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden px-2 py-1">
          {isOpen ? (
            <CloseMenu onClick={handleMenu} />
          ) : (
            <OpenMenu onClick={handleMenu} />
          )}
        </div>
      </div>
      <div
        className={`fixed top-0 mt-14 w-[100%] ${isOpen ? "inline" : "hidden"}`}
      >
        <ul className="bg-white p-2 space-y-3 text-center">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={600}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={600}
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={600}
              className="cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={600}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={600}
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
