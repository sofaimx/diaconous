import React from 'react';

export default function JornadaOracion() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans">
      <h2 className="text-3xl font-bold text-[#0b4f34] border-b-2 border-[#d4af37] pb-3 mb-6">
        Jornada de Oración 2026
      </h2>
      <p className="text-lg text-slate-600 mb-8">
        Bienvenido a la sección de la Jornada de Oración. Aquí puedes consultar y descargar los documentos oficiales en formato PDF.
      </p>

      <div className="grid gap-6">
        {/* Documento 1: Hora Santa */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-800">Subsidio de Hora Santa del Diaconado Permanente</h3>
            <p className="text-sm text-slate-500 mt-1">Documento oficial para momentos de oración y adoración.</p>
          </div>
          <a 
            href="/jornada2026/HORA-SANTA-DIACONADO-PERMANENTE.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#0b4f34] text-white px-4 py-2 rounded-md font-medium hover:bg-[#083a27] transition-colors whitespace-nowrap"
          >
            Ver PDF
          </a>
        </div>

        {/* Documento 2: Rosario */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-800">Subsidio para el Rosario Vocacional (CEM)</h3>
            <p className="text-sm text-slate-500 mt-1">Guía del santo rosario enfocado en las intenciones de la dimensión.</p>
          </div>
          <a 
            href="/jornada2026/ROSARIO-POR-DP-CEM.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#0b4f34] text-white px-4 py-2 rounded-md font-medium hover:bg-[#083a27] transition-colors whitespace-nowrap"
          >
            Ver PDF
          </a>
        </div>
      </div>
    </div>
  );
}