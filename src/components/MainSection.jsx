import React from 'react';
import { ShoppingCart, ChevronRight } from 'lucide-react';


const MainSection = () => {
  return (
    <main className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div>
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

          {/* Hero Image */}
          <div className="hidden md:block">
            <img 
              src='/images/mainImage.png'
              alt="Delicious Food Spread" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;