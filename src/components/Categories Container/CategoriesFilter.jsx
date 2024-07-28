import React from "react";

function CategoriesFilter({ categories, onChange }) {
  return (
    <div className="mb-4">
      <h5 className="text-lg font-bold mb-2">Categories</h5>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => onChange(category)}
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
