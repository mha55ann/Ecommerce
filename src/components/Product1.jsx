import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import product from "../images/product.png";
import Rating from "./Rating";

function Product1() {
  const [showCart, setShowCart] = useState(false);

  // Handling hover events directly
  const handleOnHover = () => {
    setShowCart((prev) => !prev); // Toggle the cart visibility
  };

  return (
    <div>
      <div className="relative w-fit">
        {/* Product Image */}
        <img
          src={product}
          alt="Product"
          className="w-full"
          onMouseEnter={handleOnHover} // Show on hover
          onMouseLeave={handleOnHover} // Hide when not hovering
        />

        {/* "Add To Cart" - Appears on Hover */}
        {showCart && (
          <div
            onMouseEnter={handleOnHover}
            onMouseLeave={handleOnHover}
            className="absolute bottom-0 p-2 w-full text-center text-white bg-black"
          >
            Add To Cart
          </div>
        )}

        <div className="absolute top-1 left-1 p-1 px-3 bg-[#db4444] text-white rounded-md ">
          -30%{" "}
        </div>
        <div className="absolute top-1 right-1 w-7 h-7 flex justify-center items-center text-xl  text-black rounded-full bg-white hover:bg-amber-300 ">
          <FaRegHeart />
        </div>
      </div>

      {/* Product Name */}
      <div className="py-1.5 font-semibold text-lg">AK-900 Wired Keyboard</div>

      {/* Price */}
      <div className="text-[#db4444] text-xl font-bold">
        $150{" "}
        <span className="text-[#a0a0a0] pl-2 line-through font-normal">
          $180
        </span>
      </div>

      {/* Rating Component */}
      <Rating stars={4.3} rating={22} />
    </div>
  );
}

export default Product1;
