import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Scale,
  HeartPulse,
  Smile,
  Building,
  Brain,
  HardHat,
  Briefcase,
  Cpu,
  Calendar,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#031a44] text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* SOBRE */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            mendes<span className="text-[#fc5d23]">.web</span>
          </h2>

          <p className="text-gray-300 text-sm mb-6">
            Somos uma agência especializada em desenvolvimento de sites,
            sistemas e automações, criando soluções digitais modernas
            para empresas que desejam crescer e se destacar no mercado.
          </p>

          <div className="flex gap-4">
  <a
    href="https://www.instagram.com/mendes.web_/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#fc5d23] transition"
  >
    <Instagram className="cursor-pointer" />
  </a>

  <a
    href="https://www.linkedin.com/in/vitor-mendess/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#fc5d23] transition"
  >
    <Linkedin className="cursor-pointer" />
  </a>
</div>
        </div>

        {/* SERVIÇOS */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Nossos Serviços</h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/criacao-sites">Criação de Sites</Link></li>
            <li><Link to="/LandingPage">Landing Pages</Link></li>
            <li><Link to="/LojaVirtual">Lojas Virtuais</Link></li>
            <li><Link to="/Software">Softwares Personalizados</Link></li>
          </ul>
        </div>

        {/* ÁREA DE ATUAÇÃO */}
<div>
  <h3 className="font-semibold text-lg mb-4">Área de Atuação</h3>

  <ul className="space-y-3 text-sm">

    <Link to="/Advogado" className="flex gap-2 items-center hover:text-[#fc5d23]">
      <Scale size={16} /> Site para Advogados
    </Link>

    <Link to="/Medico" className="flex gap-2 items-center hover:text-[#fc5d23]">
      <HeartPulse size={16} /> Site para Médicos
    </Link>

    <Link to="/Dentista" className="flex gap-2 items-center hover:text-[#fc5d23]">
      <Smile size={16} /> Site para Dentistas
    </Link>

    <Link to="/Construtor" className="flex gap-2 items-center hover:text-[#fc5d23]">
      <HardHat size={16} /> Site para Construtora
    </Link>

    <Link to="/Psicologo" className="flex gap-2 items-center hover:text-[#fc5d23]">
      <Brain size={16} /> Site para Psicólogos
    </Link>

    <Link to="/Contabilidade" className="flex gap-2 items-center hover:text-[#fc5d23]">
      <Building size={16} /> Site para Contabilidade
    </Link>

    <Link to="/Empresa" className="flex gap-2 items-center hover:text-[#fc5d23]">
      <Briefcase size={16} /> Site para Empresas
    </Link>

    <Link to="/Tecnologia" className="flex gap-2 items-center hover:text-[#fc5d23]">
      <Cpu size={16} /> Site para Tecnologia
    </Link>

    <Link to="/Eventos" className="flex gap-2 items-center hover:text-[#fc5d23]">
      <Calendar size={16} /> Site para Eventos
    </Link>

  </ul>
</div>

        {/* CONTATO */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contato</h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex gap-2 items-center">
              <Mail size={16} /> vm06122006@icloud.com
            </li>

            <li className="flex gap-2 items-center">
              <Phone size={16} /> (11) 95811-9820
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} mendes.web | Todos os direitos reservados.
      </div>

    </footer>
  );
}