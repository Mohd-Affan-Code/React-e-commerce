import React from "react";
import about from "../../assets/images/about1.png";

const About = () => {
  return (
    <div className="bg-bg min-h-[90vh]">
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-8 pt-24 max-w-6xl m-auto items-center px-4 ">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={about}
            alt="img"
            className="w-80 h-96 rounded-tl-[70px] rounded-tr-[15px] rounded-br-[70px] rounded-bl-[15px]"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-greenB">
            We provide the best Jewellery for you
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            eius esse recusandae aliquid sed! Voluptas sed temporibus accusamus
            unde ullam fugit perspiciatis, minima quam iusto quasi, voluptatibus
            voluptates perferendis fugiat dolorum delectus consequatur facere
            quaerat voluptate dicta eius nobis esse eveniet. Ullam magni
            perferendis dolorum mollitia sunt doloribus totam aut soluta fuga,
            eaque, unde illum qui? Maiores accusamus sapiente sed iste deleniti
            ratione, esse expedita veniam suscipit pariatur ullam assumenda
            doloremque vel, delectus perspiciatis.
          </p>
          <button className="font-bold bg-greenB py-3 px-6 rounded-full mt-5 border-2 text-white hover:bg-white hover:text-greenB hover:border-greenB transition-all">
            Our Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
