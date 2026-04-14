import { motion } from "framer-motion";
import {
  Cpu,
  Workflow,
  Database,
  Settings,
  ShieldCheck,
  Zap,
  Code,
  Rocket,
  CheckCircle,
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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function Softwares(): React.ReactNode {

  const features: Feature[] = [
    {
      icon: <Workflow />,
      title: "Automação de processos",
      desc: "Elimine tarefas manuais e aumente a produtividade.",
    },
    {
      icon: <Database />,
      title: "Integração de sistemas",
      desc: "Conecte diferentes ferramentas e centralize dados.",
    },
    {
      icon: <Cpu />,
      title: "Soluções sob medida",
      desc: "Software desenvolvido exclusivamente para sua necessidade.",
    },
    {
      icon: <ShieldCheck />,
      title: "Segurança e estabilidade",
      desc: "Proteção de dados e funcionamento confiável.",
    },
    {
      icon: <Zap />,
      title: "Alta performance",
      desc: "Sistemas rápidos e otimizados.",
    },
    {
      icon: <Settings />,
      title: "Escalável",
      desc: "Cresça sem precisar trocar de sistema.",
    },
  ];

  const steps: Step[] = [
    {
      title: "Diagnóstico",
      description: "Entendemos seu negócio, processos e necessidades específicas.",
    },
    {
      title: "Planejamento",
      description: "Definimos arquitetura, funcionalidades e tecnologias ideais.",
    },
    {
      title: "Desenvolvimento",
      description: "Criamos o sistema com foco em performance e escalabilidade.",
    },
    {
      title: "Testes",
      description: "Garantimos estabilidade, segurança e funcionamento perfeito.",
    },
    {
      title: "Entrega",
      description: "Sistema pronto para uso com suporte e acompanhamento.",
    },
  ];

  return (
    <section className="bg-white text-[#031a44] pt-40 pb-28 px-6">

      <div className="max-w-7xl mx-auto">

       {/* HERO */}
<div className="grid md:grid-cols-2 gap-12 items-center mb-28">

  <div>
    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
      Softwares
      <span className="text-[#fc5d23]"> Personalizados</span>
    </h1>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Desenvolvemos sistemas e automações sob medida para o seu negócio.
              <br /><br />
              Criamos soluções que eliminam processos manuais, integram ferramentas
              e aumentam a eficiência da sua operação.
            </p>

            <button className="bg-[#fc5d23] px-8 py-4 rounded-lg text-white font-semibold hover:bg-[#031a44] transition">
              Solicitar projeto →
            </button>
          </div>

          <div className="relative ">
            <img src="/images/Software.jpg" className="rounded-xl shadow-2xl" />
            <div className="absolute -z-10 top-6 left-6 w-full h-full bg-[#031a44] rounded-xl"></div>
          </div>

        </div>

        {/* SOBRE */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">

          <div className="relative hidden md:block">
            <img src="/images/SoftwarePersonalizado.jpg" className="rounded-xl shadow-xl" />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Soluções feitas para o seu negócio
            </h2>

            <p className="text-gray-600 mb-4">
              Cada empresa possui processos únicos — e sistemas genéricos nem sempre atendem.
            </p>

            <p className="text-gray-600 mb-4">
              Por isso desenvolvemos softwares personalizados que se adaptam perfeitamente
              à sua operação.
            </p>

            <p className="text-gray-600">
              Automatize tarefas, integre sistemas e ganhe eficiência com tecnologia sob medida.
            </p>

          </div>

        </div>

        {/* SEÇÃO PREMIUM */}
        <div className="mb-28 bg-[#031a44] text-white py-20 px-6 rounded-3xl">

          <div className="max-w-6xl mx-auto space-y-16">

            {[
              {
                icon: <Code size={70} className="text-[#fc5d23]" />,
                title: "O que desenvolvemos?",
                items: [
                  "Sistemas empresariais",
                  "Plataformas internas",
                  "Automação de processos",
                  "Integrações com APIs",
                  "Dashboards e relatórios",
                ],
              },
              {
                icon: <Workflow size={70} className="text-[#fc5d23]" />,
                title: "Por que investir?",
                items: [
                  "Mais produtividade",
                  "Menos erros operacionais",
                  "Processos automatizados",
                  "Escalabilidade do negócio",
                  "Vantagem competitiva",
                ],
              },
              {
                icon: <Rocket size={70} className="text-[#fc5d23]" />,
                title: "Vantagens",
                items: [
                  "Solução sob medida",
                  "Sem limitações de plataformas",
                  "Alta performance",
                  "Sistema evolutivo",
                  "Suporte contínuo",
                ],
              },
            ].map((block, i) => (

              <div key={i} className="grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0}
                  variants={fadeUp}
                  className="flex justify-center"
                >
                  <div className="w-40 h-40 bg-[#fc5d23]/10 rounded-2xl flex items-center justify-center border border-[#fc5d23]/30">
                    {block.icon}
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={1}
                  variants={fadeUp}
                >
                  <h2 className="text-3xl font-bold mb-6">
                    {block.title}
                  </h2>

                  <ul className="space-y-3 text-gray-300">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-2">
                        <CheckCircle className="text-[#fc5d23]" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

              </div>

            ))}

          </div>
        </div>

        {/* DIFERENCIAIS */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold text-center mb-12">
            Diferenciais do nosso desenvolvimento
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-[#031a44] text-white p-8 rounded-2xl"
              >
                <div className="text-[#fc5d23] mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}

          </div>

        </div>

        {/* PROCESSO */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold text-center mb-12">
            Como desenvolvemos seu software
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
            Precisa de um sistema sob medida?
          </h2>

          <p className="text-gray-600 mb-8">
            Vamos desenvolver a solução ideal para o seu negócio.
          </p>

          <button className="bg-[#fc5d23] px-10 py-4 rounded-lg text-white font-semibold hover:bg-[#031a44] transition">
            Solicitar orçamento →
          </button>

        </div>

      </div>
    </section>
  );
}