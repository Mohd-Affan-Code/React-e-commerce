import React, { forwardRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiHeartNecklace } from "react-icons/gi";
import { Link } from "react-router-dom";
// import { forwardRef } from "react";

const Hamburger = forwardRef(({ closeMenu }, ref) => {
  return (
    <div
      ref={ref}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-2xl bg-footer rounded-lg min-h-[60vh] z-20 shadow-2xl"
    >
      <div>
        <div className="flex items-center p-4 w-full border-b-2">
          <div
            className="w-[30px] text-xl flex justify-center items-center h-[30px] rounded-full font-extrabold hover:text-green-700 hover:bg-green-100"
            onClick={closeMenu}
          >
            <RxCross2 />
          </div>
          <h1 className="flex justify-center w-full font-bold font-ibm text-base">
            Menu
          </h1>
        </div>
        <div>
          <div className="p-4 overflow-y-auto">
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="text-3xl text-green-600">
                <FaUserCircle />
              </div>
              <div>
                <p className="font-bold text-xl text-black">Mohd Affan</p>
                <p className="text-gray-400">vair voter profile</p>
              </div>
            </div>
            <Link to="/">
              <div className="flex items-center gap-4 border-2 p-4 mt-4 rounded-xl text-customgrey hover:bg-green-500 hover:text-white transition-all ">
                <div className="text-2xl">
                  <RiHomeSmile2Fill />
                </div>
                <p className="font-bold">Home</p>
              </div>
            </Link>
            <Link to="/about">
              <div className="flex items-center gap-4 border-2 p-4 mt-4 rounded-xl text-customgrey hover:bg-green-500 hover:text-white transition-all">
                <div className="text-2xl">
                  <FaUsers />
                </div>
                <p className="font-bold">About</p>
              </div>
            </Link>
            <Link to="/collection">
              <div className="flex items-center gap-4 border-2 p-4 mt-4 rounded-xl text-customgrey hover:bg-green-500 hover:text-white transition-all">
                <div className="text-2xl">
                  <GiHeartNecklace />
                </div>
                <p className="font-bold">Collection</p>
              </div>
            </Link>
            <Link to="/contact">
              <div className="flex items-center gap-4 border-2 p-4 mt-4 rounded-xl text-customgrey hover:bg-green-500 hover:text-white transition-all">
                <div className="text-2xl">
                  <FaPhoneVolume />
                </div>
                <p className="font-bold">Contact Us</p>
              </div>{" "}
            </Link>
            <div className="flex flex-col py-10 items-center">
              <h1 className="text-2xl font-eb font-extrabold text-green-600">
                ARIZONA
              </h1>
              <p className="font-cinzel">
                © 2025 Mohd Affan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hamburger;
