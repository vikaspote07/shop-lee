import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchCategories } from "../api";
import { setCategories,setProducts } from "../redux/slices/itemsSlice ";
import PriceFilter from "../components/Categories Container/PriceFilter";
import CategoriesFilter from "../components/Categories Container/CategoriesFilter";
import ProductGrid from "./ProductGrid";
import TestimonialPage from "./TestimonialCard ";

import LoadingSpinner from "../components/loading spinner/LoadingSpinner "
import useDebounce from "../hooks/useDebounce";
import { FaFilter, FaTimes } from "react-icons/fa";

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
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const debouncedSelectedCategories = useDebounce(selectedCategories, 500);
  const debouncedSelectedPriceRanges = useDebounce(selectedPriceRanges, 500);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const productsPerPage = 8;

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
          product.title
            ?.toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase())
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
    <div className="bg-gray-100 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter toggle */}
          <button
            className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center mb-4"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            {isMobileFilterOpen ? <FaTimes /> : <FaFilter />}
            <span className="ml-2">
              {isMobileFilterOpen ? "Close Filters" : "Open Filters"}
            </span>
          </button>

          {/* Filters */}
          <div
            className={`md:w-1/4 lg:w-1/5 md:fixed md:left-4 md:top-20 md:bottom-4 md:overflow-y-auto bg-white rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out ${
              isMobileFilterOpen ? "fixed inset-0 z-50" : "hidden md:block"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6">Filters</h2>
            <CategoriesFilter
              categories={categories}
              onChange={handleCategoryFilter}
            />
            <PriceFilter onFilter={handlePriceFilter} />
            {isMobileFilterOpen && (
              <button
                className="md:hidden bg-red-600 text-white px-4 py-2 rounded-lg mt-4"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                Close Filters
              </button>
            )}
          </div>

          {/* Products */}
          <div className="md:w-3/4 lg:w-4/5 md:ml-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
              <h1 className="text-3xl font-bold mb-4 sm:mb-0">Products</h1>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      </div>
      <TestimonialPage />
    </div>
  );
};

export default HomePage;