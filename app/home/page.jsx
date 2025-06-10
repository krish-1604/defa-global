"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Aboutus from "./aboutus";
import Vision_Mission from "./vision_and_mission";
import GlobalPresence from "./global_presence";
import GoldenCircle from "../components/golden_circle";
import ProductsPage from "./productspage";
import ServicesPage from "./offer";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about");
  };

  return (
    <div className="bg-[#EEFEFF]">
      <section className="relative flex items-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/landing.png"
            alt="Industrial facility at sunset"
            fill
            className="object-cover"
            priority
          />
          {/* Mobile-only dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40 md:bg-transparent"></div>
        </div>

        <GoldenCircle />

        {/* Content Container - Centered on mobile, left-aligned on desktop */}
        <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-[3%] py-16 md:py-20 lg:py-[12.5%] w-full flex justify-center md:justify-start">
          <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] text-center md:text-left">
            {/* Heading Section */}
            <div className="pb-8 md:pb-12 lg:pb-16">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-[1.2] font-black text-darkblue font-hk pb-2 md:pb-4">
                Building quality,
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-[1.2] font-black text-darkblue font-hk">
                Delivering trust.
              </h1>
            </div>

            {/* Description Section */}
            <div className="pb-8 md:pb-12 lg:pb-16">
              <p className="text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed md:leading-loose font-hk text-white drop-shadow-lg max-w-none md:max-w-[80%] lg:max-w-[70%]">
                DeFa Global Group of Companies LLC is a UAE-based enterprise
                offering integrated solutions across industrial supply,
                mechanical systems, building materials, and engineering
                consultancy. Since our inception in 2025, we have built a strong
                reputation for reliability, technical proficiency, and
                customer-first service. Our clients span the industrial,
                infrastructure, and oil & gas sectors. We are also proud of our
                established presence in Oman since 2011 through our sister
                concerns, extending our reach and service capabilities across
                the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <Aboutus />

      {/* Vision & Mission Section */}
      <Vision_Mission />

      {/* Global Presence Section */}
      <GlobalPresence />

      <ProductsPage />

      <ServicesPage />
    </div>
  );
}
