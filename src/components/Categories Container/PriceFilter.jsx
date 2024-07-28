import React from "react";

function PriceFilter() {
  return (
    <div>
      <h5 className="text-lg font-bold mb-2">Price</h5>
      <ul>
        <li className="mb-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            $0 - $50
          </label>
        </li>
        <li className="mb-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            $50 - $100
          </label>
        </li>
        <li className="mb-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            $100 - $200
          </label>
        </li>
        <li className="mb-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            $200+
          </label>
        </li>
      </ul>
    </div>
  );
}

export default PriceFilter;
