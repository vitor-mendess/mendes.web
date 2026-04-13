import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#031a44] text-white pt-28 pb-28 md:pt-32 md:pb-32 flex items-center justify-center">
        
      <motion.div
        className="max-w-3xl text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 text-center flex justify-center">
  
  <span className="block min-h-[120px] sm:min-h-[140px] md:min-h-[140px] w-[90vw] md:w-auto">
    
    <TypeAnimation
      sequence={[
        "Criação de Sites Profissionais",
        2000,
        "Landing Pages que convertem",
        2000,
        "Lojas Virtuais que vendem",
        2000,
      ]}
      speed={40}
      repeat={Infinity}
      cursor={true}
      wrapper="span"
      className="block text-center"
    />

  </span>

</h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10">
        Somos uma agência de desenvolvimento web, desenvolvendo projetos modernos, rápidos e personalizados para empresas que querem se destacar na internet.
        </p>

                <motion.a
  href="https://wa.me/5511958119820?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block bg-[#fc5d23] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#fc5d23] transition"
>
  Solicitar Orçamento
</motion.a>

      </motion.div>
      
    </section>
  );
}