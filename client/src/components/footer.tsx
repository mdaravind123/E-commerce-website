import React from "react";
import {
  visa,
  mastercard,
  visaelectron,
  maestro,
  paypal,
  skrill,
  facebook,
  insta,
  twitter,
} from "../assets/image";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col m-5 md:m-10 p-5 md:p-10 bg-[#07090d] gap-2 lg:gap-6">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-3 p-5">
            <h1 className="text-[#f9f9fa] text-2xl">QUICKPICK</h1>
            <p className="lg:max-w-[650px] text-[#5f6674] text-base">
              Your one-stop destination for quality products at unbeatable
              prices. Shop with confidence and discover amazing deals, all in
              one place.
            </p>
          </div>
          <div className="p-5">
            <h1 className="text-[#f9f9fa] text-lg">ACCEPTED PAYMENTS</h1>
            <div className="flex flex-wrap gap-4 py-4">
              <img src={visa} alt="visa" className="w-[80px] h-[56px]" />
              <img
                src={mastercard}
                alt="MasterCard"
                className="w-[80px] h-[56px]"
              />
              <img src={paypal} alt="Paypal" className="w-[80px] h-[56px]" />
              <img src={skrill} alt="skrill" className="w-[80px] h-[56px]" />
              <img src={maestro} alt="Maestro" className="w-[80px] h-[56px]" />
              <img
                src={visaelectron}
                alt="visa Electron"
                className="w-[80px] h-[56px]"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3 p-5">
            <h1 className="text-[#f9f9fa] text-lg">PRODUCT</h1>
            <p className="text-[#5f6674] text-base">Apple</p>
            <p className="text-[#5f6674] text-base">Cellphone</p>
            <p className="text-[#5f6674] text-base">Laptop</p>
            <p className="text-[#5f6674] text-base">SmartWatch</p>
            <p className="text-[#5f6674] text-base">HeadPhone</p>
            <p className="text-[#5f6674] text-base">Telivision & Video</p>
            <p className="text-[#5f6674] text-base">Computers & Accessories</p>
            <p className="text-[#5f6674] text-base">Video Games</p>
            <p className="text-[#5f6674] text-base">Sports & Outdoor</p>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <h1 className="text-[#f9f9fa] text-lg">LET US HELP YOU</h1>
            <p className="text-[#5f6674] text-base">Your Account</p>
            <p className="text-[#5f6674] text-base">Your Orders</p>
            <p className="text-[#5f6674] text-base">Returns & Replacemenets</p>
            <p className="text-[#5f6674] text-base">
              Shipping Rates & policies
            </p>
            <p className="text-[#5f6674] text-base">
              Refund and returns policy
            </p>
            <p className="text-[#5f6674] text-base">Privacy Policy</p>
            <p className="text-[#5f6674] text-base">Help Center</p>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <h1 className="text-[#f9f9fa] text-lg">BEST BRAND</h1>
            <p className="text-[#5f6674] text-base">Apple</p>
            <p className="text-[#5f6674] text-base">Samsung</p>
            <p className="text-[#5f6674] text-base">Xiaomi</p>
            <p className="text-[#5f6674] text-base">Huawei</p>
            <p className="text-[#5f6674] text-base">OPPO</p>
            <p className="text-[#5f6674] text-base">Vivo</p>
            <p className="text-[#5f6674] text-base">Realme</p>
            <p className="text-[#5f6674] text-base">Lenovo</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around p-5 gap-5">
        <div className="flex items-center">
          <p className="text-[#5f6674] text-lg">&#169; 2024 Quickpick.com</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <img
            src={facebook}
            alt="facebook"
            className="w-[60px] h-[60px] rounded-[50%]"
          />
          <img
            src={insta}
            alt="Instagram"
            className="w-[60px] h-[60px] rounded-[50%]"
          />
          <img
            src={twitter}
            alt="Twitter"
            className="w-[60px] h-[60px] rounded-[50%] bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
