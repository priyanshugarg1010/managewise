import React, { useState, useEffect } from "react";
import TestimonialCards from "./TestimonialCards";

const Testimonials = () => {
  return (
    // <div>
    <div
      id="testimonials"
      className="flex bg-white justify-start items-start w-[1200px] flex-col mt-32 "
    >
      <div className="">
        <div className="text-blueButton border border-opacity-30 flex justify-start items-start border-blueButton w-36  bg-white px-2  mt-24 font-semibold font-[inter] text-[12px] tracking-wider py-1 leading-5 rounded-lg">
          🧡 TESTIMONIALS
        </div>
        <h2 className="text-5xl font-semibold justify-start items-center text-start  tracking-tight font-[inter] text-backgroundBlack  mt-5">
          Hear from our <span className="text-textColor"> Satisfied </span>
          clients
        </h2>
        <div className=" justify-start items-start text-start  text-xl font-medium text-descTextColor mt-4  ">
          Discover why our clients love working with us. Read their
          <br />
          testimonials and learn how we has helped businesses.
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
