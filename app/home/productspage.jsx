import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    title: "Building Materials, Tower Crane & Hoists",
    description: "We supply premium construction materials along with durable, high-capacity tower cranes and hoists for large-scale building projects. Whether for high-rises or industrial sites, our equipment meets international safety and performance standards.",
    image: "/api/placeholder/400/300",
    imageAlt: "Construction site with tower cranes"
  },
  {
    id: 2,
    title: "Motor-Pumps",
    description: "Our team specializes in the repair, rewinding, and maintenance of electric motors and industrial pumps. We handle AC/DC motors, submersible pumps, and generators, ensuring efficient performance and extended equipment life.",
    image: "/api/placeholder/400/300",
    imageAlt: "Industrial motor pump equipment"
  },
  {
    id: 3,
    title: "Industrial Parts",
    description: "We supply a wide range of mechanical and industrial parts, including:",
    items: [
      "Valves, gaskets, flanges, and fittings",
      "Bearings, seals, and drive components",
      "Custom-machined parts for pumps, compressors, and turbines"
    ],
    image: "/api/placeholder/400/300",
    imageAlt: "Blue industrial valves and fittings"
  }
];

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen bg-[#e2f8ff] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 size-80 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-64 bg-gradient-to-tr from-amber-200/20 to-yellow-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="pt-16 pb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-4">Our Best Products</h2>
          <div className="w-32 h-1 bg-golden mx-auto mb-8"></div>
          <p className="text-darkblue max-w-4xl mx-auto text-lg md:text-xl">
            At DeFa Global Group of Companies LLC, we provide a wide range of products and services that cater to diverse 
            industries across the Middle East, Asia, and beyond.
          </p>
        </header>

        {/* Products Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-[32px] shadow-lg overflow-hidden flex flex-col"
            >
              {/* Full-width image at the top */}
              <div className="relative w-full aspect-[2/1]">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover rounded-t-[32px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col items-start">
                <h3 className="text-2xl font-semibold text-golden bg-clip-text mb-6">
                  {product.title}
                </h3>
                <p className="text-darkblue">{product.description}</p>
                {product.items && (
                  <ul className="text-darkblue space-y-4 list-disc pl-5">
                    {product.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="pb-20 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 rounded-md bg-darkblue 
              px-8 py-2 text-lg font-semibold text-golden shadow-lg shadow-slate-900/25 
              transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-900/20"
          >
            View All Products
            <svg
              className="size-5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </section>
      </div>
    </main>
  );
}
