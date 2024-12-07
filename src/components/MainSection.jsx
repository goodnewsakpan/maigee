import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronRight, ChevronLeft, ArrowDown, Star } from 'lucide-react';

const MainSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  const images = [
    '/images/soup01.jpeg',
    '/images/soup02.jpeg',
    '/images/soup03.jpeg'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.1
            }}
          >
            <Star 
              size={24} 
              className="text-white" 
              style={{ transform: `rotate(${i * 45}deg)` }}
            />
          </div>
        ))}
      </div>

      {/* Full-screen Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out
            ${currentImage === index 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-110'}`}
        >
          <img 
            src={img}
            alt={`Food Spread ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Adjusted overlay with more subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/30" />
        </div>
      ))}

      {/* Navigation Buttons with enhanced hover effect */}
      <button 
        onClick={prevImage}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 p-3 md:p-4 rounded-full
          hover:bg-white/20 transition-all duration-300 z-20 group"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} className="text-white transform group-hover:-translate-x-1 transition-transform" />
      </button>
      <button 
        onClick={nextImage}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 p-3 md:p-4 rounded-full
          hover:bg-white/20 transition-all duration-300 z-20 group"
        aria-label="Next image"
      >
        <ChevronRight size={24} className="text-white transform group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Content Overlay - Repositioned and Enhanced */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto md:ml-[10%] transform translate-y-[-10%]">
            <div className="space-y-8 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight
                opacity-0 animate-fadeInUp">
                Savor Every
                <span className="text-red-500 inline-block animate-pulse"> Bite</span>
              </h1>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-orange-400 
                mx-auto md:mx-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }} />
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl
                opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                Discover a culinary journey that tantalizes your taste buds with our fresh, 
                locally-sourced ingredients and innovative recipes crafted with passion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start
                opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <button className="group bg-gradient-to-r from-red-500 to-orange-400 text-white px-8 py-4 rounded-full 
                  hover:from-red-600 hover:to-orange-500 transition-all duration-300 flex items-center justify-center
                  backdrop-blur-sm transform hover:scale-105">
                  <ShoppingCart className="mr-2 group-hover:animate-bounce" size={20} />
                  Order Now
                </button>
                <button className="group border-2 border-white text-white px-8 py-4 rounded-full 
                  hover:bg-white/10 transition-all duration-300 flex items-center justify-center
                  backdrop-blur-sm transform hover:scale-105">
                  View Menu
                  <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3
        bg-black/30 backdrop-blur-md rounded-full px-4 py-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`transition-all duration-300 rounded-full
              ${currentImage === index 
                ? 'w-8 h-2 bg-red-500' 
                : 'w-2 h-2 bg-white/60 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-24 left-1/2 -translate-x-1/2 z-20 
        transition-opacity duration-500 ${hasScrolled ? 'opacity-0' : 'opacity-100'}`}>
        <ArrowDown className="text-white animate-bounce" size={24} />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
};

export default MainSection;