import React, { useState, useRef, useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import { TbUserPentagon } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle `isOpen` state
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-bg">
      <nav
        className={`${
          isOpen ? "opacity-30 pointer-events-none" : ""
        } flex h-24 max-w-screen-xl m-auto items-center justify-between p-4 flex-wrap`}
      >
        <Link to="/home">
          <h1 className="font-eb text-3xl font-bold max-sm:text-2xl">
            ARIZONA
          </h1>
        </Link>

        <ul className="flex gap-8 font-ibm text-lg font-medium max-lg:hidden">
          <li className="relative group text-gray-800 hover:text-green-500">
            <Link to="/">Home</Link>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-9px] w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 group-hover:bg-green-500 transition-all duration-300"></span>
          </li>
          <li className="relative group text-gray-800 hover:text-green-500">
            <Link to="/about">About</Link>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-9px] w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 group-hover:bg-green-500 transition-all duration-300"></span>
          </li>
          <li className="relative group text-gray-800 hover:text-green-500">
            <Link to="/collection">Collection</Link>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-9px] w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 group-hover:bg-green-500 transition-all duration-300"></span>
          </li>
          <li className="relative group text-gray-800 hover:text-green-500">
            <Link to="/contact">Contact</Link>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-9px] w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 group-hover:bg-green-500 transition-all duration-300"></span>
          </li>
        </ul>

        <div className="flex gap-7 max-sm:gap-3 ">
          <div className="text-2xl max-sm:text-xl bg-white p-2 rounded box shadow-lg shadow-gray-300 hover:text-green-500 transition-all">
            <BsCart3 />
          </div>

          <div className="text-2xl max-sm:text-xl bg-white p-2 rounded box shadow-lg shadow-gray-300 hover:text-green-500 transition-all">
            <TbUserPentagon />
          </div>
          <div
            className="text-2xl max-sm:text-xl bg-white p-2 rounded box shadow-lg shadow-gray-300 hover:text-green-500 transition-all"
            onClick={toggleMenu}
          >
            <FaBars />
          </div>
        </div>
      </nav>
      {isOpen && <Hamburger closeMenu={toggleMenu} ref={hamburgerRef} />}
    </div>
  );
};

export default Navbar;
