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
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-emerald-950 mb-3">Nuestra Misión</h3>
                            <p className="text-sm text-slate-600 leading-relaxed text-justify">
                                Acompañar desde los primeros inicios de su vocación a los que han sentido el llamado a la vida diaconal, a formar y promover el diaconado permanente en México, asegurando que viva su identidad propia en comunión con los obispos y al servicio del Pueblo de Dios.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                                <Eye className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-emerald-950 mb-3">Nuestra Visión</h3>
                            <p className="text-sm text-slate-600 leading-relaxed text-justify">
                                Que cada diócesis cuente con diáconos bien formados, cercanos a las comunidades y comprometidos con la caridad y la evangelización.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-md border border-[#e6c662]/30 bg-gradient-to-b from-white to-amber-50/10 flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <div className="w-12 h-12 bg-amber-50 text-[#c19a28] rounded-xl flex items-center justify-center mb-6 shadow-inner">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-emerald-950 mb-3">Valores</h3>
                            <p className="text-sm text-slate-600 leading-relaxed text-justify">
                                Fomentar la unidad entre los diáconos del país, impulsar la humildad y cercanía como estilo de servicio, y sostener la formación integral para garantizar un ministerio sólido.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}