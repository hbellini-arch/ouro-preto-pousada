import React, { useState } from 'react';
import Ornament from './Ornament.jsx';

const ROOMS_DATA = [
  {
    id: "suite-duplo",
    badge: "AVISO DE ACOMODAÇÃO Nº 01",
    subtitleBadge: "Aposento Senhorial de Primeira Classe",
    capacity: "Até 2 Hóspedes Distintos",
    title: "Suíte Luxo Duplo",
    headline: "Suíte ampla e arejada, trazendo o melhor em conforto para até 2 hóspedes.",
    dropCap: "C",
    desc1: "onstruído sob a inspiração do requinte imperial, o aposento Suíte Luxo Duplo une o repouso sereno da arquitetura luso-mineira à conveniência moderna contemporânea. Equipado com climatização silenciosa e generoso leito de casal com molas ensacadas, o quarto foi delineado para que cada despertar se harmonize com o sussurro do vento e o canto dos pássaros nativos.",
    desc2: "A varanda privativa, munida de mesinha clássica e cadeiras rústicas de madeira nobre, convida o hóspede ao desfrute dos fins de tarde orvalhados de Bonito, servindo de camarote exclusivo para as alamedas verdejantes e buganvílias da estalagem.",
    quote: "Acomodação idealizada para casais e viajantes que prezam pelo silêncio reconfortante, café matinal da roça e o calor da hospitalidade senhorial.",
    images: [
      {
        title: "Prancha I: Leito Casal & Interior Confortável",
        desc: "Monocromia oitocentista ao repouso; passe o cursor ou toque para contemplar as cores vivas.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKWHUUzY0dKlnCRbCe2Q--2ghC1qOQViaR_7KeMYXdTZCaGVi1Tu7o8YETYer8VUEQMyHQoWtxeD2qB7a4GDJqnCrThf7vrupSTgdKrB6ZjlIFVp3XcpGUvWG0PzRj-TN2tMbLKd0UtS5cE5_Yow-p_iwLWdgizNKfu0yQSiB8EEGjJot_yautc57nO_TJ0MX7AUNZMeBJTToXMIO9JE4oI6Ir07sSPPd5HKvtJVupal3fSOlz9bSzX2axM9FvTOxfqEM"
      },
      {
        title: "Prancha II: Alpendre Privativo com Mesinha voltado aos Jardins",
        desc: "Perspectiva campestre do terraço colonial privativo com vista para o bosque interno.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYJU1_b7GScRjP7hW775509LMrT1m2yoT2JxKs_PywWi1Yq6LAnywL2pS_v27h2hivDbK3dd0fzyTu-fckzEBYxPZgavpHAXd5GQWh3zBuGfD0ZC_kihDKbXeT4jPq0j_gk2vga27F4iebMPIXX9RCGGP3qvCe77MbUrhcberXNDA0muYiAdy0d93u0Cj_PUGOj4psE9CBwu-Dtjq5yDegMNzH2sWMmnEiTk-QCeCviL99M7KJ8PIZB-MbJW-fRIY6HtY"
      }
    ],
    amenities: [
      { text: "Cama Box Casal Queen", highlight: true },
      { text: "TV 42″ com canais locais" },
      { text: "Ar Condicionado Split Quente/Frio" },
      { text: "Frigobar abastecido" },
      { text: "Telefone para Ramais Internos" },
      { text: "Escrivaninha para Home Office" },
      { text: "Suporte para Malas" },
      { text: "Espelho de Corpo Inteiro" },
      { text: "Guarda Roupas com Cabides" },
      { text: "Secador de Cabelo" },
      { text: "Toalhas de Banho de Fio Nobre" },
      { text: "Amenities Artesanais" },
      { text: "Ducha Elétrica Pressurizada" },
      { text: "Mini Varal Retrátil" },
      { text: "Varanda com Mesinha e Cadeiras voltada ao Bosque", highlight: true, fullWidth: true }
    ]
  },
  {
    id: "suite-triplo",
    badge: "AVISO DE ACOMODAÇÃO Nº 02",
    subtitleBadge: "Aposento Familiar de Primeira Classe",
    capacity: "Até 4 Hóspedes / Famílias",
    title: "Suíte Triplo & Quádruplo",
    headline: "Ampla suíte arejada trazendo o melhor em conforto para até 4 hóspedes.",
    dropCap: "E",
    desc1: "dificada sob a égide do acolhimento das tradicionais famílias do Brasil Imperial, a Suíte Triplo & Quádruplo proporciona generosa metragem e distribuição arejada para o pleno descanso de grupos e pais com seus filhos. Equipada com cama de casal Queen e leitos de solteiro de refinado suporte com molas ensacadas, o aposento garante privacidade e noites de calmaria absoluta.",
    desc2: "As portas balcão abrem-se diretamente para um alpendre exclusivo, com piso de lajotas cerâmicas, mesinha rústica e cadeiras de madeira nobre voltadas ao bosque florido, convidando a um momento de partilha familiar à sombra das árvores nativas.",
    quote: "Acomodação idealizada para famílias e pequenos grupos que prezam pelo silêncio reconfortante, café matinal farto e o esplendor natural de Bonito.",
    images: [
      {
        title: "Prancha I: O Leito de Casal e Camas de Solteiro",
        desc: "Acomodação versátil para famílias em amplas instalações coloniais; passe o cursor ou toque para contemplar as cores vivas.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPupX1JeqkH6zLdG73loBbBOcxpCyqL6v7dg-aArth7Jv-aLvmkhyPmtNRf1vKENDlPM8ZiGmYtYO30L4wAwpCXrOEUiiujaVoL8xKJWmUaj6GTLol4eJrAYq0c46OmjOHPJxO4BMvoo4LU8_xyxRTilLW0ofoL_k0cusvbwQEu084-7fRqg1sfYSr3Ez_21zaYlBBay2yo_eOYjYdn-1NqPqMI6yMm9g0mgKbXtNWd293LcWFmQuaFVMhIcyY4d-NHdY"
      },
      {
        title: "Prancha II: A Varanda Privativa com Vista ao Pátio Florido",
        desc: "Mobília de madeira rústica e refúgio sob o arvoredo de Bonito.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzh9ngfqk75cWoJHYZjotC5gvp7e3vJ7C3O6D3p1K4Bp-fhIOZ28QOGU-89tpfN4kGMb1p7Q_vaqnjZrFwvTbHXpXzjWA5eJs7KW3_vuQiqByLvVm2jUQLYRvTJR-BYhKxGSJXZ3bzhthJoG9JTG0K-nCB5TKCJjX4wMM1ksYomm7rjVeilSV5aIJ1rIpwU9Ec6Wh8CBsSaXdAoMbtLEniBmtGSU6mgnt23y9RvG5k_fYurfF37E9P3sXhl5kM8kkuOhA"
      }
    ],
    amenities: [
      { text: "Cama Box Casal Queen + Leitos Solteiro", highlight: true },
      { text: "TV 42″ com canais locais" },
      { text: "Ar Condicionado Split Quente/Frio" },
      { text: "Frigobar" },
      { text: "Telefone para Ramais Internos" },
      { text: "Escrivaninha para Home Office" },
      { text: "Suporte para Malas" },
      { text: "Espelho" },
      { text: "Guarda Roupas com Cabides" },
      { text: "Secador de Cabelo" },
      { text: "Toalhas de Banho de Fio Nobre" },
      { text: "Amenities Artesanais" },
      { text: "Ducha Elétrica Pressurizada" },
      { text: "Mini Varal Retrátil" },
      { text: "Alpendre Familiar com Vista aos Jardins", highlight: true, fullWidth: true }
    ]
  },
  {
    id: "suite-master",
    badge: "AVISO DE ACOMODAÇÃO Nº 03",
    subtitleBadge: "Aposento Imperial de Máxima Distinção",
    capacity: "Até 2 Hóspedes / Casal Nobre",
    title: "Suíte Master Dom Pedro I",
    headline: "Apartamento suntuoso e exclusivo com sala de estar independente, trazendo a máxima opulência e conforto oitocentista.",
    dropCap: "A",
    desc1: "partamento luxuoso e único concebido para acolher até 2 hóspedes no mais elevado padrão de hospitalidade. Dispõe de suíte privativa, ampla sala de estar primorosamente decorada com espelho barroco dourado e peças de inspiração imperial, e banheiro social independente.",
    desc2: "Uma experiência de estada incomparável onde o requinte da corte se harmoniza com a natureza pacífica de Bonito.",
    quote: "Acomodação suntuosa e reservada, agraciada pelo Selo Imperial de Distinção para viajantes que exigem privacidade soberana e memorialismo histórico.",
    images: [
      {
        title: "Prancha V: Sala de Estar Imperial & Mobiliário Nobre",
        desc: "Ampla sala com espelho barroco entalhado em ouro, tapeçaria e sofás de época.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu8TU5FP_RMhXxeEK5PvbxLo0UtnBxFrVb_FEHe33BEmQe2p4tjvCyvHtOeBX2xRlT5Ey7hoIEopgpJNM9Dvki-dOsZHsYJ4Lqmx-icXku6SvY95A0BMK080kzUCR4f2fY9YsL6B5WOJfBxfInwkjCevRGGxmtcNT_sIKwkbkQjKUhg6IuhO7Ty3uIyBOIt7xrCtK9UW2wYyXoqsO5s5FgGXL-ZOcvcjxmGBvfl8Qr6PNtZ8XgMcTyYDZ4f4ghGbC6Z88"
      },
      {
        title: "Prancha VI: Vista Externa do Chalé & Jardins",
        desc: "Fachada colonial acolhedora com alpendre e terraço, jardins verdes e alamedas floridas.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC-K0miKwMTCEZzH9BCdk8I3Sg3wnXsfO1PQ8IACm_A8Dpk19m0r-UFj07et__SR0PTcyj7oNFugM1efQgoB-8d3iKqrvUz5g-4MPDmOQvpjA4Y_F9HjgFKAe0p6Ax9IhNbEQMuaxV19_vil1eRfaNB90YPD2tps-lvuBcPfv4GasGoLKlBduMG8lMcIjQAbEUup1vdIvox3fetoDSL8EjjaYzayTUgDzrsFyWVZSvYqmQ7SOaqZJS5-t4ZlxCTgd9Ce0"
      }
    ],
    amenities: [
      { text: "Cama Queen Size de Casal", highlight: true },
      { text: "TV LED 40″" },
      { text: "Ar Condicionado Split" },
      { text: "Frigobar Abastecido" },
      { text: "Telefone para Ramais Internos" },
      { text: "Wi-Fi Cortesia de Alta Velocidade" },
      { text: "Secador de Cabelo" },
      { text: "Amenities Nobres de Banho" },
      { text: "Ampla Sala de Estar Decorada", highlight: true, fullWidth: true },
      { text: "Banheiro Social Independente", highlight: true, fullWidth: true }
    ]
  }
];

