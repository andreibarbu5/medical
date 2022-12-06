import React from "react";
import staff from "../photos/nurse.webp";
import { BsCalendarDate, BsShieldPlus } from "react-icons/bs";
import { RiBodyScanFill, Ri24HoursFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="p-2 pb-0">
      {/* Title */}
      <div className="md:flex justify-between items-end">
        <h1 className="font-bold text-[42px] lg:text-[62px]   leading-[38px] lg:leading-[65px] pt-10 w-full">
          We Care About
          <br /> Your
          <span className="text-[rgb(21,128,235)]"> Families</span>
        </h1>
        <p className="pt-8 w-96 md:w-full md:text-[14px] lg:text-[20px]">
          Check how your families health is by professional team doctor with
          complete and modern facilities services.
        </p>
      </div>

      {/* Content */}
      <div className="pt-6 md:flex items-center md:mt-8  ">
        {/* Photo */}
        <div className=" order-2 relative md:w-full  ">
          <div className="relative lg:scale-[100%] lg:max-h-[30rem]  lg:flex   ">
            {/* 2xl:max-h-[35rem] */}
            <img
              src={staff}
              alt=""
              className="relative w-[96%]  m-0 z-10 shadow-lg shadow-gray-600 mt-4  lg:object-cover "
            />
            <div className="absolute bg-[#bedcf9] h-[90%] lg:h-[100%] -top-4    right-0 w-[90%]"></div>
          </div>

          <div className="hidden absolute bg-[rgb(21,128,235)] text-white md:flex items-start mx-auto justify-center gap-4 w-[20rem] py-6 px-2    -bottom-16 -right-12 z-20 scale-75   2xl:scale-[115%]">
            <div className="">
              <div className="flex items-center gap-1">
                <IoCall />
                <p>(339) 718-8669</p>
              </div>
              <div className="flex gap-1 pt-2">
                <FaMapMarkerAlt className="mt-1.5" />
                <p>
                  86 Cambridge Bv <br /> Boston TX
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <AiOutlineMail />
              <p>email@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="pt-6 flex flex-col items-center order-1 md:w-[65%]  md:mr-8 lg:-ml-12">
          <p className="text-[rgb(21,128,235)] font-semibold text-[42px] md:text-[30px] lg:text-[40px]">
            Our Advantages
          </p>
          <ul className="  pt-2 space-y-4 text-[20px] md:text-[16px] lg:text-[22px]">
            <li className="flex items-center gap-2 font-semibold  ">
              <BsCalendarDate className="text-[rgb(21,128,235)]" />
              <p>Make an appointment</p>
            </li>
            <li className="flex items-center gap-2 font-semibold  ">
              <RiBodyScanFill className="text-[rgb(21,128,235)]" />
              <p>Make an appointment</p>
            </li>
            <li className="flex items-center gap-2 font-semibold  ">
              <Ri24HoursFill className="text-[rgb(21,128,235)]" />
              <p>Make an appointment</p>
            </li>
            <li className="flex items-center gap-2 font-semibold  ">
              <BsShieldPlus className="text-[rgb(21,128,235)]" />
              <p>Make an appointment</p>
            </li>
          </ul>
        </div>
      </div>
      {/* Contact */}
      <div className="md:hidden bg-[#bedcf9] py-6 -mx-4 xl:-mx-5 mt-4 ">
        <div className="bg-[rgb(21,128,235)] text-white flex items-start mx-auto justify-center gap-4 w-[20rem] py-6 px-2  ">
          <div className="">
            <div className="flex items-center gap-1">
              <IoCall />
              <p>(339) 718-8669</p>
            </div>
            <div className="flex gap-1 pt-2">
              <FaMapMarkerAlt className="mt-1.5" />
              <p>
                86 Cambridge Bv <br /> Boston TX
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <AiOutlineMail />
            <p>email@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
