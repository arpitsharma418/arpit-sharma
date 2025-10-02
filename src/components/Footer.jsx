import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-white p-10 w-[100%] flex flex-col items-center space-y-5 mt-20">
        <div>
          <h1>&copy; 2025 Arpit Sharma. All right reserved</h1>
        </div>
        <div>
          <ul className="flex space-x-5">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h1>Contact Info.</h1>
          <p>
            Mailto:
            <span className="hover:text-blue-600 transition">
            &nbsp; arpitsharma1228@gmail.com
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
