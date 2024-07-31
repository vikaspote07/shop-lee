import axios from "axios";

// Dummy API endpoints
const API_URL = "https://fakestoreapi.com"; 
const API_URL2 = "https://fakestoreapiserver.reactbd.com";
const API_URL3 = "https://5d76bf96515d1a0014085cf9.mockapi.io";

export const fetchProducts1 = async () => {
  try {
    const [response1, response2, response3] = await Promise.all([
      axios.get(`${API_URL}/products`),
      axios.get(`${API_URL2}/products/categories`),
      axios.get(`${API_URL3}/products/products`),
    ]);

    let data = [
      ...response1.data,
      ...response2.data, // Modify if necessary to standardize structure
      ...response3.data.products, // Assuming the response from API_URL3 has a `products` key
    ];

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array or handle the error as needed
  }
};

export const fetchProducts = async () => {
  let response1 = await axios.get(`${API_URL}/products`);
  let response2 = await axios.get(`${API_URL2}/products`);
  // let response3 = await axios.get(`${API_URL3}/products`);

  let data = [...response1.data, ...response2.data];

  return data;
};

export const fetchProducts2 = async () => {
  let response = await axios.get(`${API_URL2}/products`);

  return response.data;
};
export const fetchProducts3 = async () => {
  let response = await axios.get(`${API_URL3}/products`);

  return response.data;
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; 
  }
};

