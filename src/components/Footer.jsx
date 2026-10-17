import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#EFE6D5] border-t-2 border-[#BA854B]/40 mt-auto py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 sm:pb-10 border-b border-[#BA854B]/30">
          {/* Identidade */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl sm:text-2xl text-colonial-blue font-serif font-bold">
              OURO-PRETO
            </h3>
            <p className="text-xs sm:text-sm text-ebony leading-relaxed">
              Pousada &amp; Hospedaria Imperial. Conforto contemporâneo sob a arquitetura e hospitalidade do Brasil Colonial.
            </p>
            <span className="text-[11px] text-imperial-bronze uppercase tracking-widest mt-1 font-bold">
              Bonito, Mato Grosso do Sul — Edição Especial
            </span>
          </div>

          {/* Endereço & Contatos */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs sm:text-sm text-colonial-blue uppercase tracking-wider font-bold font-serif">
              Endereço &amp; Telégrafo
            </h4>
            <p className="text-xs sm:text-sm text-ebony leading-relaxed">
              Rua Monteiro, 777, Vila Donária<br />
              Bonito – MS, CEP 79290-000<br />
              Reservas:{' '}
              <a href="mailto:reservas@pousadaouropretoms.com.br" className="hover:text-bordeaux font-medium underline decoration-[#BA854B]/40">
                reservas@pousadaouropretoms.com.br
              </a>
              <br />
              Telefones / WhatsApp:{' '}
              <a href="tel:+556732554104" className="hover:text-bordeaux underline decoration-[#BA854B]/40">
                +55 (67) 3255-4104
              </a>{' '}
              ou{' '}
              <a href="https://api.whatsapp.com/send?phone=5567998849261" target="_blank" rel="noopener noreferrer" className="hover:text-bordeaux underline decoration-[#BA854B]/40">
                +55 (67) 99884-9261
              </a>
            </p>
          </div>

          {/* Folhetins & Notas */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs sm:text-sm text-colonial-blue uppercase tracking-wider font-bold font-serif">
              Folhetins &amp; Estadas
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-ebony">
              <li className="flex items-center gap-1.5">
                <span className="text-imperial-bronze">✦</span> Preço Canônico: 500 Réis ao Dia
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-imperial-bronze">✦</span> Serviço de Carruagens &amp; Guias Ecológicos
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-imperial-bronze">✦</span> Café Colonial Imperial Servido no Salão Dourado
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior com Direitos */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-ebony font-medium">
          <p>
            © MDCCCXXIV - MMXXIV Pousada &amp; Hospedaria Ouro-Preto. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 uppercase tracking-wider text-[11px] font-semibold">
            <a href="#" className="hover:text-bordeaux">Gazeta Imperial</a>
            <a href="#" className="hover:text-bordeaux">Políticas de Estadia</a>
            <a href="#" className="hover:text-bordeaux">Arquivo Histórico</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
