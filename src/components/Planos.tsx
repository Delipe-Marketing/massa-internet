import { Icon } from "@iconify/react";
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react";

const planosResidenciais = [
  {
    speed: "550",
    unit: "mega",
    price: "89,99",
    feature: null,
    benefits: [
      { Icon: "mdi:television", text: ["80 Canais de TV"] },
      { Icon: "mdi:support", text: ["Suporte proativo"] },
      { Icon: "mynaui:percentage-waves-solid", text: ["Desconto de 10%", "na conta de energia"] }
    ],
    options: [
      { image: "/images/hbo.png", text: "HBO Max", name: "hbo", price: 20.00 },
      { image: "/images/globoplay.png", text: "Globoplay", name: "globoplay", price: 24.90 },
      { image: "/images/premiere.png", text: "Premiere", name: "premiere", price: 29.90 },
      { image: "/images/paramount.png", text: "Paramount+", name: "paramount", price: 9.90 },
      { image: "/images/semfidelidade.png", text: "Sem fidelidade", name: "semfidelidade", price: 15.00 }
    ]
  },
  {
    speed: "710",
    unit: "mega",
    price: "108,99",
    feature: { image: "/images/paramount.png", text: ["Paramount+ por", "6 meses grátis"] },
    benefits: [
      { Icon: "material-symbols:wifi-rounded", text: ["Wi-Fi 6"] },
      { Icon: "mdi:television", text: ["80 Canais de TV"] },
      { Icon: "mdi:support", text: ["Suporte proativo"] },
      { Icon: "mynaui:percentage-waves-solid", text: ["Desconto de 10%", "na conta de energia"] }
    ],
    options: [
      { image: "/images/hbo.png", text: "HBO Max", name: "hbo", price: 10.00 },
      { image: "/images/globoplay.png", text: "Globoplay", name: "globoplay", price: 12.00 },
      { image: "/images/premiere.png", text: "Premiere", name: "premiere", price: 15.00 },
      { image: "/images/semfidelidade.png", text: "Sem Fidelidade", name: "semfidelidade", price: 15.00 }
    ]
  },
  {
    speed: "920",
    unit: "mega",
    price: "129,99",
    feature: { image: "/images/hbo.png", text: ["HBO MAX por", "6 meses grátis"] },
    benefits: [
      { Icon: "material-symbols:wifi-rounded", text: ["Wi-Fi 6"] },
      { Icon: "mdi:television", text: ["80 Canais de TV"] },
      { Icon: "mdi:support", text: ["Suporte proativo"] },
      { Icon: "mynaui:percentage-waves-solid", text: ["Desconto de 10%", "na conta de energia"] }
    ],
    options: [
      { image: "/images/globoplay.png", text: "Globoplay", name: "globoplay", price: 12.00 },
      { image: "/images/premiere.png", text: "Premiere", name: "premiere", price: 15.00 },
      { image: "/images/paramount.png", text: "Paramount+", name: "paramount", price: 9.90 },
      { image: "/images/semfidelidade.png", text: "Sem Fidelidade", name: "semfidelidade", price: 15.00 }
    ]
  }
]

const planosComerciais = [
  {
    speed: "550",
    unit: "mega",
    price: "109,99",
    feature: null,
    benefits: [
      { Icon: "mdi:clock-outline", text: ["Atendimento 24 Horas"] },
      { Icon: "mdi:speedometer", text: ["Internet rápida", "e estável"] }
    ],
    options: [
      { image: "/images/Cam.svg", text: "Câmera IP", name: "camera", price: 39.90 },
      { image: "/images/telefonia.svg", text: "Seliga Fone", name: "seliga-fone", price: 29.90 },
      { image: "/images/wifi.svg", text: "Wi-Fi Inteligente", name: "wifi-inteligente", price: 29.90 },
      { image: "/images/nobreak.svg", text: "Nobreak", name: "nobreak", price: 29.90 }
    ]
  },
  {
    speed: "710",
    unit: "mega",
    price: "128,99",
    feature: null,
    benefits: [
      { Icon: "mdi:clock-outline", text: ["Atendimento 24 Horas"] },
      { Icon: "mdi:speedometer", text: ["Internet rápida", "e estável"] }
    ],
    options: [
      { image: "/images/Cam.svg", text: "Câmera IP", name: "camera", price: 39.90 },
      { image: "/images/telefonia.svg", text: "Seliga Fone", name: "seliga-fone", price: 29.90 },
      { image: "/images/wifi.svg", text: "Wi-Fi Inteligente", name: "wifi-inteligente", price: 29.90 },
      { image: "/images/nobreak.svg", text: "Nobreak", name: "nobreak", price: 29.90 }
    ]
  },
  {
    speed: "920",
    unit: "mega",
    price: "149,99",
    feature: null,
    benefits: [
      { Icon: "mdi:clock-outline", text: ["Atendimento 24 Horas"] },
      { Icon: "mdi:speedometer", text: ["Internet rápida", "e estável"] }
    ],
    options: [
      { image: "/images/Cam.svg", text: "Câmera IP", name: "camera", price: 39.90 },
      { image: "/images/telefonia.svg", text: "Seliga Fone", name: "seliga-fone", price: 29.90 },
      { image: "/images/wifi.svg", text: "Wi-Fi Inteligente", name: "wifi-inteligente", price: 29.90 },
      { image: "/images/nobreak.svg", text: "Nobreak", name: "nobreak", price: 29.90 }
    ]
  }
]

