import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Laptop,
  Stethoscope,
  Scale,
  Building,
  Brain,
  Hammer,
  Calendar,
  Code,
  Globe,
  Search,
  ShieldCheck,
  Rocket,
  CheckCircle,
  Settings,
  TrendingUp,
  Users,
  Smile,
} from "lucide-react";

export default function CriacaoSites() {
  return (
    <section className="bg-white text-[#031a44] pt-40 pb-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">

          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Criação de Sites
              <span className="text-[#fc5d23]"> Profissionais</span>
            </h1>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            A criação de sites profissionais é mais do que uma presença digital;
            é um motor de negócios.
            <br /><br />
            Cada linha de código é pensada estrategicamente para gerar resultados,
            seja através de vendas, serviços ou fortalecimento da sua marca.
            <br /><br />
            Seu site será desenvolvido para gerar valor aos visitantes
            e transformar acessos em clientes reais.
            </p>

            <a
  href="https://wa.me/5511958119820?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#fc5d23] px-10 py-4 rounded-lg text-white font-semibold hover:bg-[#031a44] transition"
>
  Solicitar Orçamento →
</a>
          </div>

          <div className="relative">
            <img src="/images/site-profissional.webp" className="rounded-xl shadow-2xl" />
            <div className="absolute -z-10 top-6 left-6 w-full h-full bg-[#031a44] rounded-xl"></div>
          </div>

        </div>

        {/* SEGMENTOS CLICÁVEIS */}
        <div className="mb-28">

          <p className="text-[#fc5d23] font-semibold mb-2">
            ENCONTRE SEU SEGMENTO
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Segmentos mais procurados
          </h2>

          <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
            Criamos sites profissionais para qualquer tipo de negócio.
            <br /><br />
            Oferecemos a criação de sites profissionais, independente do seu segmento,
            pois nossos projetos são desenvolvidos com estratégia, experiência
            e foco total em resultado.
            </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              { icon: <Scale />, title: "Advogados", link: "/Advogado" },
              { icon: <Stethoscope />, title: "Médicos", link: "/Medico" },
              { icon: <Brain />, title: "Psicólogos", link: "/Psicologo" },
              { icon: <Hammer />, title: "Construtoras", link: "/Construtor" },
              { icon: <Building />, title: "Contabilidade", link: "/Contabilidade" },
              { icon: <Laptop />, title: "Empresas", link: "/Empresa" },
              { icon: <Code />, title: "Tecnologia", link: "/Tecnologia" },
              { icon: <Calendar />, title: "Eventos", link: "/Eventos" },
              { icon: <Smile />, title: "Dentistas", link: "/Dentista" },
            ].map((item, i) => (

              <Link to={item.link} key={i}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-gray-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition cursor-pointer"
                >
                  <div className="text-[#fc5d23] mb-4 flex justify-center">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                </motion.div>
              </Link>

            ))}

          </div>

        </div>

        {/* DIFERENCIAIS */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold mb-10 text-center">
            Por que escolher a Mendes.web?
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            Nosso diferencial está na busca constante por excelência na criação
            de sites modernos, rápidos e altamente estratégicos.
            <br /><br />
            Com experiência em diversos tipos de projetos, conseguimos desenvolver
            soluções que realmente geram resultado.
            <br /><br />
            Você não precisa se preocupar com configurações técnicas — cuidamos
            de tudo para entregar um site pronto, profissional e funcional.
            </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                icon: <Laptop />,
                title: "Criatividade",
                desc: "Design pensado estrategicamente para destacar sua marca.",
              },
              {
                icon: <Globe />,
                title: "Usabilidade",
                desc: "Experiência intuitiva que gera mais contatos.",
              },
              {
                icon: <Search />,
                title: "SEO",
                desc: "Preparado para aparecer no Google.",
              },
              {
                icon: <ShieldCheck />,
                title: "Segurança",
                desc: "Proteção completa com SSL e boas práticas.",
              },
              {
                icon: <Rocket />,
                title: "Performance",
                desc: "Sites rápidos que aumentam conversão.",
              },
              {
                icon: <Code />,
                title: "Estratégia",
                desc: "Estrutura pensada para vender.",
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

{/* ETAPAS COM CARDS */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold text-center mb-16">
            Como funciona o processo
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            Quando se fala em criação de sites, planejamento nunca é demais.
            Tudo é pensado antes mesmo de iniciar o desenvolvimento.
            <br /><br />
            Cada etapa do processo é construída com base nos objetivos do projeto,
            garantindo um resultado estratégico, eficiente e bem executado.
            <br /><br />
            E claro, tudo isso com muito cuidado e atenção aos detalhes.
            </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

            {[
              {
                title: "Briefing",
                desc: "Entendemos seu negócio e objetivos.",
              },
              {
                title: "Planejamento",
                desc: "Definimos estrutura e estratégia.",
              },
              {
                title: "Design",
                desc: "Criamos um layout moderno e profissional.",
              },
              {
                title: "Desenvolvimento",
                desc: "Transformamos o design em um site funcional.",
              },
              {
                title: "Entrega",
                desc: "Publicamos e deixamos tudo pronto para uso.",
              },
            ].map((step, i) => (

              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-gray-50 p-6 rounded-xl text-center shadow-md"
              >
                <div className="w-12 h-12 mx-auto bg-[#fc5d23] text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>

                <h3 className="font-semibold mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {step.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

        {/* NOVA PARTE - IMPORTÂNCIA COM IMAGEM */}
<div className="mb-28 grid md:grid-cols-2 gap-12 items-center">

  {/* IMAGEM ESQUERDA */}
  <div className="relative">
    <img
      src="/images/CriacaoSite.webp"
      className="rounded-xl shadow-2xl"
    />

    <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-[#fc5d23] rounded-xl"></div>
  </div>

  {/* TEXTO DIREITA */}
  <div>

    <h2 className="text-4xl font-bold mb-6">
      Por que criar um site profissional?
    </h2>

    <p className="text-gray-600 mb-4">
      Ter um site profissional é essencial para empresas que desejam crescer no digital,
      ganhar autoridade e conquistar novos clientes.
    </p>

    <p className="text-gray-600 mb-4">
      Com um espaço próprio na internet, sua empresa transmite mais credibilidade,
      apresenta melhor seus serviços e fortalece sua marca.
    </p>

    <p className="text-gray-600 mb-4">
      Além disso, um site permite aumentar sua visibilidade, melhorar o relacionamento
      com clientes e gerar novas oportunidades de vendas.
    </p>

    <p className="text-gray-600">
      Diferente das redes sociais, o site é um ambiente totalmente seu,
      estruturado para converter visitantes em clientes.
    </p>

  </div>

</div>

        {/* NOVA PARTE - BENEFÍCIOS COMPLETOS */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold text-center mb-12">
            Benefícios do seu site
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
  {
    icon: <ShieldCheck size={28} />,
    title: "Sem custos obrigatórios",
    desc: "Sem taxas escondidas. Você escolhe hospedagem e manutenção conforme sua necessidade.",
  },
  {
    icon: <CheckCircle size={28} />,
    title: "O site é totalmente seu",
    desc: "Após a entrega, você recebe tudo e tem total controle sobre o projeto.",
  },
  {
    icon: <Users size={28} />,
    title: "Acompanhamento completo",
    desc: "Você acompanha cada etapa do projeto com suporte e comunicação direta.",
  },
  {
    icon: <Globe size={28} />,
    title: "Pronto para o Google",
    desc: "Seu site já é desenvolvido com base em boas práticas de SEO.",
  },
  {
    icon: <Settings size={28} />,
    title: "Estrutura estratégica",
    desc: "Tudo pensado para atrair visitantes e gerar oportunidades reais.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Alta conversão",
    desc: "Seu site é desenvolvido com foco em transformar visitantes em clientes reais.",
  },

              
            ].map((item, i) => (

              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-[#fc5d23] mb-4">
                {item.icon}
                    </div>

                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>

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
                title: "Amigos da Montanha",
                img: "/portfolio/site2.jpg",
                link: "https://www.amigosdamontanha.com.br/",
              },
              {
                title: "BittalentsTech",
                img: "/portfolio/site1.png",
                link: "https://www.bittalentstech.com.br/",
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

        {/* CTA FINAL */}
        <div className="text-center">

          <h2 className="text-4xl font-bold mb-6">
            Pronto para ter um site profissional?
          </h2>

          <p className="text-gray-600 mb-8">
            Vamos criar algo incrível para o seu negócio.
          </p>

          <a
  href="https://wa.me/5511958119820?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
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