import Image from 'next/image';
import WhoWeAre from './who';
import WhatWeDo from './what';
import Vision_Mission from '../home/vision_and_mission';
import CoreValuesPage from './core';
import WhyChooseUs from './why';
import Footer from '../home/footer';


export default function AboutPage() {
  return (
    <div className="bg-darkblue">
    <section className="min-h-screen  flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 mx-auto">About Us</h1>
          <div className="h-1 w-32 bg-[#e2c15a] rounded-full mb-6 mx-auto" />
          <p className="text-center text-white text-lg md:text-xl mb-6 max-w-2xl">
            DeFa Global Group of Companies LLC is a UAE-based multi-sectoral enterprise with a strong foundation in industrial supply, mechanical engineering, and building material solutions. Established in 2025, DeFa Global has quickly earned a reputation for reliability, technical expertise, and customer-driven service.
          </p>
          <p className="text-center text-white text-lg md:text-xl max-w-2xl">
            With operations spanning across the United Arab Emirates and a well-established presence in Oman since 2011, we serve a diverse clientele in the construction, oil & gas, energy, and infrastructure sectors. Through our affiliated companies in Oman—Better Choice International LLC, Magic East Global SPC, and International Oud SPC—we deliver regionally integrated solutions that reflect both scale and specialization.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          {/* <div className="w-[420px] h-[420px] rounded-full overflow-hidden shadow-xl border-4 border-[#004884] bg-white/10">
            <Image
              src=""
              alt="DeFa Global Team"
              width={840}
              height={840}
              className="object-cover w-full h-full"
              priority
            />
          </div> */}
        </div>
      </div>
    </section>
    <WhoWeAre/>
    <WhatWeDo/>
    <Vision_Mission/>
    <CoreValuesPage/>
    <WhyChooseUs/>
    </div>
  );
}
