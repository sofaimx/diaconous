import React from 'react';
import { ArrowRight, BookOpen, Shield } from 'lucide-react';

export default function Hero({ navigateToPage }) {
  return (
    <header className="relative bg-emerald-900 text-white overflow-hidden min-h-[580px] flex items-center">
      <div className="absolute inset-0 z-0 bg-emerald-900">
        <img src="/iglesia2.jpg" alt="Altar mayor de Catedral" className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-800/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <span className="bg-white/10 text-[#f3d97f] text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-6 inline-block border border-white/20 backdrop-blur-md shadow-sm">
          Conferencia del Episcopado Mexicano
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight text-white drop-shadow-md">
          Dimensión Nacional del <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#f3d97f] to-[#c19a28]">Diaconado Permanente</span>
        </h1>
        <div className="h-1.5 w-24 bg-[#c19a28] mx-auto rounded-full mb-8 shadow-sm"></div>
        <p className="text-lg sm:text-xl text-emerald-50 max-w-3xl mx-auto font-light leading-relaxed drop-shadow">
          Acompañando, formando y promoviendo la restauración del ministerio diaconal en las comunidades eclesiales de México.
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a 
            onClick={() => navigateToPage('dimension')}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#c19a28] via-[#f3d97f] to-[#c19a28] bg-[length:200%_auto] hover:bg-right text-emerald-950 font-serif font-bold rounded-xl shadow-[0_0_20px_rgba(193,154,40,0.3)] hover:shadow-[0_0_30px_rgba(193,154,40,0.6)] transform hover:-translate-y-1 transition-all duration-500 cursor-pointer flex items-center justify-center w-full sm:w-auto overflow-hidden"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Conocer Identidad
          </a>
          
          <a href="#funciones" className="px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all">Ver Funciones</a>
          
          <a 
            onClick={() => navigateToPage('dimension')}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#c19a28] via-[#f3d97f] to-[#c19a28] bg-[length:200%_auto] hover:bg-right text-emerald-950 font-serif font-bold rounded-xl shadow-[0_0_20px_rgba(193,154,40,0.3)] hover:shadow-[0_0_30px_rgba(193,154,40,0.6)] transform hover:-translate-y-1 transition-all duration-500 cursor-pointer flex items-center justify-center w-full sm:w-auto overflow-hidden"
          >
            <Shield className="w-5 h-5 mr-2 opacity-80" />
            Mensaje del Obispo
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
}