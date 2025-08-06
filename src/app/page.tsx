import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ValueProposition from "./components/ValueProposition";
import FeaturesSection from "./components/FeaturesSection";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import BankingMadeEasy from "./components/BankingMadeEasy";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 flex flex-col min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <FeaturesSection />
      <WhatSetsUsApart />
      <BankingMadeEasy />
      {/* <Testimonials />  */}
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}
