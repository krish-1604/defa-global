import Image from "next/image";
import WhoWeAre from "./who";
import WhatWeDo from "./what";
import Vision from "./vision";
import CoreValuesPage from "./core";
import WhyChooseUs from "./why";

export default function AboutPage() {
  return (
    <div className="bg-darkblue">
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-full w-full h-auto md:h-screen flex flex-col md:flex-row items-stretch">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-center text-center px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              About Us
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-[#e2c15a] rounded-full mb-6" />
            <p className="text-white text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-2xl leading-relaxed">
              DeFa Global Group of Companies LLC is a UAE-based multi-sectoral
              enterprise with a strong foundation in industrial supply,
              mechanical engineering, and building material solutions.
              Established in 2025, DeFa Global has quickly earned a reputation
              for reliability, technical expertise, and customer-driven service.
            </p>
            <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              With operations spanning across the United Arab Emirates and a
              well-established presence in Oman since 2011, we serve a diverse
              clientele in the construction, oil & gas, energy, and
              infrastructure sectors. Through our affiliated companies in
              Oman—Better Choice International LLC, Magic East Global SPC, and
              International Oud SPC—we deliver regionally integrated solutions
              that reflect both scale and specialization.
            </p>
          </div>

          {/* Right: Image - Hidden on mobile, visible from md and up */}
          <div className="hidden md:flex flex-1 relative h-full min-h-screen overflow-hidden">
            <Image
              src="/images/about/about.png"
              alt="DeFa Global Professional Team"
              fill
              className="object-cover object-left"
              style={{
                clipPath: "ellipse(100% 75% at 100% 50%)",
              }}
              priority
            />
          </div>
        </div>
      </section>
      <WhoWeAre />
      <WhatWeDo />
      <Vision/>
      <CoreValuesPage />
      <WhyChooseUs />
    </div>
  );
}
