"use client";

import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import useScroll from "@/hooks/useScroll";
import { cn } from "@/utils/utils";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { otherData } from "@/utils/otherData";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdown: any = useRef(null);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!isOpen) return;
    function handleClick(event: any) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen]);

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-purple-900`,
        {
          "border-b border-black bg-black backdrop-blur-lg": scrolled,
          "border-b border-black bg-black": selectedLayout,
        }
      )}
    >
      <div className="fixed z-10 w-full h-16 flex justify-between items-center px-8 pt-6 navbar gradient navbarBackground">
        <Link href="/">
          <Image
            src="assets/adfilm_logo.svg"
            width={96}
            height={22.33}
            className="select-none cursor-pointer"
            alt="adfilm Logo"
            draggable="false"
          />
        </Link>

        <div className="hidden lg:flex gap-6 select-none items-center">
          <Link href="/">
            <div
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center gap-2 py-3 px-5 transition-all hover:bg-white hover:shadow-glow  hover:shadow-white hover:text-black text-white duration-100 border-white rounded cursor-pointer border"
            >
              <p className="font-montserrat text-md">Home</p>
            </div>
          </Link>

          <div
            onClick={() => setIsOpen((prevOpen) => !prevOpen)}
            ref={dropdown}
            className={`flex justify-center relative ${
              isOpen === true
                ? "bg-white text-black"
                : "bg-transparent hover:bg-white hover:shadow-glow text-white hover:shadow-white hover:text-black"
            } items-center gap-2 py-3 px-5 transition-all duration-100 border-white rounded cursor-pointer border`}
          >
            <p className="font-montserrat text-md">Portofoliu</p>
            <IoIosArrowDown className="text-xl" />

            {isOpen === true ? (
              <>
                <div className="absolute top-[3.8rem] cursor-default right-0 p-5 text-white rounded-lg border border-white flex flex-col gap-2 w-full">
                  <Link href="/portofoliu/podcast">
                    <p
                      className="font-montserrat text-md hover:font-bold transition-all duration-75"
                      onClick={() => setIsOpen(false)}
                    >
                      Podcast
                    </p>
                    <div className="navMenuLine h-[1.5px] w-full bg-no-repeat mt-1" />
                  </Link>

                  <Link href="/portofoliu/foto">
                    <p
                      className="font-montserrat text-md hover:font-bold transition-all duration-75"
                      onClick={() => setIsOpen(false)}
                    >
                      Foto
                    </p>
                    <div className="navMenuLine h-[1.5px] w-full bg-no-repeat mt-1" />
                  </Link>

                  <Link href="/portofoliu/video">
                    <p
                      className="font-montserrat text-md hover:font-bold transition-all duration-75"
                      onClick={() => setIsOpen(false)}
                    >
                      Video
                    </p>
                  </Link>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <Link href="/contact">
            <div
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center gap-2 py-3 px-5 transition-all hover:bg-white hover:shadow-glow  hover:shadow-white hover:text-black text-white duration-100 border-white rounded cursor-pointer border"
            >
              <p className="font-montserrat text-md">Contact</p>
            </div>
          </Link>
          <Link href="tel:+40752294888">
            <div className="phonenumber thingy flex items-center justify-center phoneBackground h-[40px] ">
              <div className="h-full w-[1px] shadow-glow bg-white mr-3" />
              <p className="font-montserrat text-white">
                {otherData.phoneNumber}
              </p>
              <Image
                src="assets/phone_icon.svg"
                width={20}
                height={20}
                className="select-none cursor-pointer ml-5"
                alt="adfilm Logo"
                draggable="false"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
