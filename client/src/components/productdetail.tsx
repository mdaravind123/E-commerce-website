import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/productApi";
import ContentLoader from "react-content-loader";
import RenderStars from "./renderstars";
import products from "../interface/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Productdetail: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<products | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);

  const getProduct = async () => {
    try {
      const product = await fetchProductById(id!);
      setData(product);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const subtractQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct();
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading || showLoader) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 my-4 md:my-0">
        <ContentLoader
          viewBox="0 0 600 400"
          height={400}
          width={600}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="4" ry="4" width="400" height="200" />
          <rect x="0" y="220" rx="4" ry="4" width="400" height="30" />
          <rect x="0" y="270" rx="4" ry="4" width="250" height="20" />
          <rect x="0" y="300" rx="4" ry="4" width="150" height="20" />
          <rect x="0" y="330" rx="4" ry="4" width="100" height="30" />
        </ContentLoader>
      </div>
    );
  } else if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 my-4 md:my-0">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 md:gap-10">
          {data && (
            <>
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                <img
                  src={data.imageurl}
                  alt={data.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <h1 className="text-3xl text-medium my-2 hidden md:block">
                  {data.title}
                </h1>
                <p className="text-xl text-medium mb-2">Ratings</p>
                <RenderStars rating={data.ratings!} />
                <p className="my-2 text-xl text-medium">Description</p>
                <p className="text-base text-medium mb-2">{data.description}</p>
                <p className="bg-[#cc0c39] text-white text-lg text-medium my-1 w-[120px] text-center p-1">
                  {data.category}
                </p>
                <div className="flex flex-col mb-3">
                  <p className="my-1 text-xl text-medium">Price</p>
                  <p className="text-3xl text-medium">{data.price}</p>
                </div>
                <div className="my-2">
                  <p className="mb-2 text-xl text-medium">Quantity</p>
                  <div className="flex my-1">
                    <button
                      className="bg-gray-200 text-gray-700 rounded-l-lg p-2 hover:bg-gray-300 w-[50px] h-[50px]"
                      onClick={subtractQuantity}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                      type="text"
                      className="w-[50px] h-[50px] text-center border-t border-b border-gray-300 outline-none text-xl"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className="bg-gray-200 text-gray-700 rounded-r-lg p-2 hover:bg-gray-300 w-[50px] h-[50px]"
                      onClick={addQuantity}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="bg-[#ffd814] w-full md:w-[200px] h-[40px] rounded-[50px]">
                    Add to Cart
                  </button>
                  <button className="bg-[#ffa41c] w-full md:w-[200px] h-[40px] rounded-[50px]">
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default Productdetail;
