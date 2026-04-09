import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  CreditCard,
  Truck,
  ShieldCheck,
  Smartphone,
  BarChart,
  Globe,
  Settings,
  Rocket,
  Package,
} from "lucide-react";

export default function LojaVirtual() {
  return (
    <section className="bg-white text-[#031a44] pt-40 pb-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">

          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Criação de
              <span className="text-[#fc5d23]"> Lojas Virtuais</span>
            </h1>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Ter uma loja virtual hoje não é mais opção — é essencial.
              <br /><br />
              Desenvolvemos e-commerces modernos, seguros e preparados
              para vender todos os dias, com foco total em conversão.
              <br /><br />
              Cada detalhe é pensado para transformar visitantes
              em clientes e gerar crescimento real para o seu negócio.
            </p>

            <a
  href="https://wa.me/5511958119820?text=Olá,%20vim%20pelo%20site%20e%20quero%20criar%20minha%20loja."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#fc5d23] px-8 py-4 rounded-lg text-white font-semibold hover:bg-[#031a44] transition"
>
  Criar minha loja →
</a>
          </div>

          <div className="relative">
            <img
              src="/images/LojaVirtual.webp"
              className="rounded-xl shadow-2xl"
            />

            <div className="absolute -z-10 top-6 left-6 w-full h-full bg-[#031a44] rounded-xl"></div>
          </div>

        </div>

        {/* IMPORTÂNCIA */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">

          <div>
            <img
              src="/images/lojaOnline.jpg"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Por que ter uma loja virtual?
            </h2>

            <p className="text-gray-600 mb-4">
              Uma loja virtual permite que sua empresa venda 24 horas por dia,
              sem limites geográficos.
            </p>

            <p className="text-gray-600 mb-4">
              Com o crescimento das compras online, estar presente no digital
              é fundamental para aumentar faturamento e alcançar novos clientes.
            </p>

            <p className="text-gray-600 mb-4">
              Além disso, você ganha controle total sobre seus produtos,
              pedidos e relacionamento com clientes.
            </p>

            <p className="text-gray-600">
              É a forma mais eficiente de transformar sua marca em uma máquina
              de vendas escalável.
            </p>

          </div>

        </div>


{/* PLATAFORMAS */}
<div className="mb-28 flex justify-center">

  <div className="max-w-3xl text-center">

    <h2 className="text-4xl font-bold mb-6">
      Plataformas confiáveis para sua loja
    </h2>

    <p className="text-gray-600 mb-4 leading-relaxed">
      Trabalhamos com plataformas modernas, estáveis e seguras,
      garantindo que sua loja virtual funcione perfeitamente
      sem dores de cabeça.
    </p>

    <p className="text-gray-600 mb-4 leading-relaxed">
      Para pequenos e médios e-commerces, utilizamos soluções que já
      cuidam de toda a estrutura técnica, como desempenho,
      estabilidade, segurança e atualizações.
    </p>

    <p className="text-gray-600 leading-relaxed mb-10">
      Diferente de plataformas mais complexas que exigem manutenção constante,
      nossas soluções permitem que você foque no que realmente importa:
      vender e crescer seu negócio.
    </p>

    {/* LOGOS */}
    <div className="flex justify-center items-center gap-8 opacity-70">

      <img
        src="/images/Shopify.png"
        alt="Shopify"
        className="h-10 object-contain hover:scale-110 hover:opacity-100 transition"
      />

      <img
        src="/images/nuvemshop.jpg"
        alt="Nuvemshop"
        className="h-10 object-contain hover:scale-110 hover:opacity-100 transition"
      />

    </div>

  </div>

</div>

        {/* DIFERENCIAIS */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold text-center mb-12">
            Por que escolher nossa loja virtual?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                icon: <ShoppingCart />,
                title: "Foco em vendas",
                desc: "Estrutura pensada para aumentar conversões e faturamento.",
              },
              {
                icon: <CreditCard />,
                title: "Pagamentos integrados",
                desc: "Integração com PIX, cartão e principais gateways.",
              },
              {
                icon: <Truck />,
                title: "Frete automatizado",
                desc: "Cálculo automático com Correios e transportadoras.",
              },
              {
                icon: <Smartphone />,
                title: "100% responsivo",
                desc: "Funciona perfeitamente em celulares e tablets.",
              },
              {
                icon: <ShieldCheck />,
                title: "Segurança completa",
                desc: "SSL, proteção de dados e ambiente seguro.",
              },
              {
                icon: <BarChart />,
                title: "Relatórios e gestão",
                desc: "Controle total de pedidos, vendas e clientes.",
              },
            ].map((item, i) => (

              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-[#031a44] text-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-[#fc5d23] mb-4">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

        {/* RECURSOS */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold text-center mb-12">
            Recursos da sua loja
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {[
              {
                icon: <Package />,
                title: "Gestão de produtos",
                desc: "Cadastre e organize produtos com facilidade.",
              },
              {
                icon: <Globe />,
                title: "Integração com marketplaces",
                desc: "Venda também em outros canais.",
              },
              {
                icon: <Settings />,
                title: "Painel administrativo",
                desc: "Controle total da sua loja em um só lugar.",
              },
              {
                icon: <Rocket />,
                title: "Alta performance",
                desc: "Carregamento rápido e otimizado.",
              },
            ].map((item, i) => (

              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-md"
              >
                <div className="text-[#fc5d23] mb-4">
                  {item.icon}
                </div>

                <h3 className="font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

        {/* BENEFÍCIOS */}
        <div className="mb-28">

            <h2 className="text-4xl font-bold text-center mb-4">
            Benefícios da sua loja virtual
            </h2>

            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Sua empresa merece uma loja virtual totalmente exclusiva. Esqueça layouts genéricos —
            nossa equipe desenvolve uma experiência única, moderna e focada em resultados.
            </p>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Venda todos os dias",
                desc: "Sua loja funciona 24h sem parar.",
              },
              {
                title: "Escalabilidade",
                desc: "Cresça sem limites físicos.",
              },
              {
                title: "Baixo custo operacional",
                desc: "Menor custo que loja física.",
              },
              {
                title: "Alcance nacional",
                desc: "Venda para todo o Brasil.",
              },
              {
                title: "Controle total",
                desc: "Gestão completa do seu negócio.",
              },
              {
                title: "Mais lucro",
                desc: "Mais eficiência = mais resultado.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-[#fc5d23] font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* PROCESSO */}
<div className="mb-28">

  <h2 className="text-4xl font-bold text-center mb-12">
    Como criamos sua loja
  </h2>

  <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
    Todo projeto passa por um processo estratégico para garantir
    performance, design e conversão.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

    {[
      {
        title: "Planejamento",
        description: "Definimos objetivos, público-alvo e estratégias para sua loja."
      },
      {
        title: "Estrutura",
        description: "Organizamos a arquitetura do site para uma navegação clara e eficiente."
      },
      {
        title: "Design",
        description: "Criamos a identidade visual e interface intuitiva para os usuários."
      },
      {
        title: "Desenvolvimento",
        description: "Transformamos o design em um site funcional e rápido."
      },
      {
        title: "Publicação",
        description: "Lançamos sua loja online e garantimos que tudo funcione perfeitamente."
      },
    ].map((step, i) => (

      <div key={i} className="text-center">
        <div className="w-12 h-12 mx-auto bg-[#fc5d23] text-white rounded-full flex items-center justify-center mb-3">
          {i + 1}
        </div>

        <p className="font-semibold">{step.title}</p>
        <p className="text-gray-500 text-sm mt-2">{step.description}</p>
      </div>

    ))}

  </div>

</div>
{/* PROJETOS */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold text-center mb-12">
            Projetos recentes
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {[
              {
                title: "Elenza Brand",
                img: "/portfolio/site3.jpg",
                link: "https://elenzabrand.com.br/",
              },
              {
                title: "DrSports",
                img: "/portfolio/site4.jpg",
                link: "https://drsportsshop.com.br/",
              },
            {
              title: "Team Shirts Imports",
                img: "/portfolio/site5.jpg",
                link: "https://www.teamshirtsimports.com.br/",
             },
            ].map((project, i) => (

              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="overflow-hidden h-[300px] group">
                  <img
                    src={project.img}
                    className="w-full transition-transform duration-[5000ms] group-hover:-translate-y-[60%]"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    {project.title}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    className="bg-[#fc5d23] px-6 py-2 rounded-lg text-white text-sm font-semibold hover:bg-[#031a44] transition"
                  >
                    Acessar site →
                  </a>
                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="text-center">

          <h2 className="text-4xl font-bold mb-6">
            Pronto para vender online?
          </h2>

          <p className="text-gray-600 mb-8">
            Vamos criar sua loja virtual profissional.
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