import { Icon } from "@iconify/react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/552728886928?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20o%20suporte"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      title="Suporte Massa Internet"
    >
      <Icon icon="mdi:whatsapp" className="text-white text-3xl md:text-4xl" />
    </a>
  );
}
