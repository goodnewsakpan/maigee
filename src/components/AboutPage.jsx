import React, { useEffect, useState } from 'react';
import { ChefHat, Clock, Star, Award, Coffee, Heart, Utensils, Menu, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);

  const features = [
    { icon: ChefHat, title: "Expert Chefs", desc: "Culinary masters with years of experience" },
    { icon: Clock, title: "Hours", desc: "Mon-Sun: 11AM-10PM" },
    { icon: Award, title: "Quality", desc: "Award-winning cuisine" },
    { icon: Coffee, title: "Atmosphere", desc: "Cozy & contemporary setting" },
    { icon: Utensils, title: "Fine Dining", desc: "Elegant presentation" },
    { icon: Heart, title: "Made with Love", desc: "Passion in every dish" }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The fusion of traditional and modern flavors at My_gee is absolutely incredible. The atmosphere is perfect for both casual dining and special occasions.",
      date: "March 2024"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Best dining experience in the city! The chef's special was mind-blowing, and the service was impeccable. Will definitely be coming back!",
      date: "February 2024"
    },
    {
      name: "Emily Rodriguez",
      rating: 4,
      text: "Love the innovative menu and the cozy atmosphere. The presentation of each dish shows incredible attention to detail.",
      date: "January 2024"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['hero', 'story', 'features', 'reviews'];
      const activeSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 300 && rect.bottom >= 300;
        }
        return false;
      });
      setActiveSection(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavigationDot = ({ section }) => (
    <div 
      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
        ${activeSection === section ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'}`}
      onClick={() => document.getElementById(section).scrollIntoView({ behavior: 'smooth' })}
    />
  );

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-orange-500 overflow-hidden relative mt-14">
      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {['hero', 'story', 'features', 'reviews'].map((section) => (
          <NavigationDot key={section} section={section} />
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-white/10 p-2 rounded-full backdrop-blur-md"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-gradient-to-br from-red-600 to-orange-600 
        backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-40
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-4 p-8 mt-16">
          {['hero', 'story', 'features', 'reviews'].map((section) => (
            <button
              key={section}
              className="text-white capitalize hover:text-white/70 transition-colors"
              onClick={() => {
                document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div id="hero" className={`text-center mb-8 md:mb-16 transition-all duration-1000 transform 
          ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 
            hover:scale-105 transition-transform duration-300 cursor-pointer">
            Welcome to My_gee
          </h1>
          <p className="text-xl md:text-2xl text-white/90 italic animate-pulse">
            Where Tradition Meets Innovation
          </p>
        </div>

        {/* Animated Background Elements */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute hidden md:block"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <Star className="w-8 h-8 text-white/10" />
          </div>
        ))}

        {/* Story Section */}
        <div id="story" className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-8 md:mb-16">
          <div 
            className={`bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-8 
              hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1
              cursor-pointer group
              ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
            onMouseEnter={() => setHoveredCard('story')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 group-hover:scale-105 transition-transform">
              Our Story
            </h2>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              Founded in 2020, My_gee has been serving authentic cuisine with a modern twist. 
              Our passionate team of chefs combines traditional recipes with contemporary 
              techniques to create unforgettable dining experiences.
            </p>
            {hoveredCard === 'story' && (
              <div className="absolute inset-0 bg-white/5 rounded-lg transform scale-105 transition-transform duration-300" />
            )}
          </div>

          {/* Features Grid */}
          <div id="features" className="grid grid-cols-2 gap-4 md:gap-6">
            {features.map((item, index) => (
              <div 
                key={index}
                className={`relative bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 
                  hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1
                  cursor-pointer overflow-hidden
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(`feature-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <item.icon className={`w-8 h-8 md:w-12 md:h-12 text-white mb-3 md:mb-4 
                  transition-all duration-300 ${hoveredCard === `feature-${index}` ? 'scale-110 rotate-6' : ''}`} />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm md:text-base">{item.desc}</p>
                {hoveredCard === `feature-${index}` && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent 
                    transform scale-105 transition-transform duration-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div id="reviews" 
          className={`bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-8 
            hover:bg-white/20 transition-all duration-300
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            What Our Guests Say
          </h2>

          {/* Review Card */}
          <div className="relative">
            <div className="absolute top-0 left-4 transform -translate-y-6">
              <Quote className="w-12 h-12 text-white/20" />
            </div>
            
            <div className="transition-all duration-500 transform">
              <div className="text-center px-4 md:px-12">
                {/* Stars */}
                <div className="flex justify-center gap-2 mb-4">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-white/90 text-lg md:text-xl mb-6 italic">
                  "{reviews[currentReview].text}"
                </p>
                
                {/* Review Author */}
                <div className="text-white font-medium">
                  <p className="text-lg">{reviews[currentReview].name}</p>
                  <p className="text-sm text-white/70">{reviews[currentReview].date}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevReview}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 
                  transition-all duration-300 group"
              >
                <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 
                  transition-transform" />
              </button>
              
              {/* Review Indicators */}
              <div className="flex gap-2 items-center">
                {reviews.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
                      ${currentReview === index ? 'bg-white w-4' : 'bg-white/50'}`}
                    onClick={() => setCurrentReview(index)}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextReview}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 
                  transition-all duration-300 group"
              >
                <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 
                  transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;