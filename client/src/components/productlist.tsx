import React, { useEffect, useState } from "react";
import products from "../interface/products";
import Card from "./card";
import Carousel from "react-multi-carousel";
import { fetchProducts } from "../api/productApi";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import AOS from "aos";
import "aos/dist/aos.css";
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
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Whether animation should happen only once
    });
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
        {/* Smartphones Section */}
        <div className="mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-medium mb-6">SmartPhones</h2>
          {loading ? (
            <ShimmerSimpleGallery card imageHeight={300} caption />
          ) : (
            <Carousel responsive={responsive} itemClass="px-4">
              {data.slice(0, 6).map((item: products) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  imageurl={item.imageurl}
                />
              ))}
            </Carousel>
          )}
        </div>

        {/* Fashion Section */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-medium mb-6">Fashion</h2>
          {loading ? (
            <ShimmerSimpleGallery card imageHeight={300} caption />
          ) : (
            <Carousel responsive={responsive} itemClass="px-4">
              {data.slice(6, 12).map((item: products) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  imageurl={item.imageurl}
                />
              ))}
            </Carousel>
          )}
        </div>

        {/* SmartWatches Section */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-3xl font-medium mb-6">SmartWatches</h2>
          {loading ? (
            <ShimmerSimpleGallery card imageHeight={300} caption />
          ) : (
            <Carousel responsive={responsive} itemClass="px-4">
              {data.slice(12, 16).map((item: products) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  imageurl={item.imageurl}
                />
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productlist;
