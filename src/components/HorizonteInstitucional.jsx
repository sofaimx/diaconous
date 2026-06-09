import React from 'react';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function HorizonteInstitucional() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-[#f0f4f1] border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[#c19a28] font-bold text-xs uppercase tracking-widest block mb-2">Fundamento Pastoral</span>
                    <h2 className="text-3xl font-serif font-bold text-emerald-950">Misión, Visión y Valores</h2>
                    <div className="h-1 w-12 bg-[#c19a28] mx-auto mt-3 rounded-full"></div>
                </div>

                <ScrollReveal className="grid md:grid-cols-3 gap-8">
                    {/* Misión */}
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-emerald-950 mb-3">Nuestra Misión</h3>
                            <p className="text-sm text-slate-600 leading-relaxed text-justify">
                                Promover, acompañar y coordinar la restauración y consolidación del Diaconado Permanente en las Diócesis de México, brindando criterios teológicos, orientaciones formativas y espacios de comunión para que los diáconos ejerzan fielmente su triple servicio a la Palabra, la Liturgia y la Caridad.
                            </p>
                        </div>
                    </div>

                    {/* Visión */}
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                                <Eye className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-emerald-950 mb-3">Nuestra Visión</h3>
                            <p className="text-sm text-slate-600 leading-relaxed text-justify">
                                Ser un referente nacional de animación pastoral consolidado, donde todas las diócesis del país integren de forma activa y fecunda el ministerio diaconal dentro de su plan diocesano, manifestando de manera viva a Cristo Servidor en medio del mundo moderno.
                            </p>
                        </div>
                    </div>

                    {/* Valores */}
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-[#e6c662]/30 bg-gradient-to-b from-white to-amber-50/10 flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <div className="w-12 h-12 bg-amber-50 text-[#c19a28] rounded-xl flex items-center justify-center mb-6 shadow-inner">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-emerald-950 mb-3">Valores Pastorales</h3>
                            <ul className="text-sm text-slate-600 space-y-3">
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-[#c19a28] rounded-full mr-2.5 mt-2 flex-shrink-0"></span>
                                    <span><strong>Diaconía:</strong> Servicio desinteresado por amor.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-[#c19a28] rounded-full mr-2.5 mt-2 flex-shrink-0"></span>
                                    <span><strong>Fraternidad:</strong> Comunión sincera con el presbiterio.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-[#c19a28] rounded-full mr-2.5 mt-2 flex-shrink-0"></span>
                                    <span><strong>Fidelidad Magisterial:</strong> Apego estricto a la doctrina.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-[#c19a28] rounded-full mr-2.5 mt-2 flex-shrink-0"></span>
                                    <span><strong>Corresponsabilidad:</strong> Compromiso conjunto con el laicado.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}