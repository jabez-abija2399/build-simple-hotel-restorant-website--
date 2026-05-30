import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-4 text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-accent mb-6">
        Welcome to The Grand Restaurant
      </h1>
      <p className="text-xl md:text-2xl text-text max-w-3xl leading-relaxed mb-8">
        Experience exquisite dining in a luxurious setting. Our culinary team crafts unforgettable dishes using the finest local ingredients.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-serif text-primary mb-3">Fine Dining</h2>
          <p className="text-lg text-text">Savor our curated selection of gourmet dishes.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-serif text-primary mb-3">Elegant Ambiance</h2>
          <p className="text-lg text-text">Dine in comfort and style, perfect for any occasion.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-serif text-primary mb-3">Exceptional Service</h2>
          <p className="text-lg text-text">Our dedicated staff ensures a memorable experience.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;