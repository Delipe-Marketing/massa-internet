import { Icon } from "@iconify/react";

export default function CTA() {
  return (
    <div className="w-full h-16 md:h-20 flex flex-col md:flex-row items-center justify-center bg-secondary gap-2 md:gap-4 px-4 md:px-0">
      <h1 className="text-sm md:text-xl text-white text-center md:text-left">
        Assine e seja feliz com a Massa Internet!
      </h1>
      <span className="text-xl md:text-2xl text-primary font-bold hidden md:inline">
        <Icon icon="solar:arrow-right-outline" />
      </span>
      <a
        href="https://api.whatsapp.com/send/?phone=5527996152427&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20assinar%20um%20plano"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm md:text-lg text-white text-center font-bold bg-primary rounded-full px-6 md:px-12 py-2 hover:scale-105 transition-all duration-300"
      >
        Contrate agora!
      </a>
    </div>
  );
}
