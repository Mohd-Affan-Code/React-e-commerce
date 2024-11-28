import React from "react";

const Footer = () => {
  return (
    <div className="bg-footer border-t-[5px] border-greenB">
      <div className="flex justify-between m-auto max-w-[1100px] pt-8 px-[1rem] flex-wrap">
        <div>
          <h1 className="text-2xl font-black text-greenB mb-4">
            Explore Items
          </h1>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Necklace
          </p>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Earrings
          </p>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Bracelets
          </p>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Rings
          </p>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Anklets
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-black text-greenB mb-4">Visit Us</h1>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Mumbai
          </p>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Goa
          </p>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Chennai
          </p>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Locknow
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-black text-greenB mb-4">About Us</h1>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Our Story
          </p>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Feedback
          </p>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Team
          </p>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Blog
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-black text-greenB mb-4">Contact Us</h1>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Contact Info
          </p>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Newsletter
          </p>
          <p className="font-semibold pb-1 cursor-pointer hover:text-greenB hover:underline">
            Feedgp
          </p>
        </div>
      </div>
      <div className="flex flex-col pt-12 pb-4 items-center">
        <h1 className="text-3xl font-eb font-black text-greenB">Arizona</h1>
        <p className="font-cinzel font-semibold">
          {" "}
          © 2025 Mohd Affan. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
