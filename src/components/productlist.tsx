import React, { useEffect, useState } from "react";
import products from "../interface/products";
import dummydata from "../data/dummydata.json";

const Productlist: React.FC = () => {
  const [data, setData] = useState<products[]>([]);
  const productdata = async () => {
    let product: products[] = dummydata;
    return product;
  };
  useEffect(() => {
    const fetchdata = async () => {
      const product = await productdata();
      setData(product);
    };
    fetchdata();
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
                src={item.images}
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
