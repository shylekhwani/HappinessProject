import React from 'react';
import homeBg from "../assets/home.png";

const Home = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${homeBg})`,
      }}
    >
      <div className="bg-black/50 w-full h-full flex items-center px-10 md:px-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Explore the World <br /> with <span className="text-yellow-400">HappinessPlans</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your trusted travel partner for unforgettable adventures.  
            We craft journeys that bring you closer to nature, culture, and joy.
          </p>
          <a href="/services" className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
            View Our Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
