"use client";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Tower Cranes & Hoists",
    description: "We supply durable, high-capacity tower cranes and hoists for large-scale building projects.",
    image: "/images/tower-crane.jpg",
    link: "/products/tower", 
  },
  {
    title: "Motor-pumps",
    description: "Our team specializes in the repair, rewinding, and maintenance of electric motors and industrial pumps.",
    image: "/images/motor-pump.jpg",
    link: "/motor-pumps",
  },
  {
    title: "Industrial Parts",
    description: "We supply a wide range of mechanical and industrial parts, including valves, gaskets, flanges, and fittings.",
    image: "/images/industrial-parts.jpg",
    link: "/industrial-parts",
  },
  {
    title: "Construction Materials",
    description: "Supply of sand, gravel, cement, and general materials for building projects.",
    image: "/images/construction-materials.jpg",
    link: "/construction-materials",
  },
  {
    title: "Fittings & Fixtures",
    description: "Wholesale of building installation accessories for plumbing, electrical, and more.",
    image: "/images/fittings-fixtures.jpg",
    link: "/fittings-fixtures",
  },
  {
    title: "Hand Tools",
    description: "Distribution of manual tools like hammers, saws, screwdrivers for construction and maintenance.",
    image: "/images/hand-tools.jpg",
    link: "/hand-tools",
  },
];

export default function ProductsCategory() {
  return (
    <div className="min-h-screen bg-[#eafdff] py-48 px-4">
      <div className="max-w-full">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#15508b] text-center mb-4">
          Product Categories
        </h1>
        <p className="text-[#15508b] text-center max-w-2xl mx-auto mb-10 text-base md:text-lg">
          At DeFa Global Group of Companies LLC, we provide a wide range of products that cater to diverse industries across the Middle East, Asia, and beyond.
        </p>
        
        {/* Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl shadow-md flex flex-col overflow-hidden border border-[#f1f5f9]"
            >
              <div className="relative w-full h-44">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={idx < 3}
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[#e2c36b] font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-[#15508b] text-sm mb-6 flex-1">{product.description}</p>
                {product.link ? (
                  <Link href={product.link}>
                    <button className="mt-auto w-full border border-[#e2c36b] text-[#e2c36b] rounded-lg py-2 font-medium transition hover:bg-[#e2c36b]/10 flex items-center justify-center gap-2">
                      View details
                      <span className="text-lg">→</span>
                    </button>
                  </Link>
                ) : (
                  <button className="mt-auto w-full border border-[#e2c36b] text-[#e2c36b] rounded-lg py-2 font-medium transition hover:bg-[#e2c36b]/10 flex items-center justify-center gap-2 cursor-not-allowed opacity-70">
                    Coming soon
                    <span className="text-lg">→</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}