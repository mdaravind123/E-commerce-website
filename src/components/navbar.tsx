import React from "react";
import { logo } from "../assets/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Cart from "./cart";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar: React.FC = () => {
  return (
    <div className="2xl:container mx-auto border-b-2 p-2">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <div className="py-2">
          <img src={logo} alt="brand-logo" className="h-28 rounded-[50%]" />
        </div>
        <div>
          <div className="flex items-center border border-[hsla(0,0%,0%,0.5)] rounded p-3 gap-2">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-slate-500"
            />
            <input
              type="text"
              placeholder="Search for Products..."
              className="w-[450px] outline-none text-slate-500 text-[16px]"
            />
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-slate-600" />
            <p className="text-slate-700 text-[18px]">Account</p>
          </div>
          <div className="flex gap-2">
            <Cart />
            <p className="text-slate-700 text-[18px]">Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
