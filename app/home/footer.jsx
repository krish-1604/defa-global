import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#10233b] text-[#eefeff] pt-16 pb-6 px-4 overflow-hidden text-xl">
      {/* Footer text content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8">
        {/* Left: Logo & Contact */}
        <div className="flex-1 min-w-[250px] flex flex-col gap-6">
          {/* Logo above "DeFa Global" */}
          <div className="flex flex-col items-start">
            <Image src="/logo.svg" alt="DeFa Global Logo" width={80} height={80} />
            <span className="text-4xl font-bold text-[#e2c15a] mt-2">DeFa Global</span>
          </div>
          <div className="flex flex-col gap-4 text-xl">
            <div className="flex items-start gap-2">
              <span className="mt-1 text-white">📍</span>
              <span>
                Shams Business Center, Sharjah<br />
                Media City free Zone,<br />
                Al Messaned, Sharjah, UAE.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">✉️</span>
              <span>contact@defaglobal.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">📞</span>
              <span>UAE: +971 50 323 0987</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">📞</span>
              <span>Oman: +968 96 441 607</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">💬</span>
              <span>+49 176 80763095</span>
            </div>
          </div>
        </div>

        {/* Center: Links */}
        <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-8 text-xl">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-[#e2c15a] mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/products" className="hover:underline">Products</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
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
                <Link href="/products" className="text-[#e2c15a] underline underline-offset-4 font-semibold">
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
                <Link href="/services" className="text-[#e2c15a] underline underline-offset-4 font-semibold">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social links just below View All Services, aligned to the right */}
      <div className="relative z-10 max-w-7xl mx-auto mt-2 flex justify-end gap-6 text-3xl">
        <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-[#e2c15a]">
          <span className="sr-only">Facebook</span>
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.525 8.998h-3.026V7.306c0-.595.393-.733.669-.733h2.314V3.998h-3.184c-2.18 0-2.687 1.639-2.687 2.687v2.313H8.001v4.001h2.61V20h4.001v-7.001h2.314l.599-4.001z"/>
          </svg>
        </Link>
        <Link href="https://x.com" aria-label="X" className="hover:text-[#e2c15a]">
          <span className="sr-only">X</span>
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.53 6.47a.75.75 0 0 1 1.06 1.06L13.06 13l5.53 5.47a.75.75 0 1 1-1.06 1.06L12 14.06l-5.47 5.53a.75.75 0 1 1-1.06-1.06L10.94 13 5.47 7.53a.75.75 0 1 1 1.06-1.06L12 11.94l5.47-5.47z"/>
          </svg>
        </Link>
        <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-[#e2c15a]">
          <span className="sr-only">Instagram</span>
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584.-07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366.-062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.77.13 4.633.388 3.678 1.343c-.955.955-1.213 2.092-1.271 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.058 1.282.316 2.419 1.271 3.374.955.955 2.092 1.213 3.374 1.271C8.332 23.987 8.741 24 12 24s3.668-.013 4.948.-072c1.282.-058 2.419-.316 3.374-1.271.955-.955 1.213-2.092 1.271-3.374C23.987 15.668 24 15.259 24 12c0-3.259-.013-3.668.-072-4.948-.058-1.282-.316-2.419-1.271-3.374-.955-.955-2.092-1.213-3.374-1.271C15.668.013 15.259 0 12 0z"/>
            <path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.324A4.162 4.162 0 1 1 16.162 12 4.162 4.162 0 0 1 12 16.162z"/>
            <circle cx="18.406" cy="5.594" r="1.44"/>
          </svg>
        </Link>
        <Link href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-[#e2c15a]">
          <span className="sr-only">LinkedIn</span>
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46c.978 0 1.77.-774 1.77-1.729V1.729C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.633a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm15.11 12.819h-3.56v-5.605c0-1.336-.025-3.057-1.865-3.057-1.867 0-2.153 1.46-2.153 2.97v5.692h-3.56V9h3.42v1.561h.049c.477-.9 1.637-1.85 3.37-1.85 3.602 0 4.266 2.37 4.266 5.455v6.286z"/>
          </svg>
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
            objectFit: 'contain',
            objectPosition: 'center',
            opacity: 0.18,
          }}
          priority
        />
      </div>
    </footer>
  );
}
