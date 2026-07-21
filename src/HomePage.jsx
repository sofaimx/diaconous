<<<<<<< HEAD
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
      <Identidad navigateToPage={navigateToPage} />
      <Teologia />
      <Funciones />
      <Comparativa />
      <TiposDiaconado />
      <PuntosClave />
    </>
  );
=======
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
      <Identidad navigateToPage={navigateToPage} />
      <Teologia />
      <Funciones />
      <Comparativa />
      <TiposDiaconado />
      <PuntosClave />
    </>
  );
>>>>>>> 33be2396feb2458e87c8cbf2e8d953471e5d9d4a
}