
import React, { useState } from "react";

const PriceFilter = ({ onFilter }) => {
  const [selectedRanges, setSelectedRanges] = useState([]);

  const handleChange = (range) => {
    setSelectedRanges((prev) => {
      const newSelectedRanges = prev.includes(range)
        ? prev.filter((r) => r !== range)
        : [...prev, range];
      onFilter(newSelectedRanges); 
      return newSelectedRanges;
    });
  };

  return (
    <div>
      <h5 className="text-lg font-bold mb-2">Price</h5>
      <ul>
        <li className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedRanges.includes("$0 - $50")}
              onChange={() => handleChange("$0 - $50")}
              className="mr-2"
            />
            $0 - $50
          </label>
        </li>
        <li className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedRanges.includes("$50 - $100")}
              onChange={() => handleChange("$50 - $100")}
              className="mr-2"
            />
            $50 - $100
          </label>
        </li>
        <li className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedRanges.includes("$100 - $200")}
              onChange={() => handleChange("$100 - $200")}
              className="mr-2"
            />
            $100 - $200
          </label>
        </li>
        <li className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedRanges.includes("$200+")}
              onChange={() => handleChange("$200+")}
              className="mr-2"
            />
            $200+
          </label>
        </li>
      </ul>
    </div>
  );
};

export default PriceFilter;
