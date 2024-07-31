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
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 w-64 p-4 border-2 border-black bg-white shadow-lg">
      <h5 className="text-xl font-bold mb-4">Filters</h5>
      <CategoriesFilter
        categories={categories}
        onChange={handleCategoryChange}
      />
      <PriceFilter onFilter={onFilter} />
    </div>
  );
}

export default Categories;
