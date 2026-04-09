import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  function toggleMenu() {
    setOpen(!open);
  }

  // Fecha o menu se clicar fora
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

 <Link
  to="/"
  className="text-3xl font-bold tracking-wide cursor-pointer"
>
  mendes<span className="text-[#fc5d23]">.web</span>
</Link>

        {/* MENU */}
        <ul className="flex items-center gap-10 text-[16px] font-semibold tracking-wide">

      <li>
        <Link
        to="/sobre"
        className="hover:text-[#fc5d23] transition"
        >
         Sobre nós
        </Link>
        </li>

          {/* DROPDOWN */}
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

                <div className="px-4 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Link
                  to="/criacao-sites"
                  className="hover:text-[#fc5d23] transition"
                  >
                  Criação de Sites
                  </Link>
                </div>

                <div className="px-4 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Link
                  to="/LandingPage"
                  className="hover:text-[#fc5d23] transition"
                  >
                  Landing Pages
                  </Link>
                </div>

                <div className="px-4 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Link
                  to="/LojaVirtual"
                  className="hover:text-[#fc5d23] transition"
                  >
                  Lojas Virtuais
                  </Link>
                </div>

                <div className="px-4 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Link
                  to="/Software"
                  className="hover:text-[#fc5d23] transition"
                  >
                  Softwares Personalizados

                  </Link>
                </div>
               

              </div>
            )}
          </li>

          <li className="hover:text-[#fc5d23] transition cursor-pointer">
            <Link
        to="/Contact"
        className="hover:text-[#fc5d23] transition"
        >
         Contato
        </Link>
          </li>

        </ul>

        {/* BOTÃO */}
        <a
  href="https://wa.me/5511958119820"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#fc5d23] px-7 py-2.5 rounded-full font-semibold tracking-wide hover:bg-white hover:text-[#031a44] transition inline-block"
>
  Orçamento →
</a>
      </div>
    </nav>
  );
}