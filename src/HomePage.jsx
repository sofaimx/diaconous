import React from 'react';
import Hero from './components/hero';
import Features from './components/Features';
import Identidad from './components/Identity';
import Teologia from './components/Teologia';
import Funciones from './components/Funciones';
import Comparativa from './components/Comparativa';
import TiposDiaconado from './components/TiposDiaconado';
import PuntosClave from './components/PuntosClave';

export default function HomePage({ navigateToPage }) {
  return (
    <>
      <Hero navigateToPage={navigateToPage} />
      <Features />
      <Identidad />
      <Teologia />
      <Funciones />
      <Comparativa />
      <TiposDiaconado />
      <PuntosClave />
    </>
  );
}