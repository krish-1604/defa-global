import { useRouter } from "next/navigation"
export default function Aboutus(){
    const router = useRouter()
    
      const handleClick = () => {
        router.push("/about")
      }
    return(
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
    );
}