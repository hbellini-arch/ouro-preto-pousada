import React, { useState } from 'react';
import Ornament from './Ornament.jsx';

export default function Experiences() {
  const [showColor, setShowColor] = useState(false);

  // Imagem enviada das águas cristalinas com piraputangas de Bonito
  const imageUrl = "/images/rio_sucuri_bonito.jpg";

  const cards = [
    {
      icon: "water_drop",
      title: "Gruta do Lago Azul",
      desc: "Monumento geológico milenar. Uma descida de 300 degraus entre estalagmites ancestrais revela um espelho d'água de azul-cobalto de profundidade incalculável.",
      tag: "Distância: 20 min da Pousada"
    },
    {
      icon: "kayaking",
      title: "Rio da Prata & Sucuri",
      desc: "Flutuação mágica em águas com visibilidade absoluta superior a 40 metros, nadando calmamente lado a lado com piraputangas, dourados e cardumes exuberantes.",
      tag: "Equipamentos Inclusos"
    },
    {
      icon: "forest",
      title: "Serra da Bodoquena",
      desc: "Trilhas ecológicas suspensas em meio à mata ciliar, culminando em sequências de quedas d'água e piscinas naturais mornas de calcário puro.",
      tag: "Passeio para Todo o Dia"
    },
    {
      icon: "restaurant",
      title: "Sabores Regionais",
      desc: "O encontro gustativo entre o pão de queijo quentinho da tradição das Gerais e as iguarias pantaneiras como o pacu assado na brasa e a piraputanga recheada.",
      tag: "Gastronomia no Centro"
    }
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-16 bg-[#EFE6D5] border-y border-[#BA854B]/30" id="experiencias">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-imperial-bronze font-bold">
            Crônicas dos Naturalistas &amp; Viajantes
          </span>
          <h2 className="text-2xl sm:text-4xl text-colonial-blue uppercase mt-1 font-serif font-bold">
            Correspondências de Bonito
          </h2>
          <Ornament className="my-2" />
          <p className="text-xs sm:text-base italic text-ebony max-w-2xl">
            Relatos expedicionários das maravilhas aquáticas e montanhosas que cercam a Hospedaria Ouro Preto.
          </p>
        </div>

        {/* Banner Fotográfico Amplo Interativo */}
        <div className="w-full bg-white p-3 sm:p-5 shadow-xl border-2 border-[#BA854B]/40 mb-8 sm:mb-10">
          <div className="border border-[#BA854B]/30 p-1.5 bg-[#EFE6D5]/40">
            <div
              onClick={() => setShowColor(!showColor)}
              className="group relative overflow-hidden bg-[#E5D7BF] cursor-pointer shadow-inner aspect-[21/9] sm:aspect-[2.4/1] w-full min-h-[220px] sm:min-h-[360px]"
            >
              {/* Imagem Colorida (Fundo) */}
              <img
                alt="Flutuação em Águas Cristalinas com Cardumes de Piraputanga em Bonito - Em Cores"
                className="absolute inset-0 w-full h-full object-cover"
                src={imageUrl}
              />
              {/* Imagem Sépia (Topo com filtro oitocentista autêntico) */}
              <img
                alt="Expedições às Águas de Bonito - Registro Século XIX"
                className={`vintage-sepia absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 ease-in-out ${
                  showColor ? 'opacity-0 pointer-events-none' : 'group-hover:opacity-0'
                }`}
                src={imageUrl}
              />
              <div className="absolute bottom-2 right-2 z-20 px-2.5 py-1 bg-[#182B5C]/90 text-[#FFDEA6] border border-[#B8860B] text-[10px] font-serif uppercase tracking-wider flex items-center gap-1 shadow-md pointer-events-none">
                <span className="material-symbols-outlined text-xs">palette</span>
                <span>{showColor ? 'Cores • Toque p/ Sépia' : 'Passe o cursor ou toque p/ Ver Cores'}</span>
              </div>
            </div>
          </div>
          <div className="pt-2.5 px-2 text-center text-xs text-colonial-blue uppercase tracking-wider font-bold font-serif">
            Expedição Fluvial • Águas Transparentes com Piraputangas do Rio Sucuri e da Bodoquena
          </div>
        </div>

        {/* Grid de 4 Cards de Experiências */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, idx) => (
            <div key={idx} className="bg-[#F7F2E8] p-5 shadow-md border border-[#BA854B]/30 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#E5D7BF] flex items-center justify-center text-colonial-blue mb-3.5 border border-[#BA854B]/30">
                  <span className="material-symbols-outlined text-2xl">{c.icon}</span>
                </div>
                <h3 className="text-base text-colonial-blue mb-2 font-serif font-bold">
                  {c.title}
                </h3>
                <p className="text-xs text-ebony leading-relaxed">
                  {c.desc}
                </p>
              </div>
              <div className="pt-3 mt-4 bg-[#EFE6D5] px-2 py-1 text-center text-[11px] text-bordeaux uppercase tracking-wider border-t border-[#BA854B]/30 font-bold">
                {c.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
