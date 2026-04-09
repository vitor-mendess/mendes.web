import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 bg-[#031a44] text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-[#fc5d23] font-semibold tracking-widest mb-4">
            VAMOS COMEÇAR?
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos tirar seu projeto do papel?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Tenha um site profissional, rápido e moderno para destacar
            sua empresa na internet e atrair novos clientes todos os dias.
          </p>
          <motion.a
            href="https://wa.me/5511958119820?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#fc5d23] text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#031a44] transition shadow-lg"
          >
            Solicitar orçamento agora
            <ArrowRight size={20} />
          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}