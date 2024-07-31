import React from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const ProductGrid = ({
  filteredProducts,
  currentPage,
  productsPerPage,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              aria-label={`Page ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

ProductGrid.propTypes = {
  filteredProducts: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  productsPerPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default ProductGrid;
