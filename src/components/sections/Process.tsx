import { motion } from "framer-motion";
import { Search, PencilRuler, Code, Rocket } from "lucide-react";

export default function Process() {

  const steps = [
    {
      number: "01",
      icon: <Search size={32} />,
      title: "Estratégia",
      description:
        "Entendemos o seu negócio, público e objetivos para planejar a melhor solução digital.",
    },
    {
      number: "02",
      icon: <PencilRuler size={32} />,
      title: "Design",
      description:
        "Criamos layouts modernos e estratégicos que valorizam sua marca e melhoram a experiência do usuário.",
    },
    {
      number: "03",
      icon: <Code size={32} />,
      title: "Desenvolvimento",
      description:
        "Transformamos o design em um site rápido, seguro e totalmente responsivo.",
    },
    {
      number: "04",
      icon: <Rocket size={32} />,
      title: "Lançamento",
      description:
        "Publicamos o site, realizamos os ajustes finais e deixamos tudo pronto para gerar resultados.",
    },
  ];

  return (
    <section className="py-32 bg-[#f7f9fc]">

      <div className="max-w-7xl mx-auto px-6">

        {/* título */}
        <div className="text-center mb-20">

          <p className="text-[#fc5d23] font-semibold tracking-widest mb-3">
            PROCESSO
          </p>

          <h2 className="text-4xl font-bold text-[#031a44] mb-6">
            Como desenvolvemos seu projeto
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Nosso processo é estruturado para garantir que cada projeto
            seja desenvolvido com estratégia, design profissional e
            tecnologia de alto desempenho.
          </p>

        </div>

        {/* etapas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {steps.map((step, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition relative"
            >

              {/* número */}
              <span className="absolute top-4 right-6 text-5xl font-bold text-gray-100">
                {step.number}
              </span>

              {/* ícone */}
              <div className="text-[#fc5d23] mb-4">
                {step.icon}
              </div>

              {/* título */}
              <h3 className="text-xl font-semibold text-[#031a44] mb-3">
                {step.title}
              </h3>

              {/* descrição */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}