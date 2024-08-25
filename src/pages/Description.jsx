import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Description() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setItems(res.data));
  }, []);
  return (
    <div className="w-full h-screen bg-zinc-300  flex justify-center items-center">
      <div className="w-2/3 h-3/4  flex justify-between rounded-md shadow-2xl px-20  items-center gap-5 bg-white">
        <div className="w-52 p-1 ">
          <img
            className="shadow-sm cursor-pointer hover:scale-105 object-contain p-2"
            src={items.image}
            alt=""
          />
        </div>
        <div className="flex w-80  flex-col gap-5">
          <h2 className="text-3xl">{items.title}</h2>
          <p>{items.description}</p>
          <h4 className="text-lg font-semibold">Price :${items.price}</h4>

          <div className="flex gap-3">
            <button className="bg-slate-900 text-white px-8 py-1 font-semibold rounded-sm">
              Edit
            </button>
            <button className="bg-slate-900 text-white px-8 py-1 font-semibold rounded-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
