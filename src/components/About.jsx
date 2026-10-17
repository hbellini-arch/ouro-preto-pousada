import React from 'react';
import Ornament from './Ornament.jsx';

export default function About() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-14 bg-[#EFE6D5] border-y border-[#BA854B]/30" id="sobre">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho de Seção com Ornamentos */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-imperial-bronze font-bold">
            Crônica Histórica
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-colonial-blue uppercase mt-1 tracking-wide font-serif font-bold">
            Uma Hospedaria à Moda Antiga
          </h2>
          <Ornament className="my-2" />
          <p className="text-xs sm:text-base italic text-ebony max-w-xl">
            Memorial das artes, hospitalidade farta e o sossego das serras mineiras transplantados para a capital do ecoturismo.
          </p>
        </div>

        {/* Três Colunas Tradicionais de Gazeta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-justify text-sm sm:text-base leading-relaxed text-ebony">
          {/* Coluna 1 */}
          <div className="bg-[#F7F2E8] p-5 sm:p-7 shadow-sm border border-[#BA854B]/30 flex flex-col justify-between">
            <div>
              <span className="float-left text-3xl sm:text-4xl text-bordeaux mr-2 font-serif font-bold">
                C
              </span>
              <p>
                oncebida como uma ode aos áureos tempos de Vila Rica, a Hospedaria Ouro Preto materializa a fusão de duas riquezas nacionais: as linhas neoclássicas e barrocas de Minas Gerais, orquestradas com a opulência natural de Bonito. As 23 suítes não se amontoam em blocos frios; ao invés, repousam suavemente entre alamedas floridas de jasmins, buganvílias e árvores nativas preservadas.
              </p>
              <p className="mt-3 sm:mt-4">
                Cada alpendre reserva uma rede de algodão cru, ofertando um espaço de contemplação privativa onde o único ruído a quebrar o silêncio é a cantoria das araras e tucanos ao entardecer.
              </p>
            </div>
            <div className="mt-5 pt-3 bg-[#E5D7BF] p-3 text-center border-t border-[#BA854B]/30">
              <span className="material-symbols-outlined text-imperial-bronze text-2xl">nature_people</span>
              <h4 className="text-xs uppercase text-colonial-blue font-bold mt-1 font-serif">Alamedas Floridas</h4>
              <p className="text-xs text-ebony/90 mt-0.5">23 chalés independentes com varandas e redes coloniais.</p>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="bg-[#F7F2E8] p-5 sm:p-7 shadow-sm border border-[#BA854B]/30 flex flex-col justify-between">
            <div>
              <span className="float-left text-3xl sm:text-4xl text-bordeaux mr-2 font-serif font-bold">
                A
              </span>
              <p>
                o romper da aurora, o Salão Imperial abre suas portas para a mais genuína das experiências: o Café Colonial Mineiro. Pães de queijo quentes assados à perfeição de hora em hora, bolos de milho úmidos, broas de fubá na folha de bananeira, queijo curado da canastra e compotas de doces regionais feitas no tacho de cobre.
              </p>
              <p className="mt-3 sm:mt-4">
                A fartura da mesa prepara o corpo e o espírito para as expedições pelas grutas milenares e pelas flutuações nas nascentes mais cristalinas do planeta Terra.
              </p>
            </div>
            <div className="mt-5 pt-3 bg-[#E5D7BF] p-3 text-center border-t border-[#BA854B]/30">
              <span className="material-symbols-outlined text-imperial-bronze text-2xl">bakery_dining</span>
              <h4 className="text-xs uppercase text-colonial-blue font-bold mt-1 font-serif">Banquete Matinal</h4>
              <p className="text-xs text-ebony/90 mt-0.5">Café mineiro com quitutes artesanais e receitas da vovó.</p>
            </div>
          </div>

          {/* Coluna 3 */}
          <div className="bg-[#F7F2E8] p-5 sm:p-7 shadow-sm border border-[#BA854B]/30 flex flex-col justify-between">
            <div>
              <span className="float-left text-3xl sm:text-4xl text-bordeaux mr-2 font-serif font-bold">
                O
              </span>
              <p>
                pátio interno resguarda nossa convidativa piscina com hidromassagem e quiosque imperial, onde a água mansa reflete o céu azul profundo de Mato Grosso do Sul. Aqui, sob o cuidado zeloso do proprietário Sr. Victor e de uma equipe treinada com fidalguia, o hóspede é recebido como hóspede de honra.
              </p>
              <p className="mt-3 sm:mt-4">
                Situada a apenas 3 minutos do centro histórico e gastronômico da vila de Bonito, mantemos a distância exata para resguardar as noites de sono sereno sob o manto estrelado.
              </p>
            </div>
            <div className="mt-5 pt-3 bg-[#E5D7BF] p-3 text-center border-t border-[#BA854B]/30">
              <span className="material-symbols-outlined text-imperial-bronze text-2xl">pool</span>
              <h4 className="text-xs uppercase text-colonial-blue font-bold mt-1 font-serif">Recanto das Águas</h4>
              <p className="text-xs text-ebony/90 mt-0.5">Piscina de alvenaria com jatos d'água e lounge campestre.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
