import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import AboutContent from "@/components/About";
import LearnApproach from "@/components/LearnApproach";
import WorkProcess from "@/components/WorkProcess";
import Statistics from "@/components/Statistics";
import LatestJobs from "@/components/LatestJobs";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import Testimonials from "@/components/Testimonials";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <main className="w-full h-auto">
      <Header />
      <AboutContent />
      <LearnApproach />
      <WorkProcess />
      <Statistics />
      <LatestJobs />
      <div
        className="bg-options py-[54px]"
        style={{ backgroundImage: "url(./bg-bottom.png)" }}
      >
        <div className="container flex flex-col gap-y-[54px]">
          <PageHeader
            title="Empowering Innovation, Building Digital Success"
            subtitle="Our team of experienced tech professionals provides expert consulting, training, and mentorship, transforming bold ideas into groundbreaking innovations."
          >
            <div className="w-10/12 md:w-5/12 lg:w-4/12 flex justify-between items-center">
              <Link href="/services" className="flex items-center justify-center font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer h-fit bg-white text-[#710000] hover:bg-[#710000] hover:text-white focus:ring-[#710000] px-[16px] lg:px-[32px] py-[8px] lg:py-[15px] text-sm lg:text-base">
                Get Started
              </Link>
              <Link href="/contact" className="flex items-center justify-center font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer h-fit border border-white text-white hover:bg-transparent focus:ring-[#710000] px-[16px] lg:px-[32px] py-[8px] lg:py-[15px] text-sm lg:text-base">
                Book a Session
              </Link>
            </div>
          </PageHeader>
          <Testimonials />
          <Brands />
        </div>
      </div>
    </main>
  );
}
