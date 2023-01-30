import React from "react";
import tahu from "../assets/tahu.jpg";

export const About = () => {
  return (
    <div className="bg-[#863316] text-white scroll-smooth">
      <div id="about" className="container mx-auto">
        <div className="flex flex-col justify-center items-center h-[180vh] px-20 gap-20 md:flex-row md:h-screen before:absolute before:w-0 md:before:w-4 before:h-4 before:bg-white before:rounded-full before:left-[20vh] before:top-[140vh] after:rounded-full after:right-[30vh] after:top-[180vh] after:w-0 after:h-0 after:bg-white after:absolute lg:after:w-6 lg:after:h-6">
          <div className="flex flex-col w-[40vh] gap-y-6 md:w-[70vh] after:w-0 after:h-4 after:bg-white after:absolute after:left-[60%] after:top-[120vh] after:rounded-full md:after:w-4">
            <div className="text-center">
              <h1 className="font-bold text-2xl">
                Mengapa di sebut Tahu Gejrot?
              </h1>
              <p>
                Nama <span className="italic font-semibold underline">Gejrot</span> diambil dari kebiasaan penjual tahu yang menuangkan
                air gula merah dari botol ke atas potongan tahu yang sudah
                diberi bumbu. Proses itu dikenal dengan istilah digejrot karena
                terdengar suara jrot-jrot saat botol mengeluarkan air gula
                merah.
              </p>
            </div>
            <div className="flex flex-col text-center gap-2 border-t-4">
              <div className="font-bold text-2xl mt-4">
                <h1>Komposisi :</h1>
              </div>
              <div className="flex justify-center gap-2">
                <div className="text-left mx-5">
                  <p className="font-semibold">Tahu:</p>
                  <p>-Cabai</p>
                  <p>-Bawang Merah</p>
                  <p>-Bawang Putih</p>
                </div>
                <div className="text-left mx-5">
                  <p className="font-semibold">Kuah:</p>
                  <p>-Gula Aren</p>
                  <p>-Air asam jawa</p>
                  <p>-Cuka</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-[40vh]">
              <img src={tahu} alt="" className="border-8 border-white rounded-[69px] mb-5"/>
            </div>
            <div className="flex flex-col font-bold items-center text-2xl">
              <p>Harga :</p>
              <p>1 Porsi Rp 10.000</p>
              <p>½ Porsi Rp 5.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
