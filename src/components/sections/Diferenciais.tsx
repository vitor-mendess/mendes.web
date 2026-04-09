import { motion } from "framer-motion";
import {
  Target,
  Smartphone,
  ShoppingCart,
  Cloud,
  MessageCircle,
  ShieldCheck,
  Globe,
  Wrench,
  Zap,
  Puzzle,
  Rocket,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Diferenciais() {

  const items = [
    {
      icon: <Target size={32} />,
      title: "Foco em Resultado",
      desc: "Cada projeto é pensado estrategicamente para ajudar sua empresa a crescer.",
    },
    {
      icon: <Zap size={32} />,
      title: "Design Moderno e Sites Rápidos",
      desc: "Layouts profissionais com desenvolvimento otimizado para carregamento rápido.",
    },
    {
      icon: <Puzzle size={32} />,
      title: "Soluções Sob Medida",
      desc: "Criamos sistemas e automações específicas para o seu negócio.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Projeto Ágil",
      desc: "Processo organizado para entregar seu projeto com qualidade e rapidez.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Versão Responsiva",
      desc: "Seu site funciona perfeitamente em smartphones, tablets e computadores.",
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "Vendas Online",
      desc: "Lojas virtuais completas com integração a meios de pagamento.",
    },
    {
      icon: <Cloud size={32} />,
      title: "Hospedagem Cloud",
      desc: "Hospedagem moderna para sites e e-mails com alto desempenho.",
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Botão do WhatsApp",
      desc: "Contato rápido com clientes através de botão direto para o WhatsApp.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Suporte Contínuo",
      desc: "Pacote de manutenção para melhorias e suporte sempre que precisar.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Certificado SSL Grátis",
      desc: "Proteção completa com SSL e diversas medidas modernas de segurança.",
    },
    {
      icon: <Globe size={32} />,
      title: "Registro de Domínio",
      desc: "Registramos e configuramos seu domínio .com ou .com.br.",
    },
    {
      icon: <Puzzle size={32} />,
      title: "100% Sob Medida",
      desc: "Nada de modelos prontos. Desenvolvemos sites e landing pages totalmente personalizados para o seu público, objetivo e identidade da sua empresa.",
    },
  ];

  const Card = ({ item }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="bg-[#06245f] rounded-xl p-8 text-center hover:shadow-xl transition h-full"
    >
      <div className="flex justify-center mb-5 text-[#fc5d23]">
        {item.icon}
      </div>

      <h3 className="text-lg font-semibold mb-3">
        {item.title}
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  );

  return (
    <section className="bg-[#031a44] py-32 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* título */}
        <div className="text-center mb-20">

          <p className="text-[#fc5d23] font-semibold tracking-wider mb-3">
            DIFERENCIAIS
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Por que escolher a Mendes.web?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Desenvolvemos soluções digitais completas para empresas
            que desejam crescer com tecnologia e design profissional.
          </p>

        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}

        </div>

        {/* MOBILE SLIDER PREMIUM */}
        <div className="md:hidden">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.15}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
          >

            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <Card item={item} />
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
}