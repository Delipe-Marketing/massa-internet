import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const header = [
  {
    text: "Home",
    link: "/"
  },
  {
    text: "Indique e Ganhe",
    link: "/#indique-ganhe"
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToIndique = () => {
    let attempts = 0;
    const tryScroll = () => {
      const element = document.getElementById("indique-ganhe");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < 8) setTimeout(tryScroll, 200);
    };
    // pequeno delay para garantir render
    setTimeout(tryScroll, 300);
  };

  useEffect(() => {
    if (window.location.hash === "#indique-ganhe") {
      scrollToIndique();
    }
  }, []);

  const handleIndiqueGanheClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isHomePage = window.location.pathname === '/';

    // Se não estiver na home, navega para a home com âncora e deixa o navegador cuidar do scroll
    if (!isHomePage) {
      window.location.href = '/#indique-ganhe';
      return;
    }

    // Aguarda um pouco para garantir que o banner esteja carregado antes de scrollar
    scrollToIndique();
  };

  return (
    <header>
      <div className="w-full h-10 md:h-12 bg-primary px-4 md:px-32 flex justify-between items-center text-white py-2">
        <a href="https://wa.me/5508005918681?text=Olá, vim pelo site" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-1 md:gap-2 items-center text-sm md:text-base">
          <Icon icon="mdi:whatsapp" className="text-xl md:text-2xl" />
          <span className="hidden md:inline">0800 591 8681</span>
          <span className="md:hidden">0800</span>
        </a>
        <a href="https://massainternet.sgp.tsmx.com.br/accounts/central/login" className="flex flex-row gap-1 md:gap-2 items-center text-sm md:text-base">
          <Icon icon="line-md:person-add-filled" className="text-xl md:text-2xl" />
          <span className="hidden md:inline">Central do Assinante</span>
          <span className="md:hidden">Central</span>
        </a>
      </div>

      <div className="flex justify-between items-center px-4 md:px-44 py-4 border-b-3 border-primary relative">
        <a href="/" className="flex justify-center items-center hover:scale-110 transition-all duration-300">
          <img src="/images/LogoCarnaval.png" alt="Logo Carnaval" className="w-40 md:w-60" />
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex flex-row gap-8">
          {header.map((item) => (
            <li key={item.text} className="hover:scale-115 transition-all duration-300">
              {item.text === "Indique e Ganhe" ? (
                <a href={item.link} onClick={handleIndiqueGanheClick} className="text-black">{item.text}</a>
              ) : (
                <a href={item.link} className="text-black">{item.text}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Botão Mobile Menu */}
        <button 
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b-3 border-primary shadow-lg md:hidden z-50">
            <ul className="flex flex-col gap-4 p-4">
              {header.map((item) => (
                <li key={item.text}>
                  {item.text === "Indique e Ganhe" ? (
                    <a href={item.link} onClick={handleIndiqueGanheClick} className="text-black text-lg block py-2">{item.text}</a>
                  ) : (
                    <a href={item.link} className="text-black text-lg block py-2">{item.text}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Botões Desktop */}
        <div className="max-lg:hidden md:flex flex-row gap-2 items-center text-white">
          <a
            href="https://wa.me/5508005918681?text=Olá, vim pelo site e gostaria de contratar um plano"
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 bg-secondary rounded-full flex justify-center items-center gap-2 px-6 text-sm hover:scale-110 transition-all duration-300"
          >
            <Icon icon="mdi:whatsapp" className="text-xl" />
            Quero Assinar
          </a>
          <a
            href="https://www.instagram.com/massainternet/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-secondary font-bold rounded-full flex justify-center items-center hover:scale-110 transition-all duration-300"
          >
            <Icon icon="mdi:instagram" className="text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/masssainternetoficial"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-secondary font-bold rounded-full flex justify-center items-center hover:scale-110 transition-all duration-300"
          >
            <Icon icon="mdi:facebook" className="text-2xl" />
          </a>
        </div>
      </div>
    </header>
  );
}
