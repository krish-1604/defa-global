import { useRouter } from "next/navigation";
import Button from "../components/button";
export default function Aboutus() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about");
  };
  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl text-darkblue">
            About Us
          </h2>
          <div className="w-24 h-1 bg-golden"></div>
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="order-2 lg:w-1/2 lg:order-1">
            <p className="mb-4 text-sm leading-relaxed text-darkblue md:mb-6 sm:text-base md:text-lg lg:text-xl">
              DeFa Global Group of Companies LLC is a UAE-based multi-sectoral
              enterprise with a strong foundation in industrial supply,
              mechanical engineering, and building material solutions.
              Established in 2025, DeFa Global has quickly earned a reputation
              for reliability, technical expertise, and customer-driven service.
            </p>
            <p className="mb-6 text-sm leading-relaxed text-darkblue md:mb-8 sm:text-base md:text-lg lg:text-xl">
              With operations spanning across the United Arab Emirates and a
              well-established presence in Oman since 2011, we serve a diverse
              clientele in the construction, oil & gas, energy, and
              infrastructure sectors. Through our affiliated companies in
              Oman—Better Choice International LLC, Magic East Global SPC, and
              International Oud SPC—we deliver regionally integrated solutions
              that reflect both scale and specialization.
            </p>
            <div className="flex items-center justify-center w-full ">
              <Button onClick={handleClick} />
            </div>
          </div>
          <div className="order-1 w-full lg:w-1/2 lg:order-2">
            <div className="bg-golden w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <span className="font-semibold text-darkblue">
                Image Placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
