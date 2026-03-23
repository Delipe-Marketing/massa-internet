import { Icon } from "@iconify/react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5527996152427?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20assinar%20um%20plano"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse"
      title="WhatsApp Massa Internet"
    >
      <Icon icon="mdi:whatsapp" className="text-white text-3xl md:text-4xl" />
    </a>
  );
}
