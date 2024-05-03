"use client";

import MainPageHeader from "@/components/MainPageHeader";
import ServiciiVideoHeader from "@/components/ServiciiVideoHeader";
import ServiciiFotoHeader from "@/components/ServiciiFotoHeader";
import PodcastHeader from "@/components/PodcastHeader";
import RestOfMainPage from "@/components/RestOfMainPage";
import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const scroll = new LocomotiveScroll();

  return (
    <>
      <main className={`bg-black h-[100vh] data-scroll-container`}>
        <MainPageHeader />
        <ServiciiVideoHeader />
        <ServiciiFotoHeader />
        <PodcastHeader />
        <RestOfMainPage />
      </main>
    </>
  );
}
