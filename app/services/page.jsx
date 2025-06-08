import Image from "next/image";
import SolutionsPage from "./solution ";
import Footer from "../components/footer";

const servicesData = [
  {
    id: "industrial-machinery",
    title: "Industrial Machinery & Equipment",
    description:
      "We offer installation, dismantling, rigging, and servicing of industrial machinery. Our team ensures reliable and efficient handling of equipment throughout its lifecycle.",
    imageUrl: "/images/services/industrial.png",
    imageAlt: "Technician working on industrial machinery",
    keyServices: [
      "Installation of Industrial Machinery",
      "Industrial Process Control Systems",
      "Machinery Dismantling",
      "Machine Rigging",
      "Equipment Maintenance",
    ],
  },
  {
    id: "mechanical-engineering",
    title: "Mechanical & Engineering Services",
    description:
      "Comprehensive mechanical support including installation, millwright services, process piping, and custom solutions. We also specialize in carbon steel seamless pipes, fittings, flanges, valves, and alloy materials for demanding industries.",
    imageUrl: "/images/services/mechanical.png",
    imageAlt: "Engineer working on pipes",
    keyServices: [
      "Millwright Services",
      "Process Piping",
      "Custom Mechanical Solutions",
      "Equipment Alignment",
      "Preventive Maintenance",
    ],
  },
  {
    id: "engineering-design",
    title: "Engineering Design & Consultancy",
    description:
      "Engineering and project consultancy for mechanical, electrical, and civil systems. Services include design, safety planning, equipment selection, and project management.",
    imageUrl: "/images/services/engineering.png",
    imageAlt: "Engineers reviewing blueprints",
    keyServices: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Systems Engineering",
      "Project Management",
    ],
  },
  {
    id: "building-materials",
    title: "Building Materials & Machinery Supply",
    description:
      "We provide a reliable supply of essential building materials and construction machinery, including tower cranes, equipment rentals, and site support tools. All products are sourced from trusted manufacturers to ensure safety, durability, and compliance with industry standards.",
    imageUrl: "/images/services/building.png",
    imageAlt: "Tower cranes at construction site",
    keyServices: [
      "Construction Machinery Supply",
      "Building Materials Procurement",
      "Equipment Rental",
      "Site Support Tools",
    ],
  },
  {
    id: "scaffolding-formwork",
    title: "Scaffolding & Formwork Supply",
    description:
      "We supply scaffolding and formwork systems suitable for construction and industrial applications. Available for sale or rental, our systems are designed to meet safety and performance standards.",
    imageUrl: "/images/services/scaffolding.png",
    imageAlt: "Scaffolding and formwork at construction site",
    keyServices: [
      "Scaffolding Systems",
      "Formwork Solutions",
      "Installation Services",
      "Safety Inspections",
      "Custom Configurations",
    ],
  },
  {
    id: "general-trading",
    title: "General & Online Trading",
    description:
      "Licensed for global general trading and e-commerce, supporting international supply chains through flexible procurement and logistics channels.",
    imageUrl: "/images/services/general.png",
    imageAlt: "Shipping containers at port",
    keyServices: [
      "International Procurement",
      "Supply Chain Management",
      "Logistics Solutions",
      "Import/Export Services",
      "E-commerce Solutions",
    ],
  },
];

export default function Services() {
  return (
    <section className="w-full">
      <div className="bg-darkblue pb-20 pt-40 px-6 md:px-10">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-white font-hk text-center max-w-3xl mx-auto">
            Comprehensive solutions for industrial, construction, and
            engineering needs across the Middle East and beyond.
          </p>
        </div>
      </div>

      <div className="bg-[#EEFEFF] py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-black font-hk text-darkblue text-center mb-4">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-12"></div>

          <div className="space-y-12">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="flex flex-col sm:flex-row items-start"
              >
                <div className="w-full sm:w-2/5 lg:w-1/3 mb-6 sm:mb-0">
                  <Image
                    src={service.imageUrl || "/placeholder.svg"}
                    alt={service.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-64 sm:h-auto object-cover rounded-lg"
                  />
                </div>

                <div className="sm:pl-8 flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold font-hk text-darkblue mb-3">
                    {service.title}
                  </h3>
                  <p className="text-darkblue font-thin font-hk mb-4 text-sm md:text-base">
                    {service.description}
                  </p>
                  <p className="text-md font-semibold font-hk text-darkblue mb-2">
                    Key Services:
                  </p>
                  <ul className="list-none space-y-2">
                    {service.keyServices.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 mr-2 mt-1 relative flex-shrink-0">
                          <Image
                            src="/images/tick.svg"
                            alt="Checkmark"
                            width={20}
                            height={20}
                          />
                        </div>
                        <span className="text-darkblue font-hk text-sm md:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SolutionsPage />
    </section>
  );
}
