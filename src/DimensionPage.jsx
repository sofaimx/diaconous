import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function DimensionPage({ navigateToPage }) {
  return (
    <div className="min-h-screen bg-[#f7f9f7] text-slate-800 font-sans antialiased">
      <Navbar navigateToPage={navigateToPage} isHomePage={false} />

      <main className="py-20 max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollReveal className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          <div className="lg:col-span-6 space-y-10 text-left">
            
            <div className="border-b border-gray-200 pb-8">
              <span className="text-[#c19a28] font-bold text-xs uppercase tracking-widest block mb-2">Mensaje Pastoral</span>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-emerald-950 leading-tight">Dimensión Nacional del Diaconado Permanente</h1>
              <div className="h-1 w-24 bg-[#c19a28] mt-4 rounded-full"></div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 space-y-8 text-left">
              
              <div className="relative group overflow-hidden rounded-xl shadow-inner bg-slate-50 border border-slate-200">
                <img src="/obispo.png" alt="S.E. Mons. Guerrero Corona Jonás" className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent flex items-end p-6">
                  <div className="text-white text-left">
                    <span className="bg-amber-50 text-[#c19a28] text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-2 inline-block">Sr. Obispo Responsable</span>
                    <h4 className="font-serif font-bold text-lg drop-shadow-sm">S.E. Mons. Guerrero Corona Jonás</h4>
                    <p className="text-emerald-100 text-xs">Administrador Apostólico Emérito de Culiacán</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 sticky top-28">
            <div className="bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 transform hover:scale-[1.005] transition-transform duration-500">
              <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-inner bg-black border-4 border-white">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/5A0r6A0Xn4w" 
                  title="Video Diaconado Permanente"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-5 text-center px-2">
                <p className="font-serif font-bold text-xl text-emerald-950">Mensaje del Obispo Guerrero Corona Jonás </p>
              </div>
            </div>
          </div>

        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}