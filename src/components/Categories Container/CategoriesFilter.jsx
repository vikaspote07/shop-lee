import React, { useState } from "react";

function CategoriesFilter({ categories, onChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleChange = (category) => {
    setSelectedCategories((prev) => {
      const isSelected = prev.includes(category);
      const newSelectedCategories = isSelected
        ? prev.filter((c) => c !== category)
        : [...prev, category];
      onChange(newSelectedCategories); 
      return newSelectedCategories;
    });
  };

  return (
    <div className="mb-4">
      <h5 className="text-lg font-bold mb-2">Categories</h5>
      <ul>
        {categories?.map((category, index) => (
          <li key={index} className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedCategories.includes(category)}
                onChange={() => handleChange(category)}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesFilter;
