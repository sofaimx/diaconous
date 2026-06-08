import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Comparativa() {
  return (
    <section id="comparativa" className="py-20 bg-[#eef2ef] border-y border-emerald-100">
      <ScrollReveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-emerald-950">Diferencias ministeriales con el presbítero</h2>
          <p className="text-slate-500 text-sm mt-1">Identidad de cada grado del Sacramento del Orden</p>
          <div className="h-1 w-12 bg-[#c19a28] mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-emerald-100 transform hover:scale-[1.005] transition-all duration-300">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-emerald-800 text-white text-sm">
                  <th className="p-5 font-bold uppercase tracking-wider text-xs">Aspecto</th>
                  <th className="p-5 font-serif font-bold uppercase tracking-wider text-sm text-[#e6c662]">Diácono</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-xs">Presbítero</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50 text-sm text-slate-700">
                {[
                  ['Grado del Orden', 'Primer grado', 'Segundo grado'],
                  ['Eucaristía', 'No puede consagrar', 'Sí puede consagrar'],
                  ['Matrimonio', 'Puede presidir y bendecir', 'Celebra con Misa'],
                  ['Predicación', 'Puede proclamar y predicar', 'Predica y consagra'],
                  ['Caridad', 'Enfocado en servicio social', 'Enfocado en sacramentos y pastoral']
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-emerald-50/50 transition-colors">
                    <td className="p-5 font-semibold text-emerald-900 bg-slate-50/50">{row[0]}</td>
                    <td className="p-5 font-medium">{row[1]}</td>
                    <td className="p-5">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}