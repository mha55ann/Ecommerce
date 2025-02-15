import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Product1 from "./Product1";
function Sales() {
  return (
    <>
      <div className=" p-3">
        <div className="grid md:grid-cols-12 gap-1 ">
          <div className="col-span-3  text-2xl font-bold md:text-center flex   items-center ">
            {" "}
            Flash Sales
          </div>
          <div className="col-span-4 ">
            <div className="flex   gap-2.5 justify-start">
              <div className="text-sm">Days</div>
              <div className="text-sm">Hours</div>
              <div className="text-sm">Minutes</div>
              <div className="text-sm">Seconds</div>
            </div>

            {/* Row 2: Countdown Values */}
            <div className="flex justify-start gap-5 pl-2 ">
              <div className="text-2xl font-semibold">00</div>
              <div className="text-2xl font-semibold">00</div>
              <div className="text-2xl font-semibold">00</div>
              <div className="text-2xl font-semibold">00</div>
            </div>
          </div>
         
        </div>
        <Product1 />
      </div>

     
    </>
  );
}

export default Sales;
