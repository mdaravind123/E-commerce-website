import React from "react";
import { applebanner } from "../assets/image";

const Applebrandbanner: React.FC = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto">
        <div className="mb-16 mt-8">
          <img src={applebanner} alt="banners" />
        </div>
      </div>
    </div>
  );
};

export default Applebrandbanner;
