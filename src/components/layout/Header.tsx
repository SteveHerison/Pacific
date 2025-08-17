"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "/" },
    { label: "Pacotes", href: "/pacotes" },
    { label: "Gestantes", href: "/gestantes" },
    { label: "Ensaios", href: "/ensaios" },
    { label: "Corporativo", href: "/corporativo" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm border-b border-gray-100" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src={isScrolled ? "/fotos/Logotipo Preto (sem fundo).png" : "/fotos/Logotipo Bege (sem fundo) (1).png"}
              alt="Pacific Movement"
              width={120}
              height={40}
              className="h-10 w-auto transition-opacity duration-300"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-light transition-colors duration-200 tracking-wide ${
                  isScrolled 
                    ? "text-gray-700 hover:text-black" 
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-black" : "text-white"}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100">
          <nav className="flex flex-col py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-light text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;