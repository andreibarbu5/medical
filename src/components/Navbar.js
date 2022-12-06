import React from "react";
import logo from "../photos/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between ">
      {/* Left Side */}
      <div className="flex items-center relative w-[7.5rem]  scale-[0.85]">
        <div className="text-[rgb(21,128,235)] font-semibold">
          <p>Lifecare</p>
          <p className="pl-4">Medical</p>
        </div>
        <img src={logo} alt="" className="absolute w-14 h-14 right-[6px]" />
      </div>
      {/* Right Side */}
      <div className="pr-2 flex items-center gap-6">
        <ul className="flex gap-6 font-semibold">
          <li>
            <p className="sm:text-[rgb(21,128,235)] cursor-pointer">Home</p>
          </li>
          <li className="hover:text-[rgb(21,128,235)] hidden sm:flex cursor-pointer">
            <p>About</p>
          </li>
          <li className="hover:text-[rgb(21,128,235)] hidden sm:flex cursor-pointer">
            <p>Service</p>
          </li>
          <li className="hover:text-[rgb(21,128,235)] hidden sm:flex cursor-pointer">
            <p>FAQ</p>
          </li>
        </ul>
        <button className="bg-[rgb(21,128,235)] py-1 px-3 rounded-[5px] text-white cursor-pointer">
          <p>Register</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
