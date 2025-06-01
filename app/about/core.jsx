// app/core-values/page.jsx
"use client";
import Image from "next/image";

const values = [
  {
    title: "Integrity",
    description: "We act with honesty and honor our commitments",
    image: "/images/integrity.png", // Place the correct images in /public/images/
  },
  {
    title: "Quality",
    description: "We strive for excellence in every product and service",
    image: "/images/quality.jpg",
  },
  {
    title: "Customer Focus",
    description: "Our clients’ success is our top priority",
    image: "/images/customer-focus.jpg",
  },
  {
    title: "Adaptability",
    description: "We evolve with industry trends and client needs",
    image: "/images/adaptability.jpg",
  },
  {
    title: "Partnership",
    description: "We believe in building lasting business relationships",
    image: "/images/partnership.jpg",
  },
];

export default function CoreValuesPage() {
  return (
    <section className="min-h-screen bg-[#e2f8ff] py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#15508b] mb-3">
            Core Values
          </h1>
          <div className="w-20 h-1 bg-[#e2c36b] rounded mx-auto" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Top Row */}
          {values.slice(0, 3).map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-2xl shadow-md flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-36">
                <Image
                  src={val.image}
                  alt={val.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  priority
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#e2c36b] mb-2">{val.title}</h3>
                <p className="text-[#15508b]">{val.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {values.slice(3).map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-2xl shadow-md flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-36">
                <Image
                  src={val.image}
                  alt={val.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#e2c36b] mb-2">{val.title}</h3>
                <p className="text-[#15508b]">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
