import React, { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#F7F2E8]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(42,31,36,0.08)] border-b border-[#BA854B]/30">
      <div className="h-16 sm:h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo e Título */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <img
            alt="Brasão Pousada Ouro Preto"
            className="w-7 h-9 sm:w-8 sm:h-10 object-contain drop-shadow-sm transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd1JQL-g3waE-6mSRi4LOti3ohFPJKgG3WXDld1RGG8Cgnx2V5gjUBmgARrkBoDpmWajaiItMM4I4noQobTQ7nhM4FnX3UNj5SZiYT6dBa6DO3Gx5dnbiyiFFbCeX5Wh1LvhrymarWZGufMJZ6vkquTkLzNfx-cCqkF4SAjPyqOgUeYzBNo1Q83N4oaWVErEj7wjjJDaC62yqlMrsBSJsypyBhXyQNKtEUE3UKLvWBqk2lHMjKhzY5Yc9vYWs1wxTZlAw"
          />
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg uppercase tracking-wider text-colonial-blue font-bold leading-tight">
              Gazeta Ouro-Preto
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest text-imperial-bronze uppercase font-semibold">
              Pousada &amp; Hospedaria • 1824
            </span>
          </div>
        </a>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          <a href="#" className="text-xs lg:text-sm uppercase tracking-wider text-ebony hover:text-bordeaux transition-colors font-semibold py-1">
            Início
          </a>
          <a href="#quartos" className="text-xs lg:text-sm uppercase tracking-wider text-ebony hover:text-bordeaux transition-colors font-semibold py-1">
            Quartos
          </a>
          <a href="#sobre" className="text-xs lg:text-sm uppercase tracking-wider text-ebony hover:text-bordeaux transition-colors font-semibold py-1">
            A Pousada
          </a>
          <a href="#experiencias" className="text-xs lg:text-sm uppercase tracking-wider text-ebony hover:text-bordeaux transition-colors font-semibold py-1">
            Experiências
          </a>
          <a href="#fototeca" className="text-xs lg:text-sm uppercase tracking-wider text-ebony hover:text-bordeaux transition-colors font-semibold py-1">
            Galeria
          </a>
          <a href="#encerramento" className="text-xs lg:text-sm uppercase tracking-wider text-ebony hover:text-bordeaux transition-colors font-semibold py-1">
            Contato
          </a>
        </nav>

        {/* Botão de Ação & Botão Mobile */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="https://book.omnibees.com/chain/5993/hotel/10222"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-xs uppercase tracking-wider px-3 sm:px-5 py-2 sm:py-2.5 bg-bordeaux text-white hover:bg-bordeaux-dark transition-all shadow-[0_3px_10px_rgba(107,24,36,0.25)] border border-imperial-gold/50 font-bold"
          >
            Reservar Estadia
          </a>

          {/* Toggle Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center border border-[#BA854B]/40 bg-[#EFE6D5] text-colonial-blue"
            aria-label="Abrir menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#EFE6D5] border-b-2 border-imperial-gold/40 px-6 py-4 flex flex-col gap-3 shadow-lg animate-fadeIn">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-ebony hover:text-bordeaux font-bold py-1.5 border-b border-[#BA854B]/20"
          >
            Início
          </a>
          <a
            href="#quartos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-ebony hover:text-bordeaux font-bold py-1.5 border-b border-[#BA854B]/20"
          >
            Quartos &amp; Suítes
          </a>
          <a
            href="#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-ebony hover:text-bordeaux font-bold py-1.5 border-b border-[#BA854B]/20"
          >
            A Pousada
          </a>
          <a
            href="#experiencias"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-ebony hover:text-bordeaux font-bold py-1.5 border-b border-[#BA854B]/20"
          >
            Experiências em Bonito
          </a>
          <a
            href="#fototeca"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-ebony hover:text-bordeaux font-bold py-1.5 border-b border-[#BA854B]/20"
          >
            Galeria Fotográfica
          </a>
          <a
            href="#encerramento"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-ebony hover:text-bordeaux font-bold py-1.5"
          >
            Contato &amp; Localização
          </a>
        </div>
      )}
    </header>
  );
}
