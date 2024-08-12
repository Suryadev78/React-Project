import React from "react";

export default function Navbar() {
  return (
    <div className="w-[15%] bg-white h-screen">
      <nav>
        <ul className="flex flex-col text-sm justify-center items-center mt-1 ">
          <li className="px-3 cursor-pointer py-2 border shadow-md">
            Add new Product
          </li>
          <hr className="my-1 w-[90%]" />
          <li className="text-xl">Category</li>
          <li className="bg-slate-100 mt-1 p-1 w-[90%]">
            <div className="flex  justify-start items-center gap-2 ">
              <div className="h-2 bg-red-300 w-2 rounded-full"></div>
              <h4>Cart</h4>
            </div>
          </li>
          <li className="bg-slate-100 mt-1 p-1 w-[90%]">
            <div className="flex  justify-start items-center gap-2 ">
              <div className="h-2 bg-red-300 w-2 rounded-full"></div>
              <h4>Cart</h4>
            </div>
          </li>
          <li className="bg-slate-100 mt-1 p-1 w-[90%]">
            <div className="flex  justify-start items-center gap-2 ">
              <div className="h-2 bg-red-300 w-2 rounded-full"></div>
              <h4>Cart</h4>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
