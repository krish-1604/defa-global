export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="min-h-screen bg-[#eefeff] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-darkblue text-center mb-2">
          Who <span className="text-darkblue">We Are</span>
        </h2>
        <div className="h-1 w-24 bg-[#d2b16a] rounded-full mx-auto mb-12" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Gold Box (no image!) */}
          <div className="bg-[#ceb073] rounded-2xl w-full h-72 md:h-80 lg:h-96" />

          {/* Right: Text */}
          <div>
            <p className="text-darkblue text-lg md:text-xl mb-8">
              DeFa Global Group of Companies LLC is a diversified international trading and service company based in Sharjah, United Arab Emirates. We specialize in the supply of mechanical and industrial parts, construction equipment, air handling solutions, pumps, tower cranes, hoists, and building materials, serving markets across the Middle East, Asia, and Africa.
            </p>
            <p className="text-darkblue text-lg md:text-xl">
              Built on decades of experience in industrial procurement, technical services, and global supply chain management, DeFa Global is committed to delivering quality-driven solutions tailored to the complex needs of modern industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
