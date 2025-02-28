import { useState } from "react";
import React from "react";
export const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
        <nav className="bg-[#5D4037] text-white p-4 flex justify-between items-center">
        <div className="flex items-center justify-between gap-4">
          <img
            src="src/assets/images/Bakereies_Logo-removebg-preview.png"
            alt="Sweet Dessert House Cake"
            className="w-40"
          />
          <ul className="hidden hover: text-xl font-bold md:flex gap-14">
            <li><a href="#home">HOME</a></li>
            <li><a href="#themed">THEMED</a></li>
            <li><a href="#pastries">PASTRIES</a></li>
            <li><a href="#bread-desserts">BREAD/DESSERTS</a></li>
            <li><a href="#beverages">BEVERAGES</a></li>
            <li><a href="#our-identity">OUR IDENTITY</a></li>
            <li><a href="#reach-out">REACH OUT</a></li>
          </ul>
        </div>
        
          
      </nav>
      <div className="flex mt-8 ml-4  justify-between">
      <div className="relative ">
            <input
              type="text"
              placeholder="Search"
              className="w-100 max-w-full p-2 rounded-lg text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <FaSearch className="absolute left-2 top-3 text-gray-600" /> */}
          </div>
          <div className="">
          <button className="bg-[#5D4037] font-semibold text-lg text-white px-4 py-4 rounded-2xl">ORDER NOW</button>
          <button className="bg-[#5D4037] mx-4 font-semibold text-lg  text-white px-4 py-4 rounded-2xl">
            LOGIN/SIGN UP
          </button>
          </div>
        </div>
    </div>
  )
}
