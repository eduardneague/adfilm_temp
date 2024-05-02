"use client";

import React from "react";
import Link from "next/link";
import { useWindowSize } from "@/hooks/useWindowSize";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const ServiciiFotoHeader = () => {
  const windowSize = useWindowSize();
  return (
    <>
      <div className="fotoBackground md:bg-[center_top_-5rem] lg:bg-[center_top_-9rem] xl:bg-[center_top_0rem] 2xl:bg-[center_top_-10rem] select-none w-full flex flex-col relative">
        <div className="absolute hidden lg:block top-0 left-0 bg-gradient-to-b from-black opacity-100 to-transparent w-full h-[5rem] " />
        <div className="absolute hidden lg:block bottom-0 left-0 bg-gradient-to-t from-black opacity-100 to-transparent w-full h-[5rem] " />

        <div className="absolute overflow-hidden lg:bottom-[5rem] lg:left-[5rem] bottom-0 left-0 w-full backdrop-blur-lg h-[20rem] z-[10] justify-start bg-black bg-opacity-70 flex-col border-t-[1.5px] border-gray-700 lg:border rounded-tr-lg lg:shadow-sm lg:shadow-purple-900 rounded-tl-lg lg:rounded-bl-lg lg:rounded-br-lg lg:w-[563px] lg:h-[253px] ">
          <div className="cardglowbackground absolute bottom-0 right-0 w-full h-full z-[0] flex flex-col gap-4 ">
            <h1 className="text-xl text-white font-mustica-semibold mt-8 ml-8">
              Servicii Foto
            </h1>
            <div className="bg-gradient-to-r from-gray-600 to-transparent bg-opacity-50 w-[60%] bg-cover bg-no-repeat h-[2px] ml-8" />
            <p className="text-[12px] max-w-[20rem] lg:max-w-[27rem] opacity-70 text-white font-montserrat leading-5 ml-8">
              Oferim servicii foto de studio, produs și corporate. Cu
              studiourile noastre și echipamentele moderne, vă garantăm imagini
              de calitate superioară pentru a evidenția fiecare detaliu
              important.
            </p>
            <Link
              href="/portofoliu/video"
              className="bg-white ml-8 transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer w-[10rem] mt-2 px-3 py-2 text-black font-mustica-semibold items-center justify-between flex rounded-lg"
            >
              <h1>Află mai multe</h1>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiciiFotoHeader;
