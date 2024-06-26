"use client";

import MainPageHeader from "@/components/MainPageHeader";
import ServiciiVideoHeader from "@/components/ServiciiVideoHeader";
import ServiciiFotoHeader from "@/components/ServiciiFotoHeader";
import PodcastHeader from "@/components/PodcastHeader";
import RestOfMainPage from "@/components/RestOfMainPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className={`bg-black h-[100vh] scroll-snap-container`}>
        <MainPageHeader />
        <ServiciiVideoHeader />
        <ServiciiFotoHeader />
        <PodcastHeader />
        <RestOfMainPage />
        <div className="mouse-scroll" />
      </main>
    </>
  );
}
