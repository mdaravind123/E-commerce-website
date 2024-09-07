import React, { useEffect, useState } from "react";
import Electronics from "./electronics";
import products from "../interface/products";
import Card from "./card";
import Carousel from "react-multi-carousel";
import axios from "axios";
import { banners } from "../assets/image";
import "react-multi-carousel/lib/styles.css";

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
        <div className="my-8">
          <h1 className="text-3xl font-medium my-6">
            Shop our Top Electronics Category
          </h1>
          <Electronics />
        </div>
        <div className="my-16">
          <img src={banners} alt="banners" />
        </div>
        <h2 className="text-3xl font-medium mb-8">Product List</h2>
        <Carousel responsive={responsive} itemClass="px-4">
          {data.map((item: products) => {
            return (
              <Card
                id={item.id}
                title={item.title}
                price={item.price}
                imageurl={item.imageurl}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Productlist;
