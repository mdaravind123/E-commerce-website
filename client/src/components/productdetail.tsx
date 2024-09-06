import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import products from "../interface/products";

const Productdetail: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<products | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const productData = async () => {
    setLoading(true);
    try {
      const product = await axios.get<products>(`http://localhost:3333/${id}`);
      if (!product.data) {
        setError("Product not found");
      } else {
        setData(product.data);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        setError("Product not found.");
      } else {
        setError("An error occurred while fetching the product.");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    productData();
  }, [id]);
  if (loading) {
    return <p>Loading....</p>;
  } else if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <div>
        {data && (
          <div key={data.id}>
            <img src={data.imageurl} alt={data.title} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>Price: {data.price}</p>
            <p>{data.ratings}</p>
          </div>
        )}
      </div>
    );
  }
};

export default Productdetail;
