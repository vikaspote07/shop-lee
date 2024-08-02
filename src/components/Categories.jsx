import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategories } from "../redux/slices/itemsSlice";
import CategoriesFilter from "./CategoriesContainer/CategoriesFilter";
import PriceFilter from "./CategoriesContainer/PriceFilter";

function Categories({ onFilter }) {
  const dispatch = useDispatch();
  const { products, categories } = useSelector((state) => state.items);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(products.map((item) => item.category)),
    ];
    dispatch(setCategories(uniqueCategories));
  }, [dispatch, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  useEffect(() => {
    onFilter(selectedCategories);
  }, [selectedCategories, onFilter]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <CategoriesFilter
            categories={categories}
            onChange={handleCategoryChange}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <PriceFilter onFilter={onFilter} />
        </div>
      </div>
    </div>
  );
}

export default Categories;
