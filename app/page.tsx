import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CommunityPartners from "./components/CommunityPartners";
import WaitlistSection from "./components/WaitlistSection";

export default function Home() {
  // Sample partner logos - replace with your actual partner logos
  const partnerLogos = [
    { src: "/images/capitol_city_robotics.png", alt: "Capitol City Robotics" },
    { src: "/images/dpr.png", alt: "DPR" },
    // Add more partner logos here as needed
  ];

  return (
    <>
      <HeroSection />
      <AboutSection />
      <CommunityPartners logos={partnerLogos} />
      <WaitlistSection />
    </>
  );
}
