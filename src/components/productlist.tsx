import React, { useEffect, useState } from "react";
import products from "../interface/products";
import axios from "axios";

const Productlist: React.FC = () => {
  const [data, setData] = useState<products[]>([]);

  const dummydata = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );

      // Parse and sanitize the images array
      const sanitizedData = response.data.map((item: products) => ({
        ...item,
        images: item.images.flatMap((img: string) => {
          // Remove any extraneous quotes or brackets
          return img.replace(/['"\[\]]/g, "").split(",");
        }),
      }));

      setData(sanitizedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dummydata();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg shadow-md">
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
          <p className="text-gray-700 mt-1">${item.price}</p>
          <p className="text-sm text-gray-500 mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Productlist;
