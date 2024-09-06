import React, { useEffect, useState } from "react";
import products from "../interface/products";
import axios from "axios";

const Productlist: React.FC = () => {
  const [data, setData] = useState<products[]>([]);
  const productdata = async () => {
    let product = await axios.get<products[]>("http://localhost:3333/");
    setData(product.data);
  };
  useEffect(() => {
    productdata();
  }, []);
  return (
    <div className="2xl:container mx-auto mt-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.map((item: products) => {
          return (
            <div
              key={item.id}
              className="border border-slate-300 py-5 flex flex-col items-center justify-center rounded gap-2"
            >
              <img
                src={item.imageurl}
                alt="phone"
                className="w-[300px] h-[350px]"
              />
              <p className="text-black font-medium text-[18px] w-[300px] text-center">
                {item.title}
              </p>
              <p className="text-green-600 text-[20px]">{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productlist;
