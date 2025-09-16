import { Icon } from "@iconify/react";


export default function CTA() {
  return (
    <div className="w-full h-16 md:h-20 flex flex-col md:flex-row items-center justify-center bg-secondary gap-2 md:gap-4 px-4 md:px-0">
      <h1 className="text-sm md:text-xl text-white text-center md:text-left">Assine e seja feliz com a Massa Internet!</h1>
      <span className="text-xl md:text-2xl text-primary font-bold hidden md:inline"><Icon icon="solar:arrow-right-outline" /></span>
      <a href="https://api.whatsapp.com/send/?phone=5508005918681&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+contratar+um+plano&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg text-white text-center font-bold bg-primary rounded-full px-6 md:px-12 py-2 hover:scale-105 transition-all duration-300">Contrate agora!</a>
    </div>
  )
}