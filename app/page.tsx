import Image from "next/image";
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
      <div className="bg-options py-[54px]" style={{ backgroundImage: "url(./bg-bottom.png)" }}>
        <div className="container flex flex-col gap-y-[54px]">
          <PageHeader title="Empowering Innovation, Building Digital Success" subtitle="Our team of experienced tech professionals provides expert consulting, training, and mentorship, transforming bold ideas into groundbreaking innovations.">
            <div className="w-10/12 md:w-5/12 lg:w-4/12 flex justify-between items-center">
              <Button variant="primary" size="md" className="">Get Started</Button>
              <Button variant="outline" size="md" className="">Book a Session</Button>
            </div>
          </PageHeader>
          <Testimonials />
          <Brands />
        </div>
      </div>
    </main>
  );
}
