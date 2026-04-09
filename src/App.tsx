import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";

import Home from "./pages/Home";
import Sobre from "./pages/About";
import CriacaoSites from "./pages/Servicos/CriacaoSites";
import LojaVirtual from "./pages/Servicos/LojaVirtual";
import LandingPages from "./pages/Servicos/LandingPages";
import Softwares from "./pages/Servicos/Softwares";
import ContactPage from "./pages/Contact";

import Advogado from "./pages/segmentos/advogado";
import Construtora from "./pages/segmentos/construtora";
import Contabilidade from "./pages/segmentos/contabilidade";
import Dentista from "./pages/segmentos/dentista";
import Eventos from "./pages/segmentos/eventos";
import Medico from "./pages/segmentos/medico";
import Psicologo from "./pages/segmentos/psicologo";
import Tecnologia from "./pages/segmentos/tecnologia";
import Empresa from "./pages/segmentos/empresa";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
    
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/criacao-sites" element={<CriacaoSites />} />
        <Route path="/LojaVirtual" element={<LojaVirtual />} />
        <Route path="/LandingPage" element={<LandingPages />} />
        <Route path="/Software" element={<Softwares />} />
        <Route path="/Contact" element={<ContactPage />} />

        <Route path="/Advogado" element={<Advogado />} />
        <Route path="/Construtor" element={<Construtora />} />
        <Route path="/Contabilidade" element={<Contabilidade />} />
        <Route path="/Dentista" element={<Dentista />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Medico" element={<Medico />} />
        <Route path="/Psicologo" element={<Psicologo />} />
        <Route path="/Tecnologia" element={<Tecnologia />} />
        <Route path="/Empresa" element={<Empresa />} />
        
        
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
