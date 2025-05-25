import Link from 'next/link';

const services = [
  "Installation of Industrial Machine",
  "Industrial Process Control Systems",
  "Communications Equipment Setup",
  "Mainframe & Computer Systems",
  "Irradiation & Electromedical Equipment",
  "Bowling Alley Equipment Installation",
  "Millwright Services",
  "Machine Rigging",
  "Machinery Dismantling",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#eefeff] flex flex-col items-center py-16 px-4">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-darkblue text-center mb-2">
        What <span className="text-darkblue">We Offer</span>
      </h2>
      {/* Gold underline */}
      <div className="w-32 h-1 bg-[#e2c15a] rounded-full mx-auto mb-6" />
      {/* Description */}
      <p className="text-darkblue text-lg md:text-xl text-center max-w-3xl mb-12">
        Our wide-ranging operations are structured to provide comprehensive solutions
        for your industrial needs.
      </p>
      {/* Services Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="border-4 border-[#e2c15a] rounded-2xl px-6 py-8 flex items-center justify-center text-center text-[#174072] font-semibold text-lg md:text-xl bg-[#eefeff]"
          >
            {service}
          </div>
        ))}
      </div>
      {/* View All Services Button */}
      <Link
        href="/services"
        className="inline-flex items-center gap-3 rounded-md bg-darkblue 
              px-8 py-2 text-lg font-semibold text-golden shadow-lg shadow-slate-900/25 
              transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-900/20"
      >
        View All Services &rarr;
      </Link>
    </main>
  );
}
