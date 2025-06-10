import { Building2, MapPin, Globe } from "lucide-react";
export default function GlobalPresence() {
  return (
    <div className="min-h-screen bg-[#D5F5FF] md:pt-32 pt-16 pb-8 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="my-4 text-4xl font-bold md:text-5xl text-darkblue">
            Global Presence
          </h2>
          <div className="w-32 h-1 mx-auto mb-8 bg-golden"></div>
          <p className="max-w-4xl mx-auto text-lg text-darkblue md:text-xl">
            DeFa Global Group of Companies is proud to extend its footprint
            across the GCC through affiliated companies that reinforce our
            commitment to specialized solutions and international trade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-white rounded-[32px] shadow-lg p-8 flex flex-col items-start">
            <div className="p-4 mb-6 rounded-full bg-golden">
              <Building2 className="w-8 h-8 text-darkblue" />
            </div>
            <h3 className="mb-6 text-2xl font-semibold text-golden">
              Better Choice International LLC
            </h3>
            <ul className="pl-5 space-y-4 list-disc text-darkblue">
              <li>
                Complete Air Solutions for industrial and oil & gas sectors
              </li>
              <li>
                Energy Sector Supply & Spares - turbines, wind energy, solar
                systems
              </li>
              <li>Building Materials & HVAC Solutions</li>
            </ul>
          </div>

          <div className="bg-white rounded-[32px] shadow-lg p-8 flex flex-col items-start">
            <div className="p-4 mb-6 rounded-full bg-golden">
              <MapPin className="w-8 h-8 text-darkblue" />
            </div>
            <h3 className="mb-6 text-2xl font-semibold text-golden">
              Magic East Global SPC
            </h3>
            <p className="text-darkblue">
              Specializing in civil construction and infrastructure development,
              Magic East Global SPC delivers high-quality construction services
              across the region with a focus on sustainability and innovation.
            </p>
          </div>

          <div className="bg-white rounded-[32px] shadow-lg p-8 flex flex-col items-start">
            <div className="p-4 mb-6 rounded-full bg-golden">
              <Globe className="w-8 h-8 text-darkblue" />
            </div>
            <h3 className="mb-6 text-2xl font-hk text-golden">
              International Oud SPC
            </h3>
            <p className="text-darkblue">
              Focused on export of cocopeat, charcoal, coir products, urea, and
              other organic products, International Oud SPC connects global
              markets with high-quality organic materials and agricultural
              products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
