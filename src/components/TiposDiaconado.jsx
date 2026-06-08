import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function TiposDiaconado() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-serif font-bold text-center text-emerald-950 mb-4">Tipos de diaconado</h2>
      <p className="text-center text-slate-500 text-sm max-w-xl mx-auto mb-12">La Iglesia contempla dos formas de vivir este santo ministerio.</p>
      <ScrollReveal className="grid sm:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-md transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Configuración</span>
          <h3 className="font-serif font-bold text-emerald-950 text-xl mb-3">Transitorios</h3>
          <p className="text-slate-600 text-sm leading-relaxed text-justify">Seminaristas que reciben el diaconado por un tiempo determinado como paso previo e indispensable antes de recibir la ordenación sacerdotal.</p>
        </div>
        <div className="bg-white p-8 rounded-xl border border-[#e6c662] shadow-md bg-gradient-to-br from-white to-amber-50/20 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
          <span className="text-xs font-bold text-[#c19a28] bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Vocación Estable</span>
          <h3 className="font-serif font-bold text-emerald-950 text-xl mb-3">Permanentes</h3>
          <p className="text-slate-600 text-sm leading-relaxed text-justify">Hombres (tanto casados como célibes) que reciben el diaconado como un estado de vida vocacional estable, sirviendo de manera definitiva sin aspirar al presbiterado.</p>
        </div>
      </ScrollReveal>
    </section>
  );
}