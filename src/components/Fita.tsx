const itens = [
    "Wi-Fi Premium",
    "Suporte Proativo",
    "Aplicativos",
    "Canais de TV",
    "Sem Fidelidade",
    "Wi-Fi Premium",
    "Suporte Proativo",
    "Aplicativos",
    "Canais de TV",
    "Sem Fidelidade",
    "Wi-Fi Premium",
    "Wi-Fi Premium",
    "Suporte Proativo",
    "Aplicativos",
    "Canais de TV",
    "Sem Fidelidade",
    "Wi-Fi Premium",
]

export default function Fita() {
  return (
    <div className="w-full h-12 bg-secondary py-2 overflow-hidden">
      <div className="flex items-center text-white animate-scroll justify-between">
        {itens.map((item) => (
          <div className="flex flex-row gap-2 items-center justify-center mr-4">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <div className="text-nowrap">{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}