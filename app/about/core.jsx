import Image from "next/image";

const values = [
  {
    title: "Integrity",
    description: "We act with honesty and honor our commitments",
    image: "/images/about/integrity.png",
  },
  {
    title: "Quality",
    description: "We strive for excellence in every product and service",
    image: "/images/about/quality.jpg",
  },
  {
    title: "Customer Focus",
    description: "Our clients' success is our top priority",
    image: "/images/about/customer-focus.jpg",
  },
  {
    title: "Adaptability",
    description: "We evolve with industry trends and client needs",
    image: "/images/about/adaptability.jpg",
  },
  {
    title: "Partnership",
    description: "We believe in building lasting business relationships",
    image: "/images/about/partnership.jpg",
  },
];

export default function CoreValuesPage() {
  return (
    <section className="min-h-screen bg-[#e2f8ff] py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-darkblue mb-3 font-hk">
            Core Values
          </h1>
          <div className="w-20 h-1 bg-golden rounded mx-auto" />
        </div>

        {/* Grid - All 5 items centered with 3-column layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl place-items-center">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl shadow-md flex flex-col overflow-hidden"
              >
                <div className="relative w-full h-40 sm:h-44 md:h-48">
                  <Image
                    src={val.image}
                    alt={val.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-golden mb-2 font-hk">
                    {val.title}
                  </h3>
                  <p className="text-darkblue font-hk">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}