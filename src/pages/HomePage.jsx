import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchCategories } from "../api";
import { setCategories,setProducts } from "../redux/slices/itemsSlice ";
import PriceFilter from "../components/Categories Container/PriceFilter";
import CategoriesFilter from "../components/Categories Container/CategoriesFilter"
import ProductGrid from "./ProductGrid";
import TestimonialPage from "./TestimonialCard ";
import LoadingSpinner from "../components/loading spinner/LoadingSpinner ";
import useDebounce from "../hooks/useDebounce";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items.products);
  const categories = useSelector((state) => state.items.categories);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSelectedCategories = useDebounce(selectedCategories, 500);
  const debouncedSelectedPriceRanges = useDebounce(selectedPriceRanges, 500);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const productsPerPage = 10;

  // Fetch products and categories
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [products, categories] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);
        dispatch(setProducts(products));
        dispatch(setCategories(categories));
        setFilteredProducts(products);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [dispatch]);

  // Filter products based on selected categories, price ranges, and search term
  useEffect(() => {
    const filterProducts = () => {
      let filtered = products;

      if (debouncedSelectedCategories.length > 0) {
        filtered = filtered.filter((product) =>
          debouncedSelectedCategories.includes(product.category)
        );
      }

      if (debouncedSelectedPriceRanges.length > 0) {
        filtered = filtered.filter((product) => {
          const price = product.price;
          return debouncedSelectedPriceRanges.some((range) => {
            switch (range) {
              case "$0 - $50":
                return price >= 0 && price <= 50;
              case "$50 - $100":
                return price > 50 && price <= 100;
              case "$100 - $200":
                return price > 100 && price <= 200;
              case "$200+":
                return price > 200;
              default:
                return false;
            }
          });
        });
      }

      if (debouncedSearchTerm) {
        filtered = filtered.filter((product) =>
          product.title?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
      }

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [
    debouncedSelectedCategories,
    debouncedSelectedPriceRanges,
    debouncedSearchTerm,
    products,
  ]);

  const handleCategoryFilter = (categories) => {
    setSelectedCategories(categories);
    setCurrentPage(1);
  };

  const handlePriceFilter = (ranges) => {
    setSelectedPriceRanges(ranges);
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="flex relative">
        <div className="fixed top-1/2 left-0 transform -translate-y-1/2 w-64 p-4 border-2 border-black bg-white shadow-lg">
          <CategoriesFilter
            categories={categories}
            onChange={handleCategoryFilter}
          />
          <PriceFilter onFilter={handlePriceFilter} />
        </div>
        <div className="flex-1 p-4 mt-16 ml-72">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Products</h1>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="border p-2 rounded"
            />
          </div>
          <ProductGrid
            filteredProducts={filteredProducts}
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      <TestimonialPage />
    </>
  );
};

export default HomePage;