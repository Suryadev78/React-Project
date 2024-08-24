import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import productData from "../store/atom";
import axios from "axios";

export default function Home() {
  const [product, setProduct] = useRecoilState(productData);
  const [searchParams] = useSearchParams();
  const item = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState(null);
  // console.log(item);
  // const item = useRecoilValue(productData);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data));
  }, []);
  useEffect(() => {
    if (!filteredProducts) {
      setFilteredProducts(product);
    }
    axios
      .get(`https://fakestoreapi.com/products/category/${item}`)
      .then((res) => setFilteredProducts(res.data));
  }, [item]);
  console.log(filteredProducts);
  // console.log(filteredProducts);

  const navigate = useNavigate();
  return (
    <div className="flex w-full h-screen bg-zinc-100">
      <Navbar></Navbar>
      <div className="flex p-16 h-full  w-[85%] gap-1 flex-wrap  overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((i) => {
            return (
              <div
                onClick={() => navigate(`/description?id=${i.id}`)}
                className="mr-3 cursor-pointer mt-1 br-2 p-1 border shadow-sm rounded w-[20%] h-[35vh] flex flex-col justify-center items-center"
              >
                <div className="w-28 h-32 object-contain">
                  <img
                    className="hover:scale-95 w-full h-[80%]"
                    src={i.image}
                  />
                </div>
                <p className="text-center text-xs">{i.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
