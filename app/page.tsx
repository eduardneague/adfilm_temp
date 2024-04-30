import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="mainBackground w-full h-[47rem] bg-center flex flex-col text-center relative">
        <h1 className="text-5xl font-mustica-medium text-white z-[10] mt-[19rem] ">
          Studio <br /> de producție
        </h1>

        <div className="flex flex-col gap-5 mt-10 z-[10] justify-center items-center">
          <Link
            href="/portofoliu/video"
            className="py-3 px-7 bg-gray-300 bg-opacity-40 rounded-lg flex justify-center items-center duration-400 transition-all headerbuttonshover"
          >
            <p className="text-white font-mustica-medium text-xl">Video</p>
          </Link>
          <Link
            href="/portofoliu/foto"
            className="py-3 px-7 bg-gray-300 bg-opacity-40 rounded-lg flex justify-center items-center duration-400 transition-all headerbuttonshover"
          >
            <p className="text-white font-mustica-medium text-xl">Foto</p>
          </Link>
          <Link
            href="/portofoliu/foto"
            className="py-3 px-7 bg-gray-300 bg-opacity-40 rounded-lg flex justify-center items-center duration-400 transition-all headerbuttonshover"
          >
            <p className="text-white font-mustica-medium text-xl">Podcast</p>
          </Link>
        </div>

        <div className="w-full absolute bottom-0 right-0 bg-gradient-to-t from-black to-transparent h-[41rem] " />
      </div>
    </main>
  );
}
