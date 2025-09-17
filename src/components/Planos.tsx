import { Icon } from "@iconify/react";
import { Switch } from "@/components/ui/switch"
import { useState } from "react";

const planos = [
  {
    speed: "550",
    unit: "mega",
    price: "89,00",
    feature: null,
    benefits: [
      { Icon: "mdi:television", text: ["65 Canais de TV"] },
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
      { Icon: "mdi:television", text: ["65 Canais de TV"] },
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
    price: "129,90",
    feature: { image: "/images/hbo.png", text: ["HBO MAX por", "6 meses grátis"] },
    benefits: [
      { Icon: "material-symbols:wifi-rounded", text: ["Wi-Fi 6"] },
      { Icon: "mdi:television", text: ["65 Canais de TV"] },
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

export default function Planos() {
  const [selectedSVAs, setSelectedSVAs] = useState<{ [key: string]: boolean }>({});

  const handleSVAChange = (planoIndex: number, svaName: string) => {
    const key = `${planoIndex}-${svaName}`;
    setSelectedSVAs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getSelectedSVAsForPlano = (planoIndex: number) => {
    return planos[planoIndex].options.filter(option =>
      selectedSVAs[`${planoIndex}-${option.name}`]
    ).map(option => option.text);
  };

  const calculateTotalPrice = (planoIndex: number) => {
    const plano = planos[planoIndex];
    const basePrice = parseFloat(plano.price.replace(',', '.'));

    const selectedOptions = plano.options.filter(option =>
      selectedSVAs[`${planoIndex}-${option.name}`]
    );

    const totalSVA = selectedOptions.reduce((sum, option) => sum + option.price, 0);
    const totalPrice = basePrice + totalSVA;

    return totalPrice.toFixed(2).replace('.', ',');
  };

  const getSelectedSVAsPrice = (planoIndex: number) => {
    const plano = planos[planoIndex];
    const selectedOptions = plano.options.filter(option =>
      selectedSVAs[`${planoIndex}-${option.name}`]
    );

    const totalSVA = selectedOptions.reduce((sum, option) => sum + option.price, 0);
    return totalSVA;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-12 md:mt-24 px-4 md:px-0">
      <h1 className="text-2xl md:text-4xl font-bold text-primary text-center px-4">Planos de verdade para uma vida conectada!</h1>
      <h2 className="text-sm md:text-2sm text-primary mb-8 md:mb-16 text-center px-4">Assine os melhores planos de internet fibra com Wi-Fi grátis e tenha velocidade e estabilidade.</h2>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl justify-center items-center">
        {planos.map((plano, planoIndex) => (
          <div key={planoIndex} className="w-full md:w-80 py-4 border-2 border-primary rounded-4xl flex flex-col relative">
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
                  <p className="text-3xl md:text-5xl uniNeueHeavy text-primary mt-6 md:mt-8">R$ {calculateTotalPrice(planoIndex)}</p>
                </div>
                <a
                  href={`https://wa.me/5508005918681?text=Olá, vim pelo site e gostaria de contratar o plano de ${plano.speed} ${plano.unit}${getSelectedSVAsForPlano(planoIndex).length > 0 ? ' com ' + getSelectedSVAsForPlano(planoIndex).join(', ') : ''} - Total: R$ ${calculateTotalPrice(planoIndex)}`}
                  className="text-sm md:text-lg text-primary text-center mt-4 font-bold bg-secondary rounded-full px-8 md:px-12 py-2 hover:scale-105 transition-all duration-300"
                >
                  Contrate agora!
                </a>
                <p className="text-xs text-primary text-center font-bold mt-2">Consulte condições e viabilidade*</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}