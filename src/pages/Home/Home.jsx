import React from "react";
import Himg from "../../assets/images/img6.png";

const Home = () => {
  return (
    <div className="bg-bg" style={{ height: "90vh" }}>
      <div className="max-w-screen-2xl m-auto  flex pt-10 gap-8 items-center p-5 flex-wrap">
        <div>
          <div className="">
            <img src={Himg} className="max-w-2xl w-full" />
          </div>
        </div>
        <div className="flex flex-col justify-center  max-w-2xl gap-4">
          <h1 className="text-4xl pl-4 leading-tight font-black font-sans relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-[10px] before:h-full before:z-10 before:bg-greenB">
            Arizona Jewellery Mine
          </h1>

          <p className="max-w-xl text-[1rem] font-eb font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            laudantium at debitis suscipit blanditiis iusto, quis fuga vero,
            accusamus earum ducimus pariatur praesentium eum repudiandae quos,
            officiis iure quo deserunt.
          </p>
          <div className="pt-2 flex items-center flex-wrap">
            <span className="font-sans text-3xl font-bold text-greenB mr-8 py-4">
              $1000.99
            </span>
            <a className="font-sans text-xl p-2 pl-4 pr-4 font-semibold border-2 rounded-full bg-greenB border-greenB text-white hover:bg-white hover:text-greenB transition-all">
              Add Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
