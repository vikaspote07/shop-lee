import axios from "axios";

// Dummy API endpoints
const API_URL = "https://fakestoreapi.com"; // Replace with your actual API URL

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get(`${API_URL}/products/categories`);
  return response.data;
};
