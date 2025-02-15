import React from "react";
import ImageSlider from "./ImageSlider";

function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Sidebar (Hidden on Small Screens) */}
        <div className="hidden md:flex col-span-3 justify-center items-center">
          <ul className="list-none space-y-2">
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>

        {/* Image Slider Section */}
        <div className="col-span-9 w-full flex justify-center items-center p-3">
          <ImageSlider />
        </div>
      </div>
    </>
  );
}

export default Home;
