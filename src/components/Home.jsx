import React from "react";
import ImageSlider from "./ImageSlider";
function Home() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-3 flex justify-center items-center">
          <ul className="list-none space-y-2 ">
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
        <div className="col-span-9 px-10 p-6">
          <ImageSlider />
        </div>
      </div>
    </>
  );
}

export default Home;
