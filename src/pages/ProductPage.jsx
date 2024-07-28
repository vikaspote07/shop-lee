import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

function ProductPage() {
  const { items } = useSelector((state) => state.cart);
  const { id } = useParams();
  const dispatch = useDispatch();



  const product = useSelector((state) =>
    state.items.products.find((p) => String(p.id) === String(id))
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    let isItemExits = items.some((item) => item.id === id);
    if (isItemExits) {
      toast.warning("Product already in cart!");
    } else {
      dispatch(addToCart({ ...product, quantity }));
        toast.success("item added");
    }
  };

  if (!product)
    return (
      <p className="text-center text-gray-500 text-2xl mt-20">Loading...</p>
    );

  return (
    <div className="container  p-4 my-10 mt-80 ">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-40">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              className="w-full h-96 object-cover object-center"
              src={product.image}
              alt={product.name}
            />
            <div className="flex mt-4 space-x-2 px-4">
              {/* Assuming you have sub-images. If not, you can remove this part */}
              {[1, 2, 3].map((_, index) => (
                <img
                  key={index}
                  className="w-20 h-20 object-cover rounded cursor-pointer border-2 border-gray-300 hover:border-blue-500"
                  src={product.image}
                  alt={`${product.name} view ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {product.brand}
            </div>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              {product.name}
            </h1>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <div className="mt-4 flex items-center">
              <span className="text-gray-600 mr-2">Rating:</span>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">(50 reviews)</span>
            </div>
            <div className="mt-4">
              {product.price !== undefined ? (
                <>
                  <span className="text-2xl font-bold text-gray-900">
                    {typeof product.price === "number"
                      ? `$${product.price.toFixed(2)}`
                      : product.price}
                  </span>
                  <span className="ml-2 text-gray-600 line-through">
                    {typeof product.price === "number"
                      ? `$${(product.price * 1.2).toFixed(2)}`
                      : `$${(
                          parseFloat(
                            String(product.price).replace(/[^0-9.-]+/g, "")
                          ) * 1.2
                        ).toFixed(2)}`}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-900">
                  Price not available
                </span>
              )}
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <span className="text-gray-700">Quantity:</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value)))
                }
                className="w-20 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
