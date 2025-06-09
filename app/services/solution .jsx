import Image from "next/image";

const solutions = [
  {
    title: "Installation of Industrial Machinery",
    description:
      "Setup and commissioning of heavy equipment for various industrial applications.",
    points: [
      "Precision installation",
      "Safety compliance",
      "Performance testing",
    ],
  },
  {
    title: "Industrial Process Control Systems",
    description:
      "Installation and configuration of automation and control units for industrial processes.",
    points: [
      "System integration",
      "Programming services",
      "Monitoring solutions",
    ],
  },
  {
    title: "Engineering Design & Consulting",
    description:
      "Technical planning and design services across various engineering disciplines.",
    points: [
      "Mechanical engineering",
      "Civil engineering",
      "Electrical engineering",
    ],
  },
  {
    title: "Machinery Dismantling",
    description:
      "Safe removal and breakdown of large industrial setups with minimal disruption.",
    points: [
      "Systematic disassembly",
      "Component preservation",
      "Site cleanup",
    ],
  },
  {
    title: "Millwright Services",
    description:
      "Precision assembly and alignment of machinery for optimal performance.",
    points: [
      "Equipment alignment",
      "Preventive maintenance",
      "Troubleshooting",
    ],
  },
  {
    title: "Project Management",
    description:
      "Comprehensive oversight of engineering and construction projects from planning to completion.",
    points: ["Schedule management", "Resource allocation", "Quality control"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#e2f8ff] py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-darkblue mb-3">
          Our Solutions
        </h1>
        <div className="w-24 h-1 bg-golden rounded mx-auto mt-2" />
      </div>
      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((sol) => (
          <div
            key={sol.title}
            className="bg-white rounded-2xl shadow-sm p-7 flex flex-col gap-3"
          >
            <h2 className="text-xl font-semibold text-golden font-hk mb-1">
              {sol.title}
            </h2>
            <p className="text-darkblue mb-2 font-hk">{sol.description}</p>
            <ul className="space-y-1">
              {sol.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-darkblue font-hk"
                >
                  <div className="w-5 h-5 mr-2 relative flex-shrink-0">
                    <Image
                      src="/images/tick.svg"
                      alt="Checkmark"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
