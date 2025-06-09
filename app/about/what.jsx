import Image from "next/image";

const services = [
  {
    title: "Industrial Parts & Mechanical Equipment",
    image: "/images/about/industrial-parts.png",
    description:
      "Supplying precision-engineered parts including valves, gaskets, motors, seals, and air solutions for industrial applications.",
  },
  {
    title: "Construction Equipment & Building Materials",
    image: "/images/about/construction.jpg",
    description:
      "Providing top-tier building materials along with tower cranes, hoists, scaffolding, and site infrastructure equipment.",
  },
  {
    title: "Motor & Pump Services",
    image: "/images/about/motor.jpg",
    description:
      "Offering specialized repairing, rewinding, and maintenance services for electric motors, pumps, and rotating machinery.",
  },
  {
    title: "International Trading",
    image: "/images/about/trading.jpg",
    description:
      "Exporting high-demand commodities such as fertilizers, coir products, and limestone, backed by reliable logistics and compliance.",
  },
];

export default function WhatWeDo() {
  return (
    <main className="min-h-screen bg-[#E2F8FF] py-40 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-darkblue text-center mb-2">
          What <span className="text-darkblue">We Do</span>
        </h1>
        <div className="h-1 w-32 bg-golden rounded-full mx-auto mb-8" />
        <p className="text-darkblue text-lg md:text-xl text-center mb-12">
          Our wide-ranging operations are structured into four main verticals:
        </p>
      </div>

      {/* Cards Grid Section - FULL WIDTH */}
      <section className=" px-2 sm:px-4 md:px-6 lg:px-8">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 lg:px-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md flex flex-col overflow-hidden"
            >
              <div className="w-full h-60 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={idx === 0}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-golden mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-darkblue text-base text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
