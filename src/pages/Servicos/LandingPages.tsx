import React from "react";
import {
  MousePointerClick,
  Layout,
  Smartphone,
  Zap,
  Target,
  BarChart,
  LayoutTemplate,
  CheckCircle,
  MessageCircle,
  Rocket,
} from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

type Step = {
  title: string;
  description: string;
};

export default function LandingPages(): React.ReactNode {
  const features: Feature[] = [
    {
      icon: <Target />,
      title: "Foco em conversão",
      desc: "Cada elemento é pensado para gerar leads e vendas.",
    },
    {
      icon: <Layout />,
      title: "Design estratégico",
      desc: "Layout moderno que guia o usuário até a ação.",
    },
    {
      icon: <Smartphone />,
      title: "100% responsivo",
      desc: "Perfeito em celulares e tablets.",
    },
    {
      icon: <Zap />,
      title: "Alta velocidade",
      desc: "Carregamento rápido para não perder visitantes.",
    },
    {
      icon: <MousePointerClick />,
      title: "Copy persuasiva",
      desc: "Textos pensados para converter.",
    },
    {
      icon: <BarChart />,
      title: "Pronta para tráfego",
      desc: "Estruturada para campanhas.",
    },
  ];

  const steps: Step[] = [
    {
      title: "Planejamento",
      description:
        "Analisamos seu público, objetivos e estratégia para criar uma página focada em conversão desde o início.",
    },
    {
      title: "Estrutura",
      description:
        "Definimos a organização das seções e o fluxo ideal para guiar o usuário até a ação desejada.",
    },
    {
      title: "Copy",
      description:
        "Desenvolvemos textos persuasivos que comunicam valor, geram interesse e incentivam o usuário a agir.",
    },
    {
      title: "Design",
      description:
        "Criamos um layout moderno, profissional e alinhado com sua marca para transmitir confiança.",
    },
    {
      title: "Publicação",
      description:
        "Finalizamos e colocamos sua landing page no ar pronta para gerar resultados e captar leads.",
    },
  ];

  return (
    <section className="bg-white text-[#031a44] pt-40 pb-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Criação de
              <span className="text-[#fc5d23]"> Landing Pages</span>
            </h1>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Se você quer gerar mais leads, aumentar suas vendas ou validar uma oferta,
              uma landing page é a ferramenta ideal.
              <br /><br />
              Criamos páginas estratégicas, com design profissional e foco total em conversão.
              <br /><br />
              Nada de páginas bonitas que não vendem — aqui cada elemento tem um objetivo.
            </p>

            <a
              href="https://wa.me/5511958119820?text=Olá,%20vim%20pelo%20site%20e%20quero%20criar%20uma%20landing%20page."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#fc5d23] px-8 py-4 rounded-lg text-white font-semibold hover:bg-[#031a44] transition"
            >
              Criar minha landing page →
            </a>
          </div>

          {/* ALTERAÇÃO AQUI (imagem escondida no mobile) */}
          <div className="relative hidden md:block">
            <img
              src="/images/landingPage.webp"
              className="rounded-xl shadow-2xl"
              alt="Landing page"
            />
            <div className="absolute -z-10 top-6 left-6 w-full h-full bg-[#031a44] rounded-xl"></div>
          </div>
        </div>

        {/* SOBRE */}
        <div className="mb-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/LandingPages.jpg"
                alt="Landing Page"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -z-10 top-6 left-6 w-full h-full bg-[#031a44] rounded-xl"></div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Maximize suas conversões com uma
                <span className="text-[#fc5d23]"> landing page personalizada</span>
              </h2>

              <p className="text-gray-600 mb-4">
                Está em busca de uma Landing Page eficiente, com visual atrativo e que atenda às suas necessidades?
                Com nossa solução, você tem uma forma rápida e econômica de aumentar suas conversões.
              </p>

              <p className="text-gray-600 mb-4">
                Oferecemos Landing Pages personalizáveis, prontas para uso, onde você pode alterar cores,
                imagens e conteúdos para adaptar totalmente ao seu negócio.
              </p>

              <p className="text-gray-600 mb-4">
                Escolha entre modelos exclusivos, projetados para capturar a atenção do seu público
                e guiá-lo até a ação desejada.
              </p>

              <p className="text-gray-600 mb-6">
                Tudo isso sem complicação técnica, com foco total em performance e resultados reais.
              </p>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mb-28 grid md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <div className="text-[#fc5d23] mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* SEÇÃO PREMIUM */}
        <div className="mb-28 bg-[#031a44] text-white py-20 px-6 rounded-3xl">
          <div className="max-w-6xl mx-auto space-y-20">
            {[
              {
                icon: <LayoutTemplate size={70} className="text-[#fc5d23]" />,
                title: "O que está incluso na Landing Page?",
                items: [
                  "Página única com seções completas",
                  "Início, Quem Somos, Produto/Serviço, FAQ e Contato",
                  "Formulário com envio por e-mail + WhatsApp",
                  "Banner com vídeo ou imagem",
                  "Personalização total",
                  "100% responsivo",
                ],
              },
              {
                icon: <MessageCircle size={70} className="text-[#fc5d23]" />,
                title: "Por que optar pela Landing Page?",
                items: [
                  "Solução acessível e eficiente",
                  "Ideal para quem busca praticidade",
                  "Sem complicação técnica",
                  "Equipe especializada",
                  "Design profissional",
                  "Foco em conversão",
                ],
              },
              {
                icon: <Rocket size={70} className="text-[#fc5d23]" />,
                title: "Quais as vantagens?",
                items: [
                  "Entrega rápida",
                  "Visual moderno",
                  "Nada genérico",
                  "Especialistas experientes",
                  "Alta performance",
                  "Pagamento único",
                ],
              },
            ].map((block, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                  <div className="w-40 h-40 bg-[#fc5d23]/10 rounded-2xl flex items-center justify-center border border-[#fc5d23]/30">
                    {block.icon}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {block.title}
                  </h2>

                  <ul className="space-y-3 text-gray-300">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-2">
                        <CheckCircle size={18} className="text-[#fc5d23]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESSO */}
        <div className="mb-28">
          <h2 className="text-4xl font-bold text-center mb-12">
            Como criamos sua landing page
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto bg-[#fc5d23] text-white rounded-full flex items-center justify-center mb-3">
                  {i + 1}
                </div>

                <p className="font-semibold">{step.title}</p>
                <p className="text-gray-500 text-sm mt-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para converter mais?
          </h2>

          <p className="text-gray-600 mb-8">
            Vamos criar sua landing page profissional.
          </p>

          <a
            href="https://wa.me/5511958119820?text=Olá,%20vim%20pelo%20site%20e%20quero%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#fc5d23] px-10 py-4 rounded-lg text-white font-semibold hover:bg-[#031a44] transition"
          >
            Solicitar orçamento →
          </a>
        </div>
      </div>
    </section>
  );
}