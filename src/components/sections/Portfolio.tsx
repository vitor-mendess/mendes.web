import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Portfolio() {

  const projects = [
    {
      title: "BittalentsTech",
      description:
        "Plataforma institucional desenvolvida para apresentar programas de formação em tecnologia e conectar profissionais ao mercado.",
      image: "/portfolio/site1.png",
      link: "https://www.bittalentstech.com.br/",
    },
    {
      title: "Amigos da Montanha",
      description:
        "Site institucional criado para divulgar projetos sociais e facilitar a comunicação com a comunidade.",
      image: "/portfolio/site2.jpg",
      link: "https://www.amigosdamontanha.com.br/",
    },
    {
      title: "Elenza Brand",
      description:
        "Loja virtual desenvolvida com foco em design moderno e experiência de compra intuitiva.",
      image: "/portfolio/site3.jpg",
      link: "https://elenzabrand.com.br/",
    },
    {
      title: "DrSports",
      description:
        "E-commerce de produtos esportivos com navegação otimizada e integração completa de pagamentos.",
      image: "/portfolio/site4.jpg",
      link: "https://drsportsshop.com.br/",
    },
    {
      title: "Team Shirts Imports",
      description:
        "Loja virtual especializada em camisas esportivas importadas com navegação rápida e catálogo organizado.",
      image: "/portfolio/site5.jpg",
      link: "https://www.teamshirtsimports.com.br/",
    },
  ];

  const Card = (project: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="group backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
    >

      <div className="overflow-hidden h-[260px] md:h-[340px] rounded-xl mb-6 relative">

  <motion.img
    src={project.image}
    alt={project.title}
    className="w-full"
    initial={{ y: 0 }}
    whileTap={{ y: "-70%" }}
    transition={{
      duration: 6,
      ease: "easeInOut",
    }}
  />

</div>

      {/* conteúdo */}
      <h3 className="text-xl md:text-2xl font-semibold text-[#031a44] mb-3">
        {project.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      <a
        href={project.link}
        target="_blank"
        className="inline-flex items-center gap-2 bg-[#fc5d23] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#031a44] transition"
      >
        Acessar site
        <ArrowUpRight size={18} />
      </a>

    </motion.div>
  );

  return (
    <section id="portfolio" className="py-24 bg-[#fdfefe]">

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* título */}
        <div className="text-center mb-16">

          <p className="text-[#fc5d23] font-semibold tracking-widest mb-3">
            PORTFÓLIO
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#031a44] mb-6">
            Alguns dos nossos projetos
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Conheça alguns dos sites, lojas virtuais e soluções digitais
            desenvolvidos pela nossa agência.
          </p>

        </div>

        {/* MOBILE */}
        <div className="md:hidden">

          <p className="text-center text-sm text-gray-500 mb-6">
            Arraste para o lado →
          </p>


          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            loop={true}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                {Card(project, index)}
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* DESKTOP */}
        <div className="hidden md:block">

          <button className="portfolio-prev absolute -left-8 top-[55%] z-10 bg-white shadow-lg p-3 rounded-full hover:scale-110 transition">
            <ChevronLeft size={22} />
          </button>

          <button className="portfolio-next absolute -right-8 top-[55%] z-10 bg-white shadow-lg p-3 rounded-full hover:scale-110 transition">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={40}
            slidesPerView={2}
            navigation={{
              nextEl: ".portfolio-next",
              prevEl: ".portfolio-prev",
            }}
          >

            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                {Card(project, index)}
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
}