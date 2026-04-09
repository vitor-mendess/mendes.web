import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult("Enviando...");

    const formData = new FormData(event.currentTarget);

    formData.append(
      "access_key",
      "9ef9d07c-dfaf-4dc2-aac3-f6f7105c90a2"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Mensagem enviada com sucesso!");
      event.currentTarget.reset();
    } else {
      setResult("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <section className="py-24 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#031a44] mb-4">
            Entre em contato conosco
          </h1>

          <p className="text-gray-600 text-lg">
            Inicie o seu projeto agora mesmo com a nossa equipe.
          </p>
        </motion.div>

        {/* GRID PRINCIPAL */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
          {/* FORMULÁRIO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-10"
          >
            <p className="text-gray-500 mb-8">
              Fale com a Mendes.web, basta preencher os campos abaixo:
            </p>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-[#fc5d23]">
                  Nome*
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Digite o seu nome..."
                  className="w-full mt-2 border-b border-gray-300 p-3 focus:outline-none focus:border-[#fc5d23]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#fc5d23]">
                  E-mail*
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Informe um e-mail para contato"
                  className="w-full mt-2 border-b border-gray-300 p-3 focus:outline-none focus:border-[#fc5d23]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#fc5d23]">
                  Telefone*
                </label>
                <input
                  type="text"
                  name="telefone"
                  required
                  placeholder="(00) 00000-0000"
                  className="w-full mt-2 border-b border-gray-300 p-3 focus:outline-none focus:border-[#fc5d23]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#fc5d23]">
                  Tipo de projeto
                </label>
                <select
                  name="projeto"
                  className="w-full mt-2 border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#fc5d23]"
                >
                  <option>Criação de Site</option>
                  <option>Landing Page</option>
                  <option>Loja Virtual</option>
                  <option>Software Personalizado</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#fc5d23]">
                  Mensagem*
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Fale um pouco mais sobre seu projeto"
                  className="w-full mt-2 border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[#fc5d23]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#031a44] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#fc5d23] transition"
              >
                Enviar
              </button>

              {result && (
                <p className="text-sm text-gray-600 mt-4">
                  {result}
                </p>
              )}
            </form>
          </motion.div>

          {/* CARD DE CONTATO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#fc5d23] rounded-3xl p-10 text-white h-fit"
          >
            <h2 className="text-3xl font-bold mb-10 text-center">
              Contatos
            </h2>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Phone size={20} />
                <span>(11) 95811-9820</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={20} />
                <span>vm06122006@icloud.com</span>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-1" />
                <span>
                  São Paulo - SP
                  <br />
                  Atendimento online para todo Brasil
                </span>
              </div>
            </div>

            {/* REDES */}
            <div className="flex gap-4 mt-10 justify-center">
              <a
                href="https://www.instagram.com/mendes.web_/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#fc5d23] p-3 rounded-full hover:scale-110 transition inline-flex"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/vitor-mendess/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#fc5d23] p-3 rounded-full hover:scale-110 transition inline-flex"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}