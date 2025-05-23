'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about'); // navigate to /about page
  };
  return (
    <div className="relative h-screen overflow-hidden bg-[#EEFEFF]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing.png"
          alt="Industrial facility at sunset"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div
        className="absolute z-10 bg-[rgba(212,184,115,0.9)] rounded-full"
        style={{
          width: '100vw',
          height: '100vw',
          top: '-20vw',
          left: '-55vw',
        }}
      ></div>


      
      {/* Content */}
      <div className="relative z-20 px-[3%] py-[12.5%] max-w-[60%]">
        {/* Main Heading */}
        <div className="pb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-[1.2] font-black text-darkblue font-hk pb-4">
            Building quality,
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-[1.2] font-black text-darkblue font-hk">
            Delivering trust.
          </h1>
        </div>

        
        {/* Description Text */}
        <div className="w-full max-w-[70%] pb-16">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed md:leading-loose font-hk text-white">
            DeFa Global Group of Companies LLC is a UAE-based enterprise offering integrated 
            solutions across industrial supply, mechanical systems, building materials, and 
            engineering consultancy. Since our inception in 2025, we have built a strong 
            reputation for reliability, technical proficiency, and customer-first service. 
            Our clients span the industrial, infrastructure, and oil & gas sectors. We are 
            also proud of our established presence in Oman since 2011 through our sister 
            concerns, extending our reach and service capabilities across the region.
          </p>
        </div>


        
        {/* About Us Button */}
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-darkblue rounded-lg w-[60%] max-w-[212px] whitespace-nowrap" onClick={handleClick}>
          <span className="text-sm sm:text-base md:text-lg text-golden font-hk">
            About Us
          </span>
          <div className="flex items-center">
            <div className="w-6 h-[2px] bg-golden rounded"/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-golden -ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

      </div>
    </div>
  );
}
