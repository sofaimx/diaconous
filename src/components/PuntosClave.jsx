<<<<<<< HEAD
import React from 'react';
import { Info, Layers, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function PuntosClave() {
  return (
    <section className="bg-emerald-950 text-white py-24 relative overflow-hidden border-t border-emerald-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-serif font-bold text-[#e6c662] tracking-wide">Puntos clave a recordar</h3>
          <div className="h-1 w-12 bg-[#c19a28] mx-auto mt-4 rounded-full"></div>
        </div>
        <ScrollReveal className="grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-700/40 backdrop-blur-sm transform hover:-translate-y-2 hover:bg-emerald-900/80 transition-all duration-300 shadow-lg cursor-pointer">
            <div className="text-[#e6c662] mb-4"><Info className="w-6 h-6" /></div>
            <p className="text-emerald-50 text-sm leading-relaxed text-justify">El diaconado no es un ministerio “sacerdotal menor”, sino un ministerio propio con identidad clara.</p>
          </div>
          <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-700/40 backdrop-blur-sm transform hover:-translate-y-2 hover:bg-emerald-900/80 transition-all duration-300 shadow-lg cursor-pointer">
            <div className="text-[#e6c662] mb-4"><Layers className="w-6 h-6" /></div>
            <p className="text-emerald-50 text-sm leading-relaxed text-justify">Su misión es servir, acompañando, animando y sosteniendo la vida comunitaria.</p>
          </div>
          <div className="bg-[#c19a28]/10 p-6 rounded-2xl border border-[#c19a28]/40 backdrop-blur-sm transform hover:-translate-y-2 hover:bg-[#c19a28]/20 transition-all duration-300 shadow-2xl shadow-emerald-950 cursor-pointer">
            <div className="text-[#e6c662] mb-4"><Globe className="w-6 h-6" /></div>
            <p className="text-[#f3d97f] text-sm leading-relaxed text-justify font-medium">En muchas diócesis de nuestro país, el diaconado permanente se ha convertido en un valor fundamental que la pastoral parroquial está aprovechando. Felicitamos a las diócesis que están promoviendo esta riqueza de la Iglesia.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
=======
import React from 'react';
import { Info, Layers, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function PuntosClave() {
  return (
    <section className="bg-emerald-950 text-white py-24 relative overflow-hidden border-t border-emerald-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-serif font-bold text-[#e6c662] tracking-wide">Puntos clave a recordar</h3>
          <div className="h-1 w-12 bg-[#c19a28] mx-auto mt-4 rounded-full"></div>
        </div>
        <ScrollReveal className="grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-700/40 backdrop-blur-sm transform hover:-translate-y-2 hover:bg-emerald-900/80 transition-all duration-300 shadow-lg cursor-pointer">
            <div className="text-[#e6c662] mb-4"><Info className="w-6 h-6" /></div>
            <p className="text-emerald-50 text-sm leading-relaxed text-justify">El diaconado no es un ministerio “sacerdotal menor”, sino un ministerio propio con identidad clara.</p>
          </div>
          <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-700/40 backdrop-blur-sm transform hover:-translate-y-2 hover:bg-emerald-900/80 transition-all duration-300 shadow-lg cursor-pointer">
            <div className="text-[#e6c662] mb-4"><Layers className="w-6 h-6" /></div>
            <p className="text-emerald-50 text-sm leading-relaxed text-justify">Su misión es servir, acompañando, animando y sosteniendo la vida comunitaria.</p>
          </div>
          <div className="bg-[#c19a28]/10 p-6 rounded-2xl border border-[#c19a28]/40 backdrop-blur-sm transform hover:-translate-y-2 hover:bg-[#c19a28]/20 transition-all duration-300 shadow-2xl shadow-emerald-950 cursor-pointer">
            <div className="text-[#e6c662] mb-4"><Globe className="w-6 h-6" /></div>
            <p className="text-[#f3d97f] text-sm leading-relaxed text-justify font-medium">En muchas diócesis de nuestro país, el diaconado permanente se ha convertido en un valor fundamental que la pastoral parroquial está aprovechando. Felicitamos a las diócesis que están promoviendo esta riqueza de la Iglesia.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
>>>>>>> 33be2396feb2458e87c8cbf2e8d953471e5d9d4a
}