// src/api/productApi.ts
import axios from "axios";
import products from "../interface/products";

// Define the base URL for the API
const BASE_URL = "https://e-commerce-website-qyt6.onrender.com/";

// Fetch all products
export const fetchProducts = async (): Promise<products[]> => {
  try {
    const response = await axios.get<products[]>(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching products.");
  }
};

// Fetch a single product by ID
export const fetchProductById = async (
  id: string
): Promise<products | null> => {
  try {
    const response = await axios.get<products>(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      throw new Error("Product not found.");
    } else {
      throw new Error("An error occurred while fetching the product.");
    }
  }
};
