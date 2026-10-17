import React from 'react';
import Header from './components/Header.jsx';
import Masthead from './components/Masthead.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Rooms from './components/Rooms.jsx';
import Experiences from './components/Experiences.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface antialiased selection:bg-bordeaux selection:text-white">
      {/* Barra de Navegação Fixa */}
      <Header />

      {/* Conteúdo Principal do Periódico */}
      <main className="w-full pt-16 sm:pt-20 bg-background flex-1 flex flex-col">
        {/* Cabeçalho do Periódico / Masthead */}
        <Masthead />

        {/* Hero com Gravura Histórica Interativa & Telégrafo */}
        <Hero />

        {/* Crônica Histórica / Sobre a Pousada */}
        <About />

        {/* Anúncios dos Quartos e Suítes */}
        <Rooms />

        {/* Maravilhas de Bonito / Expedições */}
        <Experiences />

        {/* Fototeca / Álbum da Pousada */}
        <Gallery />

        {/* Cartas dos Nossos Hóspedes */}
        <Testimonials />

        {/* Despacho Final & Reservas */}
        <CallToAction />
      </main>

      {/* Rodapé da Gazeta */}
      <Footer />
    </div>
  );
}
