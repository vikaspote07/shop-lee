import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="w-full max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="relative group">
      <img
        className="w-full h-60 object-cover group-hover:opacity-90 transition-opacity duration-300"
        src={product.image}
        alt={product.name}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">${product.price}</div>
          {/* Assuming you might have rating data */}
          <div className="text-yellow-400">
            {/* Example stars, adjust based on actual ratings */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 inline"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.39 4.85L20 8l-3.91 3.83L17.89 18 12 14.72 6.11 18 7.91 11.83 4 8l5.61-1.15L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-1 truncate">{product.title}</h2>
      <p className="text-sm text-gray-500 mb-4 truncate">
        {product.description}
      </p>
      <Link to={`/product/${product.id}`}>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          View Details
        </button>
      </Link>
    </div>
  </div>
);

export default ProductCard;
