


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
    points: [
      "Schedule management",
      "Resource allocation",
      "Quality control",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#e2f8ff] py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#004884] mb-3">
          Our Solutions
        </h1>
        <div className="w-24 h-1 bg-[#e2c36b] rounded mx-auto mt-2" />
      </div>
      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((sol) => (
          <div
            key={sol.title}
            className="bg-white rounded-2xl shadow-sm p-7 flex flex-col gap-3"
          >
            <h2 className="text-xl font-semibold text-[#ccb86a] mb-1">
              {sol.title}
            </h2>
            <p className="text-[#004884] mb-2">{sol.description}</p>
            <ul className="space-y-1">
              {sol.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-[#004884]">
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
