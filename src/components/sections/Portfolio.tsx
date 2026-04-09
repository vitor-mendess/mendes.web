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

  return (
    <section id="portfolio" className="py-32 bg-[#fdfefe]">

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <p className="text-[#fc5d23] font-semibold tracking-widest mb-3">
            PORTFÓLIO
          </p>

          <h2 className="text-4xl font-bold text-[#031a44] mb-6">
            Alguns dos nossos projetos
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos sites, lojas virtuais e soluções digitais
            desenvolvidos pela nossa agência.
          </p>

        </motion.div>

        {/* BOTÕES DE NAVEGAÇÃO */}
        <button className="portfolio-prev absolute -left-8 top-[55%] z-10 bg-white shadow-lg p-3 rounded-full hover:scale-110 transition">
          <ChevronLeft size={22} />
        </button>

        <button className="portfolio-next absolute -right-8 top-[55%] z-10 bg-white shadow-lg p-3 rounded-full hover:scale-110 transition">
          <ChevronRight size={22} />
        </button>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={40}
          slidesPerView={2}
          navigation={{
            nextEl: ".portfolio-next",
            prevEl: ".portfolio-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
          }}
        >

          {projects.map((project, index) => (

            <SwiperSlide key={index}>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
              >

                {/* Preview rolando */}
                <div className="overflow-hidden h-[340px] rounded-xl mb-6">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full transition-transform duration-[7000ms] ease-linear group-hover:-translate-y-[70%]"
                  />

                </div>

                {/* Conteúdo */}
                <h3 className="text-2xl font-semibold text-[#031a44] mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Botão moderno */}
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-[#fc5d23] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#031a44] transition"
                >
                  Acessar site
                  <ArrowUpRight size={18} />
                </a>

              </motion.div>

            </SwiperSlide>

          ))}

        </Swiper>


      </div>

    </section>
  );
}