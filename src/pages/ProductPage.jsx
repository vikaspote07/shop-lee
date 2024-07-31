import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import "../style/productDetails.css"

function ProductPage() {
  const { items } = useSelector((state) => state.cart);
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.items.products.find((p) => String(p.id) === String(id))
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    let isItemExists = items.some((item) => item.id === id);
    if (isItemExists) {
      toast.warning("Product already in cart!");
    } else {
      dispatch(addToCart({ ...product, quantity }));
      toast.success("Item added to cart");
    }
  };

  if (!product)
    return (
      <p className="text-center text-gray-500 text-2xl mt-20">Loading...</p>
    );

  return (
    <div id="details">
      <div id="containerD">
        <div id="imageSection">
          <img id="imgDetails" src={product.image} alt={product.name} />
        </div>
        <div id="productDetails">
          <h1>{product.name}</h1>
          <h4>{product.brand}</h4>
          <div id="details">
            <h3 id="price">
              {typeof product.price === "number"
                ? `Rs ${product.price.toFixed(2)}`
                : product.price}
            </h3>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          <div id="productPreview">
            <h3>Product Preview</h3>
            {/* Display additional images here if available */}
            {product.additionalImages?.map((image, index) => (
              <img
                key={index}
                id="previewImg"
                src={image}
                alt={`${product.name} preview ${index + 1}`}
              />
            ))}
          </div>
          <div id="button">
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
