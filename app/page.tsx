import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Venues from "@/components/Venues";
import Steps from "@/components/Steps";
import Programs from "@/components/Programs";
import Trials from "@/components/Trials";
import Footer from "@/components/Footer";
import NeedToKnow from "@/components/NeedToKnow";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <NeedToKnow />
      <Venues />
      <Steps />
      <Programs />
      <Trials />
      <Footer />
    </>
  );
}