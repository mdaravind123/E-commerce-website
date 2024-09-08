import React from "react";
import {
  headphone,
  laptop,
  smartwatch,
  smartphone,
  charger,
  echodot,
} from "../assets/image";

const Electronics: React.FC = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto">
        <div className="my-8">
          <h1 className="text-3xl font-medium my-6">
            Shop our Top Electronics Category
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 justify-center place-items-center">
            <div>
              <img
                src={headphone}
                alt="headphone"
                className="rounded-lg shadow-lg flex-1 transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-pointer w-[330px] h-[270px]"
              />
            </div>
            <div>
              <img
                src={laptop}
                alt="laptop"
                className="rounded-lg shadow-lg flex-1 transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-pointer w-[330px] h-[270px]"
              />
            </div>
            <div>
              <img
                src={smartwatch}
                alt="smartwatch"
                className="rounded-lg shadow-lg flex-1 transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-pointer w-[330px] h-[270px]"
              />
            </div>
            <div>
              <img
                src={smartphone}
                alt="smartphone"
                className="rounded-lg shadow-lg flex-1 transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-pointer w-[330px] h-[270px]"
              />
            </div>
            <div>
              <img
                src={charger}
                alt="charger"
                className="rounded-lg shadow-lg flex-1 transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-pointer w-[330px] h-[270px]"
              />
            </div>
            <div>
              <img
                src={echodot}
                alt="echodot"
                className="rounded-lg shadow-lg flex-1 transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-pointer w-[330px] h-[270px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronics;
