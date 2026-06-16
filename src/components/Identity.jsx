import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Identidad({ navigateToPage }) {
  return (
    <section id="quienes-somos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
        <div 
          onClick={() => navigateToPage('dimension')}
          className="relative transform hover:scale-[1.01] transition-transform duration-500">
          <div className="absolute -inset-4 bg-emerald-600/10 rounded-3xl blur-xl -z-10"></div>
          
          <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-200">
            <div className="relative h-[700px] w-full overflow-hidden rounded-xl bg-slate-100 hover:cursor-pointer">
              <img 
                src="/obispo.png" 
                alt="S.E. Mons. Guerrero Corona Jonás" 
                className="w-full h-full object-cover object-top filter brightness-95" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent flex flex-col justify-end p-6 text-left">
                <span className="bg-amber-50 text-[#c19a28] text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-3 inline-block shadow-sm w-fit">
                  Emérito
                </span>
                <h3 className="text-white font-serif font-bold text-lg drop-shadow-md">
                  S.E. Mons. Guerrero Corona Jonás
                </h3>
                <div className="h-0.5 w-10 bg-[#c19a28] my-2"></div>
                <p className="text-emerald-50 text-xs font-light leading-relaxed">
                  Responsable de la Dimensión Episcopal <br /> de Diaconado Permanente.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-emerald-700 font-bold tracking-widest text-xs uppercase">
            <span className="w-6 h-0.5 bg-[#c19a28] inline-block"></span>
            <span>Dimensión Nacional del Diaconado Permanente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">Identidad de nuestra pastoral nacional</h2>
          <p className="text-slate-600 text-base leading-relaxed text-justify">
            La Dimensión Episcopal para el Diaconado Permanente (DEDIP), busca que se conozca y se valore el ministerio del Diaconado Permanente en la comunidad eclesial, tanto en los obispos, como en el presbiterio y los laicos, para promover la restauración de este ministerio en las diócesis de México.
          </p>
          <div className="p-5 bg-emerald-50 border-l-4 border-[#c19a28] rounded-r-xl text-sm text-emerald-900 font-medium shadow-sm">
            Cuenta con una directiva nacional (conformada por una laica, diáconos permanentes y presbíteros de diferentes diócesis del país), que apoya en la organización de los diversos eventos que se realizan.
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}