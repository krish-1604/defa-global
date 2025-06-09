export default function Vision() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-[#D5F5FF]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-darkblue mb-2">
            Vision & Mission
          </h2>
          <div className="h-1 w-36 bg-golden"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <p className="text-darkblue text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-hk">
            At DeFa Global, we prioritize quality, compliance, and partnership. Whether delivering turnkey project support or supplying mission-critical components, our approach is rooted in efficiency, technical integrity, and long-term value creation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 lg:gap-16 max-w-6xl mx-auto">
          <div className="bg-darkblue text-white p-6 md:p-8 lg:p-10 rounded-[2vh] shadow-lg transform hover:translate-y-[-5px] transition-transform duration-300">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-golden text-center mb-4 md:mb-6 font-hk">
              Our Vision
            </h3>
            <div className="space-y-4 md:space-y-6">
              <p className="text-center text-sm sm:text-base md:text-lg leading-relaxed font-hk">
                To be a globally respected trading and engineering partner, delivering exceptional products and solutions that empower industries to grow and thrive.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-[2vh] shadow-lg transform hover:translate-y-[-5px] transition-transform duration-300 border border-gray-100">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-hk text-golden text-center mb-4 md:mb-6">
              Our Mission
            </h3>
            <div className="space-y-4 md:space-y-6 min-h-[170px] sm:min-h-[160px] md:min-h-[180px] flex flex-col justify-center">
              <ul className="list-disc text-center list-inside text-darkblue text-sm sm:text-base md:text-lg leading-relaxed font-hk text-left">
                <li>Deliver top-quality industrial products and services to meet client needs</li>
                <li>Provide responsive, reliable, and long-term support to our partners</li>
                <li>Uphold ethical business practices and global trade standards</li>
                <li>Continuously innovate and expand into new markets</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
