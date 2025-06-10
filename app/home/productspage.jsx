import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../components/button";

const products = [
  {
    id: 1,
    title: "Building Materials, Tower Crane & Hoists",
    description:
      "We supply premium construction materials along with durable, high-capacity tower cranes and hoists for large-scale building projects. Whether for high-rises or industrial sites, our equipment meets international safety and performance standards.",
    image: "/images/products/tower-crane.jpg",
    imageAlt: "Construction site with tower cranes",
  },
  {
    id: 2,
    title: "Motor-Pumps",
    description:
      "Our team specializes in the repair, rewinding, and maintenance of electric motors and industrial pumps. We handle AC/DC motors, submersible pumps, and generators, ensuring efficient performance and extended equipment life.",
    image: "/images/products/motor-pump.jpg",
    imageAlt: "Industrial motor pump equipment",
  },
  {
    id: 3,
    title: "Industrial Parts",
    description:
      "We supply a wide range of mechanical and industrial parts, including:",
    items: [
      "Valves, gaskets, flanges, and fittings",
      "Bearings, seals, and drive components",
      "Custom-machined parts for pumps, compressors, and turbines",
    ],
    image: "/images/products/industrial-parts.jpg",
    imageAlt: "Blue industrial valves and fittings",
  },
];

export default function ProductsPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/products");
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#e2f8ff] overflow-hidden">
      <div className="relative z-10 flex flex-col flex-1 px-4 mx-auto max-w-[90rem] sm:px-6 lg:px-8">
        {/* Header */}
        <header className="pt-10 pb-6 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-darkblue">
            Our Best Products
          </h2>
          <div className="w-32 h-1 mx-auto mb-4 bg-golden"></div>
          <p className="max-w-4xl mx-auto text-lg text-darkblue md:text-xl">
            At DeFa Global Group of Companies LLC, we provide a wide range of
            products and services that cater to diverse industries across the
            Middle East, Asia, and beyond.
          </p>
        </header>

        {/* Products Grid */}
        <section className="grid flex-1 grid-cols-1 gap-12 pb-4 overflow-y-auto md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-[32px] shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[1.5/1]">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover rounded-t-[32px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <div className="flex flex-col items-start p-6">
                <h3 className="mb-4 text-2xl font-semibold text-golden">
                  {product.title}
                </h3>
                <p className="mb-2 text-darkblue">{product.description}</p>
                {product.items && (
                  <ul className="pl-5 space-y-2 list-disc text-darkblue">
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
        <section className="flex justify-center pt-4 pb-6">
          <Button onClick={handleClick}>View all Products</Button>
        </section>
      </div>
    </main>
  );
}
