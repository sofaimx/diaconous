import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Features from './components/Features';
import Identidad from './components/Identity';
import Teologia from './components/Teologia';
import Funciones from './components/Funciones';
import Comparativa from './components/Comparativa';
import TiposDiaconado from './components/TiposDiaconado';
import PuntosClave from './components/PuntosClave';
import Footer from './components/Footer';
import HorizonteInstitucional from './components/HorizonteInstitucional';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f9f7] text-slate-800 font-sans antialiased selection:bg-[#d4af37] selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Identidad />
      <HorizonteInstitucional />
      <Teologia />
      <Funciones />
      <Comparativa />
      <TiposDiaconado />
      <PuntosClave />
      <Footer />
    </div>
  );
}