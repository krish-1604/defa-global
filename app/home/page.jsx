"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Aboutus from "./aboutus"
import Vision_Mission from "./vision_and_mission"
import GlobalPresence from "./global_presence"
import GoldenCircle from "../components/golden_circle"
import ProductsPage from "./productspage"
import ServicesPage from "./offer"



import Footer from "./footer"


export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/about")
  }
  return (
    <div className="bg-[#EEFEFF]">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/landing.png" alt="Industrial facility at sunset" fill className="object-cover" priority />
        </div>

        {/* Golden Circle */}
        <GoldenCircle/>

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

          
        </div>
      </section>

      {/* About Us Section */}
      <Aboutus/>

      {/* Vision & Mission Section */}
      <Vision_Mission/>

      {/* Global Presence Section */}
      <GlobalPresence/>

      <ProductsPage/>

      <ServicesPage/>
      
    </div>
  )
}
