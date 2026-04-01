const menu = [
  { text: "Home", link: "/" },
  { text: "Planos", link: "/planos" },
  { text: "Sobre nós", link: "/sobre" },
  {
    text: "Fale Conosco",
    link: "https://api.whatsapp.com/send/?phone=5508005918681&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+falar+com+o+suporte&type=phone_number&app_absent=0",
  },
  {
    text: "Área do Cliente",
    link: "https://massainternet.sgp.tsmx.com.br/accounts/central/login",
  },
];

const servicos = [
  { text: "Wi-Fi Premium", link: "#" },
  { text: "Suporte Proativo", link: "#" },
  { text: "Aplicativos", link: "#" },
  { text: "Canais de TV", link: "#" },
  { text: "Sem Fidelidade", link: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-8 text-primary">
      <div className="w-full flex justify-center items-center px-4">
        <div className="w-60 md:w-120 h-0.5 bg-black"></div>
      </div>

      <div className="w-full flex flex-col md:flex-row px-4 md:px-70 py-8 md:py-12 gap-8 md:gap-30">
        <div className="flex flex-col gap-4 md:mt-4 items-center md:items-start">
          <img src="/images/Logo.svg" alt="Logo" className="w-40 md:w-60" />
          <div className="flex flex-col gap-2">
            <div className="text-sm md:text-base text-center md:text-left">
              Rua Henrique Novaes, Centro,
              <br /> Itaguaçu/ES
            </div>
            <div className="text-xl md:text-2xl font-medium text-center md:text-left mt-2 flex flex-col gap-1">
              <a
                href="https://api.whatsapp.com/send/?phone=552728886928&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+falar+com+o+suporte&type=phone_number&app_absent=0"
                className="hover:underline"
              >
                (27) 2888-6928
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5508005918681&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+falar+com+o+suporte&type=phone_number&app_absent=0"
                className="hover:underline"
              >
                0800 591 8681
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="text-xl md:text-xl font-bold text-center md:text-left">
              Menu
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                {menu.map((item) => (
                  <li
                    key={item.text}
                    className="hover:scale-115 transition-all duration-300 text-sm md:text-base text-center md:text-left"
                  >
                    <a href={item.link}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="text-xl font-bold text-center md:text-left">
              Serviços
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                {servicos.map((item) => (
                  <li
                    key={item.text}
                    className="text-sm md:text-base text-center md:text-left"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="text-xl font-bold text-center md:text-left">
              Contato
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm md:text-base text-center md:text-left">
                <span className="font-semibold">Whatsapp Comercial:</span>{" "}
                <br />
                <a
                  href="https://wa.me/5527996152427"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  (27) 99615-2427
                </a>
              </div>

              <div className="text-sm md:text-base text-center md:text-left">
                E-mail: <br />{" "}
                <a
                  href="mailto:contato@massa.net.br"
                  className="hover:underline"
                >
                  contato@massa.net.br
                </a>
              </div>

              <div className="leading-tight text-sm md:text-base text-center md:text-left">
                Horário de atendimento
                <br />
                De seg-sex entre 08:00h à<br />
                18:00h e Sab entre 08:00h à<br />
                17:00h
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-9/10 h-0.5 bg-black mx-auto"></div>

      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-60 py-4 gap-4">
        <div className="text-sm md:text-base text-center md:text-left">
          © 2025 Massa Internet -Todos os direitos reservados
        </div>
        <div className="text-sm md:text-base text-center md:text-left">
          Termos de serviço | Políticas de Privacidade
        </div>
      </div>
    </footer>
  );
}
