import React from 'react';
import 'animate.css';
import "./swiper-custom.css";

const Categories = () => {
  const categories = [
    { id: 1, name: 'Electronics', image: 'https://cdn-icons-png.flaticon.com/256/8089/8089664.png' },
    { id: 2, name: 'Fashion', image: 'https://cdn-icons-png.flaticon.com/256/5524/5524694.png' },
    { id: 3, name: 'Home Appliances', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEHTHEskmGzTmKcWTB8hjTGm69WvL9biyQg&s' },
    { id: 4, name: 'Books', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE55oBaT0mhC_2IZjVeCmpABKIRTqTaOKNxA&s' },
    { id: 5, name: 'Toys', image: 'https://thumbs.dreamstime.com/b/vector-flat-baby-toy-icon-set-38364991.jpg' },
    { id: 6, name: 'Sports', image: 'https://previews.123rf.com/images/yupiramos/yupiramos1703/yupiramos170316676/74738461-sport-related-icons-in-a-circle-shape-over-yellow-background-colorful-design-vector-illustration.jpg' },
    { id: 7, name: 'Furniture', image: 'https://img.freepik.com/premium-photo/grey-sofa-yellow-pouf-designer-chair-are-living-room-with-yellow-lamp-table_872147-23222.jpg' },
    { id: 8, name: 'Gadgets', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzE9hUNAJ6pAmb-bMjMS4Epcvp3rhOeNvzeg&s' },
    { id: 9, name: 'Kitchenware', image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/c5afa253-8d8c-472b-b2bc-92ebe0730089.__CR0,0,1600,1600_PT0_SX300_V1___.jpg' },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 text-center mb-10 animate__animated animate__fadeInDown">
          Categories
        </h2>
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide px-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-none bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp text-center w-48"
            >
              <div className="flex justify-center mt-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-yellow-400"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-semibold text-yellow-400">{category.name}</h3>
                <button className="mt-2 bg-yellow-500 text-gray-900 font-semibold py-1 px-4 rounded-full hover:bg-yellow-400 transition duration-300 text-sm">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
