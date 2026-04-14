import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Sobre() {

  const ref = useRef(null);

  // PARALLAX
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={ref}
      className="bg-white text-[#031a44] pt-40 pb-28 px-6 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center"
>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-[#fc5d23]">mendes.web</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Mais do que criar sites, criamos soluções digitais que ajudam
            empresas a crescer e se destacar no mercado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-28 mt-16 md:mt-24">

  {/* ESQUERDA — MINHA HISTÓRIA */}
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold mb-6">
      Minha história
    </h2>

    <p className="text-gray-600 mb-4 leading-relaxed">
      Meu nome é Vitor Mendes e sou apaixonado por tecnologia,
      negócios e desenvolvimento digital.
    </p>

    <p className="text-gray-600 mb-4 leading-relaxed">
      Atualmente, curso Análise e Desenvolvimento de Sistemas
      pela FIAP, onde venho aprofundando meus conhecimentos
      em programação, sistemas e soluções tecnológicas.
    </p>

    <p className="text-gray-600 leading-relaxed">
      Desde cedo, sempre tive interesse em criar coisas e
      resolver problemas — e foi isso que me levou a começar
      no desenvolvimento de sites.
    </p>
  </motion.div>


  {/* DIREITA — EXPERIÊNCIA */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold mb-6">
      Experiência e trajetória
    </h2>

    <p className="text-gray-600 mb-4 leading-relaxed">
      Além da área de tecnologia, também tenho experiência no mundo
      dos negócios. Sou responsável por uma loja de camisas de time,
      onde aprendi na prática sobre vendas, marketing e presença digital.
    </p>

    <p className="text-gray-600 mb-4 leading-relaxed">
      Essa vivência me permite entender melhor as necessidades de empresas
      reais — não apenas na teoria, mas no dia a dia.
    </p>

    <p className="text-gray-600 leading-relaxed">
      Fora do mundo digital, sou praticante e professor de Muay Thai.
      O esporte me ensinou disciplina, consistência e foco — valores
      que levo diretamente para os meus projetos.
    </p>
  </motion.div>

</div>
        {/* LINHA DO TEMPO PREMIUM */}
        <div className="mb-32">

          <h2 className="text-3xl font-bold text-center mb-20">
            Minha jornada
          </h2>

          <div className="relative">

            {/* linha animada */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#fc5d23]"
            />

            {[
              {
                title: "Início na tecnologia",
                desc: "Primeiros contatos com desenvolvimento e criação de sites.",
              },
              {
                title: "Faculdade FIAP",
                desc: "Aprofundamento em programação e sistemas.",
              },
              {
                title: "Loja Online",
                desc: "Loja de camisas e aprendizado de negócios.",
              },
              {
                title: "Mendes.web",
                desc: "Criação da agência e projetos profissionais.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`mb-16 flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >

                <div className="w-[45%] bg-gray-50 p-6 rounded-xl shadow-md relative">

                  {/* bolinha */}
                  <div className="absolute top-6 -right-3 w-5 h-5 bg-[#fc5d23] rounded-full"></div>

                  <h3 className="font-semibold text-base md:text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* EMPRESA */}
        <motion.div
          style={{ y: yParallax }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Sobre a Mendes.web
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            A Mendes.web nasceu com o objetivo de ajudar empresas a crescer
            através da internet.
          </p>

          <p className="text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            Muitos negócios ainda não possuem uma presença digital profissional
            — e é exatamente isso que buscamos resolver.
          </p>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hoje, desenvolvemos sites, sistemas e automações com foco em
            resultado, performance e crescimento.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Vamos tirar seu projeto do papel?
          </h2>

          <a
  href="https://wa.me/5511958119820?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#fc5d23] px-10 py-4 rounded-lg text-white font-semibold hover:bg-[#031a44] transition"
>
  Solicitar Orçamento →
</a>
        </motion.div>

      </div>
    </section>
  );
}