function RoomCard({ room }) {
  const [activeImageState, setActiveImageState] = useState([false, false]);

  const toggleImage = (index) => {
    setActiveImageState((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <div className="bg-white p-5 sm:p-8 lg:p-10 shadow-2xl border-2 border-[#BA854B]/50 mb-8 sm:mb-12">
      {/* Barra de Aviso Superior */}
      <div className="flex flex-col md:flex-row items-center justify-between pb-3 mb-6 bg-[#EFE6D5] px-4 sm:px-5 py-2.5 border border-[#BA854B]/30 gap-2">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-center md:justify-start">
          <span className="px-2.5 sm:px-3 py-1 bg-bordeaux text-white text-[11px] font-bold uppercase tracking-widest shadow-sm border border-imperial-gold/40">
            {room.badge}
          </span>
          <span className="text-xs sm:text-sm uppercase tracking-wider text-colonial-blue font-bold font-serif">
            {room.subtitleBadge}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-ebony text-xs italic">
          <span className="material-symbols-outlined text-imperial-bronze text-base">group</span>
          <span>Capacidade: {room.capacity}</span>
        </div>
      </div>

      {/* Título & Subtítulo */}
      <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-4xl text-bordeaux uppercase tracking-tight font-serif font-bold">
          {room.title}
        </h3>
        <p className="text-xs sm:text-base italic text-imperial-bronze mt-1 sm:mt-2 font-medium">
          {room.headline}
        </p>
        <Ornament className="my-2" />
      </div>

      {/* Grid de 2 Imagens Históricas Interativas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 mb-6 sm:mb-8">
        {room.images.map((img, idx) => (
          <div key={idx} className="bg-[#F7F2E8] p-2.5 sm:p-4 border-2 border-[#BA854B]/30 shadow-md flex flex-col justify-between">
            <div className="border border-[#BA854B]/30 p-1.5 bg-white shadow-inner">
              <div
                onClick={() => toggleImage(idx)}
                className="group relative overflow-hidden bg-[#E5D7BF] cursor-pointer aspect-[4/3] w-full shadow-inner"
              >
                {/* Imagem Colorida (Fundo) */}
                <img
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={img.src}
                />
                {/* Imagem Sépia (Topo com filtro oitocentista autêntico) */}
                <img
                  alt={`${img.title} - Registro Histórico`}
                  className={`vintage-sepia absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 ease-in-out ${
                    activeImageState[idx] ? 'opacity-0 pointer-events-none' : 'group-hover:opacity-0'
                  }`}
                  src={img.src}
                />
                {/* Indicador de toque */}
                <div className="absolute bottom-2 right-2 z-20 px-2 py-1 bg-[#182B5C]/85 text-[#FFDEA6] border border-[#B8860B] text-[10px] font-serif uppercase tracking-wider flex items-center gap-1 shadow-sm backdrop-blur-sm pointer-events-none">
                  <span className="material-symbols-outlined text-xs text-[#FFDEA6]">palette</span>
                  <span>{activeImageState[idx] ? 'Cores • Toque p/ Sépia' : 'Passe o cursor ou toque'}</span>
                </div>
              </div>
            </div>
            <div className="pt-2.5 text-center border-t border-[#BA854B]/20 mt-2.5">
              <span className="text-xs sm:text-sm text-colonial-blue uppercase font-bold tracking-wider font-serif block">
                {img.title}
              </span>
              <p className="text-[11px] sm:text-xs text-ebony/80 italic mt-0.5">
                {img.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Crônica Descritiva & Regalias / Comodidades */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start bg-[#EFE6D5] p-4 sm:p-7 border border-[#BA854B]/40 shadow-inner mb-6 sm:mb-8">
        <div className="lg:col-span-5 text-justify text-xs sm:text-sm text-ebony leading-relaxed flex flex-col justify-between h-full">
          <div>
            <p>
              <span className="float-left text-3xl sm:text-4xl leading-none text-bordeaux mr-2 mt-1 font-serif font-bold">
                {room.dropCap}
              </span>
              {room.desc1}
            </p>
            <p className="mt-3 sm:mt-4">{room.desc2}</p>
          </div>
          <div className="mt-4 p-3 bg-[#E5D7BF] border-l-4 border-bordeaux text-ebony italic text-xs">
            “{room.quote}”
          </div>
        </div>

        {/* Tabela de Comodidades */}
        <div className="lg:col-span-7 bg-white p-4 sm:p-5 border border-[#BA854B]/30 shadow-md">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#BA854B]/20 mb-3">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-colonial-blue font-bold flex items-center gap-1.5 font-serif">
              <span className="text-imperial-gold">✤</span> Regalias &amp; Comodidades Inclusas no Aposento
            </span>
            <span className="text-xs text-imperial-bronze italic font-bold">
              {room.amenities.length} Itens Oficiais
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-ebony">
            {room.amenities.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 py-1 border-b border-[#BA854B]/15 ${
                  item.fullWidth ? 'sm:col-span-2 bg-[#F7F2E8] px-2 font-bold text-bordeaux' : ''
                }`}
              >
                <span className={item.highlight ? 'text-bordeaux' : 'text-imperial-gold'}>✦</span>
                <span className={item.highlight ? 'font-bold text-colonial-blue' : ''}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rodapé do Card com Ações */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 sm:pt-5 border-t-2 border-[#BA854B]/30 bg-[#EFE6D5] p-3 sm:p-4">
        <div className="flex flex-col text-center sm:text-left">
          <span className="text-xs sm:text-sm uppercase tracking-wider text-colonial-blue font-bold font-serif">
            Tarifa Canônica com Banquete Matinal Mineiro Incluso
          </span>
          <span className="text-xs text-ebony/80 italic">
            Confirmação de reserva imediata pelo sistema oficial da hospedaria.
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
          <a
            className="w-full sm:w-auto px-5 py-2.5 bg-[#E5D7BF] text-colonial-blue text-xs uppercase tracking-wider text-center hover:bg-[#D8C7AE] transition-all shadow-sm border border-[#BA854B]/40 font-bold"
            href="https://book.omnibees.com/chain/5993/hotel/10222"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar Disponibilidade
          </a>
          <a
            className="w-full sm:w-auto px-6 py-2.5 bg-bordeaux text-white text-xs uppercase tracking-wider text-center hover:bg-bordeaux-dark transition-all shadow-md flex items-center justify-center gap-2 border border-imperial-gold/50 font-bold"
            href="https://book.omnibees.com/chain/5993/hotel/10222"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-sm">hotel</span>
            Reservar Esta Suíte
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Rooms() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-16 bg-background" id="quartos">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho Seção de Quartos */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="px-4 sm:px-6 py-1 bg-[#EFE6D5] uppercase text-xs tracking-widest text-imperial-bronze font-bold border border-[#BA854B]/40 shadow-sm">
            Folhetim Classificado • Seção de Acomodações
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-colonial-blue uppercase mt-2.5 font-serif font-bold">
            Anúncios da Hospedaria
          </h2>
          <Ornament className="my-2" />
          <p className="text-xs sm:text-base italic text-ebony max-w-2xl">
            Aposentos senhoriais concebidos para o descanso de casais distintos, famílias nobres e viajantes de fino trato.
          </p>
        </div>

        {/* Lista de Acomodações */}
        <div className="flex flex-col">
          {ROOMS_DATA.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
