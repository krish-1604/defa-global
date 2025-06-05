import Image from "next/image";

export default function WhatsappButton() {
  return (
    <Image
      src="/images/whatsapp.png"
      alt="WhatsApp Button"
      width={60}
      height={60}
      className="fixed bottom-4 right-4 z-50 md:right-8 md:bottom-8 cursor-pointer"
      onClick={() => window.open("https://wa.me/4917680763095", "_blank")}
    />
  );
}
