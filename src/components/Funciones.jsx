<<<<<<< HEAD
import React from 'react';
import { BookOpen, Heart, Compass, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Funciones() {
  return (
    <section id="funciones" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#c19a28] font-bold text-xs uppercase tracking-widest block mb-2">Ministerios Sagrados</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-950">Funciones del ministerio diaconal</h2>
        <p className="text-slate-500 mt-2 text-sm sm:text-base">Según lo establecido solemnemente por la Santa Iglesia en la Constitución Dogmática Lumen Gentium (LG 29):</p>
        <div className="h-1 w-12 bg-[#c19a28] mx-auto mt-4 rounded-full"></div>
      </div>

      <ScrollReveal className="grid lg:grid-cols-3 gap-8 items-start">
        {/* 1. Palabra */}
        <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="h-44 relative bg-slate-200">
            <img src="/biblia.jpg" alt="Servicio de la Palabra" className="w-full h-full object-cover object-center filter brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex items-end p-5">
              <div className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-[#c19a28] text-emerald-950 rounded-lg shadow-md"><BookOpen className="w-5 h-5" /></div>
                <h3 className="font-serif font-bold text-lg drop-shadow-sm">1. Servicio de la Palabra</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-3.5 text-sm text-slate-600">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Proclamar el Evangelio en la Misa.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> predecir la homilia (con autorización del presbitero)</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Enseñar catequesis y acompañar comunidades.</li>
            </ul>
          </div>
        </div>

        {/* 2. Liturgia */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200/60 overflow-hidden lg:-translate-y-4 border-t-4 border-[#c19a28] transform hover:-translate-y-6 hover:shadow-xl transition-all duration-300">
          <div className="h-44 relative bg-slate-200">
            <img src="/calis.jpg" alt="Servicio de la Liturgia" className="w-full h-full object-cover object-center filter brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex items-end p-5">
              <div className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-[#c19a28] text-emerald-950 rounded-lg shadow-md"><Compass className="w-5 h-5" /></div>
                <h3 className="font-serif font-bold text-lg drop-shadow-sm">2. Servicio de la Liturgia <span className="text-[10px] block font-sans text-amber-200 tracking-wider uppercase font-medium mt-0.5">Texto Íntegro Lumen Gentium 29</span></h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-emerald-50/30">
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Administración solemne del bautismo.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Conservar y distribuir la Eucaristía y llevar el víático a los enfermos.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Asistir en nombre de la iglesia y bendecir los matrimonios.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Llevar el Viático a los moribundos.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Leer la Sagrada Escritura a los fieles.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Presidir el culto y la oración de los fieles.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Administrar los sacramentales.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Presidir los ritos de los funerales y sepelios.</li>
            </ul>
          </div>
        </div>

        {/* 3. Caridad */}
        <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="h-44 relative bg-slate-200">
            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop" alt="Servicio de la Caridad" className="w-full h-full object-cover object-center filter brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex items-end p-5">
              <div className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-[#c19a28] text-emerald-950 rounded-lg shadow-md"><Heart className="w-5 h-5" /></div>
                <h3 className="font-serif font-bold text-lg drop-shadow-sm">3. Servicio de la Caridad</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-3.5 text-sm text-slate-600 mb-6">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Promover obras sociales y acompañar a los pobres.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Visitar enfermos y marginados.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Animar la accion caritativa en la comunidad.</li>
            </ul>
            <div className="bg-emerald-900 p-4 rounded-xl text-xs text-emerald-50 italic relative shadow-md">
              <p className="relative z-10 leading-relaxed pl-2 border-l-2 border-[#c19a28]">“Dedicados a las obras de caridad y de administración, recuerden los Diáconos el aviso de San Policarpo: Misericordiosos, diligentes, procedan en su conducta conforme a la verdad del Señor, que se hizo servidor de todos.”</p>
              <span className="block font-sans font-bold mt-2 text-right not-italic text-[9px] text-[#e6c662] uppercase tracking-widest">(cfr. Lumen Gentium, N. 29)</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
=======
import React from 'react';
import { BookOpen, Heart, Compass, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Funciones() {
  return (
    <section id="funciones" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#c19a28] font-bold text-xs uppercase tracking-widest block mb-2">Ministerios Sagrados</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-950">Funciones del ministerio diaconal</h2>
        <p className="text-slate-500 mt-2 text-sm sm:text-base">Según lo establecido solemnemente por la Santa Iglesia en la Constitución Dogmática Lumen Gentium (LG 29):</p>
        <div className="h-1 w-12 bg-[#c19a28] mx-auto mt-4 rounded-full"></div>
      </div>

      <ScrollReveal className="grid lg:grid-cols-3 gap-8 items-start">
        {/* 1. Palabra */}
        <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="h-44 relative bg-slate-200">
            <img src="/biblia.jpg" alt="Servicio de la Palabra" className="w-full h-full object-cover object-center filter brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex items-end p-5">
              <div className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-[#c19a28] text-emerald-950 rounded-lg shadow-md"><BookOpen className="w-5 h-5" /></div>
                <h3 className="font-serif font-bold text-lg drop-shadow-sm">1. Servicio de la Palabra</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-3.5 text-sm text-slate-600">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Proclamar el Evangelio en la Misa.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> predecir la homilia (con autorización del presbitero)</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Enseñar catequesis y acompañar comunidades.</li>
            </ul>
          </div>
        </div>

        {/* 2. Liturgia */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200/60 overflow-hidden lg:-translate-y-4 border-t-4 border-[#c19a28] transform hover:-translate-y-6 hover:shadow-xl transition-all duration-300">
          <div className="h-44 relative bg-slate-200">
            <img src="/calis.jpg" alt="Servicio de la Liturgia" className="w-full h-full object-cover object-center filter brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex items-end p-5">
              <div className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-[#c19a28] text-emerald-950 rounded-lg shadow-md"><Compass className="w-5 h-5" /></div>
                <h3 className="font-serif font-bold text-lg drop-shadow-sm">2. Servicio de la Liturgia <span className="text-[10px] block font-sans text-amber-200 tracking-wider uppercase font-medium mt-0.5">Texto Íntegro Lumen Gentium 29</span></h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-emerald-50/30">
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Administración solemne del bautismo.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Conservar y distribuir la Eucaristía y llevar el víático a los enfermos.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Asistir en nombre de la iglesia y bendecir los matrimonios.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Llevar el Viático a los moribundos.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Leer la Sagrada Escritura a los fieles.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Presidir el culto y la oración de los fieles.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Administrar los sacramentales.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Presidir los ritos de los funerales y sepelios.</li>
            </ul>
          </div>
        </div>

        {/* 3. Caridad */}
        <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="h-44 relative bg-slate-200">
            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop" alt="Servicio de la Caridad" className="w-full h-full object-cover object-center filter brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex items-end p-5">
              <div className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-[#c19a28] text-emerald-950 rounded-lg shadow-md"><Heart className="w-5 h-5" /></div>
                <h3 className="font-serif font-bold text-lg drop-shadow-sm">3. Servicio de la Caridad</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-3.5 text-sm text-slate-600 mb-6">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Promover obras sociales y acompañar a los pobres.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Visitar enfermos y marginados.</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-700 mr-2.5 mt-0.5 flex-shrink-0" /> Animar la accion caritativa en la comunidad.</li>
            </ul>
            <div className="bg-emerald-900 p-4 rounded-xl text-xs text-emerald-50 italic relative shadow-md">
              <p className="relative z-10 leading-relaxed pl-2 border-l-2 border-[#c19a28]">“Dedicados a las obras de caridad y de administración, recuerden los Diáconos el aviso de San Policarpo: Misericordiosos, diligentes, procedan en su conducta conforme a la verdad del Señor, que se hizo servidor de todos.”</p>
              <span className="block font-sans font-bold mt-2 text-right not-italic text-[9px] text-[#e6c662] uppercase tracking-widest">(cfr. Lumen Gentium, N. 29)</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
>>>>>>> 33be2396feb2458e87c8cbf2e8d953471e5d9d4a
}