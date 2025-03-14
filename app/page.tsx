import Image from "next/image";
import Header from "@/components/Header";
import About from "@/components/About";
import LearnApproach from "@/components/LearnApproach";

export default function Home() {
  return (
    <main className="w-full h-auto">
      <Header />
      <About />
      <LearnApproach />
    </main>
  );
}
