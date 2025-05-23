"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Building2, MapPin, Globe,ArrowRight } from "lucide-react"
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/about")
  }
  const [leftOffset, setLeftOffset] = useState('-120vw'); // default value

  useEffect(() => {
    const getBreakpoint = () => {
      const width = window.innerWidth;
      return width < 640 ? 'base' :
             width < 768 ? 'sm' :
             width < 1024 ? 'md' :
             width < 1280 ? 'lg' : 'xl';
    };

    const breakpoints = {
      base: '-120vw',
      sm: '-100vw',
      md: '-80vw',
      lg: '-70vw',
      xl: '-55vw',
    };

    const handleResize = () => {
      const current = getBreakpoint();
      setLeftOffset(breakpoints[current]);
    };

    handleResize(); // call once on mount
    window.addEventListener('resize', handleResize); // update on resize

    return () => window.removeEventListener('resize', handleResize); // cleanup
  }, []);

  return (
    <div className="bg-[#EEFEFF]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/landing.png" alt="Industrial facility at sunset" fill className="object-cover" priority />
        </div>

        {/* Golden Circle */}
        <div
          className="absolute z-10 bg-[rgba(212,184,115,0.9)] rounded-full"
          style={{
            width: '100vw',
            height: '100vw',
            top: '-20vw',
            left: leftOffset,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-[3%] py-16 md:py-20 lg:py-[12.5%] w-full md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
          <div className="pb-8 md:pb-12 lg:pb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-[1.2] font-black text-darkblue font-hk pb-2 md:pb-4">
              Building quality,
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-[1.2] font-black text-darkblue font-hk">
              Delivering trust.
            </h1>
          </div>

          <div className="w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] pb-8 md:pb-12 lg:pb-16">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose font-hk text-white drop-shadow-md">
              DeFa Global Group of Companies LLC is a UAE-based enterprise offering integrated solutions across
              industrial supply, mechanical systems, building materials, and engineering consultancy. Since our
              inception in 2025, we have built a strong reputation for reliability, technical proficiency, and
              customer-first service. Our clients span the industrial, infrastructure, and oil & gas sectors. We are
              also proud of our established presence in Oman since 2011 through our sister concerns, extending our reach
              and service capabilities across the region.
            </p>
          </div>

          <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-darkblue rounded-lg w-full sm:w-[60%] max-w-[212px] whitespace-nowrap transition-transform hover:scale-105"
            onClick={handleClick}
          >
            <span className="text-sm sm:text-base md:text-lg text-golden font-hk">About Us</span>
            <ArrowRight className="text-golden"/>
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue mb-2">About Us</h2>
            <div className="h-1 w-24 bg-golden"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <p className="text-darkblue mb-4 md:mb-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                DeFa Global Group of Companies LLC is a UAE-based multi-sectoral enterprise with a strong foundation in
                industrial supply, mechanical engineering, and building material solutions. Established in 2025, DeFa
                Global has quickly earned a reputation for reliability, technical expertise, and customer-driven
                service.
              </p>
              <p className="text-darkblue mb-6 md:mb-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                With operations spanning across the United Arab Emirates and a well-established presence in Oman since
                2011, we serve a diverse clientele in the construction, oil & gas, energy, and infrastructure sectors.
                Through our affiliated companies in Oman—Better Choice International LLC, Magic East Global SPC, and
                International Oud SPC—we deliver regionally integrated solutions that reflect both scale and
                specialization.
              </p>
              <button
                className="bg-darkblue text-white px-4 sm:px-6 py-2 sm:py-3 rounded flex items-center transition-all hover:bg-opacity-90 hover:shadow-md text-sm sm:text-base md:text-lg"
                onClick={handleClick}
              >
                Read More <span className="ml-2">→</span>
              </button>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="bg-golden w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-[#E2F8FF]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue mb-2">Vision & Mission</h2>
            <div className="h-1 w-36 bg-golden"></div>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
            <p className="text-darkblue text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              At DeFa Global, we prioritize quality, compliance, and partnership. Whether delivering turnkey project
              support or supplying mission-critical components, our approach is rooted in efficiency, technical
              integrity, and long-term value creation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="bg-darkblue text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg transform hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-golden text-center mb-4 md:mb-6">
                Our Vision
              </h3>
              <div className="space-y-4 md:space-y-6">
                <p className="text-center text-sm sm:text-base md:text-lg leading-relaxed">
                  To emerge as a regional leader in integrated industrial solutions, recognized for our customer focus,
                  technical excellence, and operational reliability.
                </p>
                <p className="text-center text-sm sm:text-base md:text-lg leading-relaxed">
                  To deliver top-grade mechanical and industrial products while building lasting relationships with our
                  partners worldwide.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg transform hover:translate-y-[-5px] transition-transform duration-300 border border-gray-100">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-golden text-center mb-4 md:mb-6">
                Our Mission
              </h3>
              <div className="flex items-center justify-center min-h-[120px] md:min-h-[140px]">
                <p className="text-darkblue text-center text-sm sm:text-base md:text-lg leading-relaxed">
                  To be the preferred partner for industrial and construction support services by delivering quality
                  materials, equipment, and technical expertise with professionalism and integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            {/* Company 1 */}
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

            {/* Company 2 */}
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

            {/* Company 3 */}
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
    </div>
  )
}
