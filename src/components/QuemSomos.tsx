import { Icon } from "@iconify/react";

const principios = [
  {
    titulo: "A nossa missão",
    descricao: "é conectar pessoas e empresas com qualidade, inovação e responsabilidade, criando uma experiência digital completa, acessível e que realmente faz a diferença no dia a dia.",
    icone: "material-symbols:arrow-right"
  },
  {
    titulo: "Acreditamos em uma visão de futuro",
    descricao: "onde somos referência em conectividade e soluções digitais na região, acompanhando cada mudança do mundo online lado a lado com os nossos clientes.",
    icone: "material-symbols:arrow-right"
  },
  {
    titulo: "Nossos valores",
    descricao: "são o que nos move: compromisso com a qualidade, atendimento humanizado, inovação constante, respeito, transparência e, acima de tudo, conexão com as pessoas.",
    icone: "material-symbols:arrow-right"
  }
];

export default function QuemSomos() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-10 md:py-20 bg-white">
      <img src="/images/Logo.svg" alt="Quem somos" className="w-full max-w-80 md:w-120 border-3 border-secondary rounded-4xl px-4 md:px-8 py-20 md:py-30 mb-8 md:mb-0" />

      <div className="flex-1 max-w-2xl md:ml-4 px-4 md:px-0">
        <h2 className="text-primary text-3xl md:text-5xl mb-4 text-center md:text-left">
          Quem <span className="text-secondary font-bold">somos</span>?
        </h2>
        
        <p className="text-primary text-xs leading-relaxed mb-6 md:mb-8 md:pl-4 text-center md:text-left">
          <span className="text-secondary font-semibold">Provedor 100% Capixaba:</span> representamos uma revolução na forma como você se conectar ao mundo. Nascidos da essência da juventude e da liberdade, trazemos uma conexão de fibra óptica que vai além da velocidade.
        </p>
        
        <div className="space-y-4 md:space-y-6 md:pl-4">
          {principios.map((principio, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4">
              <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-secondary rounded-full mt-1 md:mt-2 flex-shrink-0 flex items-center justify-center">
                {principio.icone && (
                  <Icon icon={principio.icone} className="text-secondary text-sm md:text-lg" />
                )}
              </div>
              <p className="text-primary text-xs leading-relaxed">
                <strong>{principio.titulo}</strong> {principio.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
