import React, { useState } from 'react';
import { ChevronDown, Menu, X, Home } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-emerald-900 sticky top-0 z-50 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 flex items-center h-full py-2">
            <img src="/logo.png" alt="Logotipo DEDIP" className="h-full w-auto object-contain" />
          </div>
          <div className="hidden xl:flex items-center space-x-1 text-xs font-bold text-emerald-800 tracking-wide">
            <a href="#" className="flex items-center px-2 py-2 text-[#c19a28] border-b-2 border-[#c19a28] transition-all">
              <Home className="w-3.5 h-3.5 mr-1" /> INICIO
            </a>
            <a href="#quienes-somos" className="px-2 py-2 hover:text-[#c19a28] transition-colors rounded-md hover:bg-emerald-50">QUIÉNES SOMOS</a>
            <a href="#" className="px-2 py-2 hover:text-[#c19a28] transition-colors rounded-md hover:bg-emerald-50">DIÓCESIS</a>
            <a href="#" className="px-2 py-2 hover:text-[#c19a28] transition-colors rounded-md hover:bg-emerald-50">NOTICIAS</a>
            <a href="#" className="flex items-center px-2 py-2 hover:text-[#c19a28] transition-colors rounded-md hover:bg-emerald-50">
              FORMACIÓN <ChevronDown className="w-3 h-3 ml-0.5" />
            </a>
            <a href="#" className="px-2 py-2 hover:text-[#c19a28] transition-colors rounded-md hover:bg-emerald-50">RAMILLETE DE ORACIÓN</a>
            <a href="#" className="px-2 py-2 hover:text-[#c19a28] transition-colors rounded-md hover:bg-emerald-50">RECURSOS</a>
            <a href="#" className="px-2 py-2 hover:text-[#c19a28] transition-colors rounded-md hover:bg-emerald-50">COMUNIDAD</a>
            <a href="#contacto" className="px-4 py-2 bg-emerald-800 text-white font-serif font-bold rounded-lg shadow-md hover:bg-emerald-700 hover:-translate-y-0.5 transition-all ml-2 border border-emerald-700">CONTACTO</a>
          </div>
          <div className="xl:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 focus:outline-none transition-all text-emerald-800">
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-1 shadow-2xl max-h-[85vh] overflow-y-auto">
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-[#c19a28] font-bold bg-amber-50 rounded-lg">INICIO</a>
          <a href="#quienes-somos" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-emerald-800 font-semibold hover:bg-emerald-50 rounded-lg">QUIÉNES SOMOS</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-emerald-800 font-semibold hover:bg-emerald-50 rounded-lg">DIÓCESIS</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-emerald-800 font-semibold hover:bg-emerald-50 rounded-lg">NOTICIAS</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-emerald-800 font-semibold hover:bg-emerald-50 rounded-lg">FORMACIÓN</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-emerald-800 font-semibold hover:bg-emerald-50 rounded-lg">RAMILLETE DE ORACIÓN</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-emerald-800 font-semibold hover:bg-emerald-50 rounded-lg">RECURSOS</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-emerald-800 font-semibold hover:bg-emerald-50 rounded-lg">COMUNIDAD</a>
          <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 bg-emerald-800 text-white font-serif font-bold text-center rounded-xl shadow-md mt-4">CONTACTO</a>
        </div>
      )}
    </nav>
  );
}