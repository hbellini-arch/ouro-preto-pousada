import React from 'react';
import Ornament from './Ornament.jsx';

export default function Masthead() {
  return (
    <section className="w-full bg-[#EFE6D5] px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 pb-5 sm:pb-6 shadow-sm border-b border-[#BA854B]/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Linha Superior de Despacho & Metadados */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between py-2 text-center text-ebony text-xs uppercase tracking-widest gap-2 bg-[#F7F2E8]/80 px-3 sm:px-4 border border-[#BA854B]/20">
          <span className="flex items-center gap-1 font-medium">
            Bonito, Mato Grosso do Sul — Edição Especial
          </span>
          <span className="text-imperial-bronze font-bold text-xs sm:text-sm tracking-wider">
            ✦ Circulação Nacional &amp; Ultramarina ✦
          </span>
          <span className="flex items-center gap-1 font-bold text-bordeaux">
            Preço Canônico: 500 Réis ao Dia
          </span>
        </div>

        {/* Filete Decorativo Duplo */}
        <Ornament className="my-2.5 sm:my-3" />

        {/* Título Principal com Brasão Imperial */}
        <div className="w-full py-2 sm:py-4 flex flex-col items-center justify-center text-center relative">
          <div className="flex items-center justify-center gap-4 sm:gap-10">
            <div className="hidden lg:flex flex-col items-center text-right text-ebony text-xs sm:text-sm italic w-44">
              <span>"Da arte colonial ao paraíso das águas cristalinas."</span>
              <span className="text-xs text-imperial-bronze uppercase tracking-widest mt-1 font-semibold">
                Anno MDCCCXXIV
              </span>
            </div>

            {/* Brasão Principal */}
            <div className="flex flex-col items-center">
              <img
                alt="Brasão Imperial Pousada Ouro Preto"
                className="w-16 h-20 sm:w-24 sm:h-28 object-contain drop-shadow-md"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA29GFYzjL8NK32sUviRhWPjyG5Qwp4KZhXbgIdG15Cvc_IOSeh56qG5JWHNPAugfRnKVTatIy5MIkGb6Uur-Qfvi3KzD9CYv6JXTL7YXyKsCvx2TTOKWj8QyXqa3kz8S95xtSjRCddg1GrTXN3ggRMLY3y4zeXMWVW-mvtOkVplShi6oTnPs9GVf48ZJGpv__7qzuwr89ZlZWRlGezPjWb9kKiQFlWj7p1BDzuM_aUsoLBAK10M2oWUeD5EmGdAvD8EeDa0yiFPd5hK3o"
              />
              <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight text-colonial-blue mt-2 uppercase font-serif font-bold">
                OURO-PRETO
              </h1>
              <p className="text-sm sm:text-lg text-imperial-bronze tracking-widest uppercase mt-1 font-semibold font-serif">
                Pousada &amp; Hospedaria — Bonito, MS
              </p>
            </div>

            <div className="hidden lg:flex flex-col items-center text-left text-ebony text-xs sm:text-sm italic w-44">
              <span>"Conforto farto, águas doces e hospitalidade fidalga."</span>
              <span className="text-xs text-imperial-bronze uppercase tracking-widest mt-1 font-semibold">
                Fólio Imperial Nº 23
              </span>
            </div>
          </div>

          <p className="mt-3 text-ebony text-xs sm:text-sm max-w-2xl text-center italic px-2">
            Crônica de viagem, gazeta de hospitalidade colonial e registro oficial das mais nobres estadias às margens do Formoso e da Bodoquena.
          </p>
        </div>

        {/* Filete de Encerramento do Cabeçalho */}
        <div className="w-full mt-2 flex items-center justify-center gap-2 sm:gap-4">
          <div className="h-1 flex-1 bg-bordeaux"></div>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white px-3 sm:px-4 bg-bordeaux py-1 font-bold shadow-sm border border-imperial-gold/40">
            Gazeta Matutina • 1824-2024
          </span>
          <div className="h-1 flex-1 bg-bordeaux"></div>
        </div>
      </div>
    </section>
  );
}
