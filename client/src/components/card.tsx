import React from "react";
import { Link } from "react-router-dom";
import products from "../interface/products";

const Card: React.FC<products> = ({ id, title, price, imageurl }) => {
  return (
    <Link to={`/products/${id}`}>
      <div
        key={id}
        className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 max-w-[24rem] transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-pointer p-5"
      >
        <img
          src={imageurl}
          alt={title}
          className="w-[340px] h-[350px] object-cover"
        />
        <div className="py-2 text-center flex flex-col justify-between flex-grow w-full">
          <p className="text-black font-medium text-lg py-1">{title}</p>
          <div className="flex justify-between p-3">
            <p className="text-2xl font-medium py-1">{price}</p>
            <button className="w-[120px] bg-[#ffd814] text-white rounded-[50px]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
