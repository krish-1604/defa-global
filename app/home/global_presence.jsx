import {Building2, MapPin, Globe} from 'lucide-react'
export default function GlobalPresence(){
    return(
        <div className="min-h-screen bg-[#D5F5FF] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-4">Global Presence</h2>
            <div className="w-32 h-1 bg-golden mx-auto mb-8"></div>
            <p className="text-darkblue max-w-4xl mx-auto text-lg md:text-xl">
              DeFa Global Group of Companies is proud to extend its footprint across the GCC through affiliated companies
              that reinforce our commitment to specialized solutions and international trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-[32px] shadow-lg p-8 flex flex-col items-start">
              <div className="bg-golden p-4 rounded-full mb-6">
                <Building2 className="h-8 w-8 text-darkblue" />
              </div>
              <h3 className="text-2xl font-semibold text-golden mb-6">Better Choice International LLC</h3>
              <ul className="text-darkblue space-y-4 list-disc pl-5">
                <li>Complete Air Solutions for industrial and oil & gas sectors</li>
                <li>Energy Sector Supply & Spares - turbines, wind energy, solar systems</li>
                <li>Building Materials & HVAC Solutions</li>
              </ul>
            </div>


            <div className="bg-white rounded-[32px] shadow-lg p-8 flex flex-col items-start">
              <div className="bg-golden p-4 rounded-full mb-6">
                <MapPin className="h-8 w-8 text-darkblue" />
              </div>
              <h3 className="text-2xl font-semibold text-golden mb-6">Magic East Global SPC</h3>
              <p className="text-darkblue">
                Specializing in civil construction and infrastructure development, Magic East Global SPC delivers
                high-quality construction services across the region with a focus on sustainability and innovation.
              </p>
            </div>
            
            <div className="bg-white rounded-[32px] shadow-lg p-8 flex flex-col items-start">
              <div className="bg-golden p-4 rounded-full mb-6">
                <Globe className="h-8 w-8 text-darkblue" />
              </div>
              <h3 className="text-2xl font-hk text-golden mb-6">International Oud SPC</h3>
              <p className="text-darkblue">
                Focused on export of cocopeat, charcoal, coir products, urea, and other organic products, International
                Oud SPC connects global markets with high-quality organic materials and agricultural products.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}