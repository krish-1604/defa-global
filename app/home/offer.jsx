import GoldenBorderButton from "../components/golden_border_button";
import Button from "../components/button";
import { useRouter } from "next/navigation";
export default function Offer() {
  const services = [
    "Installation of Industrial Machine",
    "Industrial Process Control Systems",
    "Communications Equipment Setup",
    "Mainframe & Computer Systems",
    "Irradiation & Electromedical Equipment",
    "Bowling Alley Equipment Installation",
    "Millwright Services",
    "Machine Rigging",
    "Machinery Dismantling",
  ];
  const router = useRouter();
  const handleClick = () => {
    router.push("/services");
  };
  return (
    <div className="h-screen overflowe-hidden bg-[#eefeff] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-darkblue mb-2">
            What We Offer
          </h2>
          <div className="w-16 h-1 bg-golden mx-auto mb-6"></div>
          <p className="text-darkblue max-w-3xl mx-auto text-lg">
            Our wide-ranging operations are structured to provide comprehensive
            solutions for your industrial needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6 mb-12">
          {services.map((service, index) => (
            <GoldenBorderButton
              key={index}
              className={`h-20 md:h-24 text-xs sm:text-sm md:text-base ${
                index === services.length - 1 && services.length % 2 !== 0
                  ? "col-span-2 md:col-span-1 max-w-xs md:max-w-none mx-auto md:mx-0"
                  : ""
              }`}
            >
              {service}
            </GoldenBorderButton>
          ))}
        </div>

        {/* View All Services Button */}
        <section className="flex justify-center">
          <Button onClick={handleClick}>View all Services</Button>
        </section>
      </div>
    </div>
  );
}
