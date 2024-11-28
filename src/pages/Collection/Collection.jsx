import React from "react";
import CollecCard from "../../Components/CollecCard";
import img1 from "../../assets/images/img4.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img5.png";
import img5 from "../../assets/images/abuot.png";
import img6 from "../../assets/images/img7.png";
import img7 from "../../assets/images/img8.png";
import img8 from "../../assets/images/img9.png";
import img9 from "../../assets/images/img11.png";
import img10 from "../../assets/images/img10.png";

const Collection = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <div className="bg-bg">
      <div className="max-w-6xl m-auto flex flex-col items-center pt-4">
        <h1 className="text-4xl font-bold text-greenB mt-4">Collection</h1>
        <p className="mt-5 mb-8">
          Product Quality Is Our Priority, And Always Guarantees And Safety
          Until It Is In Your Hands.
        </p>
        <div className="flex w-full gap-8 justify-center flex-wrap mb-20">
          {images.map((image, index) => (
            <CollecCard key={index} imgSrc={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
