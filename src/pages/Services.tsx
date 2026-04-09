import { motion } from "framer-motion";
import { Globe, Rocket, ShoppingCart, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {

  const services = [
    {
      icon: <Globe size={40} />,
      title: "Criação de Sites",
      description:
        "Sites modernos, rápidos e responsivos para apresentar sua empresa de forma profissional na internet.",
        link: "/criacao-sites",
    },
    {
      icon: <Rocket size={40} />,
      title: "Landing Pages",
      description:
        "Páginas estratégicas criadas para apresentar serviços, produtos ou campanhas com design profissional.",
        link: "/LandingPage",
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "Lojas Virtuais",
      description:
        "E-commerces completos para vender produtos online com segurança e facilidade.",
        link: "/LojaVirtual",
    },
    {
      icon: <Cpu size={40} />,
      title: "Softwares Personalizados",
      description:
        "Desenvolvimento de softwares e automações sob medida, como sistemas empresariais, integrações e soluções específicas para o seu negócio.",
        link: "/Software",
    },
  ];

  const cardAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="servicos" className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#031a44] mb-4">
            O que fazemos
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções digitais completas para empresas que
            desejam crescer e se modernizar no ambiente digital.
          </p>
        </div>

        {/* GRID 2x2 */}
        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (
            <Card key={index} service={service} animation={cardAnimation} />
          ))}

        </div>

      </div>
    </section>
  );
}

function Card({ service, animation }: any) {
  return (

    <motion.div
      variants={animation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-xl transition h-full flex flex-col"
    >

      <div className="text-[#fc5d23] mb-4">
        {service.icon}
      </div>

      <h3 className="text-xl font-semibold mb-3 text-[#031a44]">
        {service.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

    <Link
      to={service.link}
      className="mt-auto text-[#fc5d23] font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
    >
      Saiba mais →
    </Link>

    </motion.div>

  );
}