import React from 'react';

export default function Teologia() {
  return (
    <section className="relative bg-emerald-900 text-white py-20 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6 text-[#f3d97f]">¿Qué es un diácono?</h2>
        <p className="text-lg sm:text-xl text-emerald-50 leading-relaxed font-light max-w-3xl mx-auto italic drop-shadow">
          “Un diácono es un ministro ordenado de la Iglesia Católica, cuyo papel principal es servir al pueblo de Dios en tres ámbitos: la liturgia, la palabra y la caridad. Es el primer grado del sacramento del Orden, distinto del presbítero y del obispo, y su misión es ser imagen de Cristo servidor.”
        </p>
        <div className="h-0.5 w-16 bg-[#c19a28] mx-auto mt-8 mb-10"></div>
        <div className="grid md:grid-cols-3 gap-6 text-left pt-6 border-t border-emerald-700/50">
          <div className="bg-emerald-800/50 p-5 rounded-xl border border-emerald-700/30 backdrop-blur-sm">
            <span className="block font-serif font-bold text-[#e6c662] uppercase tracking-wider text-[11px] mb-2">Etimología</span>
            <p className="text-sm text-emerald-50">La palabra proviene del griego <strong>diakonos</strong>, que significa “servidor” o “ministro”.</p>
          </div>
          <div className="bg-emerald-800/50 p-5 rounded-xl border border-emerald-700/30 backdrop-blur-sm">
            <span className="block font-serif font-bold text-[#e6c662] uppercase tracking-wider text-[11px] mb-2">Fundamento bíblico</span>
            <p className="text-sm text-emerald-50">En los Hechos de los Apóstoles (6,1-6) se narra cómo los Apóstoles eligieron a siete hombres para atender a las viudas, entre ellos san Esteban.</p>
          </div>
          <div className="bg-emerald-800/50 p-5 rounded-xl border border-emerald-700/30 backdrop-blur-sm">
            <span className="block font-serif font-bold text-[#e6c662] uppercase tracking-wider text-[11px] mb-2">Institución</span>
            <p className="text-sm text-emerald-50">El Concilio Vaticano II reafirmó que reciben la imposición de manos “no en orden al sacerdocio, sino en orden al ministerio”.</p>
          </div>
        </div>
      </div>
    </section>
  );
}