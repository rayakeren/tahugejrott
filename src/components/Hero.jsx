import React, { useEffect, useState } from "react";
import heroimg from "../assets/heroimg.png";

export const Hero = () => {
  return (
    <div id="hero" className={`h-[120vh] owo md:h-[118vh]  md:mt-0`}>
    <section className="flex flex-col-reverse py-12 justify-around px-10 container mx-auto h-screen items-center before:z-[-1] before:w-10 before:h-10 before:bg-[#863316] before:absolute before:bottom-40 before:left-[7%] before:rounded-full after:z-[-1] after:bg-[#863316] after:w-14 after:h-14 after:rounded-full after:top-[200px] after:right-[7%] after:absolute md:flex-row">
      <div className="flex flex-col">
        <div className="my-6 md:w-[60vh]">
        <h1 className="font-bold text-2xl md:text-4xl flex-1 my-2">Tahu Gejrot</h1>
        <p className="text-1xl">
          Tahu Gejrot adalah makanan khas Cirebon, Jawa Barat, Indonesia yang
          terbuat dari tahu dan bumbu lainnya.
        </p>
        </div>
        <div className="flex">
          <a href="#about" className="border rounded-md p-4 bg-[#863316] hover:bg-black duration-150">
            <h1 className="text-white hover:scale-105 duration-150">Selengkapnya</h1>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#863316] rounded-full hover:scale-105 duration-300">
        <img className="w-[140%] md:w-[130%] hover:scale-110 duration-500" src={heroimg} alt="" />
      </div>
    </section>
    {/* <img className="absolute top-[70%] min-w-[1000px]" src={waves} alt="" /> */}
    </div>
  );
};
