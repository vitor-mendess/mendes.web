import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Scale,
  Smile,
  Brain,
  Calculator,
  Building2,
  CalendarDays,
  Laptop,
} from "lucide-react";

interface InfoCard {
  title: string;
  description: string;
}

interface SegmentProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;

  section1Title: string;
  section1Text: string;
  section1Cards: InfoCard[];

  section2Title: string;
  section2Text: string;
  section2Cards: InfoCard[];

  section3Title: string;
  section3Text: string;
  section3Cards: InfoCard[];

  investmentTitle: string;
  investmentText: string;
}

export default function SegmentPage({
  title,
  subtitle,
  description,
  heroImage,

  section1Title,
  section1Text,
  section1Cards,

  section2Title,
  section2Text,
  section2Cards,

  section3Title,
  section3Text,
  section3Cards,

  investmentTitle,
  investmentText,
}: SegmentProps) {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-[#031a44] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold leading-tight mb-6">
              {title}
            </h1>

            <p className="text-2xl text-[#fc5d23] font-semibold mb-4">
              {subtitle}
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>

            <a
  href="https://wa.me/5511958119820?text=Olá,%20vim%20pelo%20site%20e%20quero%20meu%20site%20profissional."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex bg-[#fc5d23] px-8 py-4 rounded-full font-semibold items-center gap-2 hover:scale-105 transition text-white"
>
  Quero meu site profissional
  <ArrowRight size={18} />
</a>
          </motion.div>

          <img
            src={heroImage}
            alt={title}
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* SEÇÃO 1 */}
      <section className="py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#031a44] mb-6">
            {section1Title}
          </h2>

          <p className="text-gray-600 leading-8 text-lg mb-12">
            {section1Text}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {section1Cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <CheckCircle className="text-[#fc5d23] mb-4" />

                <h3 className="font-bold text-xl mb-3 text-[#031a44]">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#031a44] mb-6">
            {section2Title}
          </h2>

          <p className="text-gray-600 leading-8 text-lg mb-12">
            {section2Text}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {section2Cards.map((card, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-3xl p-8"
              >
                <h3 className="font-bold text-xl mb-3 text-[#031a44]">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 */}
      <section className="py-24 bg-[#fc5d23] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            {section3Title}
          </h2>

          <p className="leading-8 text-lg mb-12 opacity-95">
            {section3Text}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {section3Cards.map((card, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-3xl p-8"
              >
                <h3 className="font-bold text-xl mb-3">
                  {card.title}
                </h3>

                <p className="leading-7">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE INVESTIR */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#031a44] mb-8">
            {investmentTitle}
          </h2>

          <p className="text-gray-600 text-lg leading-9">
            {investmentText}
          </p>
        </div>
      </section>

{/* OUTROS SEGMENTOS */}
<section className="py-24 bg-[#f8f9fc]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-[#031a44] mb-4 text-center">
      Sites para outras áreas
    </h2>

    <p className="text-center text-gray-600 text-lg mb-12">
      Também desenvolvemos sites profissionais para diversos segmentos.
    </p>

    <div className="grid md:grid-cols-4 gap-6">
      <Link
        to="/Medico"
        className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition"
      >
        <Stethoscope className="text-[#fc5d23] mb-4" size={32} />
        <h3 className="text-xl font-bold text-[#031a44] mb-2">
          Médicos
        </h3>
        <p className="text-gray-600">
          Consultórios e clínicas
        </p>
      </Link>

      <Link
        to="/Advogado"
        className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition"
      >
        <Scale className="text-[#fc5d23] mb-4" size={32} />
        <h3 className="text-xl font-bold text-[#031a44] mb-2">
          Advogados
        </h3>
        <p className="text-gray-600">
          Escritórios jurídicos
        </p>
      </Link>

      <Link
        to="/Dentista"
        className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition"
      >
        <Smile className="text-[#fc5d23] mb-4" size={32} />
        <h3 className="text-xl font-bold text-[#031a44] mb-2">
          Dentistas
        </h3>
        <p className="text-gray-600">
          Clínicas odontológicas
        </p>
      </Link>

      <Link
        to="/Psicologo"
        className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition"
      >
        <Brain className="text-[#fc5d23] mb-4" size={32} />
        <h3 className="text-xl font-bold text-[#031a44] mb-2">
          Psicólogos
        </h3>
        <p className="text-gray-600">
          Consultas e terapias
        </p>
      </Link>

      <Link
        to="/Contabilidade"
        className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition"
      >
        <Calculator className="text-[#fc5d23] mb-4" size={32} />
        <h3 className="text-xl font-bold text-[#031a44] mb-2">
          Contabilidade
        </h3>
        <p className="text-gray-600">
          Escritórios contábeis
        </p>
      </Link>

      <Link
        to="/Construtor"
        className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition"
      >
        <Building2 className="text-[#fc5d23] mb-4" size={32} />
        <h3 className="text-xl font-bold text-[#031a44] mb-2">
          Construtora
        </h3>
        <p className="text-gray-600">
          Obras e projetos
        </p>
      </Link>

      <Link
        to="/Eventos"
        className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition"
      >
        <CalendarDays className="text-[#fc5d23] mb-4" size={32} />
        <h3 className="text-xl font-bold text-[#031a44] mb-2">
          Eventos
        </h3>
        <p className="text-gray-600">
          Festas e corporativo
        </p>
      </Link>

      <Link
        to="/Tecnologia"
        className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition"
      >
        <Laptop className="text-[#fc5d23] mb-4" size={32} />
        <h3 className="text-xl font-bold text-[#031a44] mb-2">
          Tecnologia
        </h3>
        <p className="text-gray-600">
          Software e sistemas
        </p>
      </Link>

      <Link
      to="/Empresa"
      className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition"
    >
      <Building2 className="text-[#fc5d23] mb-4" size={32} />
      <h3 className="text-xl font-bold text-[#031a44] mb-2">
        Empresa
      </h3>
      <p className="text-gray-600">
        Sites institucionais e comerciais
      </p>
    </Link>
    </div>
  </div>
</section>
    </main>
  );
}