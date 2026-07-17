import React from 'react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#040e0a] text-emerald-200/50 py-16 scroll-mt-16 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 border-b border-emerald-900/30 pb-12 mb-10 text-center md:text-left">
          <div className="md:col-span-6 space-y-4">
            <div className="bg-white p-3 rounded-xl inline-block shadow-md">
              <img src="/logo.png" alt="Logotipo DEDIP" className="h-12 w-auto object-contain" />
            </div>
            <div>
              <h4 className="text-white font-serif font-bold text-base">Dimensión Episcopal para el Diaconado Permanente (DEDIP)</h4>
              <p className="text-xs text-[#c19a28] font-mono uppercase tracking-wider font-bold mt-0.5">Conferencia del Episcopado Mexicano</p>
            </div>
            <p className="text-xs text-emerald-100/60 max-w-md leading-relaxed">Organismo oficial de la Iglesia Católica en México encargado de la promoción, acompañamiento, ordenamiento y discernimiento vocacional de la vida diaconal estable.</p>
          </div>
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-white text-xs font-bold uppercase tracking-widest text-[#e6c662]">Secciones Activas</h5>
            <ul className="text-xs space-y-2 font-medium text-emerald-100/70">
              <li><a href="#" className="hover:text-[#e6c662] transition-colors">Inicio de Página</a></li>
              <li><a href="#quienes-somos" className="hover:text-[#e6c662] transition-colors">Quiénes Somos (DEDIP)</a></li>
              <li><a href="#funciones" className="hover:text-[#e6c662] transition-colors">Funciones del Diácono</a></li>
              <li><a href="#comparativa" className="hover:text-[#e6c662] transition-colors">Diferencias Ministeriales</a></li>
            </ul>
          </div>
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-white text-xs font-bold uppercase tracking-widest text-[#e6c662]">Servicios Digitales</h5>
            <ul className="text-xs space-y-2 font-medium text-emerald-100/70">
              <li><a href="#" className="hover:text-[#e6c662] transition-colors">Consulta de Diócesis</a></li>
              <li><a href="#" className="hover:text-[#e6c662] transition-colors">Notificaciones y Prensa</a></li>
              <li><a href="#" className="hover:text-[#e6c662] transition-colors">Plataforma de Formación</a></li>
              <li><a href="#" className="hover:text-[#e6c662] transition-colors">Ramillete de Oración Nacional</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-emerald-200/30 font-medium">
          <p>© {new Date().getFullYear()} DEDIP México • Conferencia del Episcopado Mexicano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}