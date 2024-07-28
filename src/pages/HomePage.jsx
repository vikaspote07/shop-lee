import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchCategories } from "../api"; // Create these functions
import { Link } from "react-router-dom";
// import { SearchIcon } from "react-icons/fa"; // Import any required icons
// import { setCategories, setProducts } from "../redux/slices/itemsSlice";
import Categories from "../components/Categories";
import { setCategories, setProducts } from "../redux/slices/itemsSlice ";

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items.products);
  const categories = useSelector((state) => state.items.categories);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const loadData = async () => {
      const products = await fetchProducts();
      const categories = await fetchCategories();
      dispatch(setProducts(products));
      dispatch(setCategories(categories));
    };
    loadData();
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilter = (selectedCategories) => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="flex">
      <Categories onFilter={handleFilter} />
      <div className="flex-1 p-4 mt-16">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <div className="mb-4 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg p-2 mr-2 flex-1"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            {/* <SearchIcon /> */}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 p-4 rounded-lg shadow-md"
            >
              <img
                className="w-full h-48 object-cover mb-4"
                src={product.image}
                alt={product.name}
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg text-gray-700 mb-2">{product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
