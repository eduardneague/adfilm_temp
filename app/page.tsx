import MainPageHeader from "@/components/MainPageHeader";
import ServiciiVideoHeader from "@/components/ServiciiVideoHeader";
import ServiciiFotoHeader from "@/components/ServiciiFotoHeader";

export default function Home() {
  return (
    <main className="bg-black scroll-snap-container">
      <MainPageHeader />
      <ServiciiVideoHeader />
      <ServiciiFotoHeader />
    </main>
  );
}
