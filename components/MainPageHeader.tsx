"use client";

import React from "react";
import Link from "next/link";
import { useWindowSize } from "@/hooks/useWindowSize";
import { motion } from "framer-motion";

const MainPageHeader = () => {
  const windowSize = useWindowSize();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="mainBackground select-none 5xl:bg-[center_top_-30rem] lg:bg-[center_top_-9rem] xl:bg-[center_top_-10rem] 2xl:bg-[center_top_-19rem] w-full flex flex-col text-center relative"
    >
      {windowSize.width < 1024 ? (
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, times: [0, 1] }}
          className="text-5xl font-mustica-medium text-white z-[10] mt-[19rem] 400px:mt-[25rem]"
        >
          Studio <br /> de producție
        </motion.h1>
      ) : (
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, times: [0, 1] }}
          className="text-8xl font-mustica-medium text-white z-[10] mt-[30rem] 2xl:mt-[35rem] mb-[1rem] 3xl:mt-[50rem] 1440p:mt-[65rem] 4xl:mt-[70rem] 5xl:mt-[80rem] 4k:mt-[110rem] "
        >
          Studio de producție
        </motion.h1>
      )}

      <div className="flex flex-col lg:flex-row gap-5 mt-10 z-[10] justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, times: [0, 1] }}
        >
          <Link
            href="/portofoliu/video"
            className="py-3 px-7 bg-gray-300 text-white bg-transparent hover:bg-white lg:hover:bg-transparent hover:text-black lg:text-black lg:active:bg-adfilm-purple lg:bg-white active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple lg:hover:text-white bg-opacity-40 rounded-lg flex justify-center items-center duration-400 transition-all border-white border-2 hover:bg-transparent"
          >
            <p className="font-mustica-medium text-xl">Video</p>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, times: [0, 1] }}
        >
          <Link
            href="/portofoliu/foto"
            className="py-3 px-7 bg-gray-300 text-white bg-transparent hover:bg-white lg:hover:bg-transparent hover:text-black lg:text-black lg:active:bg-adfilm-purple active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple lg:bg-white lg:hover:text-white bg-opacity-40 rounded-lg flex justify-center items-center duration-400 transition-all border-white border-2 hover:bg-transparent"
          >
            <p className="font-mustica-medium text-xl">Foto</p>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, times: [0, 1] }}
        >
          <Link
            href="/portofoliu/foto"
            className="py-3 px-7 text-white bg-gray-300 bg-transparent hover:bg-white lg:hover:bg-transparent hover:text-black lg:bg-white lg:active:bg-adfilm-purple active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple lg:text-black lg:hover:text-white bg-opacity-40 rounded-lg flex justify-center items-center duration-400 transition-all border-white border-2 hover:bg-transparent"
          >
            <p className="font-mustica-medium text-xl">Podcast</p>
          </Link>
        </motion.div>
      </div>
      <div className="w-full absolute bottom-0 right-0 bg-gradient-to-t from-black to-transparent h-[35rem] lg:h-[41rem]" />
      <div className="w-full absolute top-0 right-0 bg-gradient-to-b from-black to-transparent h-[35rem] lg:h-[15rem]" />
      <div className="mouse-scroll" />
    </motion.div>
  );
};

export default MainPageHeader;
