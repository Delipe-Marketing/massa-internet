const menu = [
  { text: "Home", link: "/" },
  { text: "Planos", link: "/planos" },
  { text: "Sobre nós", link: "/sobre" },
  { text: "Fale Conosco", link: "/contato" },
  { text: "Área do Cliente", link: "/cliente" }
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
      <div className="w-full flex flex-row justify-between items-center md:px-88">
        <div className="w-120 h-0.5 bg-black mx-auto"></div>
        <div className="w-60 h-0.5 bg-black mx-auto"></div>
      </div>

      <div className="w-full flex flex-row justify-between items-start md:px-60 md:py-12">
        <div className="flex flex-col gap-4">
          <div className="w-60 h-20 border-2 border-black flex justify-center items-center">Logo</div>
          <div className="">Rua Henrique Novaes, Centro,<br /> Itaguaçu/ES</div>
          <h1 className="text-4xl">0800 591 8681</h1>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-2xl">Menu</div>
          <div>
            <ul className="flex flex-col gap-2">
              {menu.map((item) => (
                <li key={item.text} className="hover:scale-115 transition-all duration-300">
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-2xl">Serviços</div>
          <div>
            <ul className="flex flex-col gap-2">
              {servicos.map((item) => (
                <li key={item.text}>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-2xl">Contato</div>
          <div className="flex flex-col gap-2">
            <div> 
              Whatsapp: <br /> 0800 591 8681
            </div>

            <div>
              E-mail: <br /> contato@massa.com.br
            </div>


             <div className="leading-tight">
              Horário de atendimento<br />De seg-sex entre 08:00 à<br />18:00 e Sab
             </div>

          </div>
        </div>
      </div>

      <div className="w-9/10 h-0.5 bg-black mx-auto"></div>

      <div className="w-full flex flex-row justify-between items-center md:px-60 md:py-4">
        <div>© 2025 Massa Internet -Todos os direitos reservados</div>
        <div>Termos de serviço   |   Políticas de Privacidade</div>
      </div>
      
    </footer>
  )
}