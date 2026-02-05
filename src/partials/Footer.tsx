const menu = [
  { text: "Home", link: "/" },
  { text: "Planos", link: "/planos" },
  { text: "Sobre nós", link: "/sobre" },
  { text: "Fale Conosco", link: "/contato" },
  { text: "Área do Cliente", link: "https://massainternet.sgp.tsmx.com.br/accounts/central/login" }
]

const servicos = [
  { text: "Wi-Fi Premium", link: "#" },
  { text: "Suporte Proativo", link: "#" },
  { text: "Aplicativos", link: "#" },
  { text: "Canais de TV", link: "#" },
  { text: "Sem Fidelidade", link: "#" }
]


export default function Footer() {
  return (
    <footer className="mt-8 text-primary">
      <div className="w-full flex justify-center items-center px-4">
        <div className="w-60 md:w-120 h-0.5 bg-black"></div>
      </div>

      <div className="w-full flex flex-col md:flex-row px-4 md:px-70 py-8 md:py-12 gap-8 md:gap-30">
        <div className="flex flex-col gap-4 md:mt-4 items-center md:items-start">
          <img src="/images/LogoCarnaval.png" alt="Logo Carnaval" className="w-40 md:w-60" />
          <div className="text-sm md:text-base text-center md:text-left">Rua Henrique Novaes, Centro,<br /> Itaguaçu/ES</div>
          <h1 className="text-2xl md:text-4xl text-center md:text-left">0800 591 8681</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="text-xl md:text-xl font-bold text-center md:text-left">Menu</div>
            <div>
              <ul className="flex flex-col gap-2">
                {menu.map((item) => (
                  <li key={item.text} className="hover:scale-115 transition-all duration-300 text-sm md:text-base text-center md:text-left">
                    <a href={item.link}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="text-xl font-bold text-center md:text-left">Serviços</div>
            <div>
              <ul className="flex flex-col gap-2">
                {servicos.map((item) => (
                  <li key={item.text} className="text-sm md:text-base text-center md:text-left">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="text-xl font-bold text-center md:text-left">Contato</div>
            <div className="flex flex-col gap-2">
              <div className="text-sm md:text-base text-center md:text-left"> 
                Whatsapp: <br /> 0800 591 8681
              </div>

              <div className="text-sm md:text-base text-center md:text-left">
                E-mail: <br /> contato@massa.net.br
              </div>

              <div className="leading-tight text-sm md:text-base text-center md:text-left">
                Horário de atendimento<br />De seg-sex entre 08:00h à<br />18:00h e Sab entre 08:00h à<br />17:00h
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-9/10 h-0.5 bg-black mx-auto"></div>

      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-60 py-4 gap-4">
        <div className="text-sm md:text-base text-center md:text-left">© 2025 Massa Internet -Todos os direitos reservados</div>
        <div className="text-sm md:text-base text-center md:text-left">Termos de serviço   |   Políticas de Privacidade</div>
      </div>
      
    </footer>
  )
}