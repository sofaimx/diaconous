<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, { threshold: 0.05 }); 
    
    const { current } = domRef;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-99"
      } ${className}`}
    >
      {children}
    </div>
  );
=======
import React, { useState, useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, { threshold: 0.05 }); 
    
    const { current } = domRef;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-99"
      } ${className}`}
    >
      {children}
    </div>
  );
>>>>>>> 33be2396feb2458e87c8cbf2e8d953471e5d9d4a
}