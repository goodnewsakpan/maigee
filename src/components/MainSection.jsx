import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react';

const MainSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
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

  return (
    <main className="bg-gray-50 min-h-screen pt-40 w-[95%] mx-auto">
      <div className="w-[85%] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Savor Every Bite
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover a culinary journey that tantalizes your taste buds with our fresh, locally-sourced ingredients and innovative recipes.
            </p>
            <div className="flex space-x-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 flex items-center">
                <ShoppingCart className="mr-2" size={20} />
                Order Now
              </button>
              <button className="border border-red-600 text-red-600 px-6 py-3 rounded-full hover:bg-red-50 flex items-center">
                View Menu
                <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
          </div>

          {/* Hero Image Slider */}
          <div className="order-1 md:order-2 block">
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
                    ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img 
                    src={img}
                    alt={`Food Spread ${index + 1}`}
                    className="w-full h-full object-cover border-2"
                  />
                </div>
              ))}
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="text-gray-800" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="text-gray-800" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200
                      ${currentImage === index ? 'bg-white' : 'bg-white/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;