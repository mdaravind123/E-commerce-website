import React, { useState } from "react";
import { banner1, banner2, banner3, banner4 } from "../assets/image";

const Imageslider: React.FC = () => {
  const images: string[] = [banner1, banner2, banner3, banner4];
  const [index, setIndex] = useState(0);

  const previmage = () => {
    if (index === 0) setIndex(images.length - 1);
    else setIndex(index - 1);
  };

  const nextimage = () => {
    if (index === images.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <div className="2xl:container mx-auto p-3">
      <div className="w-[90%] mx-auto">
        <img
          src={images[index]}
          alt="banners"
          className="py-3 w-[100%] h-[500px]"
        />
        <div className="flex gap-2">
          <button
            onClick={previmage}
            className="cursor-pointer w-28 h-10 bg-yellow-200"
          >
            prev
          </button>
          <button
            onClick={nextimage}
            className="cursor-pointer w-28 h-10 bg-yellow-200"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Imageslider;
