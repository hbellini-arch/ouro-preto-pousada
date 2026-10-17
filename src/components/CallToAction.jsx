import React from 'react';

export default function CallToAction() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-16 bg-background" id="encerramento">
      <div className="max-w-5xl mx-auto bg-[#EFE6D5] p-6 sm:p-10 lg:p-12 shadow-2xl relative border-2 border-[#BA854B]/50 text-center">
        <div className="flex flex-col items-center">
          {/* Brasão Imperial */}
          <img
            alt="Brasão Pousada Ouro Preto"
            className="w-14 h-18 sm:w-16 sm:h-20 object-contain mb-3 sm:mb-4 drop-shadow-md"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdphAqNWuv_n87Hdfd2IJvmU462c2aMEWGw65SinU7aVIANudx8BiC6HDPlI7o1y69tJL3W_Dsp0XDjLdaSEuWaWIeSKYVFukTVp9PVyR7oKozlBye6y99DzgEkfJ91uLAx05f29Kx8NC1YEqQC0h_oD4cnpOViSlHGnzrSbkPR7fcM-u3Bqjjyx1Fov__kEXW3gLwS2IxHFgvjwyziI5GNaJdXbIr7jL34tVJxhV7eGqRIg4e_phhPwaZKYyeRqvc6GfeKYPO3FifsjI"
          />

          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-imperial-bronze font-bold font-serif">
            ✦ Ordem de Despacho e Encerramento da Gazeta ✦
          </span>

          <h2 className="text-xl sm:text-3xl lg:text-4xl text-colonial-blue mt-2 mb-3 sm:mb-4 uppercase max-w-3xl font-serif font-bold leading-tight">
            Reserve sua estadia e viva Bonito com o charme de outra época
          </h2>

          <p className="text-xs sm:text-base text-ebony max-w-2xl leading-relaxed mb-6 sm:mb-8 font-medium">
            Nossa equipe aguarda sua correspondência para organizar sua hospedagem com requinte colonial, café da manhã farto e total comodidade para os passeios de Bonito-MS.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
            <a
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-imperial-bronze text-white hover:bg-[#7D5325] text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 border border-imperial-gold/40 font-bold"
              href="https://api.whatsapp.com/send?phone=5567998849261&text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+reservas+na+Pousada+Ouro+Preto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Falar pelo WhatsApp (+55 67 99884-9261)
            </a>

            <a
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-bordeaux text-white hover:bg-bordeaux-dark text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 border border-imperial-gold/50 font-bold"
              href="https://book.omnibees.com/chain/5993/hotel/10222"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-lg">hotel</span>
              Reservar no Motor Oficial
            </a>

            <a
              className="w-full sm:w-auto px-5 py-3.5 bg-[#E5D7BF] text-colonial-blue hover:bg-[#D8C7AE] text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 border border-[#BA854B]/40 font-bold"
              href="https://www.instagram.com/pousadaouropretobonito/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-base">photo_camera</span>
              Instagram
            </a>

            <a
              className="w-full sm:w-auto px-5 py-3.5 bg-[#E5D7BF] text-colonial-blue hover:bg-[#D8C7AE] text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 border border-[#BA854B]/40 font-bold"
              href="https://www.facebook.com/pousadaouropretoms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
