import React, { useState } from 'react';
import Ornament from './Ornament.jsx';

export default function Hero() {
  const [showColor, setShowColor] = useState(false);

  // Imagem oficial 100% acessível (HTTP 200 garantido)
  const imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDRzk_vAT-gBMQR3OBNvIvwW-0hQX00Z1qmdMe_Jx1zrPoAZW403KWxy47kqkv7dnlyH-SRVVO3kFO1XCyWxsczGeflu2ki2cTwl71p7Lf4NFmdPkHJ_dBm_xSdcMqghOKSbJuLINSTRBjlWmt7yFrbKKxGonabLeJqHGj0HScWtVZ6zbZ45tmKJo3Wbm4pe-FxtJlA-HdLjFPqUOQsu8DhZmX8_-poGX8BLYgYHZtcOQnjuYYZInfNParBvtXvJzXfcDY";

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-8 sm:py-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Título de Capa & Subtítulo Nobre */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-widest text-colonial-blue font-bold px-3 sm:px-4 py-1 bg-[#EFE6D5] border border-[#BA854B]/30 inline-block shadow-sm">
            ✦ Noticiário de Primeira Ordem ✦
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-ebony mt-3 mb-2 leading-tight font-serif font-bold">
            Descubra o refúgio onde o conforto encontra a tradição
          </h2>
          <Ornament className="my-2" />
          <p className="text-sm sm:text-lg italic text-bordeaux max-w-3xl mx-auto font-medium">
            Uma hospedaria de charme histórico, serenidade e arquitetura imperial erguida no coração de Bonito.
          </p>
        </div>

        {/* Grande Clichê Central com Interatividade Sépia / Cor */}
        <div className="w-full bg-white p-3 sm:p-6 shadow-2xl border-2 border-[#BA854B]/50 mb-8 sm:mb-10">
          <div className="border border-[#BA854B]/30 p-1.5 sm:p-2 bg-[#EFE6D5]/40">
            <div
              onClick={() => setShowColor(!showColor)}
              className="group relative overflow-hidden bg-[#E5D7BF] cursor-pointer shadow-inner aspect-[16/10] sm:aspect-[16/9] w-full min-h-[260px] sm:min-h-[460px] lg:min-h-[560px]"
            >
              {/* Camada Colorida (Fundo) */}
              <img
                alt="Fachada Histórica da Estação Ferroviária Colonial em Cores"
                className="absolute inset-0 w-full h-full object-cover"
                src={imageUrl}
              />

              {/* Camada Sépia (Topo): Aplica filtro sépia oitocentista e desaparece no hover / clique */}
              <img
                alt="Estação Ferroviária Colonial Século XIX"
                className={`vintage-sepia absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 ease-in-out ${
                  showColor ? 'opacity-0 pointer-events-none' : 'group-hover:opacity-0'
                }`}
                src={imageUrl}
              />

              {/* Tag Flutuante Interativa */}
              <div className="absolute bottom-3 right-3 z-20 px-3 py-1.5 bg-[#182B5C]/90 text-[#FFDEA6] border border-[#B8860B] text-xs font-serif uppercase tracking-wider flex items-center gap-1.5 shadow-md backdrop-blur-sm pointer-events-none">
                <span className="material-symbols-outlined text-sm text-[#FFDEA6]">palette</span>
                <span>{showColor ? 'Exibindo Cores • Toque p/ Sépia' : 'Passe o cursor ou toque para ver cores'}</span>
              </div>
            </div>
          </div>

          {/* Tarja Descritiva */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-3 sm:pt-4 px-2 sm:px-3 border-t border-[#BA854B]/30 mt-2 text-ebony text-xs gap-2 bg-[#F7F2E8] py-2">
            <span className="tracking-wider uppercase font-semibold text-bordeaux flex items-center gap-1.5 text-center sm:text-left">
              <span className="text-imperial-gold font-bold">✤</span> GRAVURA PRINCIPAL • Fachada Histórica da Estação Ferroviária Colonial ao Crepúsculo
            </span>
            <span className="text-imperial-bronze font-bold italic uppercase tracking-widest text-center sm:text-right">
              Atelier Ouro-Preto • Bonito, Província de Mato Grosso do Sul
            </span>
          </div>
        </div>

        {/* Crônica Editorial em Três Colunas */}
        <div className="bg-[#EFE6D5] p-5 sm:p-8 lg:p-10 shadow-md border border-[#BA854B]/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-justify text-sm sm:text-base text-ebony leading-relaxed">
            <div>
              <p>
                <span className="float-left text-4xl sm:text-5xl leading-none text-bordeaux mr-2.5 mt-1 font-serif font-bold">
                  N
                </span>
                a confluência mágica entre o barroco mineiro do século XVIII e as águas límpidas do Pantanal Sul-Mato-Grossense, desponta uma estalagem sem paralelo. A <strong className="text-bordeaux font-bold">Pousada Ouro Preto</strong> acolhe viajantes de bom gosto que buscam a tranquilidade das arcadas coloniais sem abdicar do frescor e das aventuras ecológicas da região.
              </p>
            </div>
            <div>
              <p>
                São vinte e três aposentos distribuídos ao longo de alamedas arborizadas e silenciosas, onde cada hóspede desfruta de sua varanda privativa com rede, acordando ao som de aves silvestres e sentindo o perfume do café coado artesanalmente no tacho de cobre logo às primeiras horas do orvalho.
              </p>
              <div className="mt-4 p-3.5 bg-[#E5D7BF] border-l-4 border-bordeaux text-ebony italic text-xs sm:text-sm shadow-inner">
                "Um verdadeiro palacete de descanso, onde cada detalhe foi entalhado para remeter aos tempos áureos do Império, a breves três minutos do burburinho da Praça Central."
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <p>
                Construída como uma crônica viva da arquitetura luso-brasileira, cada recanto honra a tradição das velhas vilas de Minas, aliando vigas rústicas e lampiões clássicos à comodidade e ao conforto moderno exigido pelos viajantes do presente fólio.
              </p>
              <div className="pt-5 flex flex-col gap-2.5">
                <a
                  className="w-full text-center text-xs uppercase tracking-wider px-5 py-3 bg-bordeaux text-white hover:bg-bordeaux-dark transition-all shadow-md flex items-center justify-center gap-2 border border-imperial-gold/50 font-bold"
                  href="https://book.omnibees.com/chain/5993/hotel/10222"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-sm">hotel</span>
                  Reservar Estadia
                </a>
                <a
                  className="w-full text-center text-xs uppercase tracking-wider px-5 py-2.5 bg-[#E5D7BF] text-colonial-blue hover:bg-[#D8C7AE] transition-all shadow-sm border border-[#BA854B]/40 font-bold"
                  href="#quartos"
                >
                  Conhecer os Quartos
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Telégrafo de Reservas (Formulário) */}
        <div className="mt-8 sm:mt-10 bg-[#EFE6D5] p-5 sm:p-8 shadow-lg border border-[#BA854B]/40" id="reservas">
          <div className="flex flex-col md:flex-row items-center justify-between pb-3 mb-5 bg-[#E5D7BF] px-3 sm:px-4 py-2 border border-[#BA854B]/30 gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-bordeaux">markunread_mailbox</span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-colonial-blue font-bold font-serif">
                Telégrafo de Reservas • Despacho Imediato
              </span>
            </div>
            <span className="text-xs text-ebony italic font-medium">
              Garantia da Melhor Tarifa Oficial da Hospedaria
            </span>
          </div>

          <form
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5"
            onSubmit={(e) => {
              e.preventDefault();
              window.open('https://book.omnibees.com/chain/5993/hotel/10222', '_blank');
            }}
          >
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-wider text-imperial-bronze font-bold mb-1">
                Chegada (Check-in)
              </label>
              <div className="flex items-center bg-white px-3 py-2 shadow-sm border border-[#BA854B]/30">
                <span className="material-symbols-outlined text-imperial-bronze text-sm mr-2">calendar_today</span>
                <input className="bg-transparent text-xs sm:text-sm text-ebony outline-none w-full" type="date" defaultValue="2026-04-15" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-wider text-imperial-bronze font-bold mb-1">
                Partida (Check-out)
              </label>
              <div className="flex items-center bg-white px-3 py-2 shadow-sm border border-[#BA854B]/30">
                <span className="material-symbols-outlined text-imperial-bronze text-sm mr-2">event_available</span>
                <input className="bg-transparent text-xs sm:text-sm text-ebony outline-none w-full" type="date" defaultValue="2026-04-18" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-wider text-imperial-bronze font-bold mb-1">
                Hóspedes Adultos
              </label>
              <div className="flex items-center bg-white px-3 py-2 shadow-sm border border-[#BA854B]/30">
                <span className="material-symbols-outlined text-imperial-bronze text-sm mr-2">group</span>
                <select className="bg-transparent text-xs sm:text-sm text-ebony outline-none w-full">
                  <option>2 Adultos</option>
                  <option>1 Adulto</option>
                  <option>3 Adultos</option>
                  <option>4 Adultos</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-wider text-imperial-bronze font-bold mb-1">
                Crianças / Menores
              </label>
              <div className="flex items-center bg-white px-3 py-2 shadow-sm border border-[#BA854B]/30">
                <span className="material-symbols-outlined text-imperial-bronze text-sm mr-2">child_care</span>
                <select className="bg-transparent text-xs sm:text-sm text-ebony outline-none w-full">
                  <option>0 Crianças</option>
                  <option>1 Criança</option>
                  <option>2 Crianças</option>
                  <option>3+ Crianças</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <button
                className="w-full h-[40px] bg-bordeaux text-white hover:bg-bordeaux-dark text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 border border-imperial-gold/50 font-bold"
                type="submit"
              >
                <span className="material-symbols-outlined text-sm">send</span>
                Emitir Ordem
              </button>
            </div>
          </form>

          <p className="text-[11px] text-ebony/80 mt-2.5 text-center sm:text-left italic">
            * A solicitação será encaminhada diretamente ao sistema telegráfico oficial Omnibees da Pousada Ouro Preto.
          </p>
        </div>
      </div>
    </section>
  );
}
