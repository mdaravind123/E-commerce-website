import React from "react";
import { logo } from "../assets/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Cart from "./cart";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar: React.FC = () => {
  return (
    <div className="2xl:container mx-auto p-4 bg-white shadow-md">
      {/* Desktop Version */}
      <div className="hidden lg:flex w-[90%] mx-auto items-center justify-between">
        <div className="py-2 flex gap-2 items-center cursor-pointer">
          <img src={logo} alt="brand-logo" className="h-24 rounded-full" />
          <p className="text-slate-700 text-[30px]">Quickpick</p>
        </div>
        <div className="flex-grow mx-6">
          <div className="flex items-center border border-gray-300 rounded-full p-3 gap-2 bg-gray-100 focus-within:bg-white focus-within:border-blue-500 transition-all shadow-sm hover:shadow-lg duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-slate-500"
            />
            <input
              type="text"
              placeholder="Search for Products..."
              className="w-full outline-none text-slate-700 text-[16px] bg-transparent"
            />
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <div className="flex gap-2 items-center hover:text-blue-600 cursor-pointer">
            <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-slate-600" />
            <p className="text-slate-700 text-[18px]">Account</p>
          </div>
          <div className="flex gap-2 items-center hover:text-blue-600 cursor-pointer">
            <Cart />
            <p className="text-slate-700 text-[18px]">Cart</p>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Version */}
      <div className="lg:hidden w-[90%] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center py-2 gap-2 cursor-pointer">
            <img src={logo} alt="brand-logo" className="h-16 rounded-full" />
            <p className="text-slate-700 text-[24px]">Quickpick</p>
          </div>

          {/* Account and Cart */}
          <div className="flex gap-6 items-center">
            <div className="flex gap-2 items-center hover:text-blue-600 cursor-pointer">
              <FontAwesomeIcon
                icon={faUser}
                className="w-6 h-6 text-slate-600"
              />
            </div>
            <div className="flex gap-2 items-center hover:text-blue-600 cursor-pointer">
              <Cart />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-3">
          <div className="flex items-center border border-gray-300 rounded-full p-3 gap-2 bg-gray-100 focus-within:bg-white focus-within:border-blue-500 transition-all shadow-sm hover:shadow-lg duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-slate-500"
            />
            <input
              type="text"
              placeholder="Search for Products..."
              className="w-full outline-none text-slate-700 text-[16px] bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
