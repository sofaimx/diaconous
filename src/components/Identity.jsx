import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Identidad() {
  return (
    <section id="quienes-somos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative transform hover:scale-[1.01] transition-transform duration-500">
          <div className="absolute -inset-4 bg-emerald-600/10 rounded-3xl blur-xl -z-10"></div>
          <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-200">
            <img src="/iglesia.jpg" alt="Identidad y comunidad eclesial" className="rounded-xl w-full h-[400px] object-cover filter brightness-95" />
            <div className="p-4 bg-emerald-900 mt-3 rounded-xl flex justify-between items-center text-white border border-emerald-800">
              <span className="font-serif font-bold text-[#e6c662] text-xl">DEDIP</span>
              <span className="text-xs uppercase tracking-widest text-emerald-200 font-semibold">Episcopado Mexicano</span>
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