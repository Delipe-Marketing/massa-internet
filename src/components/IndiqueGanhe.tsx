import { useState } from "react";
import { Icon } from "@iconify/react";

export default function IndiqueGanhe() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    nomeIndicado: "",
    telefoneIndicado: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpa mensagens de status quando o usuário começa a digitar
    if (submitStatus) {
      setSubmitStatus(null);
      setStatusMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage("");

    try {
      const scriptUrl = "https://script.google.com/macros/s/AKfycbzCv_WOckvE8IpZQgEzdhmKVPhck2_FRkn-SrXm5STEO0s_dr3dBzi6qJN2-hjGhOHy/exec";
      
      // Preparar dados para envio
      const dados = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        nomeIndicado: formData.nomeIndicado,
        telefoneIndicado: formData.telefoneIndicado,
        timestamp: new Date().toISOString()
      };

      // Usar form HTML tradicional com iframe oculto (melhor compatibilidade com Google Apps Script)
      // Criar iframe oculto se não existir
      let iframe = document.getElementById("hidden_iframe_indique_ganhe") as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "hidden_iframe_indique_ganhe";
        iframe.name = "hidden_iframe_indique_ganhe";
        iframe.style.display = "none";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "none";
        document.body.appendChild(iframe);
      }

      // Criar form dinâmico
      const form = document.createElement("form");
      form.method = "POST";
      form.action = scriptUrl;
      form.target = "hidden_iframe_indique_ganhe";
      form.style.display = "none";
      form.enctype = "application/x-www-form-urlencoded";

      // Adicionar campos ao form
      Object.keys(dados).forEach(key => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = dados[key as keyof typeof dados] as string;
        form.appendChild(input);
      });

      // Adicionar form ao body
      document.body.appendChild(form);
      
      // Promise para aguardar o envio
      const submitPromise = new Promise<void>((resolve, reject) => {
        // Listener para quando o iframe carregar (resposta do servidor)
        const handleLoad = () => {
          iframe.removeEventListener("load", handleLoad);
          resolve();
        };
        
        iframe.addEventListener("load", handleLoad);
        
        // Timeout de segurança (5 segundos)
        setTimeout(() => {
          iframe.removeEventListener("load", handleLoad);
          resolve(); // Resolve mesmo sem resposta (assumimos sucesso)
        }, 5000);
        
        // Submeter o form
        form.submit();
      });

      // Aguardar o envio
      await submitPromise;
      
      // Remover form após envio
      setTimeout(() => {
        try {
          if (form.parentNode) {
            document.body.removeChild(form);
          }
        } catch (e) {
          // Form já foi removido, ignorar
        }
      }, 100);

      // Limpa o formulário
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        nomeIndicado: "",
        telefoneIndicado: ""
      });

      setSubmitStatus("success");
      setStatusMessage("Indicação enviada com sucesso! Obrigado por indicar nossos serviços.");
      
      // Limpa a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
        setStatusMessage("");
      }, 5000);

    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitStatus("error");
      setStatusMessage("Erro ao enviar a indicação. Por favor, tente novamente.");
      
      // Limpa a mensagem de erro após 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
        setStatusMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-8 py-10 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-5xl">
        {/* Título */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6">
            Indique e <span className="text-secondary">Ganhe</span>
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-primary max-w-3xl mx-auto font-bold">
            Indique seus amigos e garanta até 100% de desconto na sua mensalidade
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
          <div className="space-y-6 md:space-y-8">
            {/* Nome */}
            <div className="relative">
              <label htmlFor="nome" className="block text-sm font-bold text-primary mb-2">
                Nome Completo
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Icon icon="mdi:account" className="text-xl text-primary" />
                </div>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border-2 border-primary/30 rounded-xl pl-12 pr-4 py-4 outline-none placeholder-gray-400 text-primary focus:border-secondary focus:bg-white transition-all duration-300 focus:shadow-lg"
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Email e Telefone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Icon icon="mdi:email" className="text-xl text-primary" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border-2 border-primary/30 rounded-xl pl-12 pr-4 py-4 outline-none placeholder-gray-400 text-primary focus:border-secondary focus:bg-white transition-all duration-300 focus:shadow-lg"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="telefone" className="block text-sm font-bold text-primary mb-2">
                  Telefone
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Icon icon="mdi:phone" className="text-xl text-primary" />
                  </div>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border-2 border-primary/30 rounded-xl pl-12 pr-4 py-4 outline-none placeholder-gray-400 text-primary focus:border-secondary focus:bg-white transition-all duration-300 focus:shadow-lg"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            {/* Nome e Telefone do Indicado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="relative">
                <label htmlFor="nomeIndicado" className="block text-sm font-bold text-primary mb-2">
                  Nome do Indicado
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Icon icon="mdi:account-plus" className="text-xl text-primary" />
                  </div>
                  <input
                    id="nomeIndicado"
                    name="nomeIndicado"
                    type="text"
                    placeholder="Nome completo do indicado"
                    value={formData.nomeIndicado}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border-2 border-primary/30 rounded-xl pl-12 pr-4 py-4 outline-none placeholder-gray-400 text-primary focus:border-secondary focus:bg-white transition-all duration-300 focus:shadow-lg"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="telefoneIndicado" className="block text-sm font-bold text-primary mb-2">
                  Telefone do Indicado
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Icon icon="mdi:phone-plus" className="text-xl text-primary" />
                  </div>
                  <input
                    id="telefoneIndicado"
                    name="telefoneIndicado"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.telefoneIndicado}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border-2 border-primary/30 rounded-xl pl-12 pr-4 py-4 outline-none placeholder-gray-400 text-primary focus:border-secondary focus:bg-white transition-all duration-300 focus:shadow-lg"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            {/* Mensagem de Status */}
            {submitStatus && (
              <div className={`rounded-xl p-4 flex items-center gap-3 ${
                submitStatus === "success" 
                  ? "bg-green-50 border-2 border-green-300 text-green-800" 
                  : "bg-red-50 border-2 border-red-300 text-red-800"
              }`}>
                <Icon 
                  icon={submitStatus === "success" ? "mdi:check-circle" : "mdi:alert-circle"} 
                  className="text-2xl flex-shrink-0" 
                />
                <p className="font-bold">{statusMessage}</p>
              </div>
            )}

            {/* Botão de Envio */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative cursor-pointer w-full md:w-auto min-w-[280px] bg-gradient-to-r from-secondary to-secondary/90 text-white font-bold text-lg md:text-xl rounded-full px-10 py-5 transition-all duration-300 transform shadow-lg overflow-hidden ${
                  isSubmitting 
                    ? "opacity-70 cursor-not-allowed" 
                    : "hover:scale-105 hover:shadow-2xl hover:from-secondary hover:to-primary"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <Icon icon="mdi:loading" className="text-2xl animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Icon icon="mdi:send" className="text-2xl group-hover:translate-x-1 transition-transform duration-300" />
                      Enviar Indicação
                    </>
                  )}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

