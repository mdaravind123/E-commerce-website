import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="2xl:container mx-auto mt-10">
      <div className="mx-auto w-[90%]">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Product List
        </h2>
        <Carousel responsive={responsive} itemClass="px-4" showDots={true}>
          {data.map((item: products) => {
            return (
              <div key={item.id} className="flex flex-col items-center">
                <img
                  src={item.imageurl}
                  alt={item.title}
                  className="w-[340px] h-[350px] object-cover border-t border-r border-l border-slate-400"
                />
                <div className="py-2 text-center flex flex-col justify-between flex-grow border-l border-r border-b border-slate-400 w-full">
                  <p className="text-black font-medium text-lg py-1">
                    {item.title}
                  </p>
                  <p className="text-green-600 text-xl font-semibold py-1">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Productlist;
