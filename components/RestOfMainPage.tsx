import React from "react";
import LuamArta from "@/components/LuamArta";
import CineSuntem from "@/components/CineSuntem";
import BehindTheScenes from "@/components/BehindTheScenes";
import CeaMaiBunaMotivatie from "@/components/CeaMaiBunaMotivatie";

const RestOfMainPage = () => {
  return (
    <>
      <main className="restOfMainPage-section cool-background-i-dont-have-yet flex flex-col">
        <LuamArta />
        <CineSuntem />
        <CeaMaiBunaMotivatie />
        <BehindTheScenes />
      </main>
    </>
  );
};

export default RestOfMainPage;
