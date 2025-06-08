"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DeFaGlobalBrochure from "./building";
import Footer from "@/app/components/footer";
import GoldenCircle from "@/app/components/golden_circle";
import Button from "@/app/components/button";

export default function towercranespage() {
  const router = useRouter();

  return (
    <div className="bg-[#EEFEFF]">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/tower-crane.jpg"
            alt="Industrial facility at sunset"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Golden Circle */}
        <GoldenCircle />

        {/* Content */}
        <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-[3%] py-16 md:py-20 lg:py-[12.5%] w-full md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
          <div className="pb-8 md:pb-12 lg:pb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-[1.2] font-black text-darkblue font-hk pb-2 md:pb-4">
              Tower Cranes &
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-[1.2] font-black text-darkblue font-hk">
              Hoists
            </h1>
          </div>

          <div className="w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] pb-8 md:pb-12 lg:pb-16">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose font-hk text-white drop-shadow-md">
              We supply durable, high-capacity tower cranes and hoists for
              large-scale building projects.
            </p>
          </div>

          <Button onClick={{}}>Explore</Button>
        </div>
      </section>

      <DeFaGlobalBrochure />
    </div>
  );
}
