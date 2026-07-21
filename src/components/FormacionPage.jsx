import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function FormacionCategoriaPage({ navigateToPage, titulo, descripcion }) {
  return (
    <div className="min-h-screen bg-[#f7f9f7] text-slate-800 font-sans antialiased flex flex-col justify-between">
      <div>
        <Navbar navigateToPage={navigateToPage} isHomePage={false} />
        
        <main className="max-w-5xl mx-auto px-4 py-12">
          {/* Título de la sección */}
          <h1 className="text-3xl font-bold text-[#0b4f34] border-b-2 border-[#d4af37] pb-3 mb-6 capitalize">
            Formación: {titulo}
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            {descripcion || "Consulte los materiales de formación, subsidios y guías de estudio oficiales."}
          </p>

          {/* Tarjeta del documento PDF */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-6">
            
           {/* Imagen oficial de la portada */}
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-200 shadow-inner p-2">
              <img 
                src="/iglesia-sinodal.png" 
                alt="Portada Documento Final Sinodal" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Información y botón de descarga */}
            <div className="md:col-span-2 flex flex-col justify-between h-full space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#c19a28] bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-2">
                  Documento Oficial PDF
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  ESP - Documento Final
                </h3>
                <p className="text-slate-600 mt-2 text-sm sm:text-base">
                  Documento de estudio y referencia para el fortalecimiento del ministerio y la vivencia comunitaria.
                </p>
              </div>

              <div>
                <a 
                  href="/formacion/ESP-Documento-finale.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0b4f34] hover:bg-[#083a27] text-white font-bold rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  Abrir / Descargar PDF &rarr;
                </a>
              </div>
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}