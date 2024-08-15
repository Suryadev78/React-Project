import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import productData from "../store/atom";
import axios from "axios";

export default function Home() {
  const [product, setProduct] = useRecoilState(productData);
  const item = useRecoilValue(productData);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res));
  }, []);
  console.log(item);
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-screen bg-zinc-100">
      <Navbar></Navbar>
      {/* src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw" */}
      <div className="flex p-16 h-full  w-[85%] gap-1 flex-wrap overflow-x-hidden overflow-y-auto">
        <div
          onClick={() => navigate("/description")}
          className="mr-3 cursor-pointer mt-1 br-3 p-1 border shadow-sm rounded w-[18%] h-[30vh] flex justify-center items-center"
        >
          <div className="w-28 h-32 object-contain">
            <img
              className="hover:scale-95"
              src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
            />
            <p className="text-center">Sunscream</p>
          </div>
        </div>
        <div className="mr-3 mt-1 br-3 p-1 border shadow-sm rounded w-[18%] h-[30vh] flex justify-center items-center">
          <div className="w-28 h-32 object-contain">
            <img
              className="hover:scale-95"
              src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
              alt=""
            />
          </div>
        </div>
        <div className="mr-3 mt-1 br-3 p-1 border shadow-sm rounded w-[18%] h-[30vh] flex justify-center items-center">
          <div className="w-28 h-32 object-contain">
            <img
              className="hover:scale-95"
              src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
              alt=""
            />
          </div>
        </div>
        <div className="mr-3 mt-1 br-3 p-1 border shadow-sm rounded w-[18%] h-[30vh] flex justify-center items-center">
          <div className="w-28 h-32 object-contain">
            <img
              className="hover:scale-95"
              src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
              alt=""
            />
          </div>
        </div>
        <div className="mr-3 mt-1 br-3 p-1 border shadow-sm rounded w-[18%] h-[30vh] flex justify-center items-center">
          <div className="w-28 h-32 object-contain">
            <img
              className="hover:scale-95"
              src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
              alt=""
            />
          </div>
        </div>
        <div className="mr-3 mt-1 br-3 p-1 border shadow-sm rounded w-[18%] h-[30vh] flex justify-center items-center">
          <div className="w-28 h-32 object-contain">
            <img
              className="hover:scale-95"
              src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
              alt=""
            />
          </div>
        </div>

        {/* <div className="w-44 h-48 rounded-md m-1 flex justify-center  bg-zinc-200">
          <div className="w-32 h-24 mt-1 object-contain ">
            <img
              className="rounded-md cursor-pointer hover:scale-95"
            ></img>
            <p className="text-center mt-1">Sunscream</p>
          </div>
        </div>
        <div className="w-44 h-48 rounded-md m-1 flex justify-center   bg-zinc-200">
          <div className="w-32 h-24 mt-1 object-contain ">
            <img
              className="rounded-md hover:scale-95"
              src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
            ></img>
            <p className="text-center mt-1">Sunscream</p>
          </div>
        </div>{" "}
        <div className="w-44 h-48 rounded-md m-1 flex justify-center  bg-zinc-200">
          <div className="w-32 h-24 mt-1 object-contain ">
            <img
              className="rounded-md hover:scale-95"
              src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
            ></img>
            <p className="text-center mt-1">Sunscream</p>
          </div>
        </div>{" "}
        <div className="w-44 h-48 rounded-md m-1 flex justify-center  bg-zinc-200">
          <div className="w-32 h-24 mt-1 object-contain ">
            <img
              className="rounded-md hover:scale-95"
              src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
            ></img>
            <p className="text-center mt-1">Sunscream</p>
          </div>
        </div>{" "}
        <div className="w-44 h-48 rounded-md m-1 flex justify-center  bg-zinc-200">
          <div className="w-32 h-24 mt-1 object-contain ">
            <img
              className="rounded-md hover:scale-95"
              src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
            ></img>
            <p className="text-center mt-1">Sunscream</p>
          </div>
        </div>{" "}
        <div className="w-44 h-48 rounded-md m-1 flex justify-center  bg-zinc-200">
          <div className="w-32 h-24 mt-1 object-contain ">
            <img
              className="rounded-md"
              src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
            ></img>
            <p className="text-center mt-1">Sunscream</p>
          </div>
        </div>{" "}
        <div className="w-44 h-48 rounded-md m-1 flex justify-center  bg-zinc-200">
          <div className="w-32 h-24 mt-1 object-contain ">
            <img
              className="rounded-md"
              src="https://imgs.search.brave.com/XfO7yq6kx-xPyTR66zoDa7UvOZCgrm1qRGRQOtiilWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/Ml9hMzM2MWE5Yi1j/ZDI1LTQwZmItODA0/MS02N2Q3YTJjYjc1/MjQuanBnP3Y9MTcx/MjI0MDM0MCZ3aWR0/aD0xODAw"
            ></img>
            <p className="text-center mt-1">Sunscream</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
