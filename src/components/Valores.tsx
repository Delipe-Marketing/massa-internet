import { Icon } from "@iconify/react";

const principios = [
  {
    icon: "material-symbols:target",
    title: "Missão",
    description: "Não somos apenas um provedor; representamos uma revolução na forma como você se conectar ao mundo. Nascidos da essência da juventude e da liberdade, trazemos uma conexão de fibra óptica que vai além da velocidade. Descomplicamos o seu acesso à internet, acabando com contratos longos e oferecendo liberdade total."
  },
  {
    icon: "mage:light-bulb",
    title: "Visão", 
    description: "Na Massa acreditamos que o melhor contrato é um bom serviço e uma experiência Top. Seja para trabalhar, estudar, ou simplesmente curtir o melhor do entretenimento online, a Massa Internet está aqui para transformar sua experiência digital. Internet com liberdade total é Massa."
  },
  {
    icon: "fa:diamond",
    title: "Valores",
    description: "Nossa equipe é tão massa quanto a conexão que oferecemos. Somos uma empresa 100% capixaba, nascida na terra do Espírito Santo, comprometida com a inovação e o bom atendimento. Combinamos expertise técnica e entusiasmo para construir uma conexão que vai além da velocidade da fibra óptica. Nosso objetivo é criar experiências encantadoras para nossos clientes, garantindo uma internet rápida, estável e sem fidelidade."
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
