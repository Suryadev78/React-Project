import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import productData from "../store/atom";
import axios from "axios";

export default function Home() {
  const [product, setProduct] = useRecoilState(productData);
  const [searchParams] = useSearchParams();
  const item = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch all products initially
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching products: ", err));
  }, [setProduct]);

  // Update filtered products based on the selected category or show all products
  useEffect(() => {
    if (!item) {
      setFilteredProducts(product); // Show all products if no category is selected
    } else {
      axios
        .get(`https://fakestoreapi.com/products/category/${item}`)
        .then((res) => setFilteredProducts(res.data))
        .catch((err) =>
          console.error("Error fetching filtered products: ", err)
        );
    }
  }, [item, product]);

  const navigate = useNavigate();

  return (
    <div className="flex w-full h-screen bg-zinc-100">
      <Navbar />
      <div className="flex p-16 h-full  w-[85%] gap-1 flex-wrap  overflow-x-hidden overflow-y-auto">
        {filteredProducts.length > 0 &&
          filteredProducts.map((i) => (
            <div
              key={i.id}
              onClick={() => navigate(`/description?id=${i.id}`)}
              className="mr-3 cursor-pointer mt-1 br-2 p-1 border shadow-sm rounded w-[20%] h-[35vh] flex flex-col justify-center items-center"
            >
              <div className="w-28 h-32 object-contain">
                <img
                  className="hover:scale-95 w-full h-[80%]"
                  src={i.image}
                  alt={i.title}
                />
              </div>
              <p className="text-center text-xs">{i.title}</p>
              <div>Maahol hai</div>
            </div>
          ))}
      </div>
    </div>
  );
}
