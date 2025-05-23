export default function Vision_Mission(){
    return(
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
    );
}