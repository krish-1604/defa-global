"use client"

import Image from "next/image"

const servicesData = [
  {
    id: "industrial-machinery",
    title: "Industrial Machinery & Equipment",
    description:
      "We offer installation, dismantling, rigging, and servicing of industrial machinery. Our team ensures reliable and efficient handling of equipment throughout its lifecycle.",
    imageUrl: "/placeholder.svg?height=400&width=600",
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
    imageUrl: "/placeholder.svg?height=400&width=600",
    imageAlt: "Engineer working on pipes",
    keyServices: [
      "Millwright Services",
      "Process Piping",
      "Custom Mechanical Solutions",
      "Equipment Alignment",
      "Preventive Maintenance",
    ],
  },
]

export default function Services() {
  return (
    <section className="w-full">
      <div className="bg-darkblue pb-20 pt-40 px-6 md:px-10">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-white font-hk text-center max-w-3xl mx-auto">
            Comprehensive solutions for industrial, construction, and engineering needs across the Middle East and
            beyond.
          </p>
        </div>
      </div>

      <div className="bg-[#EEFEFF] py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-black font-hk text-darkblue text-center mb-4">Our Core Services</h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-12"></div>

          <div className="space-y-12">
            {servicesData.map((service) => (
              <div key={service.id} className="flex flex-col sm:flex-row items-start">
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
                  <h3 className="text-xl md:text-2xl font-semibold font-hk text-darkblue mb-3">{service.title}</h3>
                  <p className="text-darkblue font-thin font-hk mb-4 text-sm md:text-base">{service.description}</p>
                  <p className="text-md font-semibold font-hk text-darkblue mb-2">Key Services:</p>
                  <ul className="list-none space-y-2">
                    {service.keyServices.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-golden mr-2 mt-1">
                          <svg
                            className="w-5 h-5 inline"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-darkblue font-hk text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


