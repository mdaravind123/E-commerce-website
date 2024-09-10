import React, { useState, useEffect } from "react";
import products from "../interface/products";
import Card from "./card";
import { fetchProducts } from "../api/productApi";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Mostsellingproduct: React.FC = () => {
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
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-medium mb-6">Most Selling Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {loading ? (
              <ShimmerSimpleGallery card imageHeight={300} caption />
            ) : (
              data
                .slice(18, 26)
                .map((item: products) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    imageurl={item.imageurl}
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mostsellingproduct;
