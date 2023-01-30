import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import anime from '../assets/anime.jpg'
import capibara from '../assets/capibara.jpg'
import skylerwhite from '../assets/skylerwhite.jpg'
import septi from '../assets/septi.jpeg'
import stella from '../assets/stella.jpeg'

export const Team = () => {

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    2048: { items: 4 },
};

const items = [
    <div className="mx-auto max-w-[300px]">
      <img className="rounded-md" src={stella} alt="" />
      <div className="text-center font-semibold text-lg my-2">
        <h1>Regina Stella Palan Teron</h1>
      </div>
    </div>,
    <div className="mx-auto max-w-[300px]">
      <img className="rounded-md" src={septi} alt="" />
      <div className="text-center font-semibold text-lg my-2">
        <h1>Septia Trianti</h1>
      </div>
    </div>,
    <div className="mx-auto max-w-[300px]">
      <img className="rounded-md w-[300px] h-[300px]" src={capibara} alt="" />
      <div className="text-center font-semibold text-lg my-2">
        <h1>Muhammad Raya Ramadan</h1>
      </div>
    </div>,
    <div className="mx-auto max-w-[300px]">
      <img className="rounded-md w-[300px] h-[300px]" src={skylerwhite} alt="" />
      <div className="text-center font-semibold text-lg my-2">
        <h1>Muhammad Rizky Kusyon</h1>
      </div>
    </div>,
];


  return (
    <div id="team" className="h-[110vh]">
      <div className="h-screen flex flex-col justify-center items-center before:w-0 before:h-10 md:before:w-10 before:bg-[#863316] before:rounded-full before:absolute before:top-[300vh] before:left-[10vh] after:w-0 md:after:h-20 md:after:w-20 after:bg-[#863316] after:top-[260vh] after:absolute after:right-[10vh] after:rounded-full after:z-[-1]">
        <div className="my-14 font-bold text-2xl z-[2]">
          <h1>OUR TEAM</h1>
        </div>
        <div className="container mx-auto">
        <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}

    />
        </div>
      </div>
    </div>
  );
};
