import React, { useState } from 'react';
import Ornament from './Ornament.jsx';

const GALLERY_ITEMS = [
  {
    title: "Coreto Oitocentista",
    subtitle: "Coreto de madeira entalhada e azulejos portugueses na praça dos arcos.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRv6wmk9nOpVNGb1ff9VWqXr0u5wxgewwNGo4j8GiDrzN_LMJavdwG6UH8negHvjS90thwfR_QvIhMZLDkbM-uMAIwJDDbLANGyiR8Y0NY989MqoRvE_vE0ezv_E0KByY9JWCxSDD3aHBbREMV_IvHP1848dX2IIHG-NSrsjjXkIGa9iVRNQIjLLZMmBN-ol28jZBghaiKTgiuPik0MWGpSR_88zFdTyCjHWNpnofSHsKvjzM_92c0PNK7QSWZKEeaVNE"
  },
  {
    title: "As Alamedas Floridas",
    subtitle: "Alamedas floridas e chalés coloniais iluminados por arandelas ao entardecer.",
    src: "./public/images/alamedas_floridas.jpg"
  },
  {
    title: "Pátio Colonial & Jardins",
    subtitle: "Pátio de pedras rústicas, vegetação preservada e tranquilidade campestre.",
    src: "./public/images/patio_colonial_jardins.jpg"
  },
  {
    title: "A Piscina Colonial",
    subtitle: "Águas límpidas, hidromassagem e recanto nobre de descanso dos viajantes.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd6efEscygkD4fwWeiFYHWu_BX8AMbKt2-A6QwA0qxwuHkkhBHtljhiQI9IflC0IyPsKnJaFGIXmaMUZr72e8Q3gjlbsU4VAUXDA9PG2YtZ-vWp5BKZ2-4ueVEB13x9pRZ8QL5Kj9gh1FSY5e8OKdsp1fNeLV6NwXQtLa5U3d_xAz1IfVUt2Ppoj0GgVpVC-iYCjsTNVM3xP99K1KNH-fW2kRcf6WVYtRc0BpcBSaxil8ADXdLvVgC5sCpK6eRkVsER1A"
  }
];

export default function Gallery() {
  const [toggleState, setToggleState] = useState([false, false, false, false]);

  const toggle = (idx) => {
    setToggleState((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-16 bg-background" id="fototeca">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Fototeca */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-imperial-bronze font-bold">
            Fototeca Histórica
          </span>
          <h2 className="text-2xl sm:text-4xl text-colonial-blue uppercase mt-1 font-serif font-bold">
            Álbum da Pousada
          </h2>
          <Ornament className="my-2" />
          <p className="text-xs sm:text-base italic text-ebony max-w-xl">
            Fragmentos visuais da nossa arquitetura colonial, jardins floridos e espaços de puro ócio em grandes pranchas fotográficas.
          </p>
        </div>

        {/* Grid 2x2 de Grandes Pranchas Fotográficas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-3.5 sm:p-5 shadow-xl border-2 border-[#BA854B]/40 flex flex-col justify-between"
            >
              <div className="border border-[#BA854B]/30 p-2 bg-[#EFE6D5]/50">
                <div
                  onClick={() => toggle(idx)}
                  className="group relative overflow-hidden bg-[#E5D7BF] cursor-pointer aspect-[16/11] w-full shadow-inner"
                >
                  {/* Foto Colorida (fundo) */}
                  <img
                    alt={`${item.title} - Em Cores`}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={item.src}
                  />

                  {/* Foto Sépia (topo com filtro oitocentista) */}
                  <img
                    alt={`${item.title} - Registro Histórico`}
                    className={`vintage-sepia absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 ease-in-out ${
                      toggleState[idx] ? 'opacity-0 pointer-events-none' : 'group-hover:opacity-0'
                    }`}
                    src={item.src}
                  />

                  {/* Badge de Toque */}
                  <div className="absolute bottom-2 right-2 z-20 px-2 py-1 bg-[#182B5C]/85 text-[#FFDEA6] border border-[#B8860B] text-[10px] font-serif uppercase tracking-wider flex items-center gap-1 shadow-sm pointer-events-none">
                    <span className="material-symbols-outlined text-xs">palette</span>
                    <span>{toggleState[idx] ? 'Cores • Toque p/ Sépia' : 'Passe o cursor ou toque'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 text-center">
                <span className="text-base sm:text-lg text-colonial-blue font-serif font-bold block">
                  {item.title}
                </span>
                <div className="w-16 h-px bg-imperial-gold/60 mx-auto my-1.5"></div>
                <p className="text-xs text-ebony/85 italic">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