export default function Planos() {
  const [selectedSVAs, setSelectedSVAs] = useState<{ [key: string]: boolean }>({});

  const handleSVAChange = (planoIndex: number, svaName: string) => {
    const key = `${planoIndex}-${svaName}`;
    setSelectedSVAs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getSelectedSVAsForPlano = (planoIndex: number, planos: typeof planosResidenciais) => {
    return planos[planoIndex].options.filter(option =>
      selectedSVAs[`${planoIndex}-${option.name}`]
    ).map(option => option.text);
  };

  const calculateTotalPrice = (planoIndex: number, planos: typeof planosResidenciais) => {
    const plano = planos[planoIndex];
    const basePrice = parseFloat(plano.price.replace(',', '.'));

    const selectedOptions = plano.options.filter(option =>
      selectedSVAs[`${planoIndex}-${option.name}`]
    );

    const totalSVA = selectedOptions.reduce((sum, option) => sum + option.price, 0);
    const totalPrice = basePrice + totalSVA;

    return totalPrice.toFixed(2).replace('.', ',');
  };

  const getSelectedSVAsPrice = (planoIndex: number, planos: typeof planosResidenciais) => {
    const plano = planos[planoIndex];
    const selectedOptions = plano.options.filter(option =>
      selectedSVAs[`${planoIndex}-${option.name}`]
    );

    const totalSVA = selectedOptions.reduce((sum, option) => sum + option.price, 0);
    return totalSVA;
  };

  const renderPlanoCards = (planos: typeof planosResidenciais, tabType: 'residencial' | 'comercial') => {
    return (
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl justify-center items-start">
        {planos.map((plano, planoIndex) => (
          <div key={`${tabType}-${planoIndex}`} className="w-full md:w-80 py-4 border-2 border-primary rounded-4xl flex flex-col relative">
            <div className="text-xs md:text-sm absolute top-0 right-0 w-32 md:w-45 h-8 md:h-10 flex justify-center items-center rounded-bl-4xl rounded-tr-3xl border-t-0 border-r-0 bg-primary text-secondary">100% FIBRA ÓPTICA</div>
            <div className="mt-12 md:mt-16 px-4 md:px-8">
              <h1 className="text-xl md:text-2xl font-bold text-primary">Plano de</h1>
              <h3 className="text-5xl md:text-7xl font-bold text-primary flex flex-row">{plano.speed} <span className="text-3xl md:text-4xl font-bold text-secondary flex justify-center items-end">{plano.unit}</span></h3>

              {plano.feature && plano.feature !== null && (
                <div className="flex flex-row gap-4 items-center mb-4 mt-4">
                  <img src={plano.feature.image} className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
                  <div className="flex flex-col">
                    {plano.feature.text.map((text, index) => (
                      <p key={index} className="text-xs md:text-sm text-primary font-bold">{text}</p>
                    ))}
                  </div>
                </div>
              )}
              <p className="text-xs md:text-sm text-primary font-bold">Seu plano acompanha com:</p>
              <div className="flex flex-col gap-2 mt-4">
                {plano.benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-row gap-3 md:gap-4 items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full bg-secondary">
                      <Icon icon={benefit.Icon} className="text-xl md:text-2xl text-primary" />
                    </div>
                    <div>
                      {benefit.text.map((text, textIndex) => (
                        <p key={textIndex} className="text-xs md:text-sm text-primary font-bold">{text}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h1 className="text:sm text-center text-primary font-bold mt-4">
                Ative abaixo no seu plano:
              </h1>

              <div className="flex flex-col gap-2 mt-4">
                {plano.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex flex-col items-center justify-between border-2 border-black px-2 py-2 md:py-3 rounded-lg">
                    <div className="flex flex-row items-center justify-between w-full">
                      <img src={option.image} alt={option.text} className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
                      <p className="text-xs md:text-2sm text-primary font-bold">{option.text}</p>
                      <Switch
                        checked={selectedSVAs[`${planoIndex}-${option.name}`] || false}
                        onCheckedChange={() => handleSVAChange(planoIndex, option.name)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center">
                  <p className="text-3xl md:text-5xl uniNeueHeavy text-primary mt-6 md:mt-8">R$ {calculateTotalPrice(planoIndex, planos)}</p>
                </div>
                <a
                  href={`https://wa.me/5508005918681?text=Olá, vim pelo site e gostaria de contratar o plano ${tabType} de ${plano.speed} ${plano.unit}${getSelectedSVAsForPlano(planoIndex, planos).length > 0 ? ' com ' + getSelectedSVAsForPlano(planoIndex, planos).join(', ') : ''} - Total: R$ ${calculateTotalPrice(planoIndex, planos)}`}
                  className="text-sm md:text-lg text-primary text-center mt-4 font-bold bg-secondary rounded-full px-8 md:px-12 py-2 hover:scale-105 transition-all duration-300"
                >
                  Contrate agora!
                </a>
                <a href="/PDF/consulte_condicoes.pdf" className="text-xs hover:scale-105 transition-all duration-300 text-primary text-center font-bold mt-2">Consulte condições e viabilidade*</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-12 md:mt-24 px-4 md:px-0">
      <Tabs defaultValue="residencial" className="w-full max-w-7xl">
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-8 md:mb-16 gap-4 md:gap-8 px-4">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-4xl font-bold text-primary text-center md:text-left">Planos de verdade para uma vida conectada!</h1>
            <h2 className="text-sm md:text-2sm text-primary text-center md:text-left">Assine os melhores planos de internet fibra com Wi-Fi grátis e tenha velocidade e estabilidade.</h2>
          </div>

          <TabsList className="flex flex-row gap-2 md:gap-3 w-full md:w-auto bg-transparent p-0">
            <TabsTrigger 
              value="residencial" 
              className="rounded-full px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold uppercase transition-all duration-300 border-2 bg-transparent text-primary border-primary data-[state=active]:!bg-primary data-[state=active]:!text-white data-[state=active]:!border-primary data-[state=active]:shadow-lg data-[state=active]:shadow-primary/50 hover:scale-105"
            >
              Planos Residenciais
            </TabsTrigger>
            <TabsTrigger 
              value="comercial" 
              className="rounded-full px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold uppercase transition-all duration-300 border-2 bg-transparent text-secondary border-secondary data-[state=active]:!bg-secondary data-[state=active]:!text-white data-[state=active]:!border-secondary data-[state=active]:shadow-lg data-[state=active]:shadow-secondary/50 hover:scale-105"
            >
              Planos Comerciais
            </TabsTrigger>
            <TabsTrigger 
              value="corporativo" 
              className="rounded-full px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold uppercase transition-all duration-300 border-2 bg-transparent text-[#3C1053] border-[#3C1053] data-[state=active]:!bg-[#3C1053] data-[state=active]:!text-white data-[state=active]:!border-[#3C1053] data-[state=active]:shadow-lg data-[state=active]:shadow-[#3C1053]/50 hover:scale-105"
            >
              Planos Corporativos
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="residencial">
          {renderPlanoCards(planosResidenciais, 'residencial')}
        </TabsContent>

        <TabsContent value="comercial">
          {renderPlanoCards(planosComerciais, 'comercial')}
        </TabsContent>

        <TabsContent value="corporativo">
          <div className="px-8 pt-0-12 max-lg:pb-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-center text-4xl lg:text-6xl mb-4 lg:mb-5 font-normal text-primary max-lg:text-3xl">
                Planos Corporativos
              </h2>
              <p className="text-center text-xl lg:text-2xl text-gray-700 mb-4 max-lg:text-lg">
                Conectividade Premium para o Seu Negócio
              </p>
              <p className="text-center text-lg text-gray-600 mb-12 max-lg:text-base">
                Tenha uma internet corporativa robusta, estável e desenhada
                para atender operações que não podem parar. O Plano
                Corporativo Seliga entrega performance, segurança e suporte
                especializado para garantir a continuidade do seu negócio.
              </p>

              <div className="mb-16">
                <h3 className="text-2xl lg:text-3xl font-normal text-primary mb-8 text-center">
                  Principais Benefícios
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-lg:gap-3">
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">
                      SLA de 4 horas
                    </span>
                  </div>
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">
                      Link Dedicado
                    </span>
                  </div>
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">
                      Plano Full Duplex
                    </span>
                  </div>
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">IP Válido</span>
                  </div>
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">
                      Atendimento 24h
                    </span>
                  </div>
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">
                      Ofertas Adaptáveis à Sua Necessidade
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-normal text-primary mb-8 text-center">
                  Diferenciais Exclusivos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 max-lg:gap-3">
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">
                      Monitoramento Proativo 24/7
                    </span>
                  </div>
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">
                      Alta Disponibilidade
                    </span>
                  </div>
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">
                      Atendimento Prioritário
                    </span>
                  </div>
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">
                      Escalabilidade de Banda
                    </span>
                  </div>
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">
                      Segurança Avançada de Rede
                    </span>
                  </div>
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">
                      Redundância Opcional
                    </span>
                  </div>
                  <div className="border-2 border-secondary rounded-xl px-4 py-4 flex items-center gap-3 lg:col-start-2">
                    <span className="text-secondary text-xl flex-shrink-0">
                      ✔
                    </span>
                    <span className="text-base lg:text-lg">
                      Equipe Técnica Especializada
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <a href="https://api.whatsapp.com/send/?phone=5508005918681&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20o%20Plano%20Corporativo.&type=phone_number&app_absent=0">
                  <button className="bg-secondary text-white font-bold text-lg px-12 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                    FAÇA SEU ORÇAMENTO
                  </button>
                </a>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}