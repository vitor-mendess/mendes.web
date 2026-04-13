import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false); // dropdown desktop
  const [mobileOpen, setMobileOpen] = useState(false); // menu mobile
  const [servicesOpen, setServicesOpen] = useState(false); // accordion mobile

  const menuRef = useRef<HTMLLIElement>(null);

  function toggleMenu() {
    setOpen(!open);
  }

  // Fecha dropdown se clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#031a44] text-white shadow-lg fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

        {/* LOGO */}
        <Link to="/" className="text-3xl font-bold tracking-wide">
          mendes<span className="text-[#fc5d23]">.web</span>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-10 text-[16px] font-semibold tracking-wide">

          <li>
            <Link to="/sobre" className="hover:text-[#fc5d23] transition">
              Sobre nós
            </Link>
          </li>

          {/* DROPDOWN DESKTOP */}
          <li className="relative" ref={menuRef}>
            <button
              onClick={toggleMenu}
              className="flex items-center gap-1 hover:text-[#fc5d23] transition"
            >
              O que fazemos
              <span className="text-xs">▼</span>
            </button>

            {open && (
              <div className="absolute top-10 left-0 bg-white text-black rounded-xl shadow-xl w-64 p-2 z-50">

                <div className="px-4 py-3 hover:bg-gray-100 rounded-lg">
                  <Link to="/criacao-sites">Criação de Sites</Link>
                </div>

                <div className="px-4 py-3 hover:bg-gray-100 rounded-lg">
                  <Link to="/LandingPage">Landing Pages</Link>
                </div>

                <div className="px-4 py-3 hover:bg-gray-100 rounded-lg">
                  <Link to="/LojaVirtual">Lojas Virtuais</Link>
                </div>

                <div className="px-4 py-3 hover:bg-gray-100 rounded-lg">
                  <Link to="/Software">Softwares Personalizados</Link>
                </div>

              </div>
            )}
          </li>

          <li>
            <Link to="/Contact" className="hover:text-[#fc5d23] transition">
              Contato
            </Link>
          </li>

        </ul>

        {/* BOTÃO DESKTOP */}
        <a
          href="https://wa.me/5511958119820"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[#fc5d23] px-7 py-2.5 rounded-full font-semibold tracking-wide hover:bg-white hover:text-[#031a44] transition"
        >
          Orçamento →
        </a>

        {/* HAMBURGUER */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="text-2xl">
              {mobileOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

      </div>

{mobileOpen && (
  <div className="md:hidden bg-[#031a44] px-3 pb-6 text-left">

    {/* SOBRE */}
    <Link
      to="/sobre"
      className="block py-3 border-b border-white/10"
      onClick={() => setMobileOpen(false)}
    >
      Sobre nós
    </Link>

    {/* O QUE FAZEMOS */}
    <div className="border-b border-white/10">

      <button
        onClick={() => setServicesOpen(!servicesOpen)}
        className="w-full flex justify-between items-center py-3"
      >
        <span>O que fazemos</span>
        <span className="text-sm">{servicesOpen ? "▲" : "▼"}</span>
      </button>

      {servicesOpen && (
        <div className="flex flex-col pl-2 pb-3 space-y-1 text-sm text-white/80">

          <Link
            to="/criacao-sites"
            onClick={() => setMobileOpen(false)}
            className="py-2 pl-2 border-l border-white/10 hover:border-[#fc5d23]"
          >
            Criação de Sites
          </Link>

          <Link
            to="/LandingPage"
            onClick={() => setMobileOpen(false)}
            className="py-2 pl-2 border-l border-white/10 hover:border-[#fc5d23]"
          >
            Landing Pages
          </Link>

          <Link
            to="/LojaVirtual"
            onClick={() => setMobileOpen(false)}
            className="py-2 pl-2 border-l border-white/10 hover:border-[#fc5d23]"
          >
            Lojas Virtuais
          </Link>

          <Link
            to="/Software"
            onClick={() => setMobileOpen(false)}
            className="py-2 pl-2 border-l border-white/10 hover:border-[#fc5d23]"
          >
            Softwares Personalizados
          </Link>

        </div>
      )}

    </div>

    {/* CONTATO */}
    <Link
      to="/Contact"
      className="block py-3 border-b border-white/10"
      onClick={() => setMobileOpen(false)}
    >
      Contato
    </Link>

  </div>
)}

    </nav>
  );
}