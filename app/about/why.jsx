// app/why-choose-us/page.jsx
"use client";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen bg-[#EEFEFF] py-44  px-4">
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#15508b] mb-3">
          Why Choose Us
        </h1>
        <div className="w-20 h-1 bg-[#e2c36b] rounded mx-auto mb-8" />
      </div>

      {/* Content with Increased Gap */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-20">
        {/* Left: Text */}
        <div className="flex-1">
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 relative flex-shrink-0">
                <Image
                  src="/images/tick.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-[#15508b] text-xl">
                Extensive experience in industrial procurement and trading
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 relative flex-shrink-0">
                <Image
                  src="/images/tick.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-[#15508b] text-xl">
                Strong regional and international supplier networks
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 relative flex-shrink-0">
                <Image
                  src="/images/tick.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-[#15508b] text-xl">
                Technical capabilities in equipment maintenance and support
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 relative flex-shrink-0">
                <Image
                  src="/images/tick.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-[#15508b] text-xl">
                Commitment to timely delivery, compliance, and customer
                satisfaction
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 relative flex-shrink-0">
                <Image
                  src="/images/tick.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-[#15508b] text-xl">
                Strategic UAE location with global logistics connectivity
              </span>
            </li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-md h-80 md:h-96 relative rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/about/why.jpg"
              alt="Logistics and global connectivity"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
