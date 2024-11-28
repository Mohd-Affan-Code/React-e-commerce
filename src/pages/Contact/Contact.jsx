import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const Contact = () => {
  return (
    <div className=" bg-bg">
      <div className="flex flex-col items-center py-4 max-w-6xl m-auto px-1 ">
        <h1 className="font-bold text-4xl text-greenB">Contact Us</h1>
        <p className="py-4">HOW TO GET IN TOUCH?</p>
        <p className="max-w-3xl flex text-center text-gray-500 py-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
          praesentium. Quia fuga excepturi qui blanditiis iusto placeat.
          Voluptatum animi ea impedit neque nobis, reprehenderit odio eaque.
          Dolorum necessitatibus voluptates praesentium?
        </p>
        <div className="flex mt-8 w-full justify-between flex-wrap">
          <div>
            <div className="mb-11">
              <h1 className="font-extrabold  text-sm">ADDRESS</h1>
              <p className="text-lg text-gray-500 py-1">
                123 Fifth Cent, New York, NY 10160, Mirikan
              </p>
            </div>
            <div className="mb-11">
              <h1 className="font-extrabold  text-sm ">PHONE NUMBER</h1>
              <p className="text-lg  text-gray-500 py-1">+1 910-12354566</p>
            </div>
            <div className="mb-11">
              <h1 className="font-extrabold  text-sm ">EMAIL</h1>
              <p className="text-lg text-gray-500 py-1">Contact@tech.com</p>
            </div>
            <div className="mb-11">
              <h1 className="font-extrabold  text-sm ">Social Media</h1>
              <p className="flex gap-3 text-4xl py-3">
                <div className="text-greenB hover:text-white hover:bg-greenB rounded-md">
                  <FaFacebookSquare />
                </div>
                <div className="text-greenB hover:text-white hover:bg-greenB rounded-md">
                  <FaSquareInstagram />
                </div>
                <div className="text-greenB hover:text-white hover:bg-greenB rounded-md">
                  <IoLogoYoutube />
                </div>
                <div className="text-greenB hover:text-white hover:bg-greenB rounded-md">
                  <FaSquareXTwitter />
                </div>
              </p>
            </div>
          </div>
          <div>
            <form className="flex gap-[8px] flex-col">
              <div className="flex gap-1">
                <input
                  className="border-2 p-[13px] rounded-[3px]  max-w-36"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="border-2 p-[13px] rounded-[3px] max-w-36 "
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <input
                className="border-2 p-[13px] rounded-[3px] w-full"
                type="text"
                placeholder="Subject"
              />

              <textarea
                className="border-2 p-[13px] rounded-[3px] w-full min-h-24"
                placeholder="Massage"
              ></textarea>
              <button className="border-2 p-[13px] rounded-[40px] font-bold border-greenB text-white hover:text-greenB bg-greenB hover:bg-white flex justify-center w-32 transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
