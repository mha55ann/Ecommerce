import React from "react";
import full from "../images/full.png";
import unfilled from "../images/unfilled.png";
import half from "../images/half.png";

function Rating({ stars, rating }) {
  console.log("Stars:", stars); // Should print a number like 4.3
  console.log("Rating:", rating); // Should print 22

  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={
            stars >= index + 1
              ? full
              : stars >= index + 0.5
              ? half
              : unfilled
          }
          alt="star"
          className="w-5 h-5"
        />
      ))}
      <span className="text-gray-700 font-medium ml-2">({rating})</span>
    </div>
  );
}

export default Rating;
