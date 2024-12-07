import React from 'react';
import { MousePointer, ChefHat, Heart } from 'lucide-react';

const StorySection = () => {
  return (
    <section className="bg-white py-16 overflow-hidden w-[95%] mx-auto">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Story Content */}
        <div className="space-y-6 animate-fade-in-left border-3">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Culinary Journey
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2010, Delicious Eats began as a small family kitchen with a passion for creating memorable dining experiences. Our founders believed that food is more than sustenance—it's an art form that connects people.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-red-50 p-4 rounded-lg transform transition hover:scale-105">
              <MousePointer className="mx-auto text-red-600 mb-2" size={40} />
              <span className="text-gray-700 font-semibold">Passion</span>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg transform transition hover:scale-105">
              <ChefHat className="mx-auto text-orange-600 mb-2" size={40} />
              <span className="text-gray-700 font-semibold">Creativity</span>
            </div>
            <div className="bg-red-50 p-4 rounded-lg transform transition hover:scale-105">
              <Heart className="mx-auto text-red-600 mb-2" size={40} />
              <span className="text-gray-700 font-semibold">Community</span>
            </div>
          </div>
        </div>

        {/* Story Image */}
        <div className="relative animate-fade-in-right">
          <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-orange-400 rounded-lg blur-lg opacity-50"></div>
          <img 
            src="/images/story_image.jpeg" 
            alt="Restaurant Interior" 
            className="relative z-10 rounded-lg shadow-xl transform transition hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default StorySection;