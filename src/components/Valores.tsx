import { Icon } from "@iconify/react";

const principios = [
  {
    icon: "material-symbols:target",
    title: "Missão",
    description: "Conectar pessoas e famílias em Osasco e região com internet de alta velocidade e comunicação de qualidade, facilitando o dia a dia com serviços confiáveis."
  },
  {
    icon: "mage:light-bulb",
    title: "Visão", 
    description: "Ser a provedora de telecomunicações líder em Osasco, reconhecida pela excelência em nossos serviços e por impulsionar a conectividade local."
  },
  {
    icon: "fa:diamond",
    title: "Valores",
    description: "Nossos valores na JMS Telecom são foco no cliente, agilidade e qualidade nos serviços, constante inovação e total transparência em nossas relações."
  }
];

export default function Valores() {
  return (
    <div className="w-full bg-[#fffafa] py-10 md:py-20">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-16 px-4 md:px-16">
        O que nos torna únicos?
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 px-4 md:px-16">
        {principios.map((principio, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start text-center md:text-left p-6 md:p-8 bg-white border-2 border-secondary rounded-xl shadow-md w-full md:max-w-sm"
          >
            <Icon icon={principio.icon} className="text-secondary text-4xl md:text-5xl mb-4" />
            
            <h3 className="text-primary text-xl md:text-2xl font-bold mb-4">
              {principio.title}
            </h3>
            
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {principio.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
