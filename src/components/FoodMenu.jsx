import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const FoodMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Melon Soup",
      category: "Main Course",
      price: "N/A",
      description: "Melon soup with Goat meat",
      image: "/images/soup02.jpeg",
    },
    {
      id: 2,
      name: "Atama Soup",
      category: "Main Course",
      price: "N/A",
      description: "Atama Soup with snail",
      image: "/images/soup01.jpeg",
    },
    {
      id: 3,
      name: "Vegetable Soup",
      category: "Main Course",
      price: "N/A",
      description: "Crisp romaine lettuce with parmesan and homemade dressing",
      image: "/api/placeholder/300/300",
    },
    {
      id: 4,
      name: "Seafood Pasta",
      category: "Main Course",
      price: "N/A",
      description: "Fresh seafood medley in rich garlic white wine sauce",
      image: "/api/placeholder/300/300",
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      category: "Desserts",
      price: "$7.99",
      description: "Warm chocolate cake with molten center",
      image: "/api/placeholder/300/300",
    },
    {
      id: 6,
      name: "Asian Stir Fry",
      category: "Main Course",
      price: "$13.99",
      description: "Fresh vegetables and choice of protein in savory sauce",
      image: "/api/placeholder/300/300",
    },
    {
      id: 7,
      name: "Greek Salad",
      category: "Starters",
      price: "N/A",
      description: "Fresh Mediterranean vegetables with feta cheese",
      image: "/api/placeholder/300/300",
    },
    {
      id: 8,
      name: "Tiramisu",
      category: "Desserts",
      price: "N/A",
      description: "Classic Italian coffee-flavored dessert",
      image: "/api/placeholder/300/300",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My_gee Menu
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, made with love and the finest ingredients
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4 h-12 overflow-hidden">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">
                    {item.price}
                  </span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 flex items-center">
                    <ShoppingCart className="mr-2" size={16} />
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FoodMenu;