import { Icon } from "@iconify/react";


const itens = [
    {text: "Wi-Fi Premium", icon: "material-symbols:wifi-rounded"},
    {text: "Suporte Proativo", icon: "mdi:support"},
    {text: "Canais de TV", icon: "mdi:tv"},
    {text: "Sem Fidelidade", icon: "mdi:link-variant-off"},
    {text: "Wi-Fi Premium", icon: "material-symbols:wifi-rounded"},
    {text: "Suporte Proativo", icon: "mdi:support"},
    {text: "Canais de TV", icon: "mdi:tv"},
    {text: "Sem Fidelidade", icon: "mdi:link-variant-off"},
    {text: "Wi-Fi Premium", icon: "material-symbols:wifi-rounded"},
    {text: "Suporte Proativo", icon: "mdi:support"},
    {text: "Canais de TV", icon: "mdi:tv"},
    {text: "Sem Fidelidade", icon: "mdi:link-variant-off"},
]

export default function Fita() {
  return (
    <div className="w-full h-12 bg-secondary py-2 overflow-hidden">
      <div className="flex items-center text-white animate-scroll">
        {/* Primeira sequência */}
        {itens.map((item, index) => (
          <div key={`first-${index}`} className="flex flex-row gap-2 items-center justify-center mr-8 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-full flex justify-center items-center"><Icon icon={item.icon} /></div>
            <div className="text-nowrap whitespace-nowrap">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}