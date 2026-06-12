import React, { useState } from 'react';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import HomePage from './HomePage';
import DimensionPage from './DimensionPage';

export default function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const navigateToPage = (pageName) => {
    setCurrentPage(pageName);
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

      {currentPage === 'dimension' && (
        <DimensionPage navigateToPage={navigateToPage} />
      )}
    </div>
  );
}