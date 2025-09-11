const header = [
  {
    text: "Home",
    link: "/"
  },
  {
    text: "Planos",
    link: "/planos"
  },
  {
    text: "Sobre nós",
    link: "/sobre"
  },
  {
    text: "Fale Conosco",
    link: "/contato"
  }
];

export default function Header() {
  return (
    <header>
      <div className="w-full h-12 bg-primary md:px-32 flex justify-between items-center text-white ">
        <div>0800 591 8681</div>
        <div>Central do Assinante</div>
      </div>

      <div className="flex justify-between items-center md:px-44 py-2 border-b-3 border-primary">
        <div className="w-40 h-20 border-2 border-black flex justify-center items-center">
          Logo
        </div>

        <ul className="flex flex-row gap-8">
          {header.map((item) => (
            <li key={item.text} className="hover:scale-115 transition-all duration-300">
              <a href={item.link} className="text-black">{item.text}</a>
            </li>
          ))}
        </ul>

          <div className="flex flex-row gap-2 items-center text-white">
            <div className="w-40 h-8 bg-secondary font-bold rounded-full flex justify-center items-center">Quero assinar</div>
            <div className="w-8 h-8 bg-secondary font-bold rounded-full flex justify-center items-center">F</div>
            <div className="w-8 h-8 bg-secondary font-bold rounded-full flex justify-center items-center">I</div>
          </div>
      </div>
    </header>
  );
}
