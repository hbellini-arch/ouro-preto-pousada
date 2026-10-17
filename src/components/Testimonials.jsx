import React from 'react';
import Ornament from './Ornament.jsx';

export default function Testimonials() {
  const letters = [
    {
      author: "Regiane A. Issahak",
      location: "São Paulo, SP",
      rating: "★★★★★ 5.0",
      quote: "Atendimento de todos os funcionários excelente, além da Pousada ser muito linda e bem cuidada. Superou todas as expectativas e está em um local calmo não muito longe do centro de Bonito. Para quem tem crianças pequenas, possui uma ótima piscina. Recomendo com louvor!"
    },
    {
      author: "Marcos C.",
      location: "Minas Gerais",
      rating: "★★★★★ 5.0",
      quote: "Estiloso, confortável, aconchegante e muito, muito agradável! Sem dúvida voltaremos sempre. Funcionários muito gentis e educados. Quartos possuem tamanhos ótimos, são super limpos e as camas extremamente confortáveis! O café da manhã é uma verdadeira delícia dos deuses. Amamos!"
    },
    {
      author: "Sheila C.",
      location: "Rio de Janeiro, RJ",
      rating: "★★★★★ 5.0",
      quote: "Ficamos uma semana nessa pousada: a estrutura é impecável, super aconchegante, tudo muito limpo e o café da manhã simplesmente maravilhoso. Conhecemos o proprietário, senhor Victor, que nos fez sentir em nossa própria casa. Uma experiência inesquecível e acolhedora!"
    }
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-16 bg-[#EFE6D5] border-t border-[#BA854B]/30">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-imperial-bronze font-bold">
            Correio Elegante dos Viajantes
          </span>
          <h2 className="text-2xl sm:text-4xl text-colonial-blue uppercase mt-1 font-serif font-bold">
            Cartas dos Nossos Hóspedes
          </h2>
          <Ornament className="my-2" />
          <p className="text-xs sm:text-base italic text-ebony max-w-xl">
            Trechos autênticos retirados dos livros de ouro e registros telegráficos da hospedaria.
          </p>
        </div>

        {/* Grid de 3 Cartas Antigas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {letters.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 shadow-md border border-[#BA854B]/30 flex flex-col justify-between relative"
            >
              <div className="absolute -top-3 right-5 bg-bordeaux text-white px-2.5 py-0.5 text-xs font-bold uppercase shadow-sm border border-imperial-gold/40">
                {card.rating}
              </div>
              <div>
                <span className="text-imperial-bronze text-3xl font-serif leading-none select-none">“</span>
                <p className="text-xs sm:text-sm text-ebony italic leading-relaxed pt-1">
                  {card.quote}
                </p>
              </div>
              <div className="mt-5 pt-3 bg-[#F7F2E8] p-3 flex items-center justify-between border-t border-[#BA854B]/20">
                <span className="text-sm text-colonial-blue font-serif font-bold">
                  {card.author}
                </span>
                <span className="text-[11px] text-ebony/80 uppercase font-semibold">
                  {card.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selos de Reconhecimento */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-3.5 px-4 bg-[#E5D7BF] text-ebony border border-[#BA854B]/40 shadow-sm text-xs sm:text-sm font-bold">
          <a
            className="flex items-center gap-1.5 hover:text-bordeaux transition-colors"
            href="https://www.google.com/travel/hotels/pousada%20ouro%20preto%20de%20bonito/entity/CgoI-d7TifGP4f1mEAE/reviews"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-imperial-bronze text-lg">star</span>
            <span>Google Avaliações: ★ 4,9 / 5.0</span>
          </a>
          <span className="text-imperial-gold hidden sm:inline">•</span>
          <a
            className="flex items-center gap-1.5 hover:text-bordeaux transition-colors"
            href="https://www.booking.com/hotel/br/pousada-ouro-preto-de-bonito.pt-br.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-imperial-bronze text-lg">verified</span>
            <span>Booking.com: Nota Soberba ★ 9,5</span>
          </a>
          <span className="text-imperial-gold hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-imperial-bronze text-lg">thumb_up</span>
            <span>Tripadvisor: Excelência Comprovada</span>
          </span>
        </div>
      </div>
    </section>
  );
}
