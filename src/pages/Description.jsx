import React from "react";

export default function Description() {
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="w-2/3 h-3/4 flex justify-between rounded-md shadow-2xl px-20 items-center gap-5 bg-white">
        <div className="w-52 p-1 ">
          <img
            className="shadow-sm cursor-pointer hover:scale-105 object-contain p-2"
            src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
            alt=""
          />
        </div>
        <div className="flex w-72  flex-col gap-5">
          <h2 className="text-4xl">Your Everyday Sunscream</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            alias esse. Quisquam fuga, porro repellat est rerum eaque facilis
          </p>
          <h4 className="text-lg font-semibold">Price : $49.00</h4>

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
