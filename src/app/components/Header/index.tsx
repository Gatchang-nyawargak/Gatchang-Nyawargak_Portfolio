"use client";

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-black pt-8 shadow-sm">
      <div className="container flex justify-between items-center relative px-12 md:px-16">
        {/* Brand Name */}
        <div className="mr-8">
          <p className="text-[44px] text-white font-dancing font-bold ml-7">
              Nyawargak Gatchang
          </p>

        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden cursor-pointer"
        >
          {isOpen ? (
            <MdClose size={30} className="text-white" />
          ) : (
            <MdMenu size={30} className="text-white" />
          )}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:static top-16 md:top-0 left-0 w-full md:w-auto bg-black shadow-md z-10 ${
            isOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10 py-4 md:py-0">
            <li>
              <a
                href="#about"
                className="hover:text-blue-500 text-white text-lg focus:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-blue-500 text-white text-lg focus:text-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-500 text-white text-lg focus:text-blue-500"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500 text-white text-lg focus:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hire Me Button */}
        <div className="hidden lg:block ml-8">
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
