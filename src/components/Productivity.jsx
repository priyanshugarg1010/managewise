import React from "react";
import ProductivityCard from "./ProductivityCard";
import Integration from "./Integration";

const Productivity = () => {
  return (
    <div
      id=""
      className="flex bg-backgroundBlack justify-start items-center flex-col mt-32"
    >
      <div className="w-4/5">
        <div className="text-blueButton border border-opacity-30 flex justify-start items-start border-blueButton w-32  bg-white px-2  mt-24 font-semibold font-[inter] text-[12px] tracking-wider py-1 leading-5 rounded-lg">
          🤩 AND MORE...
        </div>
        <h2 className="text-5xl font-semibold justify-start items-center text-start  tracking-tight font-[inter] text-white  mt-5">
          Explore an array of features that elevate your
          <span className="text-textColor"> Productivity </span>
          to new heights
        </h2>
        <div className=" justify-start items-start text-start  text-xl font-medium text-descTextColor mt-4  ">
          Discover the tools that will revolutionize the way you
          <br />
          manage and optimize your operations
        </div>
        <div className="flex flex-row w-4/5 mt-20">
          <ProductivityCard />
        </div>

        <div className="">
          <Integration />
        </div>
      </div>
    </div>
  );
};

export default Productivity;
