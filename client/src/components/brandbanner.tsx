import React from "react";
import { banners } from "../assets/image";

const Brandbanner: React.FC = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto">
        <div className="my-16">
          <img src={banners} alt="banners" />
        </div>
      </div>
    </div>
  );
};

export default Brandbanner;
