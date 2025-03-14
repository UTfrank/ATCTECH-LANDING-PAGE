import Image from "next/image";
import Header from "@/components/Header";
import About from "@/components/About";
import LearnApproach from "@/components/LearnApproach";
import WorkProcess from "@/components/WorkProcess";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <main className="w-full h-auto">
      <Header />
      <About />
      <LearnApproach />
      <WorkProcess />
      <Statistics />
    </main>
  );
}
