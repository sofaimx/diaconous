import React from 'react';

export default function Features() {
  return (
    <section className="relative z-20 max-w-6xl mx-auto px-4 -mt-10">
      <div className="grid md:grid-cols-3 gap-6">
        {['La Palabra', 'La Liturgia', 'La Caridad'].map((title, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-4 border-l-4 border-[#c19a28] transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="p-3 bg-emerald-50 text-emerald-800 rounded-lg font-serif font-bold text-xl shadow-inner">
              {i === 0 ? 'I' : i === 1 ? 'II' : 'III'}
            </div>
            <div>
              <h4 className="font-serif font-bold text-emerald-900 text-sm uppercase tracking-wider">{title}</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {i === 0 ? 'Proclaman y enseñan el Santo Evangelio.' : i === 1 ? 'Servicio sagrado en el altar del Señor.' : 'Puente vivo con los marginados y pobres.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}