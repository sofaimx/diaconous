import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function DimensionPage({ navigateToPage }) {
  return (
    <div className="min-h-screen bg-[#f7f9f7] text-slate-800 font-sans antialiased">
      <Navbar navigateToPage={navigateToPage} isHomePage={false} />

      <main className="py-15 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col items-center">

          <div className="text-center max-w-5xl mx-auto mb-12">
            <span className="text-[#c19a28] font-bold text-xs uppercase tracking-widest block mb-4">Mensaje del Obispo</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-950 leading-tight">
              Dimensión Episcopal para el Diaconado Permanente
            </h1>
            <div className="h-1.5 w-24 bg-[#c19a28] mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="w-full max-w-6xl"> 
            
            <div className="bg-white p-3 sm:p-5 rounded-3xl shadow-2xl border border-slate-100 transform hover:-translate-y-1 transition-transform duration-500">
              <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://drive.google.com/file/d/1tCpHqpmeHB0553NZURE9r6ADvhawktIE/preview" 
                  title="Video Institucional DEDIP"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-5 text-center px-2">
              <p className="font-serif font-bold text-xl text-emerald-950">Mensaje Mons. Jonas Guerrero Corona <br/> <span className="font-serif font-semibold text-lg text-emerald-950">Obispo Emérito de Culiacan</span></p>
              <p className="text-slate-500 text-base mt-1.5 font-light">Responsable de la Dimensión Nacional del Diaconado Permanente</p>
            </div>

          </div>

        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}