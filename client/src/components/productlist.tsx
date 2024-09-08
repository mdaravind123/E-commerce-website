import React, { useEffect, useState } from "react";
import products from "../interface/products";
import Card from "./card";
import Carousel from "react-multi-carousel";
import { fetchProducts } from "../api/productApi";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import "react-multi-carousel/lib/styles.css";

const Productlist: React.FC = () => {
  const [data, setData] = useState<products[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const loadProducts = async () => {
    setLoading(true);
    try {
      const productsData = await fetchProducts();
      setData(productsData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
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
    <div className="2xl:container mx-auto mt-12 mb-3">
      <div className="mx-auto w-[90%]">
        <div>
          <h2 className="text-3xl font-medium mb-4">Product List</h2>
          {loading ? (
            <ShimmerSimpleGallery card imageHeight={300} caption />
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Productlist;
