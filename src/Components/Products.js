import React from 'react';
import { FaCartPlus, FaShoppingBag } from 'react-icons/fa';
import { IoPricetagOutline } from 'react-icons/io5';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Smartphone',
      category: 'Electronics',
      image: 'https://mobilemaster.pk/wp-content/uploads/2023/11/apple-iphone-15-pro-max-1-600x641.jpg',
      price: '$499',
    },
    {
      id: 2,
      name: 'Sneakers',
      category: 'Fashion',
      image: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9320.jpg?auto=webp&quality=75&crop=1.91:1&width=1200',
      price: '$89',
    },
    {
      id: 3,
      name: 'Microwave',
      category: 'Home Appliances',
      image: 'https://hips.hearstapps.com/hmg-prod/images/wu4719microwavewithgrill-01-pcm155026-1574424415.jpg?crop=1.00xw:0.753xh;0,0.0856xh&resize=1200:*',
      price: '$149',
    },
    {
      id: 4,
      name: 'Novel',
      category: 'Books',
      image: 'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg',
      price: '$19',
    },
    {
      id: 5,
      name: 'Doll',
      category: 'Toys',
      image: 'https://static.vecteezy.com/system/resources/previews/031/612/039/non_2x/cute-pink-doll-ai-generative-free-png.png',
      price: '$29',
    },
    {
      id: 6,
      name: 'Football',
      category: 'Sports',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSJ-IbCSJAy9q-ZT3sd91dwVxtBZ7m9WAXw&s',
      price: '$25',
    },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 text-center mb-10 animate__animated animate__fadeInDown">
          Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center overflow-hidden"
            >
              <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-yellow-400 truncate">
                  {product.name}
                </h3>
                <div className="flex justify-center items-center text-yellow-500 mt-2">
                  <IoPricetagOutline className="mr-2" size={18} />
                  <span className="text-sm sm:text-base">{product.category}</span>
                </div>
                <p className="text-yellow-300 text-lg font-bold mt-2">{product.price}</p>
                <div className="flex justify-around mt-4">
                  <button
                    className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300 flex items-center"
                  >
                    <FaCartPlus className="mr-2" size={16} /> Add
                  </button>
                  <button
                    className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300 flex items-center"
                  >
                    <FaShoppingBag className="mr-2" size={16} /> Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
