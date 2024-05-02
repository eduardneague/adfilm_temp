"use client";

import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "@/hooks/useWindowSize";
import { motion } from "framer-motion";

export default function Home() {
  const windowSize = useWindowSize();

  return (
    <main className="bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="mainBackground select-none lg:bg-[center_top_-9rem] xl:bg-[center_top_-20rem] md:h-[55rem] w-full h-[47rem] bg-center flex flex-col text-center relative"
      >
        {windowSize.width < 1024 ? (
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, times: [0, 1] }}
            className="text-5xl font-mustica-medium text-white z-[10] mt-[19rem] "
          >
            Studio <br /> de producție
          </motion.h1>
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, times: [0, 1] }}
            className="text-8xl font-mustica-medium text-white z-[10] mt-[30rem] xl:mt-[34rem] mb-[1rem] "
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
              className="py-3 px-7 bg-gray-300 text-white lg:text-black lg:bg-white lg:hover:text-white bg-opacity-40 rounded-lg flex justify-center items-center duration-400 transition-all headerbuttonshover"
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
              className="py-3 px-7 bg-gray-300 text-white lg:text-black lg:bg-white lg:hover:text-white bg-opacity-40 rounded-lg flex justify-center items-center duration-400 transition-all headerbuttonshover"
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
              className="py-3 px-7 text-white bg-gray-300 lg:bg-white lg:text-black lg:hover:text-white bg-opacity-40 rounded-lg flex justify-center items-center duration-400 transition-all headerbuttonshover"
            >
              <p className="font-mustica-medium text-xl">Podcast</p>
            </Link>
          </motion.div>
        </div>

        <div className="w-full absolute bottom-0 right-0 bg-gradient-to-t from-black to-transparent h-[35rem] lg:h-[41rem]" />
      </motion.div>
    </main>
  );
}
