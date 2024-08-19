import React from "react";
import { useRecoilValue } from "recoil";
import productData from "../store/atom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const product = useRecoilValue(productData);
  console.log(product);
  let distinct_category =
    product && product.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  console.log(distinct_category);

  return (
    <div className="w-[15%] bg-white h-screen">
      <nav>
        <ul className="flex flex-col text-sm justify-center items-center mt-1 ">
          <li className="px-3 cursor-pointer py-2 border shadow-md">
            Add new Product
          </li>
          <hr className="my-1 w-[90%]" />
          <li className="text-xl">Category</li>
          {distinct_category.map((i) => {
            return (
              <li className="bg-slate-100 mt-1 p-1 w-[90%]">
                <div className="flex  justify-start items-center gap-2 ">
                  <div className="h-2 bg-red-300 w-2 rounded-full"></div>
                  <button onClick={() => navigate(`/?category=${i}`)}>
                    {i}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
