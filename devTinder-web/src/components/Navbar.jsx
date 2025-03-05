import React from "react";

function Navbar() {
  return (
    <div className="w-full flex justify-between h-20 bg-zinc-900 text-white">
      <div className="flex items-center">
        <img
          className="w-4 cursor-pointer"
          src="
          https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbXcE1wdNORi_TFqe40HB6wuRTgLnjp3HlowEpSAGUpinfh1QkscBwGjNRcO9CMmEF4w&usqp=CAU"
          alt="logo"
        />
      </div>
      <div className="flex gap-4 items-center">
        <ul className="flex gap-4 items-center">
          <li className="cursor-pointer text-xl font-semibold">Home</li>
          <li className="cursor-pointer text-xl font-semibold">Services</li>
        </ul>
        <button className="cursor-pointer bg-gray-600 border-none py-2 px-4 text-pink-300 text-2xl rounded-4xl">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
