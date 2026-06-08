import React from 'react';

export default function Hero() {
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
          <a href="#quienes-somos" className="px-7 py-3.5 bg-gradient-to-b from-[#e6c662] to-[#c19a28] text-emerald-950 font-serif font-bold rounded-xl hover:from-[#f3d97f] hover:to-[#d4af37] transition-all shadow-lg transform hover:-translate-y-1">Conocer Identidad</a>
          <a href="#funciones" className="px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all">Ver Funciones</a>
        </div>
      </div>
    </header>
  );
}