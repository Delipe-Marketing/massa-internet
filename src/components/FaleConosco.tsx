export default function FaleConosco() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-primary px-4 md:px-0">
      
      <h1 className="text-2xl md:text-4xl font-bold text-white mt-12 md:mt-24 text-center">Fale <span className="text-secondary">Conosco</span></h1>
      <form className="w-full md:w-1/2 flex flex-col gap-4 mt-4 mb-12 md:mb-24">
        <div>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Nome completo:"
            className="w-full bg-white rounded-md px-4 py-2 outline-none placeholder-gray-600"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail:"
              className="w-full bg-white rounded-md px-4 py-2 outline-none placeholder-gray-600"
              autoComplete="off"
            />
          </div>
          <div className="flex-1">
            <input
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="Telefone:"
              className="w-full bg-white rounded-md px-4 py-2 outline-none placeholder-gray-600"
              autoComplete="off"
            />
          </div>
        </div>
        <div>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={3}
            placeholder="Digite sua mensagem aqui..."
            className="w-full bg-white rounded-md px-4 py-2 outline-none resize-none placeholder-gray-600"
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-1/3 mx-auto mt-2 bg-secondary text-white font-bold text-base md:text-lg rounded-md py-2 transition hover:brightness-110"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}