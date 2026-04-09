import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    projeto: "Criação de Site",
    mensagem: "",
  });

  const [result, setResult] = useState("");

  const faqs = [
    {
      question: "Quais as formas de pagamento?",
      answer:
        "Você pode pagar via Boleto Bancário ou PIX em até 2x sem juros (50% no início do projeto e 50% após a finalização). Também oferecemos parcelamento em até 12x no cartão de crédito.",
    },
    {
      question: "Quanto custa a criação de site?",
      answer:
        "O valor para a criação de um site depende do tipo de projeto, complexidade, funcionalidades necessárias e plugins utilizados. Para receber um orçamento personalizado, basta preencher o formulário ao lado e nossa equipe entrará em contato.",
    },
    {
      question: "Por que criar um site?",
      answer:
        "Estar presente na internet com um site profissional aumenta sua visibilidade, amplia sua base de clientes e possibilita novas oportunidades de vendas.",
    },
    {
      question: "Meu site aparecerá no Google?",
      answer:
        "Sim. Assim que o site é publicado ele já fica disponível para ser indexado pelo Google. Além disso, utilizamos técnicas de SEO.",
    },
    {
      question: "Por que criar o site com a nossa equipe?",
      answer:
        "Na Mendes.web desenvolvemos sites modernos, rápidos e totalmente personalizados para cada cliente.",
    },
    {
      question: "Quais são os prazos e valores?",
      answer:
        "O prazo médio para desenvolvimento de um site é de até 7 dias úteis.",
    },
  ];

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const form = new FormData();

    form.append(
      "access_key",
      "9ef9d07c-dfaf-4dc2-aac3-f6f7105c90a2"
    );

    form.append("name", formData.nome);
    form.append("email", formData.email);
    form.append("phone", formData.telefone);
    form.append("subject", formData.projeto);
    form.append("message", formData.mensagem);

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: form,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Mensagem enviada com sucesso!");

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        projeto: "Criação de Site",
        mensagem: "",
      });
    } else {
      setResult("Erro ao enviar mensagem.");
    }
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* FORMULÁRIO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#031a44] mb-6">
              Entre em contato conosco
            </h2>

            <p className="text-gray-600 mb-8">
              Entre em contato conosco e inicie o seu projeto agora mesmo.
            </p>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-semibold">
                  Nome*
                </label>

                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite o seu nome..."
                  className="w-full mt-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#fc5d23]"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  E-mail*
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Informe um e-mail para contato"
                  className="w-full mt-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#fc5d23]"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Telefone*
                </label>

                <input
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full mt-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#fc5d23]"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Qual tipo de projeto você necessita?
                </label>

                <select
                  name="projeto"
                  value={formData.projeto}
                  onChange={handleChange}
                  className="w-full mt-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#fc5d23]"
                >
                  <option>Criação de Site</option>
                  <option>Landing Page</option>
                  <option>Loja Virtual</option>
                  <option>Software Personalizado</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Mensagem*
                </label>

                <textarea
                  rows={4}
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Fale um pouco mais sobre seu projeto"
                  className="w-full mt-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#fc5d23]"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#fc5d23] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#031a44] transition"
              >
                Enviar mensagem
              </button>

              {result && (
                <p className="text-green-600 font-medium">
                  {result}
                </p>
              )}
            </form>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#031a44] mb-8">
              Perguntas frequentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg"
                >
                  <button
                    onClick={() => toggle(index)}
                    type="button"
                    className="flex justify-between items-center w-full p-5 text-left font-semibold"
                  >
                    {faq.question}

                    <ChevronDown
                      className={`transition ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openIndex === index && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}