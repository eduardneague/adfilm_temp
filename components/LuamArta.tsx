import Link from "next/link";
import React from "react";

const LuamArta = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pb-[8rem]">
        <h1 className="font-mustica-semibold text-[32px] text-center text-white mt-[7rem] mb-[6rem]">
          Luăm arta în serios <br /> și adăugăm <br /> profesionalism în tot{" "}
          <br />
          ceea ce facem!
        </h1>
        <video
          width="300"
          height="80"
          autoPlay
          muted
          loop
          src="/main_page/stars_animation.webm"
        ></video>
        <p className="text-white text-center text-[16px] font-montserrat mb-[2rem] ">
          Când 5 este prea puțin, noi <br /> aducem în cadru experiența <br />{" "}
          noastră de 6 stele.
        </p>
        <Link
          href="/portofoliu/video"
          className="bg-white justify-center items-center active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer w-[13rem] py-2 text-black font-mustica-semibold flex rounded-lg"
        >
          <h1>Contactează-ne acum</h1>
        </Link>
      </div>
    </>
  );
};

export default LuamArta;
