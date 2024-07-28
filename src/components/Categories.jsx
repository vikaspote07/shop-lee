import React, { useEffect, useState } from "react";

import CategoriesFilter from "./Categories Container/CAtegoriesFilter";
import PriceFilter from "./Categories Container/PriceFilter";
import { useSelector, useDispatch } from "react-redux";
import { setCategories } from "../redux/slices/itemsSlice ";

function Categories({ onFilter }) {
  const dispatch = useDispatch();
  const { products, categories } = useSelector((state) => state.items);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    // Populate categories from products
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
    <div className="border-solid border-2 border-black-500 p-3.5 mt-10">
      <h5 className="text-xl font-bold mb-4">Filters</h5>
      <CategoriesFilter
        categories={categories}
        onChange={handleCategoryChange}
      />
      <PriceFilter />
    </div>
  );
}

export default Categories;
