import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import HomePage from './HomePage';
import DimensionPage from './DimensionPage';
<<<<<<< HEAD
import JornadaOracion from './components/JornadaOracion';
import FormacionPage from './components/FormacionPage';
=======
>>>>>>> 33be2396feb2458e87c8cbf2e8d953471e5d9d4a

export default function App() {

  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.history.replaceState({ page: 'home' }, '');

    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToPage = (pageName) => {
    setCurrentPage(pageName);
    window.history.pushState({ page: pageName }, '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="selection:bg-[#d4af37] selection:text-white">
      {currentPage === 'home' && (
        <div className="min-h-screen bg-[#f7f9f7] text-slate-800 font-sans antialiased">
          <Navbar navigateToPage={navigateToPage} isHomePage={true} />
          <HomePage navigateToPage={navigateToPage} />
          <Footer />
        </div>
      )}

<<<<<<< HEAD
      {currentPage === 'jornada' && (
        <div className="min-h-screen bg-[#f7f9f7] text-slate-800 font-sans antialiased">
          <Navbar navigateToPage={navigateToPage} isHomePage={false} />
          <JornadaOracion />
          <Footer />
        </div>
      )}

      {currentPage === 'dimension' && (
        <DimensionPage navigateToPage={navigateToPage} />
      )}

      {currentPage === 'liturgia' && (
        <FormacionPage 
          navigateToPage={navigateToPage} 
          titulo="Liturgia" 
          descripcion="Materiales y orientaciones litúrgicas para el ministerio del diácono permanente." 
        />
      )}

      {currentPage === 'pastoral' && (
        <FormacionPage 
          navigateToPage={navigateToPage} 
          titulo="Pastoral" 
          descripcion="Guías de acción pastoral y cercanía con las comunidades." 
        />
      )}

      {currentPage === 'eclesial' && (
        <FormacionPage 
          navigateToPage={navigateToPage} 
          titulo="Eclesial" 
          descripcion="Documentos sobre la comunión, eclesiología y servicio en la Iglesia." 
        />
      )}
=======
      {currentPage === 'dimension' && (
        <DimensionPage navigateToPage={navigateToPage} />
      )}
>>>>>>> 33be2396feb2458e87c8cbf2e8d953471e5d9d4a
    </div>
  );
}