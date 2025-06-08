import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#10233b] text-[#eefeff] pt-16 pb-6 px-4 overflow-hidden text-xl">
      {/* Footer text content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8">
        {/* Left: Logo & Contact */}
        <div className="flex-1 min-w-[250px] flex flex-col gap-6">
          {/* Logo above "DeFa Global" */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/logo.png"
              alt="DeFa Global Logo"
              width={80}
              height={80}
            />
            <span className="text-4xl font-bold text-[#e2c15a] mt-2">
              DeFa Global
            </span>
          </div>
          <div className="flex flex-col gap-4 text-xl">
            <div className="flex items-start gap-2">
              <MapPin className="mt-1 text-white" size={24} />
              <span>
                Shams Business Center, Sharjah
                <br />
                Media City free Zone,
                <br />
                Al Messaned, Sharjah, UAE.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-white" size={24} />
              <span>contact@defaglobal.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-white" size={24} />
              <span>UAE: +971 50 323 0987</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-white" size={24} />
              <span>Oman: +968 96 441 607</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="text-white" size={24} />
              <span>+49 176 80763095</span>
            </div>
          </div>
        </div>

        {/* Center: Links */}
        <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-8 text-xl">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-[#e2c15a] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Products */}
          <div>
            <h3 className="text-2xl font-bold text-[#e2c15a] mb-6">Products</h3>
            <ul className="space-y-4">
              <li>Building Materials</li>
              <li>Motor - Pumps</li>
              <li>Industrial Parts</li>
              <li>Valves & Fittings</li>
              <li>Air Compressors</li>
              <li>
                <Link
                  href="/products"
                  className="text-[#e2c15a] underline underline-offset-4 font-semibold"
                >
                  View All Products
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold text-[#e2c15a] mb-6">Services</h3>
            <ul className="space-y-4">
              <li>Industrial Machinery</li>
              <li>Engineering Consultancy</li>
              <li>Spare Parts Supply</li>
              <li>Mechanical Services</li>
              <li>International Trading</li>
              <li>
                <Link
                  href="/services"
                  className="text-[#e2c15a] underline underline-offset-4 font-semibold"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social links just below View All Services, aligned to the right */}
      <div className="relative z-10 max-w-7xl mx-auto mt-2 flex justify-end gap-6 text-3xl">
        <Link
          href="https://facebook.com"
          aria-label="Facebook"
          className="hover:text-[#e2c15a]"
        >
          <span className="sr-only">Facebook</span>
          <Facebook size={32} />
        </Link>
        <Link
          href="https://x.com"
          aria-label="X"
          className="hover:text-[#e2c15a]"
        >
          <span className="sr-only">X</span>
          <Twitter size={32} />
        </Link>
        <Link
          href="https://instagram.com"
          aria-label="Instagram"
          className="hover:text-[#e2c15a]"
        >
          <span className="sr-only">Instagram</span>
          <Instagram size={32} />
        </Link>
        <Link
          href="https://linkedin.com"
          aria-label="LinkedIn"
          className="hover:text-[#e2c15a]"
        >
          <span className="sr-only">LinkedIn</span>
          <Linkedin size={32} />
        </Link>
      </div>

      {/* Divider Line and Copyright */}
      <div className="relative z-10 max-w-7xl mx-auto mt-6 border-t border-[#e2c15a]/20 pt-6">
        <div className="text-lg text-center">
          © 2025 DeFa Global Group of Companies LLC. All rights reserved.
        </div>
      </div>

      {/* Image overlay - on top of everything */}
      <div className="absolute inset-0 z-20 flex justify-center items-center pointer-events-none">
        <Image
          src="/images/Objects.png"
          alt="World Map"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
            opacity: 0.18,
          }}
          priority
        />
      </div>
    </footer>
  );
}
